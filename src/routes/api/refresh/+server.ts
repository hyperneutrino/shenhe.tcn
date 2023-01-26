import config from "config";
import type { RequestHandler } from "./$types.js";

export const GET: RequestHandler = async ({ cookies, url, fetch }) => {
    const discord_refresh_token = url.searchParams.get("code");
    if (!discord_refresh_token)
        return new Response(JSON.stringify({ error: "No refresh token found." }), { status: 500 });

    const data = {
        client_id: config.get("client_id"),
        client_secret: config.get("client_secret"),
        grant_type: "refresh_token",
        redirect_uri: config.get("callback"),
        refresh_token: discord_refresh_token,
        scope: "identify guilds",
    };

    const request = await fetch("https://discord.com/api/v8/oauth2/token");

    if (!request.ok)
        return new Response(JSON.stringify({ error: "No refresh token found." }), { status: 500 });

    const response = await request.json();

    const access_token_expiry = new Date(Date.now() + response.expires_in);
    const refresh_token_expiry = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

    const headers = new Headers({ Location: "/" });

    headers.append(
        "Set-Cookie",
        cookies.serialize("discord_access_token", response.access_token, {
            path: "/",
            httpOnly: true,
            sameSite: "none",
            expires: access_token_expiry,
        }),
    );

    headers.append(
        "Set-Cookie",
        cookies.serialize("discord_refresh_token", response.refresh_token, {
            path: "/",
            httpOnly: true,
            sameSite: "none",
            expires: refresh_token_expiry,
        }),
    );

    return new Response(JSON.stringify({ discord_access_token: response.access_token }), {
        headers,
        status: 200,
    });
};
