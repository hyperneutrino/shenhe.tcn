import type { PageServerLoad } from "./$types.js";
import { OPEN_TEAMS } from "./teams.js";

export const load: PageServerLoad = async () => {
    return { open_teams: OPEN_TEAMS };
};
