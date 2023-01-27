import config from "config";
import { Client, IntentsBitField } from "discord.js";

const client = new Client({
    intents: IntentsBitField.Flags.Guilds | IntentsBitField.Flags.GuildMembers,
});
await client.login(config.get("token"));

export { client };
