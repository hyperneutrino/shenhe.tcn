<script lang="ts">
    export let slot: string;
    let icon: string;

    icon = ["Cryo", "Anemo", "Hydro", "Pyro", "Electro", "Geo", "Dendro"].includes(slot)
        ? `E_${slot}.svg`
        : `C_${slot}.webp`;
</script>

{#if slot === "CryoAnemo"}
    <div style="height: calc(min(16vh, 12vw))">
        <img
            alt="Cryo"
            src="/images/icons/E_Cryo.svg"
            style="clip-path: polygon(0% 0%, 75% 0%, 25% 100%, 0 100%);"
        /><img
            alt="Anemo"
            src="/images/icons/E_Anemo.svg"
            style="clip-path: polygon(75% 0%, 100% 0%, 100% 100%, 25% 100%); margin-left: calc(max(-16vh, -12vw))"
        />
    </div>
{:else}
    <img alt={slot} src="/images/icons/{icon}" />
{/if}

<style lang="scss">
    img {
        width: calc(min(16vh, 12vw));
        height: calc(min(16vh, 12vw));
    }
</style>
