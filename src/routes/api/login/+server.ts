import config from "config";
import type { RequestHandler } from "./$types.js";

const DISCORD_ENDPOINT = `https://discord.com/api/v8/oauth2/authorize?client_id=${config.get(
    "client_id",
)}&redirect_uri=${encodeURIComponent(
    config.get("callback"),
)}&response_type=code&scope=identify guilds`;

export const GET: RequestHandler = () => {
    return new Response(null, { headers: { Location: DISCORD_ENDPOINT }, status: 302 });
};
