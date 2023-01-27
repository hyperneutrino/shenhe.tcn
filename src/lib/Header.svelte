<script lang="ts">
    export let content: string;
</script>

<div class="outer">
    <img class="arrow" alt="Left Header" src="/images/header-left.png" />
    <div class="inner">
        <div class="padding">
            <div class="content">{content}</div>
        </div>
    </div>
    <img class="arrow" alt="Left Header" src="/images/header-right.png" />
</div>

<style lang="scss">
    div.outer {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    div.inner {
        background-image: url(/images/cryo.png);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

    div.padding {
        padding: 8vh 0;
        background: linear-gradient(to right, transparent, #aaaaaa33, transparent);
        mask: linear-gradient(transparent, black, transparent);
        backdrop-filter: blur(3px);
    }

    div.content {
        font-family: "Genshin", serif;
        font-size: calc(min(250%, 4vw));
        padding: 0 2vw;
    }

    img.arrow {
        width: calc(min(30vh, 25vw));
        z-index: 0;
    }
</style>
