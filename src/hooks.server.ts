import type { Handle } from "@sveltejs/kit";
import config from "config";

export const handle: Handle = async ({ event, resolve }) => {
    console.log(`[${event.request.method}] ${event.url.pathname}`);

    const cookies = event.cookies;

    if (cookies.get("discord_refresh_token") && !cookies.get("discord_access_token")) {
        const discord_request = await fetch(
            `${config.get("domain")}/api/refresh?code=${cookies.get("discord_refresh_token")}`,
        );

        const discord_response = await discord_request.json();

        if (discord_response.discord_access_token) {
            const request = await fetch("https://discord.com/api/v8/users/@me", {
                headers: { Authorization: `Bearer ${discord_response.discord_access_token}` },
            });

            const response = await request.json();

            if (response.id) (event.locals as any).user = { ...response };
        }
    }

    if (cookies.get("discord_access_token")) {
        const request = await fetch("https://discord.com/api/v8/users/@me", {
            headers: { Authorization: `Bearer ${cookies.get("discord_access_token")}` },
        });

        const response = await request.json();

        if (response.id) (event.locals as any).user = { ...response };
    }

    return await resolve(event);
};
