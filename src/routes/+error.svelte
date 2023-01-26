<script lang="ts">
    import { page } from "$app/stores";
</script>

<div class="outer">
    <div class="inner">
        <div class="box">
            <div style="padding-top: 40px">
                <span class="code">{$page.status}</span>
                <span class="message">{$page.error?.message}</span>
            </div>
            <div style="margin-top: calc(min(50px, 5vw))">
                <a href="/">&lt; &nbsp; Return Home</a>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    div.outer {
        position: fixed;
        inset: 0;
        display: flex;
        flex-direction: row;
        align-items: center;

        background-image: url(/images/background.jpg);
        background-size: cover;
    }

    div.inner {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    div.box {
        display: flex;
        flex-direction: column;
        align-items: center;

        background-color: #ffffff44;
        backdrop-filter: blur(4px);
        padding: 2em;
        border-radius: 2em;

        @media screen and (max-width: 1000px) {
            padding: 1em;
            border-radius: 1em;
        }
    }

    span {
        font-size: calc(min(500%, 10vw));
    }

    span.code {
        padding-right: 0.5em;
        margin-right: 0.5em;
        border-right: calc(min(5px, 0.75vw)) solid #2d3136;
    }

    span.message {
        opacity: 80%;
    }

    a {
        font-size: calc(min(150%, 5vw));
        text-decoration: none;
        color: var(--color2);
    }
</style>
