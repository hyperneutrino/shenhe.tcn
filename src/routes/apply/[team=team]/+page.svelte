<script lang="ts">
    import { goto } from "$app/navigation";
    import Callout from "$lib/Callout.svelte";
    import Container from "$lib/Container.svelte";
    import IconTitle from "$lib/IconTitle.svelte";
    import { user } from "$lib/stores.js";
    import Textarea from "$lib/Textarea.svelte";
    import { onMount } from "svelte";

    export let data: any;
    export let form: any;

    onMount(() => {
        if (form?.success) goto("/apply?success");
        if (data?.team_closed) goto("/apply?notopen");
    });
</script>

<div id="main">
    <Container>
        {#if $user}
            <form method="post">
                <div class="glass">
                    <IconTitle
                        name="Logged in as {data.user.username}"
                        icon="https://cdn.discordapp.com/avatars/{data.user.id}/{data.user
                            .avatar}.webp"
                    />
                    Not you?
                    <a href="/api/logout?redirect={encodeURIComponent(`/apply/${data.team}`)}">
                        Log Out
                    </a>
                    <br />
                    <br />
                    <b>Your username will be collected for identification purposes.</b> No other
                    information such as your email address or what servers you're in can be accessed
                    by the website.
                    <br />
                    <br />
                    <a href="/apply">Return to team list</a>
                </div>
                {#if form?.message}
                    <div class="error alert">{@html form.message}</div>
                {/if}
                <div class="glass">
                    <h3>Intro Questions</h3>
                    <div class="white">
                        <p>What is your age?</p>
                        <input type="number" name="age" min="13" required value={form?.age} />
                    </div>
                    <div class="white">
                        <p>What is your timezone?</p>
                        If you're not sure, just enter your current local time.
                        <br />
                        <br />
                        <input
                            type="text"
                            name="tz"
                            required
                            value={form?.tz ?? ""}
                            placeholder="GMT-5, EST, ..."
                        />
                    </div>
                    <div class="white">
                        <p>
                            How much time would you be able to dedicate towards contributing to our
                            server, and during what time of day will you be able to be active?
                        </p>
                        <Textarea name="time" required value={form?.time} />
                    </div>
                    <div class="white">
                        <p>
                            Is there anything in the foreseeable future that you know may impact
                            your activity?
                        </p>
                        <Textarea name="impact" required value={form?.impact} />
                    </div>
                </div>
                <div class="glass">
                    <h3>Team Questions</h3>
                    {#if data.team === "mod"}
                        <p>
                            Moderators are responsible for upholding civility and order. They help
                            members that require aid as well as punish members who don't abide by
                            the server's rules.
                        </p>
                        <div class="white">
                            <p>
                                Introduce yourself. Who are you, what's your personality like, what
                                experience do you have with moderation, etc.?
                            </p>
                            <Textarea name="intro" required value={form?.intro} />
                        </div>
                        <div class="white">
                            <p>What are your strengths?</p>
                            <Textarea name="strengths" required value={form?.strengths} />
                        </div>
                        <div class="white">
                            <p>What are your weaknesses?</p>
                            <Textarea name="weaknesses" required value={form?.weaknesses} />
                        </div>
                        <div class="white">
                            <p>Describe how you would handle a fast and problematic chat.</p>
                            <Textarea name="example" required value={form?.example} />
                        </div>
                        <div class="white">
                            <p>
                                How would you handle a situation with a user that is active and
                                contributes positively but frequently makes other users feel
                                uncomfortable?
                            </p>
                            <Textarea name="example2" required value={form?.example2} />
                        </div>
                    {:else if data.team === "tc"}
                        <p>
                            The TC Team is responsible for delving into the game's mechanics,
                            creating optimized builds, team compositions, and discussing playstyles
                            best suited for each character in Genshin Impact.
                        </p>
                        <div class="white">
                            <p>
                                Tell us about your knowledge of theorycrafting for both Genshin
                                Impact and other communities. Feel free to include examples of your
                                TC work if you have any.
                            </p>
                            <Textarea name="tc_knowledge" required value={form?.tc_knowledge} />
                        </div>
                        <div class="white">
                            <p>
                                Do you own Shenhe or know her kit? How well do you know the gameplay
                                and damage formula of Genshin Impact?
                            </p>
                            <Textarea name="shenhe_xp" required value={form?.shenhe_xp} />
                        </div>
                    {:else if data.team === "event"}
                        <p>
                            The event team is responsible for planning and executing server events.
                            Through joint collaboration these members create fun and interactive
                            occasions for the community.
                        </p>
                        <div class="white">
                            <p>
                                Please let us know about any experience you have with organizing,
                                planning, and hosting events.
                            </p>
                            <Textarea name="event_xp" required value={form?.event_xp} />
                        </div>
                        <div class="white">
                            <p>
                                How well versed are you with Genshin Impact's lore, and the
                                characters' backgrounds?
                            </p>
                            <Textarea name="lore" required value={form?.lore} />
                        </div>
                        <div class="white">
                            <p>
                                Consider a team-based event where members pick one of two teams and
                                compete for total team chat XP (based on activity in chat). What
                                rules or scoring details would you implement for this event?
                            </p>
                            <Textarea name="xp_event" required value={form?.xp_event} />
                        </div>
                        <div class="white">
                            <p>
                                There is an event in planning where Shenhe reunites all of her fans
                                with gifts of the past. These gifts include prizes, games, and
                                friendships. What would you name the event? Feel free to give as
                                many ideas as you want.
                            </p>
                            <Textarea name="name_ideas" required value={form?.name_ideas} />
                        </div>
                        <div class="white">
                            <p>
                                Consider the theme of Shenhe saving Liyue from some existential
                                threat / grave danger. Give some ideas for how this event might
                                look, what activities it would feature, etc.
                            </p>
                            <Textarea name="theme_ideas" required value={form?.theme_ideas} />
                        </div>
                        <div class="white">
                            <p>Do you have any event ideas in mind? If so, please share them.</p>
                            <Textarea name="event_ideas" required value={form?.event_ideas} />
                        </div>
                    {:else if data.team === "art"}
                        <p>
                            The art team creates original emojis, stickers, banners and role icons
                            for the server. They also have the authority to accept or reject emoji
                            submissions from outside parties, as well as being the judges for art
                            related events.
                        </p>
                        <div class="white">
                            <p>What forms of art and/or design do you specialize in?</p>
                            <Textarea name="specialization" required value={form?.specialization} />
                        </div>
                        <div class="white">
                            <p>
                                Please link any artwork or portfolios that you would like us to
                                review.
                            </p>
                            If any of these are NSFW, leave a note so we can have someone willing to
                            view NSFW artwork evaluate it.
                            <br />
                            <br />
                            <Textarea name="portfolio" required value={form?.portfolio} />
                        </div>
                    {/if}
                </div>
                <div class="glass">
                    <h3>Submit</h3>
                    <p>
                        Ready to submit? Check over your answers again as you will not be able to
                        edit your application later. Once you are ready, click below.
                    </p>
                    <button>Submit!</button>
                </div>
            </form>
        {:else}
            <Callout>
                <a href="/api/login?redirect={encodeURIComponent(`/apply/${data.team}`)}">Log In</a>
                to apply!
            </Callout>
        {/if}
    </Container>
</div>

<style lang="scss">
    div#main {
        background-image: url(/images/mid-background.png);
        background-size: cover;
        padding-top: 250px;
        padding-bottom: 150px;
        min-height: calc(100vh - 400px);
    }

    .glass {
        margin: 1em 0;
        padding: 0.5em 2em 2em 2em;
        border-radius: 5px;
        background-color: #0001;
        backdrop-filter: blur(3px);
    }

    .white {
        margin: 1em 0;
        padding: 0.5em 2em 2em 1.5em;
        background-color: #abc2;
        backdrop-filter: blur(4px);
        border-radius: 5px;
    }
</style>
