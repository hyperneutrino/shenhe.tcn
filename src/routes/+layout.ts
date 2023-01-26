import type { Load } from "@sveltejs/kit";

export const load: Load = async ({ data }) => {
    return { user: (data as any).user };
};
