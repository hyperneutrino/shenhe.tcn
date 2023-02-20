import config from "config";
import type { RequestHandler } from "./$types.js";

const DISCORD_ENDPOINT = (path: string, state: string) =>
    `https://discord.com/api/v8/oauth2/authorize?client_id=${config.get(
        "client_id",
    )}&redirect_uri=${encodeURIComponent(
        config.get("callback"),
    )}&response_type=code&scope=identify&state=${encodeURIComponent(state + path)}`;

export const GET: RequestHandler = ({ cookies, url }) => {
    let state = "";
    for (let x = 0; x < 32; x++) state += String.fromCharCode(Math.floor(Math.random() * 94) + 33);

    const headers = new Headers({
        Location: DISCORD_ENDPOINT(url.searchParams.get("redirect") ?? "/", state),
    });

    headers.append(
        "Set-Cookie",
        cookies.serialize("state", state, {
            path: "/",
            httpOnly: true,
            sameSite: "lax",
            expires: new Date(Date.now() + 10 * 60 * 1000),
        }),
    );

    return new Response(null, {
        headers,
        status: 302,
    });
};
