import { client } from "$lib/bot.js";
import { fail, type Actions } from "@sveltejs/kit";
import { ChannelType, ThreadAutoArchiveDuration } from "discord.js";
import { OPEN_TEAMS } from "../teams.js";
import type { PageServerLoad } from "./$types.js";

export const load: PageServerLoad = async ({ params }) => {
    if (!OPEN_TEAMS.includes(params.team)) return { team_closed: true };
};

const keys = [
    "age",
    "tz",
    "time",
    "impact",
    "intro",
    "strengths",
    "weaknesses",
    "example",
    "example2",
    "tc_knowledge",
    "shenhe_xp",
    "event_xp",
    "lore",
    "xp_event",
    "name_ideas",
    "theme_ideas",
    "event_ideas",
    "specialization",
    "portfolio",
];

export const actions: Actions = {
    default: async ({ request, params, locals }) => {
        const team_name: string =
            {
                mod: "Moderation",
                tc: "Theorycrafting",
                event: "Event",
                art: "Art",
            }[params.team ?? ""] ?? "[Unknown]";

        const role_ids: string[] =
            {
                mod: ["805458032938188838", "905624291326959660"],
                tc: ["889040956228263966"],
                event: ["838128715204263988"],
                art: ["906609595554873464"],
            }[params.team ?? ""] ?? [];

        const tag_id: string =
            {
                mod: "1068250741535424623",
                tc: "1068250781066743828",
                event: "1068250807490855024",
                art: "1068250845751291965",
            }[params.team ?? ""] ?? "";

        const user = (locals as any).user;

        const data = await request.formData();
        const n: Record<string, string> = {};

        for (const key of keys) n[key] = data.get(key) as string;

        const age = parseInt(n.age);

        if (isNaN(age)) return fail(400, { message: "Please enter a valid age." });
        if (age < 13)
            return fail(400, { message: "You must be at least 13 years old to use Discord." });

        if (
            !n.tz ||
            !n.time ||
            !n.impact ||
            (params.team === "mod" &&
                (!n.intro || !n.strengths || !n.weaknesses || !n.example || !n.example2)) ||
            (params.team === "tc" && (!n.tc_knowledge || !n.shenhe_xp)) ||
            (params.team === "event" &&
                (!n.event_xp ||
                    !n.lore ||
                    !n.xp_event ||
                    !n.name_ideas ||
                    !n.theme_ideas ||
                    !n.event_ideas)) ||
            (params.team === "art" && (!n.specialization || !n.portfolio))
        )
            return fail(400, { message: "Please fill out all required fields.", ...n });

        try {
            const member = await client.guilds.cache
                .get("805458032908959804")
                ?.members.fetch(user.id);

            if (!member) throw 0;

            if (member.roles.cache.hasAny(...role_ids))
                return fail(400, { message: "You are already a member of that team.", ...n });
        } catch {
            return fail(400, {
                message:
                    "You must be in the server to apply. Join <a href='https://discord.gg/shenhe' target='_blank' rel='noreferrer'>discord.gg/shenhe</a> first.",
                ...n,
            });
        }

        try {
            const channel = await client.channels.fetch("1068187553427099708");
            if (channel?.type !== ChannelType.GuildForum) throw 0;

            const entries: [string, string][] = [];

            entries.push(["Team", team_name]);
            entries.push([
                "User",
                `<@${user.id}> (${user.tag} \`${user.id}\`)`,
            ]);
            entries.push(["Age", n.age]);
            entries.push(["Timezone / Local Time", n.tz]);
            entries.push([
                "How much time can you dedicate and during what time of day will you be active?",
                n.time,
            ]);
            entries.push([
                "Is there anything in the foreseeable future that may impact your activity?",
                n.impact,
            ]);

            if (params.team === "mod") {
                entries.push([
                    "Introduce yourself. Who are you, what's your personality like, what experience do you have with moderation, etc.?",
                    n.intro,
                ]);
                entries.push(["What are your strengths?", n.strengths]);
                entries.push(["What are your weaknesses?", n.weaknesses]);
                entries.push([
                    "Describe how you would handle a fast and problematic chat.",
                    n.example,
                ]);
                entries.push([
                    "Describe how you would handle an active user who has positive contributions but frequently makes others uncomfortable.",
                    n.example2,
                ]);
            } else if (params.team === "tc") {
                entries.push([
                    "Tell us about your knowledge of TC for Genshin and other communities. Include examples of TC work if you would like.",
                    n.tc_knowledge,
                ]);
                entries.push([
                    "Do you own Shenhe or know her kit? How well do you know gameplay and damage formulas?",
                    n.shenhe_xp,
                ]);
            } else if (params.team === "event") {
                entries.push([
                    "Please let us know about any experience you have with organizing, planning, and hosting events.",
                    n.event_xp,
                ]);
                entries.push([
                    "How well versed are you with the lore and characters' backgrounds?",
                    n.lore,
                ]);
                entries.push([
                    "Implement rules/details for an example team event based on chat XP.",
                    n.xp_event,
                ]);
                entries.push([
                    "Give ideas for a name for an event where Shenhe reunites all of her fans with gifts from the past.",
                    n.name_ideas,
                ]);
                entries.push([
                    "Give ideas for an event themed around Shenhe saving Liyue from some existential threat / grave danger.",
                    n.theme_ideas,
                ]);
                entries.push([
                    "Do you have any event ideas in mind? If so, please share them.",
                    n.event_ideas,
                ]);
            } else if (params.team === "art") {
                entries.push([
                    "What forms of art and/or design do you specialize in?",
                    n.specialization,
                ]);
                entries.push([
                    "Please link any artwork or portfolios that you would like us to review.",
                    n.portfolio,
                ]);
            }

            const fields: { name: string; value: string }[] = [];

            for (let [name, value] of entries) {
                let first = true;
                while (value.length) {
                    fields.push({ name, value: value.substring(0, 1024) });
                    value = value.substring(1024);

                    if (first) {
                        name = name.substring(0, 248) + " (cont.)";
                        first = false;
                    }
                }
            }

            const groups: { name: string; value: string }[][] = [[]];
            let size = 28 + team_name.length;

            for (const field of fields) {
                const current = field.name.length + field.value.length;

                if (groups[groups.length - 1].length >= 25) {
                    groups.push([field]);
                    size = current;
                    continue;
                }

                const total = size + current;

                if (total <= 6000) {
                    groups[groups.length - 1].push(field);
                    size = total;
                } else {
                    groups.push([field]);
                    size = current;
                }
            }

            const thread = await channel.threads.create({
                name: `${user.tag} - ${team_name} Application`,
                message: { content: "<@&1035298770327441418>" },
                appliedTags: [tag_id, "1068250881474183168"],
                autoArchiveDuration: ThreadAutoArchiveDuration.OneWeek,
                reason: `Application for ${user.id}`,
            });

            let first = true;
            for (const group of groups) {
                await thread.send({
                    embeds: [
                        {
                            title: first ? `Incoming ${team_name} Team Application` : "",
                            color: 0xd9e9f9,
                            fields: group,
                        },
                    ],
                });

                first = false;
            }

            return { success: true };
        } catch {
            return fail(500, {
                message:
                    "Your application could not be uploaded. Please contact an admin or try again.",
                ...n,
            });
        }
    },
};
