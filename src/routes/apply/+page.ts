import type { PageLoad } from "./$types.js";

export const load: PageLoad = ({ url, data }) => {
    return {
        blocked: url.searchParams.has("notopen"),
        success: url.searchParams.has("success"),
        ...(data ?? {}),
    };
};
