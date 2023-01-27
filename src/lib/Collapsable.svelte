<script lang="ts">
    export let title: string;
    export let open: boolean = false;
</script>

<div class="header noselect" on:click={() => (open = !open)} on:keydown={() => (open = !open)}>
    <i class="material-icons {open ? 'spin' : ''}">chevron_right</i>
    <span style="padding-left: 1em">{title}</span>
</div>
<div class="drawer {open ? 'open' : 'closed'}"><div><slot /></div></div>

<style lang="scss">
    :root {
        --width: 100%;

        @media screen and (max-width: 1000px) {
            --width: 80%;
        }
    }

    .material-icons {
        transition: 300ms ease-in-out;
    }

    .spin {
        transform: rotate(90deg);
    }

    .header {
        display: flex;
        flex-direction: row;
        align-items: center;

        cursor: default;
        background-color: #abc;
        color: black;
        padding: 0.5em 2em;
        font-family: "Genshin", serif;
    }

    .header {
        width: var(--width);
    }

    .drawer {
        background-color: #fff1;
        padding: 0.5em 2em;
        border: 2px solid #abc;

        width: calc(var(--width) - 4px);

        display: grid;
        overflow: scroll;
        transition: 300ms ease-in-out;

        & > div {
            align-self: end;
            min-height: 0;
        }
    }

    .open {
        grid-template-rows: 1fr;
        margin-bottom: 1em;
    }

    .closed {
        grid-template-rows: 0fr;
        opacity: 0;
    }
</style>
