<script lang="ts">
    export let color: string = "#fff2";
    export let icon: string = "";
</script>

<div class="box" style="background-color: {color}">
    {#if icon}
        <div class="icon">{icon}</div>
    {/if}
    <div class="inner">
        <slot />
    </div>
</div>

<style lang="scss">
    div {
        &.box {
            display: flex;
            flex-direction: row;
            align-items: center;

            padding: 1em 3em;
            border-radius: 5px;
        }

        &.icon {
            font-size: 200%;
            padding-right: 1em;
        }
    }

    @media screen and (max-width: 1000px) {
        div {
            &.box {
                flex-direction: column;
                align-items: flex-start;
                padding: 0.5em 1em;
            }

            &.icon {
                font-size: 200%;
                display: inline;
                padding: 0.5em 0;
            }
        }
    }
</style>
