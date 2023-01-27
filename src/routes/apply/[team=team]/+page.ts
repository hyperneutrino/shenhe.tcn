import type { PageLoad } from "./$types.js";

export const load: PageLoad = ({ params, data }) => {
    return { team: params.team, ...(data ?? {}) };
};
