<script lang="ts">
    import Apply from "$lib/Apply.svelte";
    import Callout from "$lib/Callout.svelte";
    import Container from "$lib/Container.svelte";
    import Header from "$lib/Header.svelte";

    export let data: any;
</script>

<div id="main">
    <Container>
        <div style="display: flex; flex-direction: column; align-items: center">
            <Header content="Our Staff Teams" />
        </div>
        {#if data.blocked}
            <div class="error alert">
                That team is not accepting applications right now!
                <a href="/apply">Dismiss</a>
            </div>
        {/if}
        {#if data.success}
            <div class="success alert">
                Your application has been submitted! Please wait for the staff team to review it. We
                may not contact all failed applicants. <a href="/apply">Dismiss</a>
            </div>
        {/if}
        <div class="col">
            <div class="row">
                <div>
                    <div>
                        <h3>✧ Mod Team</h3>
                        <p>
                            Moderators are responsible for upholding civility and order. They help
                            members that require aid as well as punish members who don't abide by
                            the server's rules to maintain a friendly and welcoming environment.
                        </p>
                        <h4>Requirements</h4>
                        <ul>
                            <li>
                                <p>experience moderating Discord servers or other communities</p>
                            </li>
                            <li>
                                <p>
                                    level-headedness and problem-solving / conflict-resolution
                                    skills
                                </p>
                            </li>
                        </ul>
                        <br />
                        <Apply {data} key="mod" />
                    </div>
                </div>
                <div>
                    <div>
                        <h3>✧ Theorycrafters</h3>
                        <p>
                            The TC team is responsible for delving into the game's mechanics,
                            creating optimized builds and team compositions, and discussing
                            playstyles best suited for each character in Genshin Impact.
                        </p>
                        <h4>Requirements</h4>
                        <ul>
                            <li><p>theorycrafting experience</p></li>
                            <li>
                                <p>
                                    sufficient math and spreadsheet skills and experience for
                                    theorycrafting and calculations
                                </p>
                            </li>
                        </ul>
                        <br />
                        <Apply {data} key="tc" />
                    </div>
                </div>
            </div>
            <div class="row">
                <div>
                    <div>
                        <h3>✧ Event Team</h3>
                        <p>
                            The event team is responsible for planning and executing server events.
                            Through joint collaboration, these staff create fun and interactive
                            occasions for the community.
                        </p>
                        <h4>Requirements</h4>
                        <ul>
                            <li><p>experience organizing events</p></li>
                            <li><p>potential event ideas</p></li>
                            <li><p>basic Google Drive proficiency</p></li>
                        </ul>
                        <br />
                        <Apply {data} key="event" />
                    </div>
                </div>
                <div>
                    <div>
                        <h3>✧ Art Team</h3>
                        <p>
                            The art team consists of talented members who create original emoji,
                            stickers, banners, and role icons for the server. They have the
                            authority to accept or reject emoji submissions from outside parties, as
                            well as being the judges for art-related events.
                        </p>
                        <h4>Requirements</h4>
                        (one or more, and not all, of the following)
                        <ul>
                            <li><p>can draw</p></li>
                            <li><p>can make edits using Photoshop or other software</p></li>
                            <li><p>can animate</p></li>
                        </ul>
                        <br />
                        <Apply {data} key="art" />
                    </div>
                </div>
            </div>
        </div>
    </Container>
</div>

<style lang="scss">
    div#main {
        background-image: url(/images/mid-background.png);
        background-size: cover;
        padding-top: 250px;
        padding-bottom: 150px;
    }

    .row {
        justify-content: space-between;

        & > div {
            cursor: default;
            width: 50%;
            background-color: #0002;
            color: inherit;
            margin: 0.5em;
            padding: 2em;
            border-radius: 5px;
            transition: 250ms ease-in-out;
        }

        & > div:hover {
            background-color: #0004;
            transform: scale(1.025);
        }

        @media screen and (max-width: 1000px) {
            flex-direction: column;

            & > div {
                width: unset;
            }
        }
    }
</style>
