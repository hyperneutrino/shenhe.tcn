import db from "$lib/db.js";
import type { PageServerLoad } from "./$types.js";

export const load: PageServerLoad = async () => {
    return { open_teams: (await db.open_teams.find().toArray()).map((doc) => doc.team) };
};
