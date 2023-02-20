import config from "config";
import type { RequestHandler } from "./$types.js";

export const GET: RequestHandler = async ({ url, fetch }) => {
    const discord_refresh_token = url.searchParams.get("code");

    if (!discord_refresh_token)
        return new Response(JSON.stringify({ error: "No refresh token found." }), { status: 500 });

    const data = {
        client_id: config.get("client_id") as string,
        client_secret: config.get("client_secret") as string,
        grant_type: "refresh_token",
        refresh_token: discord_refresh_token as string,
    };

    const request = await fetch("https://discord.com/api/v8/oauth2/token", {
        method: "post",
        body: new URLSearchParams(data),
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    if (!request.ok)
        return new Response(JSON.stringify({ error: "No refresh token found." }), { status: 500 });

    const response = await request.json();

    const access_token_expiry = response.expires_in;
    const refresh_token_expiry = 30 * 24 * 60 * 60 * 1000;

    return new Response(
        JSON.stringify({
            discord_access_token: response.access_token,
            discord_refresh_token: response.refresh_token,
            access_token_expiry,
            refresh_token_expiry,
        }),
    );
};
