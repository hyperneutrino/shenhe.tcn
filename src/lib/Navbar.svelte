<script lang="ts">
    import { page } from "$app/stores";
    import { user } from "./stores.js";

    let y: number = 0;
    let scale: number;

    let width: number = 0;
    let height: number = 0;

    let offset: number;

    $: offset = $page.url.pathname === "/" ? Math.min(height, width) + 400 : 0;

    $: scale = Math.max(0, y - offset) / 2;

    let open: boolean = false;
</script>

<svelte:window bind:scrollY={y} bind:innerWidth={width} bind:innerHeight={height} />

<nav style="--height: {Math.max(50, 100 - scale / 2)}px; --opacity: {Math.min(100, scale)}%">
    <span style="width: 15%" />
    <span
        style="width: 5%; cursor: pointer; padding-top: 0.4em"
        on:click={() => (open = true)}
        on:keydown={() => (open = true)}
    >
        <i class="material-icons">menu</i>
    </span>
    <span class="title"
        ><a href="/" style="text-decoration: none; color: unset">Shenhe Mains</a></span
    >
</nav>

<div class={open ? "open" : "closed"}>
    <div class="box">
        <div>
            <a href="/" on:click={() => (open = false)}><b>Home</b></a>
            <a href="/guide" on:click={() => (open = false)}>Guide</a>
            <a
                href="https://docs.google.com/spreadsheets/d/1-vkmgp5n0bI9pvhUg110Aza3Emb2puLWdeoCgrxDlu4"
                target="_blank"
                rel="noreferrer"
            >
                Calculator
            </a>
            <a href="/apply" on:click={() => (open = false)}>Staff Applications</a>
            <a href="/tech" on:click={() => (open = false)}>Credits + Tech</a>
            <a href="https://discord.gg/shenhe" target="_blank" rel="noreferrer">Discord Server</a>
            <a href="https://reddit.com/r/shenhemains" target="_blank" rel="noreferrer">
                Subreddit
            </a>
        </div>
        <div>
            {#if $user}
                <a href="/profile" on:click={() => (open = false)}>
                    <b>Welcome,</b>
                    {$user.username}#{$user.discriminator}!
                </a>
                <a href="/api/logout?redirect={encodeURIComponent($page.url.pathname)}">Log Out</a>
            {:else}
                <a href="/api/login?redirect={encodeURIComponent($page.url.pathname)}">Log In</a>
            {/if}
        </div>
    </div>
</div>

<div
    class={open ? "open-overlay" : "closed-overlay"}
    on:click={() => (open = false)}
    on:keydown={() => (open = false)}
/>

<style lang="scss">
    nav {
        background-color: rgba(20, 50, 80, var(--opacity));
        color: white;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-family: "Genshin";
        height: var(--height);
        left: 0;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 25;
    }

    span.title {
        font-size: 200%;

        @media screen and (max-width: 1000px) {
            display: none;
        }
    }

    div {
        &.open,
        &.closed {
            position: fixed;
            top: 0;
            left: 0;
            width: 25%;
            height: 100%;
            background-color: #2d3136;
            color: white;
            transition: 200ms ease-in-out;
            z-index: 100;

            @media screen and (max-width: 1000px) {
                width: 75%;
            }
        }

        &.closed {
            transform: translateX(-100%);
            opacity: 0;
            pointer-events: none;
        }

        &.open-overlay,
        &.closed-overlay {
            position: fixed;
            inset: 0;
            background-color: #00000088;
            transition: 200ms ease-in-out;
            z-index: 50;
        }

        &.closed-overlay {
            pointer-events: none;
            opacity: 0%;
        }
    }

    div.box {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        height: 100%;

        & > div > a {
            display: block;
            padding: 5% 15%;
            cursor: pointer;

            color: white;
            text-decoration: unset;
            font-size: 125%;

            &:hover {
                background-color: #ffffff11;
            }
        }
    }
</style>
