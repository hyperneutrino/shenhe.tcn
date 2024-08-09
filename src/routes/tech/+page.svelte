<script lang="ts">
    import Container from "$lib/Container.svelte";
    import Header from "$lib/Header.svelte";
</script>

<div id="main">
    <Container>
        <div style="display: flex; flex-direction: column; align-items: center">
            <Header content="Credits" />
        </div>
        <p>
            This website was created by <b>HyperNeutrino#1759</b>. Many thanks go to
            <b>Kysei#8296</b> for his work on the design of the original website which inspired this
            one and <b>Haru Atsushi</b> for his work on the graphics on the original website, many of
            which were recreated in this website.
        </p>
        <p>
            Thanks to the
            <b><a href="https://teyvatcollective.network">Teyvat Collective Network</a></b> for providing
            this domain.
        </p>
        <div style="display: flex; flex-direction: column; align-items: center">
            <Header content="Tech Stack" />
        </div>
        <ul>
            <li><p>Routing + Front-End: <b>SvelteKit</b></p></li>
            <li><p>Bundling: <b>Vite</b></p></li>
            <li><p>Discord Access: <b>discord.js</b></p></li>
            <li><p>Language: <b>TypeScript</b> (Node.JS) + <b>Svelte</b></p></li>
            <li><p>CDN: <b>Cloudflare</b></p></li>
            <li><p>Webserver: <b>NGINX</b></p></li>
            <li><p>VPS: <b>Racknerd</b></p></li>
        </ul>
    </Container>
</div>

<style lang="scss">
    div#main {
        background-image: url(/images/mid-background.png);
        background-size: cover;
        padding-top: 250px;
        padding-bottom: 150px;
    }
</style>
