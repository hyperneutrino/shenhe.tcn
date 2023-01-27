<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let icon: string;
    export let content: string;

    export let background: string = "#fff2";
    export let foreground: string = "white";

    const dispatch = createEventDispatcher();
</script>

<div
    class="noselect"
    style="background-color: {background}; color: {foreground}"
    on:click={() => dispatch("click")}
    on:keydown={() => dispatch("click")}
>
    <img alt={content} src={icon} />
    <span>{content}</span>
</div>

<style lang="scss">
    div {
        cursor: default;

        display: inline-flex;
        flex-direction: row;
        align-items: center;

        padding-left: 3px;
        padding-right: 6.25px;
        border-radius: 12.5px;

        transition: 150ms ease-in-out;
    }

    img {
        width: 25px;
    }
</style>
