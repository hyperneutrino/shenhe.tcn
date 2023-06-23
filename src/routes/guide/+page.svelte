<script lang="ts">
    import Blockquote from "$lib/Blockquote.svelte";
    import Container from "$lib/Container.svelte";
    import IconTitle from "$lib/IconTitle.svelte";
    import Team from "$lib/Team.svelte";
    import Image from "../../lib/Image.svelte";

    let width: number = 0;
    let y: number = 0;

    let size: number = 100;
    let sizepx: string = "100px";

    let selected: string[] = [];

    $: size = width < 1000 ? width * 0.1 : 100;
    $: sizepx = `${size}px`;

    export let data: { weapons: string[][]; characters: [string, string, string[]][] };
</script>

<svelte:window bind:innerWidth={width} bind:scrollY={y} />

<div id="top-block" />

<div style="background-color: #146; padding-top: 50px; padding-bottom: 150px">
    <div class="main">
        <Container>
            <div id="toc-box">
                <div id="toc-back">
                    <div id="toc">
                        <b>Table of Contents</b>
                        <ul>
                            <li><a href="#introduction">Introduction</a></li>
                            <li><a href="#pros-cons">Pros &amp; Cons</a></li>
                            <li><a href="#should-you-pull">Should you pull?</a></li>
                        </ul>
                        <ul>
                            <li><a href="#talents">Talents</a></li>
                            <li><a href="#talent-priority">Talent Priority</a></li>
                            <li><a href="#constellations">Constellations</a></li>
                        </ul>
                        <ul>
                            <li><a href="#artifacts">Artifacts</a></li>
                            <li><a href="#weapons">Weapons</a></li>
                            <li><a href="#build-examples">Build Examples</a></li>
                            <li><a href="#synergy">Character Synergy</a></li>
                            <li><a href="#teams">Sample Teams</a></li>
                        </ul>
                        <ul>
                            <li><a href="#faq">FAQ</a></li>
                            <li><a href="#conclusion">Conclusion</a></li>
                            <li><a href="#credits">Credits</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </Container>
        <br />
        <br />
        <br />
        <h1 class="blue banner"><Container>Preface</Container></h1>
        <br />
        <div class="main">
            <Container>
                <Image
                    src="https://i.imgur.com/5n9GTI3.png"
                    alt="Shenhe holding her right hand in front of her and Calamity Queller with her left hand behind her"
                    credit="QNZY on Pixiv"
                    link="https://www.pixiv.net/en/artworks/97992667"
                />
                <p>
                    Since Shenhe has become quite popular among both the casual and hardcore crowd,
                    this guide will contain summaries that focus on getting to the point quickly for
                    those wishing for a simpler guide as well as more traditional and technical
                    points.
                </p>
                <p>
                    Additionally, there will be an FAQ at the end answering some common questions
                    regarding Shenhe. With this in mind, let us begin!
                </p>
                <h2 id="introduction">Introduction</h2>
                <Image
                    src="https://i.imgur.com/3HOorif.png"
                    alt="Shenhe bust with her left hand touching her ear"
                    credit="弐色 on Pixiv"
                    link="https://www.pixiv.net/en/artworks/95148296"
                />
                <p>
                    Shenhe is a <b>5-star Cryo polearm unit</b> with a very unique kit. She is a
                    Cryo support and sub-DPS. The key aspect to her kit is her <b>Icy Quills</b>,
                    Shenhe's Elemental Skill damage, which piggybacks off of any Cryo damage dealt
                    by the team and benefits from teammates' offensive stats.
                </p>
                <p>
                    Her utility in general also scales with more team Cryo damage, more buffs, and
                    increased investment. Due to her high synergy with Cryo characters, Shenhe can
                    shine in many different team comps, including Freeze, Melt, Mono Cryo, and even
                    Physical, often increasing the flexibility of those as well.
                </p>
                <p>
                    This guide will go over everything you need to know about the Damsel of
                    Devastation and her unique mechanics, while being approachable to anyone reading
                    it. The main focus will be on her role as a dedicated Cryo support, as that is
                    her most popular; however, many sections will focus on helping players ease into
                    a variety of builds, regardless of skill level.
                </p>
                <h2 id="pros-cons">Pros &amp; Cons</h2>
                <Image
                    src="https://i.imgur.com/sfaEkCB.png"
                    alt="Shenhe in front of a moon with many birds in the background"
                    credit="nanaKaria on Pixiv"
                    link="https://www.pixiv.net/en/artworks/97704820"
                />
                <h3>Pros</h3>
                <ul>
                    <li>
                        An overall positive investment to increase the capabilities of your Cryo
                        roster.
                    </li>
                    <li>
                        Large variaty of team buffs and debuffs available in her base kit, common
                        gear, and even further constellations. Many of these are unique multipliers
                        and will stack efficiently.
                    </li>
                    <li>Shenhe can be stronger in practice than in theory.</li>
                    <li>
                        High front-loaded damage potential in her Icy Quills, allowing Shenhe teams
                        to consistently take advantage of as many buffs as possible for short damage
                        windows.
                    </li>
                    <li>
                        Strengthens flexibility and boss performance of Cryo DPS characters and
                        their teams. Icy Quills can help finish off enemies without needing full
                        setup.
                    </li>
                    <li>
                        Her power budget is focused on amplifying teammates' damage. The most
                        investment you have in her teammates, the more value you will get out of
                        her, and building Cryo teammates benefits both.
                    </li>
                    <li>Very smooth animations and low field time requirement.</li>
                    <li>
                        Simple to build. Her builds essentially involve getting enough ER and then
                        stacking ATK. That's it. No CRIT or EM and no split-scaling with HP or DEF.
                    </li>
                    <li>
                        Plenty of solid weapon options. In general, any weapon with ER or ATK%
                        substats will work just fine if you build accordingly.
                    </li>
                    <li>Perfect core teammate for Mono Cryo teams.</li>
                    <li>
                        Good Physical support as well, owing to consistent Cryo application (for
                        Superconduct), her A4 Talent, and built-in Phys RES shred from her Elemental
                        Burst.
                    </li>
                </ul>
                <h3>Cons</h3>
                <ul>
                    <li>
                        Relatively niche. Outside of Cryo and Physical teams, her options are quite
                        limited and mostly for casual play. There are lots of fun options if you
                        know where to look.
                    </li>
                    <li>
                        A lot of supportive power comes from her Elemental Burst, so you need fairly
                        high ER. It's not too bad given her artifact sets are relatively easy to
                        assemble, so it's not hard to get enough ER, but it's worth pointing out.
                    </li>
                    <li>
                        Icy Quills are less effective in AoE fights because the quota is expended
                        per-hit. Note that this is only a portion of her total supportive kit.
                    </li>
                </ul>
                <p>
                    Check out <a href="https://www.youtube.com/watch?v=bdVbH29Q_1A">this video</a> from
                    our TC team for a freeze meta analysis and an explanation on why Shenhe is more powerful
                    than she may appear!
                </p>
                <h3>Summary</h3>
                <ul>
                    <li>
                        Great with Cryo units, and most Cryo-centric teams will benefit a lot from
                        Shenhe.
                    </li>
                    <li>Easy to build, requiring only ATK and ER.</li>
                    <li>Any ATK or ER weapon will work.</li>
                    <li>Good Physical support as well.</li>
                    <li>No synergy outside of Cryo and Physical teams.</li>
                    <li>
                        If your team is inflexible, Shenhe will likely not be able to contribute
                        much without significant drawbacks.
                    </li>
                </ul>
                <h2 id="should-you-pull">Should you pull?</h2>
                <Image
                    src="https://i.imgur.com/Lkb2rt9.png"
                    alt="Shenhe holding a talisman with her spirit form behind her and many talismans flying through the air around her"
                    credit="とっておき on Pixiv"
                    link="https://www.pixiv.net/en/artworks/102727167"
                />
                <p>
                    At the end of the day, it's your choice whether or not you will spend your
                    primogems on her. If you're in it for the fun, then go for it!
                </p>
                <p>
                    That said, from a meta standpoint, the pros and cons should make it clear that
                    if you lack Cryo and Physical units to work with her, she will contribute very
                    little to your teams. However, if you do pull for her, Shenhe is an amazing
                    character and very worthwhile. Also, can't beat that smile.
                </p>
                <Image
                    src="https://i.imgur.com/2SCCijV.png"
                    alt="Shenhe smiling and looking absolutely adorable :)"
                    credit="七茂やど@お仕事募集中 on Pixiv"
                    link="https://www.pixiv.net/en/artworks/96842835"
                    width={40}
                />
                <p>
                    <b>Spend responsibly!</b> We can only provide you with analysis on her strengths
                    and weaknesses, but whether or not it is a good investment both in-game and in terms
                    of your financials is your responsibility to determine.
                </p>
            </Container>
        </div>
        <br />
        <h1 class="teal banner"><Container>Character Analysis</Container></h1>
        <br />
        <div class="main">
            <Container>
                <h2 id="talents">Talents</h2>
                <IconTitle key="normal_attack" />
                <p><b>Normal Attack:</b> Performs up to 5 consecutive spear strikes.</p>
                <p>
                    <b>Charged Attack:</b> Consumes a certain amount of stamina to lunge forward, damaging
                    opponents along the path.
                </p>
                <p>
                    <b>Plunging Attack:</b> Plunges while airborne to strike the ground below, dealing
                    damage along the path and in an area upon impact.
                </p>
                <Image
                    src="https://i.imgur.com/OeTOGyp.png"
                    alt="Shenhe Normal Attack Talent MVs"
                    credit="Honey Hunter"
                    link="https://genshin.honeyhunterworld.com/shenhe_063/?lang=EN"
                />
                <p>
                    As you can see, her scalings are unfortunately quite low. Outside of very
                    specific comps usually involving Chongyun and/or Yun Jin, building Shenhe's
                    Normal Attack talent is not advised.
                </p>
                <IconTitle key="elemental_skill" />
                <p><i>The frosted dew, silvery and dense, shall exorcise all demons.</i></p>
                <p>
                    Grants all nearby party members the Icy Quill effect and deals Cryo DMG in
                    different ways based on whether it is pressed or held.
                </p>
                <p>
                    <b>Press:</b> Shenhe dashes forward with her Talisman Spirit, dealing Cryo DMG to
                    opponents along the path.
                </p>
                <p><b>Hold:</b> Shenhe commands the Talisman Spirit to deal AoE Cryo DMG.</p>
                <p>
                    <b>Icy Quill:</b> When Normal, Charged, and Plunging Attacks, Elemental Skills, and
                    Elemental Bursts deal Cryo DMG to opponents, the DMG will be increased based on Shenhe's
                    current ATK.
                </p>
                <Image
                    src="https://i.imgur.com/wcK0MuB.png"
                    alt="Shenhe Elemental Skill Talent MVs"
                    credit="Honey Hunter"
                    link="https://genshin.honeyhunterworld.com/shenhe_063/?lang=EN"
                />
                <p>
                    The way the Icy Quill effect works takes a bit of explaining. Rather than adding
                    a separate instance of damage, the damage is not even directly dealt by Shenhe;
                    rather, it additively increases the amount of <b>outgoing damage</b> from whoever
                    dealt the original instance of damage.
                </p>
                <p>
                    This means that the bonus will also be increased by the teammate's Cryo DMG
                    bonus and CRIT modifiers. This is why Shenhe's power scales with her teammates'
                    investment, and why you only need to increase Shenhe's ATK - the additive bonus
                    does not get modified by Shenhe's Cryo DMG or CRIT (except when Shenhe is the
                    one triggering the Icy Quills).
                </p>
                <Image
                    src="https://i.imgur.com/XxGStnY.png"
                    alt="Icy Quill damage formula"
                    credit="Graphic by Haru Atsushi"
                />
                <p>
                    Let's use an example to help with understanding. Suppose that Ayaka uses her
                    Elemental Burst and has 2000 ATK. Each tick of her burst has ~200% ATK scaling
                    at Talent Level 10.
                </p>
                <p>
                    Now, let's say that Shenhe has 4000 ATK. At Talent Level 10, her Icy Quills have
                    ~80% ATK scaling.
                </p>
                <p>
                    Before modifiers, this is 7200 damage per tick. Even without the extra
                    modifiers, we can already see that Shenhe almost doubles the damage, and this is
                    before Cryo DMG%, CRIT, or any DMG% buffs (which Shenhe provides as well). It's
                    fairly easy for Ayaka's Burst to hit upwards of 50k per tick, and with extreme
                    levels of investment, the sky is the limit.
                </p>
                <p>
                    Note that Shenhe only provides 5 quills (press) / 7 quills (hold) so not all of
                    Ayaka's Elemental Burst ticks will be buffed, but this is still a lot of damage.
                    Also, if Ayaka is hitting multiple enemies, the quills will be consumed more
                    quickly. However, instead of seeing this as a weakness, consider this a way to
                    make Shenhe more flexible.
                </p>
                <p>
                    If the quills were unlimited, Shenhe would only be good with characters who can
                    hit very quickly (such as Ayaka). Because she has limited quill applications,
                    this actually means that any unit that applies Cryo can be used with her -
                    Shenhe essentially hijacks teammates' Cryo DMG% and CRIT to deal her own damage,
                    meaning the amount of damage you add is constant and you don't need fast Cryo
                    application and can use a character like Eula without sacrificing as much as you
                    would if her quills were unlimited.
                </p>
                <p>Other notes:</p>
                <ul>
                    <li>
                        Anemo deployments that have infused with Cryo (e.g. Sucrose's Elemental
                        Burst) will apply quills, but Swirl will not. Likewise, Superconduct will
                        not.
                    </li>
                    <li>
                        Each party member has their own Icy Quill quota, meaning you can apply a
                        total of 20 quills (press) / 28 quills (hold). This includes Shenhe herself.
                    </li>
                    <li>
                        The Icy Quill damage depends on Shenhe's ATK at the time of the damage (i.e.
                        it does not snapshot). Therefore, when Shenhe's ATK changes, the quill
                        damage also changes. (Calamity Queller increases ATK over time after using
                        an Elemental Skill and while the wielder is off-field, so this is
                        synergistic with Shenhe has her quill damage will increase as CQ's ATK
                        dynamically increases).
                    </li>
                    <li>
                        Shenhe will consume an Icy Quill (or more if she hits multiple enemies) when
                        she first casts her Elemental Skill, and it will benefit from her 4th
                        Ascension Passive.
                    </li>
                    <li>
                        Icy Quills are consumed on-hit including on shields and do 15-20% more
                        damage to shields.
                    </li>
                    <li>
                        Since Icy Quills apply the teammate's Cryo DMG% and CRIT, if that character
                        snapshots those stats, Icy Quills will apply to those. Additionally, you can
                        also cast this skill while an off-field character's ability is dealing
                        damage to apply Icy Quills, so if you cast Ayaka's Elemental Burst, you can
                        then use Shenhe's Elemental Skill while the burst is already on the field
                        and it will begin buffing the damage.
                    </li>
                </ul>
                <IconTitle key="elemental_burst" />
                <p>
                    Unleashes the power of the Talisman Spirit, allowing it to roam free in this
                    plane, dealing AoE Cryo DMG.
                </p>
                <p>
                    The Talisman Spirit then creates a field that decreases the Cryo RES and
                    Physical RES of opponents within it. It also deals periodic Cryo DMG to
                    opponents within the field.
                </p>
                <Image
                    src="https://i.imgur.com/I33DWRD.png"
                    alt="Shenhe Elemental Burst Talent MVs"
                    credit="Honey Hunter"
                    link="https://genshin.honeyhunterworld.com/shenhe_063/?lang=EN"
                />
                <p>
                    You might think her burst's damage is quite low, but keep in mind that it also
                    applies her Icy Quills. With that in mind, the damage is fairly standard.
                    Furthermore, the 15% Cryo and Physical RES shred and further buffs from her 1st
                    Ascension Passive make this talent quite good.
                </p>
                <p>
                    Note: You may notice she seems quite vulnerable after casting her Elemental
                    Burst. The invincibility frames seem to run out more quickly than you'd expect,
                    so just keep that in mind.
                </p>
                <IconTitle key="ascension_1" />
                <p>
                    Active characters within the field created by
                    <b>[Elemental Burst] Divine Maiden's Deliverance</b> gain 15% Cryo DMG bonus.
                </p>
                <p>
                    This is a simple and very good buff. Note that this won't buff off-field
                    teammates, so for maximum effectiveness, you want the main Cryo unit to be
                    inside the Elemental Burst's field for as long as possible. Due to Shenhe's
                    Elemental Burst snapshotting before this applies, she is unfortunately unable to
                    gain this buff on her own Elemental Burst's DoT.
                </p>
                <IconTitle key="ascension_4" />
                <p>
                    After Shenhe uses <b>[Elemental Skill] Spring Spirit Summoning</b>, she will
                    grant all nearby party members the following effects:
                </p>
                <ul>
                    <li>
                        <b>Press:</b> Elemental Skill and Elemental Burst DMG is increased by 15% for
                        10 seconds
                    </li>
                    <li>
                        <b>Hold:</b> Normal, Charged, and Plunging Attack DMG is increased by 15% for
                        15 seconds
                    </li>
                </ul>
                <p>
                    Shenhe's 4th Ascension Passive allows her to buff either her teammates' skill
                    and burst damage or attack damage. At C0, you can have 100% uptime on one, but
                    not both, of these buffs. Note that these bonuses cannot be snapshotted, but you
                    can dynamically add them; for example, if Ayaka's Elemental Burst is already on
                    the field, you can press Shenhe's Elemental Skill and the 15% DMG will begin
                    applying to Ayaka's burst, even though it was cast before the buff.
                </p>
                <p>
                    With some exceptions (Melt Ganyu and teams centered around Chongyun's Cryo
                    infusion), you will mostly be using the press version. Use the hold version when
                    needed to squeeze out extra damage from more Icy Quills.
                </p>
                <p>
                    Also, note that this buff applies regardless of element. Therefore, you can
                    technically use this to buff any character regardless of element, though better
                    supports usually exist for characters who aren't Cryo or Physical focused.
                </p>
                <IconTitle key="utility" />
                <p>
                    Shenhe gains 25% more rewards when dispatched on a Liyue Expedition for 20
                    hours.
                </p>
                <p>
                    This is a pretty useful passive. Note that if you play often, the time buff
                    ("Expeditions take 25% less time") will outperform this one, but you must claim
                    the rewards within 16 hours (for 20 hour expeditions) otherwise this buff
                    becomes better.
                </p>
                <h2 id="talent-priority">Talent Priority</h2>
                <div
                    style="display: flex; flex-direction: column; align-items: center; width: 100%"
                >
                    <div style="display: flex; flex-direction: row; align-items: center">
                        <IconTitle key="elemental_skill" show="image" size={sizepx} />
                        <svg width={sizepx} height={sizepx}>
                            <polyline
                                points="{size * 0.25},{size * 0.2} {size * 0.5},{size *
                                    0.45} {size * 0.25},{size * 0.7}"
                                stroke="white"
                                stroke-width={Math.floor(size / 20)}
                                fill="none"
                            />
                            <polyline
                                points="{size * 0.55},{size * 0.55} {size * 0.3},{size * 0.8}"
                                stroke="white"
                                stroke-width={Math.floor(size / 20)}
                            />
                        </svg>
                        <IconTitle key="elemental_burst" show="image" size={sizepx} />
                        <svg width={sizepx} height={sizepx}>
                            <polyline
                                points="{size * 0.15},{size * 0.25} {size * 0.4},{size *
                                    0.5} {size * 0.15},{size * 0.75}"
                                stroke="white"
                                stroke-width={Math.floor(size / 20)}
                                fill="none"
                            />
                            <polyline
                                points="{size * 0.35},{size * 0.25} {size * 0.6},{size *
                                    0.5} {size * 0.35},{size * 0.75}"
                                stroke="white"
                                stroke-width={Math.floor(size / 20)}
                                fill="none"
                            />
                        </svg>
                        <IconTitle key="normal_attack" show="image" size={sizepx} />
                    </div>
                </div>
                <p>
                    For most builds, level her Elemental Skill and Elemental Burst as high as you
                    can. Both of these increase her utility and are key to maximizing her
                    efficiency. The first crown should go to her Elemental Skill, but crowning her
                    Elemental Burst is also justifiable.
                </p>
                <p>
                    Unless you are playing her as an on-field DPS, Normal Attack investment is not
                    needed whatsoever.
                </p>
                <h2 id="constellations">Constellations</h2>
                <Image
                    src="https://i.imgur.com/iE3NLBB.png"
                    alt="Shenhe with red ropes around and her Talisman Spirit behind her"
                    credit="SWKL:D on Pixiv"
                    link="https://www.pixiv.net/en/artworks/100527029"
                    width={50}
                />
                <p>
                    Before discussing her constellations, it's important to note that unless you can
                    afford it, it's generally not advised to pull for constellations and instead to
                    get other characters. That said, the analysis below tells you roughly what you
                    can expect if you do choose to pul lfor them.
                </p>
                <p>
                    <b>Important:</b> Shenhe's constellations are capable of improving flexibility and
                    practicality in fights rather than just providing simple damage boosts. For example,
                    extra utility via C1 and C6 cannot be evaluated using the same stock rotation as
                    C0. Performance increases will wildly depend on your team, the context, and your
                    execution. Therefore, we will not give estimates for the damage increase each constellation
                    provides.
                </p>
                <IconTitle key="c1" />
                <p>Spring Spirit Summoning can be used 1 more time.</p>
                <p>
                    This is a powerful and often underrated constellation, offering additional
                    damage and the ability for Shenhe to provide the press and hold versions of her
                    4th Ascension Passive simultaneously. This also helps improve her energy
                    generation and gives amazing front-loaded damage due to the extra Icy Quills. It
                    also helps when using her signature weapon, Calamity Queller. There are a few
                    important notes.
                </p>
                <ul>
                    <li>
                        The Icy Quill quota does not stack, so if you press her Elemental Skill
                        while you have 1 Icy Quill left, you will end up with 5, not 6.
                    </li>
                    <li>
                        By tapping the Elemental Skill and then holding it after the Icy Quills are
                        consumed, the team will have both A4 buffs, which can be very useful for
                        certain Cryo units, such as on-field Ganyu, since she uses both her Charged
                        Attack and Elemental Burst.
                    </li>
                    <li>The A4 buffs have independent cooldowns.</li>
                    <li>
                        If you use both Elemental Skill casts right away, C1 only impacts your first
                        rotation as the cooldowns are refreshed one at a time like all talents with
                        charges.
                    </li>
                    <li>
                        In longer combat scenarios, C1 begins to lose effectiveness due to the above
                        (it is similar to how Xiao's C1 works), but popular Shenhe teams pack high
                        damage in a single rotation, so usually this does not matter.
                    </li>
                </ul>
                <IconTitle key="c2" />
                <p>
                    <b>[Elemental Burst] Divine Maiden Deliverance</b> lasts for 6 seconds longer. Active
                    characters within the field gain 15% more Cryo CRIT DMG.
                </p>
                <p>
                    This is a very impactful constellation for DPS Shenhe, and the 15% Cryo CRIT DMG
                    proves to be very useful, especially in Freeze teams that generally have a very
                    high CRIT Rate. It's worth pointing out that this buff only applies to the
                    <b>active character</b>, making this buff less useful for off-field Ganyu or
                    Kaeya.
                </p>
                <p>
                    The practical benefits of this constellation can vary, as many teams like Ayaka
                    have fast setups that often have a shorter damage window than the burst's base
                    duration, making the duration extension useless.
                </p>
                <IconTitle key="c3" />
                <p>
                    Increases the level of <b>[Elemental Skill] Sprint Spirit Summoning</b> by 3. Maximum
                    upgrade level is 15.
                </p>
                <p>
                    This constellation adds an extra ~15% to Shenhe's Icy Quill scaling, which
                    becomes more impactful depending on the number of characters using Icy Quills.
                    The more you have, the more useful it is, but it will not be very impactful if
                    you only have one Cryo character besides Shenhe using the Icy Quills.
                </p>
                <IconTitle key="c4" />
                <p>
                    When characters trigger an Icy Quill, Shenhe gains a stack of Skyfront Mantra:
                </p>
                <ul>
                    <li>
                        When Shenhe uses <b>[Elemental Skill] Spring Spirit Summoning</b>, she
                        consumes all stacks of Skyfrost Mantra, increasing the damage of that cast
                        by 5% per stack consumed.
                    </li>
                    <li>Maximum 50 stacks. Stacks last for 60 seconds.</li>
                </ul>
                <p>
                    This is potentially good, but the difficulty of accumulating stacks makes it not
                    very impactful. On average, you only gain about 75%-80% of an increase at most,
                    though this can be better in Mono Cryo teams.
                </p>
                <p>
                    Note that this only applies to the Elemental Skill's on-cast damage and does not
                    buff Icy Quill damage.
                </p>
                <p>Ultimately, this is not very impactful without C6.</p>
                <IconTitle key="c5" />
                <p>
                    Increases the level of <b>[Elemental Burst] Divine Maiden's Deliverance</b> by 3.
                    Maximum upgrade level is 15.
                </p>
                <p>
                    Another fairly modest constellation. The resistance shred is capped at 15% at
                    level 10, and her Elemental Burst's damage is already fairly negligible if
                    stacking ATK. However, the extra ~30% scaling can be decently solid on DPS
                    Shenhe.
                </p>
                <IconTitle key="c6" />
                <p>
                    When characters trigger Icy Quill's effects using Normal and Charged Attack DMG,
                    it does not count towards the quota.
                </p>
                <p>
                    A crazy constellation with major caveats. Elemental Skill, Elemental Burst, and
                    Plunging Attack DMG will still consume Icy Quills, so the effect is lost once
                    those are gone (that is, once you run out of quills, you lose the Normal and
                    Charged Attack DMG bonus even though they don't consume stacks themselves).
                </p>
                <p>
                    This can greatly open up combat flexibility without needing the on-field Cryo
                    unit's Elemental Skill or Burst. For example, this shines in Spiral Abyss
                    chambers that have multiple waves of enemies - one rotation of Ayaka's Elemental
                    Burst can destroy one wave, and another can be defeated with heavy-hitting
                    attacks with infinite Icy Quills.
                </p>
                <p>
                    This constellation also works very well with some Ganyu teams with extreme
                    investment, such as Melt Ganyu, or specific teams relying on Chongyun's Cryo
                    infusion to give other characters Cryo attacks.
                </p>
                <h3>Summary</h3>
                <p>
                    Shenhe contributes a lot at just C0, but C1 and C2 are the most impactful if you
                    want them. C6 is useful for whales and niche builds but this is not something
                    most people can afford, and if you are a casual spender, other characters, other
                    constellations, or even other characters' C6s will be much more useful.
                </p>
            </Container>
        </div>
        <br />
        <h1 class="blue banner"><Container>Building Shenhe</Container></h1>
        <br />
        <Container>
            <h2 id="artifacts">Artifacts</h2>
            <Image
                src="https://i.imgur.com/Nj0A7Vi.png"
                alt="Shenhe with her right hand on her chest and her left hand holding Calamity Queller behind her with birds around her and a fancy building in the background"
                credit="torino on Pixiv"
                link="https://www.pixiv.net/en/artworks/95527516"
                width={50}
            />
            <h3>Cryo Support</h3>
            <p>
                There are generally three options you can run on Shenhe in this case. Note that the
                differences are not big, and hence are subject to differences in substats and ease
                of farming. Also, remember that Shenhe benefits from the main DPS's investment as
                well.
            </p>
            <IconTitle key="set_4no" />
            <p>
                This is usually the best for team performance, unless another more suitable teammate
                is already using 4-piece Noblesse Oblige. The 20% team-wide ATK boost is very
                powerful. Despite giving less initial ATK for Shenhe's Icy Quills than running two
                18% ATK sets, the direct ATK given to teammates can be more effective overall.
            </p>
            <p>
                Additionally, you can get this artifact from the Artifact Strongbox, so it's one of
                the easier sets to farm. Overall, strongly recommended, and it is also useful for
                other supports if you need to move artifacts between characters.
            </p>
            <IconTitle key="set_4bs" />
            <p>
                This is the best option for Shenhe's personal damage, especially in Freeze teams.
                Additionally, while running Favonius Lance on her, it makes it easier to activate
                the weapon's passive, helping with Energy requirements. This is a good option if
                your team already has a unit carrying Noblesse Oblige such as Mona.
            </p>
            <IconTitle key="set_mix" />
            <p>
                This is extremely easy to farm, given how many artifact sets this covers and how
                easy her desired stats are to obtain. Shenhe can easily use the bad pieces you get
                from farming for other charactesr that you may otherwise throw into the Strongbox or
                consume for leveling other artifacts.
            </p>
            <h3>Cryo Off-Field DPS</h3>
            <p>
                In this context, Shenhe functions more or less like Rosaria that packs her own Cryo
                shred at the expense of her damage ratios. Her Elemental Burst will provide the vast
                majority of her damage, and burst-centric builds will benefit the most. With this in
                mind, here are our recommendations.
            </p>
            <IconTitle key="set_4bs" />
            <p>
                Assuming a Freeze team, Shenhe can take advantage of this set very well, comparable
                to Rosaria herself.
            </p>
            <IconTitle key="set_4eosf" />
            <p>
                Shenhe's 80 energy cost Elemental Burst is annoying to manage, so much like with
                many other characters, Shenhe also benefits significantly from this set if building
                with Elemental Burst damage in mind.
            </p>
            <IconTitle key="set_4no" />
            <p>This is a solid fallback option that helps the entire team.</p>
            <h3>Cryo On-Field DPS</h3>
            <p>
                By relying on Chongyun's Cryo infusion, Shenhe turns into a Cryo On-Field DPS, and
                her damage contribution is more evenly split among all of her talents. Remember to
                level up her Normal Attack talent if you are running her in this role. It's highly
                recommended to run her in a Freeze or Mono Cryo team composition.
            </p>
            <IconTitle key="set_4bs" />
            <p>This is the premium set for Cryo teams, and Shenhe is no exception.</p>
            <IconTitle key="set_4gf" />
            <p>
                If focusing on her Normal Attacks, the 35% buff is very solid. This can be a good
                fallback option depending on the team.
            </p>
            <IconTitle key="set_mix" />
            <p>
                This is a decent intermediary choice as you farm for a full 4-piece Blizzard Strayer
                set, but will be easily outperformed.
            </p>
            <h3>Stats</h3>
            <p>
                In terms of main stats, the differences between these options can theoretically be
                very slim. In general:
            </p>
            <ul>
                <li>
                    <b>Sands:</b> ATK% or ER% - if running Calamity QUeller or a similar ATK-stacking
                    weapon and substats are not in your favor, you can use ER sands to meet your energy
                    needs; otherwise, just take ATK.
                </li>
                <li>
                    <b>Goblet:</b> ATK% or Cryo DMG% - due to the difficulty of obtaining good Elemental
                    DMG% goblets, ATK% is recommended if focusing on Icy Quills. The actual difference
                    is quite low, because it's a tradeoff between higher quill damage that scales with
                    teammates' Cryo DMG% and CRIT and higher personal damage.
                </li>
                <li>
                    <b>Circlet:</b> ATK% or CRIT Rate/DMG% - ATK% circlets are easier to obtain and most
                    likely have better substats, and are therefore recommended. However, if using Favonius
                    Lance with bad ER%, CRIT Rate can be used to help activate its passive, but in general,
                    ATK% will still be desirable for the Icy Quill damage. DPS Shenhe can opt for CRIT
                    instead.
                </li>
            </ul>
            <p>
                Overall, ATK% is always preferred. It is also a common main stat and therefore
                easier to farm. However, ER% can be useful if you cannot get enough ER through
                substats and Cryo DMG% or CRIT artifacts are viable, albeit usually not as
                performant.
            </p>
            <p>
                In terms of substats, the priority is generally ER% (enough to meet requirements)
                &gt; ATK% &gt; CRIT Rate (if using Favonius Lance) &gt; CRIT DMG &gt; everything
                else.
            </p>
            <p>
                For DPS Shenhe, it is instead ER% (enough to meet requirements) &gt; CRIT &gt; ATK%
                &gt; everything else.
            </p>
            <p>As for energy needs, it depends on your team:</p>
            <ul>
                <li>
                    If running only 1 Cryo unit with Shenhe and an ATK weapon, you will need about
                    195%-210% ER. Shenhe's 80 cost burst is quite expensive, unfortunately.
                </li>
                <li>With Favonius Lance, the requirement drops to about 175%-190%.</li>
                <li>
                    With 2 Cryo units or a Cryo unit and Raiden Shogun/Venti, the requirement drops
                    to about 145%-160%, give or take. Note that this requires Raiden's full rotation
                    or for Venti to absorb Cryo.
                </li>
                <li>
                    For on-field DPS Shenhe, the requirements become much more manageable, dropping
                    to about 30% less than the off-field equivalent, but this can still vary.
                </li>
            </ul>
            <h2 id="weapons">Weapons</h2>
            <Image
                src="https://i.imgur.com/lUROkWt.png"
                alt="Shenhe side view, holding Calamity Queller with both hands in front of her"
                credit="Vardan on Pixiv"
                link="https://www.pixiv.net/en/artworks/98432206"
                width={50}
            />
            <h3>Weapon Comparisons</h3>
            <p>
                For those interested in the full comparison of each of these weapons, you can see
                the calculations <a
                    href="https://docs.google.com/spreadsheets/d/1iAf8ZtQ-tKFzOipfLAWTPelySgtSW3z0HJQ5RncX7eU"
                    >here</a
                >.
            </p>
            <p>
                These calculations are made with an Ayaka + Kokomi + Shenhe + Kazuha team, which
                includes team buffs, including both a sustained rotation and a front-loaded cycle to
                account for some amount of flexibility.
            </p>
            <p>
                However, there are many caveats with this information, so do not take these
                calculations as gospel:
            </p>
            <ul>
                <li>
                    Calculations never tell the full story. These ultimately look at specific
                    rotations with specific levels of investments and low energy particle generation
                    from enemies.
                </li>
                <li>
                    These assume a perfect rotation with no interruptions or unusual mechanics such
                    as draining Energy. These do not account well for flexibility such as fights
                    being able to finish midway during burst damage windows.
                </li>
                <li>
                    Calculations are skewed in favor of Favonius weapons. These weapons make up for
                    energy hungry environments in calculations, as well as keeping rotation lengths
                    as short as possible.
                </li>
                <li>
                    Shenhe is primarily used as a support, and this calculation is only done with
                    one team. For other teams like Rosaria Reverse Melt or Ganyu as the DPS, the
                    results can vary widely, namely with Lithic Spear and Favonius Lance.
                </li>
            </ul>
            <p>
                As always, we can only give estimations for what you can expect from different
                weapons based on a specific set of assumptions, and whether or not investing in
                obtaining or building a weapon is worth it is your responsibility to determine.
            </p>
            <p>
                <b>In summary:</b> Calamity Queller (if you can meet the ER% requirements) &gt; Favonius
                Lance &gt; Engulfing Lightning &gt; others
            </p>
            <p>
                Overall, Favonius Lance is probably the best option, simply because it is free, but
                if you want to spend for a higher investment level on Shenhe, Calamity Queller has a
                higher performance ceiling but comes with increased difficulty building her
                properly.
            </p>
            <p>
                Due to Shenhe's nature as a Cryo support that is incentivized to stack ATK, mileage
                can vary greatly depending on the team. As a general rule of thumb, these are our
                recommendations.
            </p>
            <table cellspacing="0">
                {#each data.weapons as [key, name, rating, ...description]}
                    <tr>
                        <td><img src="/images/icons/W_{key}.webp" alt={name} width="75px" /></td>
                        <td><b>{name}</b></td>
                    </tr>
                    <tr>
                        <td colspan={2}>
                            <p><b>{rating}</b></p>
                            {#each description as row}
                                <p>{row}</p>
                            {/each}
                        </td>
                    </tr>
                {/each}
            </table>
            <h2 id="build-examples">Build Examples</h2>
            <Image
                src="https://i.imgur.com/Nw8NApo.png"
                alt="Example Support Shenhe build"
                credit="An example Support Shenhe build from jamie#9248"
            />
            <br />
            <Image
                src="https://i.imgur.com/BsUZxBE.png"
                alt="Example Cryo DPS Shenhe build"
                credit="An example Cryo DPS Shenhe build via ευδαιμονία#4870"
            />
            <br />
            <h2 id="synergy">Character Synergy</h2>
            <Image
                src="https://i.imgur.com/WObCvVN.png"
                alt="Ganyu using Shenhe as a rest for a sniper rifle"
                credit="Ringeko | 凛子 on Pixiv"
                link="https://www.pixiv.net/en/artworks/104323192"
            />
            <p>This section will be divided into three parts:</p>
            <ul>
                <li>
                    <b>Cryo Units:</b> units whose damage is Cryo-focused without relying on external
                    means.
                </li>
                <li>
                    <b>Physical Units:</b> units who rely on Physical damage to do their work or are
                    typically played in Physical-focused teams. These can be of any element including
                    Cryo.
                </li>
                <li>
                    <b>Other Relevant Units:</b> units who have relevant synergy beyond Shenhe's A4,
                    otherwise this section would take up half of the guide.
                </li>
            </ul>
            <p>
                The focus will be on direct synergy rather than how they support the core unit
                together. For those, it is recommended to look at the core unit's guide instead.
                This is why some explanations may seem out of place.
            </p>
            {#each data.characters as [category, details, ...characters]}
                <h3>{category}</h3>
                {#if details}
                    <p>{details}</p>
                {/if}
                <table cellspacing="0">
                    {#each characters as [key, name, role, ...details]}
                        <tr>
                            <td width="25%">
                                <img src="/images/icons/C_{key}.webp" alt={name} width="125px" />
                            </td>
                            <td width="25%"><b>{name}</b></td>
                            <td>{role}</td>
                        </tr>
                        <tr>
                            <td colspan={3}>
                                <ul>
                                    {#each details as detail}
                                        <li>{detail}</li>
                                    {/each}
                                </ul>
                            </td>
                        </tr>
                    {/each}
                </table>
            {/each}
            <br />
            <Image
                src="https://i.imgur.com/p1rSpiD.png"
                alt="Shenhe looking back next to Paimon with Ganyu and Keqing in the background, at the Lantern Rite"
                credit="PengRani on Pixiv"
                link="https://www.pixiv.net/en/artworks/95764995"
                width={50}
            />
            <h2 id="teams">Sample Teams</h2>
            <Team name="Freeze" team={["Shenhe", "Cryo", "Hydro", "CryoAnemo"]} />
            <p>
                Shenhe is excellent for a Freeze team with a well-invested Cryo character. Unlike
                other units that provide additional damage, defense, or other benefits, Shenhe
                directly offers massive buffs for the core unit, especially through Icy Quills and
                Ascension Talents. This is unique to her and allows more investment in the core unit
                to give better returns, making her not only powerful but also efficient for farming.
                Moreover, Shenhe can work well with Cryo units with whom she would otherwise compete
                with for a spot on a team.
            </p>
            <p>In these teams, Shenhe should be built with Icy Quills in mind, stacking ATK.</p>
            <p>
                There are many ways to approach this team archetype, and we have shown a few
                examples below.
            </p>
            <br />
            <Team team={["Shenhe", "Ayaka", "Kazuha", "Kokomi"]} />
            <p>
                This is a highly synergistic Freeze team with flexible setup and rotations. Shenhe
                and Ayaka's synergy has been explained previously, Kazuha offers Viridescent
                Venerer's buff and additional Cryo DMG buffing, and Kokomi ensures consistent Freeze
                while being able to carry Thrilling Tales of Dragon Slayers to buff Ayaka even
                further.
            </p>
            <p>Here are a few videos demonstrating the power of this team:</p>
            <ul>
                <li>
                    <a href="https://www.youtube.com/watch?v=43m_h5sMUrE"
                        >C0 Ayaka Freeze 33s F12/1/1 Spiral Abyss</a
                    >
                </li>
                <li>
                    <a href="https://www.youtube.com/watch?v=Umo8fLar5qQ">Team Rotation Guide</a>
                </li>
                <li>
                    <a href="https://www.youtube.com/watch?v=fIJm_Bazcgk"
                        >Substituting Kokomi for Mona</a
                    >
                </li>
            </ul>
            <p>
                You can replace Ayaka with Ganyu, Aloy, or DPS Diona, Kazuha with Venti or Sucrose,
                and Kokomi with Mona with Prototype Amber, Xingqiu, or Yelan.
            </p>
            <br />
            <Team team={["Shenhe", "Ayaka", "Rosaria", "Kokomi"]} />
            <p>
                The utility of an Anemo unit is replaced with an additional Cryo unit that Shenhe
                can buff to deal lots of damage. The main benefit lies in the additional Cryo
                particles generated, making it easier for the core unit and Shenhe to maintain their
                Elemental Bursts. Additionally, the extra damage is quite significant. This team is
                a worthwhile option if you lack Anemo units.
            </p>
            <p>
                You can replace Ayaka with Ganyu, Aloy, or DPS Diona, Rosara with off-field Ganyu or
                off-field Kaeya, and Kokomi with Mona with Prototype Amber, Xingqiu, or Yelan.
            </p>
            <br />
            <hr />
            <br />
            <Team name="Mono Cryo" team={["Shenhe", "Cryo", "Anemo", "Unknown"]} />
            <p>
                Shenhe enables a new team archetype that ignores reactions in favor of simply doing
                lots of Cryo damage. Shenhe's talents, particularly her Icy Quills, enable it
                through the sheer damage she provides. For players interested in running mostly Cryo
                units, Shenhe is an excellent investment. These teams tend to be used against
                enemies who cannot be Frozen anyway, such as bosses.
            </p>
            <p>In these teams, Shenhe should be built with Icy Quills in mind, stacking ATK.</p>
            <p>
                There are many ways to approach this team archetype, and we have shown a few
                examples below.
            </p>
            <br />
            <Team team={["Shenhe", "Ganyu", "Kazuha", "Zhongli"]} />
            <p>
                Ganyu gets 75% Cryo RES shred as well as Shenhe's Icy Quills and additional Cryo
                DMG, allowing her to forgo any usual Melt or Freeze reactions and just deal massive
                amounts of damage. Zhongli provides the necessary protection for her. Not worrying
                about Melt means less annoyance keeping up energy generation.
            </p>
            <p>
                <a href="https://www.youtube.com/watch?v=sBN2t5qwA2A&t=1481s"
                    >Ultimate Ganyu Guide</a
                > (timestamp points to the example rotation)
            </p>
            <p>
                You can replace Ganyu with Ayaka (versus heavy enemies), Rosaria, or Aloy, Kazuha
                with Venti, Sucrose, Heizou, or Wanderer (carrying Viridescent Venerer), and Zhongli
                with Diona, Bennett (avoid C6 as that would turn this team into Melt), or Layla.
            </p>
            <br />
            <Team team={["Shenhe", "Ayaka", "Kazuha", "Diona"]} />
            <p>
                <a href="https://www.youtube.com/watch?v=OHYZS2_Wovs"
                    >Ayaka Mono Cryo w/ C6 Diona + Kazuha</a
                >
            </p>
            <br />
            <Team team={["Shenhe", "Ayaka", "Kazuha", "Bennett"]} />
            <p>
                <a href="https://www.youtube.com/watch?v=Cd9lLZS5eGs"
                    >C0 Ayaka 74s Spiral Abyss top half</a
                >
            </p>
            <br />
            <hr />
            <br />
            <Team name="Reverse Melt" team={["Shenhe", "Cryo", "Pyro", "Unknown"]} />
            <p>
                Explosive damage is not limited to just Freeze teams, as Shenhe can also work in
                some more unusual teams such as Reverse Melt teams. The goal here is to get as many
                Cryo-on-Pyro Melt hits as possible for potentially insane damage. Depending on the
                units used, this playstyle can also be accessible for F2P players.
            </p>
            <br />
            <Team team={["Shenhe", "Rosaria", "Bennett", "Kazuha"]} />
            <p>
                One of the most powerful Reverse Melt variants. Bennett, Kazuha, and Shenhe buff
                Rosaria's already powerful Elemental Burst that can Melt on every tick, enabling
                very powerful hits. To ensure that each tick will Melt, Kazuha can infuse Pyro with
                his Elemental Burst, applying a Pyro aura and providing Viridescent Venerer's buff.
            </p>
            <p>
                <a href="https://www.youtube.com/watch?v=zA9NHLTyMaY">12-2-1 Hyper Rosaria</a> (thanks
                to Dominica#9874 for the showcase)
            </p>
            <p>
                You can replace Rosaria with Kaeya or Ganyu, Kazuha with Jean (Sunfire interaction
                with bennett) or a Dendro unit (to maintain Burning for Pyro application), and
                Bennett with Xiangling for extra Pyro damage and application.
            </p>
            <br />
            <Team team={["Shenhe", "Rosaria", "Bennett", "Xiangling"]} />
            <br />
            <Team team={["Shenhe", "Nahida", "Bennett", "Sucrose"]} />
            <p>
                Shenhe can also be the reverse Melt user, which offers more flexibility for the rest
                of your team. In this example, Nahida and Bennett maintain the Burning aura, which
                ensures that Shenhe's Elemental Burst will Melt, while Sucrose provides Viridescent
                Venerer and additional EM to feed both the Burning and Melt damage.
            </p>
            <p>
                With a lack of a second Cryo unit, Shenhe's energy issues will become quite serious.
                Additionally, the damage ceiling is lower as Shenhe's Elemental Burst ticks in
                bursts of two, unlike Rosaria's, meaning the second one will not Melt.
            </p>
            <p>
                Replacements can be made as long as you ensure consistent Dendro and Pyro
                application to maintain Burning. You can replace Nahida with Yaoyao or Collei,
                Bennett with Xiangling, Thoma, or Dehya, and Sucrose with Kazuha or Venti.
            </p>
            <br />
            <hr />
            <br />
            <Team name="Physical" team={["Shenhe", "Phys", "Unknown", "Unknown"]} />
            <p>
                The goal here is to make the Physical DPS as powerful as possible through stacking
                as many buffs as possible. Superconduct is good but not always necessary. Shenhe
                will generally be built as a Cryo DPS, as Icy Quills become less useful in these
                teams.
            </p>
            <br />
            <Team team={["Shenhe", "Eula", "Zhongli", "Raiden"]} />
            <p>
                Eula can be replaced with any other Physical unit mentioned in the synergy section,
                but Eula is the most common choice as she is also able to apply some (though not
                all) Icy Quills.
            </p>
            <p>
                You can replace Zhongli with another Cryo or Electro unit to facilitate energy needs
                or allow Shenhe's Icy Quills to be used, with a special mention for Mika, Eula's
                dedicated support. You can also replace Raiden with Fischl, Kuki Shinobu, or Dori.
            </p>
            <br />
            <Team team={["Shenhe", "Eula", "Zhongli", "Rosaria"]} />
            <p>
                It might seem strange to not use Superconduct in a Physical team, but this team
                works because all of the units here have Physical RES shred, up to 80% if Rosaria
                has C6. Also, since this is a triple-cryo team, this makes Shenhe and Eula's energy
                needs easier to meet.
            </p>
            <p>
                In this case, it's actually beneficial to build Shenhe for Icy Quills as Rosaria
                will be able to deal considerable damage with it, and Eula's Cryo talents can as
                well. Although Eula won't build Cryo DMG%, she will still have CRIT, and Eula,
                Shenhe, and Zhongli have a combined 60% Cryo RES shred.
            </p>
            <br />
            <hr />
            <br />
            <Team name="Cryo Infusion" team={["Shenhe", "Chongyun", "Unknown", "Unknown"]} />
            <p>
                By taking advantage of Chongyun's Cryo infusion, any melee character can become a
                full-fledged Cryo DPS that spams Normal and Charged attacks. Shenhe can facilitate
                such a team or become the centerpiece for it. These teams are generally not
                exceptional without high investment but offer a lot of room for creativity.
            </p>
            <br />
            <Team team={["Shenhe", "Chongyun", "Kazuha", "Zhongli"]} />
            <p>
                In this team, Shenhe buffs the infused Zhongli with her Icy Quills and stacks ATK.
                Kazuha provides Viridescent Venerer and additional Cryo DMG%. This allows Zhongli to
                use his very fast Normal Attacks for solid Cryo damage. This team becomes absurd at
                C6 Shenhe as the Icy Quills will not run out this way.
            </p>
            <p>
                Shenhe and Chongyun cannot be replaced, but you can replace the other two with Cryo
                characters or other fast-hitting characters. Zhongli can be replaced with Kaeya,
                Rosaria, Eula, or Xiangling, and Kazuha can be replaced with Yun Jin, a Hydro unit,
                or Bennett.
            </p>
            <br />
            <Team team={["Shenhe", "Chongyun", "Kazuha", "Yelan"]} />
            <p>In this team, Shenhe is the on-field Cryo DPS and builds as such.</p>
            <p>
                Shenhe and Chongyun cannot be replaced, but you can replace the other two with many
                characters depending on your approach. Sucrose is cheap to invest in and can carry
                Thrilling Tales of Dragon Slayers. Xingqiu is almost identical to Yelan for all
                intents and purposes here, and is F2P friendly. Yun Jin buffs Normal Attacks even
                further. Bennett's massive ATK boost helps Shenhe a lot as well.
            </p>
            <br />
            <hr />
            <br />
            <Team name="Physical Shenhe" team={["Shenhe", "Cryo", "Electro", "Unknown"]} />
            <p>
                This segment is dedicated to the many people who have expressed interest in Physical
                DPS Shenhe since her release. Some important notes:
            </p>
            <ul>
                <li>
                    Since she packs AoE Cryo Damage, all she needs is an Electro character for
                    Superconduct.
                </li>
                <li>
                    Physical teams have access to many powerful weapon options and 2 good artifact
                    options.
                </li>
                <li>
                    Shenhe's animations and design are very well made and this team lets them shine.
                </li>
                <li>Physical Shenhe is not recommended from a meta perspective.</li>
                <li>
                    Shenhe's Normal Attack scaling is quite poor and she struggles to take advantage
                    of Crescent Pike due to her slow attacks.
                </li>
            </ul>
            <p>
                When building Physical Shenhe, the recommendation is 2/2 Bloodstained Chivalry /
                Pale Flame and Crescent Pyke. Dragonspine Spear is not recommended.
            </p>
            <br />
            <Team team={["Shenhe", "Fischl", "Yun Jin", "Mika"]} />
            <p>
                This is an example team that has Shenhe as the Physical DPS centered around Normal
                Attacks. Fischl ensures Superconduct, Yun Jin buffs Normal Attacks further, and Mika
                is a good Physical support and makes Shenhe attack faster.
            </p>
            <p>
                As for replacements, we will not provide specific characters this time, so let your
                imagination run wild! Here are some things to keep in mind:
            </p>
            <ul>
                <li>You need an Electro unit for Superconduct.</li>
                <li>
                    Normal Attack buffers are desirable, but avoid Candace due to her Hydro
                    infusion.
                </li>
                <li>Generic stat buffers like Bennett can be strong.</li>
                <li>Physical buffers are always good to have.</li>
                <li>Protection and/or healing is always useful.</li>
            </ul>
        </Container>
        <h1 class="teal banner"><Container>Closing Points</Container></h1>
        <Container>
            <h2 id="faq">FAQ</h2>
            <Image
                src="https://i.imgur.com/Q6zj5M6.png"
                alt="Shenhe side view holding Calamity Queller behind her"
                credit="xUDe on Pixiv"
                link="https://www.pixiv.net/en/artworks/94531428"
                width={50}
            />
            <Blockquote>How much ATK should I have on Shenhe if focusing on Icy Quills?</Blockquote>
            <p>
                The general rule of thumb is that so long as you meet her ER requirement, you should
                try to get as much ATK as possible. Good targets are:
            </p>
            <ul>
                <li><b>4-star weapon:</b> 2800-3000</li>
                <li><b>5-star weapon:</b> 3000-3200</li>
                <li><b>Calamity Queller:</b> 3600-4000+</li>
            </ul>
            <Blockquote>How much ER% should I have on Shenhe?</Blockquote>
            <p>
                This varies depending on your team. Refer to the <a href="#artifacts"
                    >artifacts section</a
                > for more information.
            </p>
            <Blockquote>How much ER% do I need with C1 Shenhe?</Blockquote>
            <p>
                While C1 is powerful for many reasons, in general, the extra energy generation
                should be considered a luxury QoL rather than something to build around. After the
                first rotation, Shenhe is back to using her Elemental Skill once per 10 seconds, so
                it's advised to follow the same ER requirements.
            </p>
            <Blockquote>Why is ER so important for Shenhe?</Blockquote>
            <p>
                Shenhe's Elemental Burst is an important part of her kit and provides powerful buffs
                and debuffs. Damage is lost long-term if you take time to funnel in energy to get
                her Elemental Burst back or miss it in a rotation. Neglecting ER is only acceptable
                if your team can always clear the Abyss floor within 20 seconds, preventing you from
                even using her Elemental Burst twice in the first place.
            </p>
            <Blockquote>What are C0 R1 Shenhe's stats usually like?</Blockquote>
            <p>
                Everyone's stats will vary due to artifact RNG. However, an average estimate would
                be around 3700 ATK + 190% ER with 4-piece Noblesse Oblige.
            </p>
            <Blockquote>Is Shenhe bad against many enemies?</Blockquote>
            <p>
                While it is true that Shenhe's Icy Quills run out more quickly in AoE content, this
                is only part of her kit. Half of her kit is providing buffs and debuffs through
                other aspects of her kit. Shenhe has proven to still contribute sizeably in AoE
                situations despite losing out on Icy Quill efficiency.
            </p>
            <Blockquote>If I run Favonius Lance on Shenhe, who gets the particles?</Blockquote>
            <p>
                Preferably the core Cryo unit, so they don't need to invest into ER as much and can
                focus more on other stats, increasing both their own and Shenhe's Icy Quill damage.
            </p>
            <Blockquote
                >What is the priority between constellations and Calamity Queller?</Blockquote
            >
            <p>
                Since Favonius Lance is so reliable, C1 Shenhe is recommended over R1 Calamity
                Queller. CQ is generally recommended over C2 as the best teams with Shenhe tend to
                be nuke teams that wipe out waves in a single rotation, making CQ a lot more useful
                than C2.
            </p>
            <p>
                <a href="https://www.youtube.com/watch?v=bYXGCH-uvFg&t=47s"
                    >The Best Updated Ayaka Guide/FAQ</a
                > (timestamped) covers the 3.5 banner upgrade order, showing priorities for Ayaka, Shenhe,
                Mistsplitter Reforged, and Calamity Queller.
            </p>
            <Blockquote>What does a typical Shenhe rotation look like?</Blockquote>
            <p>
                Refer to the videos used in the teams section for examples (it differs from team to
                team).
            </p>
            <Blockquote>C0 Shenhe or C6 Rosaria in a Physical team?</Blockquote>
            <p>
                Both work fine, but you can also run them together for Eula (an example team is
                listed above).
            </p>
            <Blockquote
                >Should I pull for Shenhe if I don't have Kazuha/Kokomi/Mistsplitter Reforged/etc.?</Blockquote
            >
            <p>
                Shenhe is often the "last piece of the puzzle" when making a Cryo team. That said,
                she has multiple team options, and most of the characters in the stock teams have
                good replacement options. You can also get any of the "puzzle pieces" in whichever
                order depending on when the banners actually rerun.
            </p>
            <p>Refer to the teams section to see your options.</p>
            <Blockquote>Can I build Shenhe as a DPS?</Blockquote>
            <p>
                Yes. Shenhe is most optimal as a Cryo support that focuses on stacking ATK for her
                Icy Quills, but if you want to build her as a DPS anyway, this guide has dedicated
                sections for both off-field DPS and on-field Cryo or Physical DPS.
            </p>
            <Blockquote
                >Who can I replace Kazuha or Kokomi with in a Cryo team with Shenhe?</Blockquote
            >
            <p>
                Kazuha can be replaced with Venti or Sucrose, whereas Kokomi can be replaced with
                Mona with Prototype Amber, Xingqiu, or Yelan. More is exampled in the team section,
                and you can find a full list of character synergies further up.
            </p>
            <Blockquote>Does C2 Ayaka ruin Shenhe?</Blockquote>
            <p>
                Not at all. Shenhe's Icy Quills scale off Ayaka's other stats (Cryo DMG% and CRIT),
                not ATK or Talent ratios, so it doesn't matter if the smaller bursts or the central
                one consumes the Icy Quills (and if the side ones miss, no damage is lost, as Icy
                Quills are only consumed when damage is actually dealt).
            </p>
            <Blockquote>Is DPS Shenhe bad?</Blockquote>
            <p>
                It is functional, but Shenhe was designed around her Icy Quills, and her DPS
                potential falls behind characters like Rosaria and Kaeya, and cannot compare to
                Ayaka and Ganyu. Some example DPS Shenhe teams can be found in the teams section.
            </p>
            <Blockquote>What snapshots in Shenhe's kit?</Blockquote>
            <p>
                Shenhe's Icy Quills take Shenhe's ATK at the time of application, and her A4 buff is
                a direct buff and cannot be snapshotted at all. However, her Elemental Burst does
                snapshot.
            </p>
            <Blockquote>
                If using 4-piece Noblesse Oblige, are Icy Quills buffed when she uses her Elemental
                Burst?
            </Blockquote>
            <p>Yes, because her Icy Quills do not snapshot.</p>
            <Blockquote>
                Does Shenhe's Elemental Burst cooldown begin immediately or after the animation
                finishes?
            </Blockquote>
            <p>
                Immediately. There is a split second while using her Elemental Burst before the
                animation starts that shows the cooldown starting.
            </p>
            <Blockquote>I am below AR45. How should I build Shenhe?</Blockquote>
            <p>
                Farming domains is not resin-efficient below AR45, so you should not worry about
                optimizing her. That said, ATK stacking to buff Cryo DPS will work just fine, even
                if it's just 2/2 Gladiator's Finale / Berserker with a cheap or craftable weapon
                like Prototype Starglitter.
            </p>
            <Blockquote>
                Is it better to give Shenhe or the Cryo DPS the buff from Thrilling Tales of Dragon
                Slayers?
            </Blockquote>
            <p>
                Definitely the Cryo DPS. Shenhe will only transfer 80% of the buff through her Icy
                Quills and only for 5/7 damage instances, so the buff is much more meaningful on the
                main DPS.
            </p>
            <Blockquote>
                Since Shenhe's kit provides lots of Cryo buffs, is it better to give an ATK or CRIT
                circlet to the Cryo DPS?
            </Blockquote>
            <p>
                A CRIT circlet will generally have a higher damage ceiling, as both the Cryo DPS and
                Shenhe's Icy Quills scale off of it. However, this can vary on substats.
            </p>
            <Blockquote>Are Shenhe's C4 stack durations independent from each other?</Blockquote>
            <p>No. When a new stack is gained, the duration is refreshed to 60s for all of them.</p>
            <h2 id="conclusion">Conclusion</h2>
            <Image
                src="https://i.imgur.com/Hi3qwyt.png"
                alt="Shenhe holding a handful of Qingxins in front of a mountain background"
                credit="@whgkdud_d on Twitter"
                link="https://twitter.com/whgkdud_d/status/1605944109532790784"
                width={50}
            />
            <p>
                Shenhe is a powerful Cryo support / off-field DPS that can work in basically any
                Cryo-centric team, as well as a few teams that aren't focused on dealing Cryo damage
                but appreciate her buffs or off-field Cryo application.
            </p>
            <p>
                Shenhe also makes Mono Cryo teams not only viable but in certain circumstances
                actually competitive. For those that have well-invested Cryo DPS units, Shenhe is a
                very strong investment that is essentially future-proof as she will pair well with
                nearly any posisble Cryo unit in the future that can use her buffs and Icy Quills.
            </p>
            <h2 id="credits">Credits</h2>
            <p>
                <b>eudaimonia0420</b> for authoring the guide from which this webpage was written:
                <a
                    href="https://docs.google.com/document/d/1T6uUXPCmJufwbkadpTfgwIkEB_CSA9owr3igyzG8XTM"
                    >https://docs.google.com/document/d/1T6uUXPCmJufwbkadpTfgwIkEB_CSA9owr3igyzG8XTM</a
                >
            </p>
            <p>
                <b>hyperneutrino</b> for creating this website, administrative help, and proofreading.
            </p>
            <p><b>xaitll#7877</b> for administrative help and proofreading.</p>
            <p>
                <b>.mr_noodle</b> for sourcing the fanart for the guide and compiling the FAQ.
            </p>
            <p>
                <b>nociii and the KNET team</b> for their invaluable proofreading, experience, and
                over 150 review comments.
            </p>
            <p>
                <b>jamie9248</b> (<a href="https://www.youtube.com/@jamiekb9v"
                    >jamie (kb9v) on YouTube</a
                >) for the many guides and showcases linked and referenced in this guide and
                proofreading.
            </p>
            <p>
                <a
                    href="https://docs.google.com/spreadsheets/d/1-vkmgp5n0bI9pvhUg110Aza3Emb2puLWdeoCgrxDlu4"
                    >Energy Recharge Calculator</a
                > - determining Shenhe's ER requirements
            </p>
            <p><a href="https://gcsim.app/simulator">GC Sim - Genshin team simulator</a></p>
            <p>
                <a href="https://genshin.honeyhunterworld.com/shenhe_063/?lang=EN"
                    >Shenhe database on Honey Hunter</a
                >
            </p>
            <br />
            <p>And finally, <b><i>you, the reader</i></b>. Thank you for reading!</p>
        </Container>
    </div>
</div>

<button id="top" class={y < 50 ? "hide" : ""} on:click={() => window.scrollTo({ top: 0 })}>
    <i class="material-icons">arrow_upward</i>
</button>

<style lang="scss">
    div#top-block {
        background-color: #28a;
        padding-top: 300px;

        @media screen and (max-width: 1000px) {
            padding-top: 100px;
        }
    }

    h2 {
        background-image: url(/images/namecard.webp);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 5px;
        height: 137px;

        @media screen and (max-width: 1000px) {
            background-position: center;
            height: 112px;
        }

        display: flex;
        flex-direction: row;
        align-items: center;
    }

    h3 {
        font-size: 125%;
        text-decoration: underline;
    }

    @media screen and (min-width: 1000px) {
        div#toc-box {
            position: fixed;
            top: 0;
            right: 5vw;

            height: 100%;

            display: flex;
            flex-direction: row;
            align-items: center;

            opacity: 80%;
        }

        #toc-back {
            background-image: url(/images/decor3.png);
            background-size: cover;
            background-position: 80%;
            border-radius: 10px;
        }

        div#toc {
            padding: 2em 6em 2em 2em;

            background-color: #2469;
            backdrop-filter: blur(1px);

            font-size: 90%;
            line-height: 150%;

            border-radius: 10px;
        }

        div.main {
            padding-right: 15%;
        }
    }

    .blue {
        background-image: url(/images/blue-banner.png);
    }

    .teal {
        background-image: url(/images/teal-banner.png);
    }

    .banner {
        width: 100%;
        padding: 2em 0;
        background-attachment: fixed;
        background-size: cover;
    }

    button#top {
        position: fixed;
        left: 5vw;
        bottom: 5vh;
        outline: none;
        border: none;
        border-radius: 3px;
        background-color: #227;
        color: white;
        padding-top: 10px;
        transition: 200ms ease-in-out;
    }

    .hide {
        transform: translateY(50px);
        opacity: 0%;
    }
</style>
