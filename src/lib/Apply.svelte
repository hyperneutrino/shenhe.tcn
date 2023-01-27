<script lang="ts">
    import Callout from "./Callout.svelte";

    export let data: any;
    export let key: string;
</script>

{#if data.open_teams.includes(key)}
    <a href="/apply/{key}"><Callout color="#0f03">Apply Now!</Callout></a>
{:else}
    <Callout color="#f006">This team is closed right now.</Callout>
{/if}
