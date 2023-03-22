<script context="module" lang="ts">
    export const data = {
        custom: { name: "", url: "" },
        normal_attack: {
            name: "[Normal Attack] Dawnstar Piercer",
            url: "/images/icons/TA.webp",
        },
        elemental_skill: {
            name: "[Elemental Skill] Spring Spirit Summoning",
            url: "/images/icons/TE.webp",
        },
        elemental_burst: {
            name: "[Elemental Burst] Divine Maiden's Deliverance",
            url: "/images/icons/TQ.webp",
        },
        ascension_1: {
            name: "[Ascension 1] Deific Embrace",
            url: "/images/icons/T1.webp",
        },
        ascension_4: {
            name: "[Ascension 4] Spirit Communion Seal",
            url: "/images/icons/T4.webp",
        },
        utility: {
            name: "[Utility] Precise Comings and Goings",
            url: "/images/icons/TU.webp",
        },
        c1: {
            name: "[C1] Clarity of Heart",
            url: "/images/icons/C1.webp",
        },
        c2: {
            name: "[C2] Centered Spirit",
            url: "/images/icons/C2.webp",
        },
        c3: {
            name: "[C3] Seclusion",
            url: "/images/icons/C3.webp",
        },
        c4: {
            name: "[C4] Insight",
            url: "/images/icons/C4.webp",
        },
        c5: {
            name: "[C5] Divine Attainment",
            url: "/images/icons/C5.webp",
        },
        c6: {
            name: "[C6] Mystical Abandon",
            url: "/images/icons/C6.webp",
        },
        set_4no: {
            name: "4-Piece Noblesse Oblige",
            url: "/images/icons/SetNO.webp",
        },
        set_4bs: {
            name: "4-Piece Blizzard Strayer",
            url: "/images/icons/SetBS.webp",
        },
        set_mix: {
            name: "2/2 Emblem / Blizzard Strayer / Gladiator / Shimenawa",
            url: "/images/icons/SetMix.png",
        },
        set_4eosf: {
            name: "4-Piece Emblem of Severed Fate",
            url: "/images/icons/SetEoSF.webp",
        },
        set_4gf: {
            name: "4-Piece Gladiator's Finale",
            url: "/images/icons/SetGF.webp",
        },
    } as const;
</script>

<script lang="ts">
    export let key: keyof typeof data = "custom";

    export let show: "both" | "image" | "text" = "both";
    export let size: string = "50px";
    export let suffix: string = "";

    export let icon: string | null = null;
    export let name: string | null = null;
</script>

<h4>
    {#if show !== "text"}<img alt={key} src={icon ?? data[key].url} height={size} />{/if}
    {#if show !== "image"}{@html name ?? data[key].name} {suffix}{/if}
</h4>

<style lang="scss">
    h4 {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    img {
        padding-right: 20px;
    }
</style>
