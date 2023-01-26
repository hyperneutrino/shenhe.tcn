<script lang="ts">
    import Navbar from "$lib/Navbar.svelte";

    export let data: any;
</script>

<html lang="en">
    <head>
        <meta name="description" content="Shenhe Mains" />
        <meta
            name="keywords"
            content="shenhe, mains, genshin, impact, teyvat, collective, network, tcn"
        />
        <meta name="author" content="hyper-neutrino" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="Shenhe Mains" />
        <meta
            property="og:description"
            content="Welcome to Shenhe Mains, the community for all things Shenhe (from Genshin Impact)! discord.gg/shenhe + reddit.com/r/shenhemains"
        />
        <meta property="og:url" content="https://shenhe.teyvatcollective.network" />
        <meta property="og:image" content="https://shenhe.teyvatcollective.network/favicon.png" />
        <meta name="theme-color" data-react-helmet="true" content="#d9e9f9" />

        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
        <link rel="stylesheet" type="text/css" href="/styles/stylesheet.css" />
        <link
            rel="stylesheet"
            type="text/css"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />

        <title>Shenhe Mains</title>
    </head>

    <body>
        <Navbar user={data?.user} />

        <slot />
    </body>
</html>
