<script lang="ts">
    import Container from "$lib/Container.svelte";
    import Header from "$lib/Header.svelte";

    let y: number = 0;

    function scroll() {
        window.scrollTo({
            top: Math.min(window.innerHeight, window.innerWidth) + 200,
            behavior: "smooth",
        });
    }
</script>

<svelte:window bind:scrollY={y} />

<img
    class="main-background"
    alt="Shenhe Background"
    src="/images/background.jpg"
    style="--position: translateY({-y * 0.2}px)"
/>

<div style="padding-top: calc(min(100vh, 100vw))" />

<img id="top-background" alt="Top Strip" src="/images/top-background.png" />

<div class="chevron">
    <svg width="50px" height="50px" on:click={scroll} on:keydown={scroll}>
        <polyline points="0,10 25,35 50,10" stroke="white" stroke-width="3" fill="none" />
    </svg>
</div>

<div id="box">
    <div style="display: flex; flex-direction: column; align-items: center">
        <Header content="About Shenhe" />
        <div id="quote-strip" />
        <Header content="About Us" />
        <div class="section">
            <Container>
                <p>
                    <b>Welcome to Shenhe Mains!</b> We are a community dedicated to the character Shenhe
                    from Genshin Impact. Come check us out for a friendly Discord and Reddit community,
                    theorycrafting resources, gameplay and build guides, and a place to hang out and
                    chat!
                </p>
                <p>
                    Come check us out at
                    <a href="https://discord.gg/shenhe" target="_blank" rel="noreferrer"
                        >discord.gg/shenhe</a
                    >
                    and
                    <a href="https://reddit.com/shenhemains" target="_blank" rel="noreferrer"
                        >r/shenhemains</a
                    >!
                </p>
            </Container>
        </div>
        <Header content="TC Resources" />
        <div class="section">
            <Container>
                <p>Here are some useful links you may want to check out:</p>
                <ul>
                    <li>
                        <p>
                            <a
                                href="https://keqingmains.com/shenhe/"
                                target="_blank"
                                rel="noreferrer">KQM Shenhe Guide</a
                            >
                        </p>
                    </li>
                    <li>
                        <p>
                            <a
                                href="https://docs.google.com/spreadsheets/d/1iVnT2RPD76f2GZT6GQ5LV1MtGwvOwObhbi0svAdYS2M"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Shenhe Mastersheet
                            </a>
                        </p>
                    </li>
                </ul>
                <p>Be sure to check out <a href="/guide">the guide</a> on this website as well!</p>
            </Container>
        </div>
    </div>
</div>

<img id="bot-background" alt="Bot Strip" src="/images/bot-background.png" />

<style lang="scss">
    img.main-background {
        position: fixed;
        inset: 0;
        width: 100vw;
        z-index: -100;

        transform: var(--position);

        @media screen and (max-width: 1000px) {
            width: 200vw;
            left: -100vw;
        }
    }

    @keyframes oscillate {
        0% {
            transform: translateY(0);
        }

        50% {
            transform: translateY(5px);
        }

        100% {
            transform: translateY(0);
        }
    }

    div.chevron {
        position: absolute;
        width: 100%;
        text-align: center;
        top: calc(min(100vh, 100vw) - 100px);

        z-index: 20;

        svg:hover {
            animation: oscillate 1.2s infinite ease-in-out;
        }
    }

    img#top-background {
        height: calc(100vw / 1920 * 793);
        margin-top: -16vw;
        margin-bottom: calc(-100vw / 1920 * 793 + 16vw);
        z-index: 10;
    }

    div#box {
        background-image: url(/images/mid-background.png);
        background-size: cover;
        padding-top: 25vw;
        padding-bottom: 16vw;
    }

    img#bot-background {
        height: calc(100vw / 1920 * 793);
        margin-top: -16vw;
        z-index: 10;
    }

    div#quote-strip {
        background-image: url(/images/quote-strip.png);
        background-size: cover;
        background-position: center 18.33%;

        width: 100vw;

        height: calc(100vw / 3840 * 2160);
        margin-top: calc(-100vw / 3840 * 2160 * 0.075);
        margin-bottom: calc(-100vw / 3840 * 2160 * 0.1296 + 125px);

        @media screen and (max-width: 1000px) {
            background-image: url(/images/quote-strip-mobile.png);
            height: calc(100vw / 2160 * 3686);
            margin-bottom: calc(-100vw / 3840 * 2160 * 0.1296 + 25px);
        }
    }

    div.section {
        width: 100%;
    }
</style>
