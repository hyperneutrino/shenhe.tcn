import config from "config";
import type { RequestHandler } from "./$types.js";

const fail = (path: string = "/") =>
    new Response(null, { headers: { Location: path }, status: 302 });

export const GET: RequestHandler = async ({ cookies, url, fetch }) => {
    const code = url.searchParams.get("code");
    if (!code) return fail();

    const state = url.searchParams.get("state");
    if (!state) return fail("/?state-mismatch");

    if (state.substring(0, 32) !== cookies.get("state")) return fail("/?state-mismatch");

    const data = {
        client_id: config.get("client_id") as string,
        client_secret: config.get("client_secret") as string,
        grant_type: "authorization_code" as string,
        redirect_uri: config.get("callback") as string,
        code,
        scope: "identify guilds",
    };

    const request = await fetch("https://discord.com/api/v8/oauth2/token", {
        method: "post",
        body: new URLSearchParams(data),
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    if (!request.ok) return fail();
    const response = await request.json();

    const headers = new Headers({ Location: state.substring(32) });

    headers.append(
        "Set-Cookie",
        cookies.serialize("discord_access_token", response.access_token, {
            path: "/",
            httpOnly: true,
            sameSite: "lax",
            maxAge: response.expires_in,
        }),
    );

    headers.append(
        "Set-Cookie",
        cookies.serialize("discord_refresh_token", response.refresh_token, {
            path: "/",
            httpOnly: true,
            sameSite: "lax",
            maxAge: 30 * 24 * 60 * 60 * 1000,
        }),
    );

    return new Response(null, { headers, status: 302 });
};
