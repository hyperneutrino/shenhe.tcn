<script lang="ts">
    import TeamSlot from "./TeamSlot.svelte";

    export let name: string;
    export let team: [string, string, string, string];
</script>

<div class="back">
    <div class="outer">
        <div class="title-box">
            <div class="title">
                {name}
            </div>
        </div>
        <div class="box">
            {#each team as slot, index}
                {#if index !== 0}
                    <span>✦</span>
                {/if}
                <TeamSlot {slot} />
            {/each}
        </div>
    </div>
</div>

<style lang="scss">
    div.outer,
    div.box,
    div.title-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    div.back {
        background-image: url(/images/decor1.png);
        border-radius: 10px;
    }

    div.outer {
        flex-direction: column;

        background-color: #2469;
        backdrop-filter: blur(2px);

        padding: 1em;
        border-radius: 10px;
        border: 5px double #adf;

        margin-top: 1em;
    }

    div.title-box {
        flex-direction: column;
        width: 80%;
        border-bottom: 2px solid #58a;
        padding: 0;
        margin-bottom: 1em;
    }

    div.title {
        font-family: "Genshin", serif;
        width: 80%;
        border-bottom: 2px solid #d9e9f9;
        text-align: center;
        padding-bottom: 0.5em;
        margin-bottom: 1px;
    }

    div.box {
        flex-direction: row;
    }
</style>
