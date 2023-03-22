<script lang="ts">
    export let src: string;
    export let alt: string;
    export let credit: string;
    export let link: string = "";
    export let width: number = 100;
</script>

{#if link}
    <a href={link} target="_blank" rel="noreferrer">
        <center>
            <img {src} {alt} width="{width}%" />
            <br />
            {credit}
        </center>
    </a>
{:else}
    <center>
        <img {src} {alt} width="{width}%" />
        <br />
        {credit}
    </center>
{/if}

<style lang="scss">
    img {
        border-radius: 5px;
    }
</style>
