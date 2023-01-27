import type { RequestHandler } from "./$types.js";

export const GET: RequestHandler = ({ url }) => {
    const headers = new Headers({ Location: url.searchParams.get("redirect") ?? "/" });
    headers.append("set-cookie", "discord_access_token=deleted; path=/; Max-Age=-1");
    headers.append("set-cookie", "discord_refresh_token=deleted; path=/; Max-Age=-1");

    return new Response(null, { headers, status: 302 });
};
