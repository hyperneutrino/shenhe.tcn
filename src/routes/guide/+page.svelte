<script context="module" lang="ts">
    const weapons = [
        [
            "W_CQ",
            "Calamity Queller",
            "125.21",
            "Shenhe's signature and best-in-slot. Keep in mind that using an ATK% weapon will sometimes require ER% as your main stat on sands, or significant substat investment, though some teams may have enough Cryo energy generation to bypass this. The passive ATK% doubles when Shenhe is off-field, but will not reach its maximum until 6 seconds after Shenhe uses her Elemental Skill.",
        ],
        [
            "W_EL",
            "Engulfing Lightning",
            "114.63",
            "Provides high base ATK and ER, allowing you to more easily deal with energy issues. It also increases ATK with more ER on Shenhe, which is great since she requires high ER anyway. This is a good option for AoE content.",
        ],
        [
            "W_SS",
            "Skyward Spine",
            "112.80",
            "Provides decent base ATK along with ER, both good stats for Shenhe.",
        ],
        [
            "W_VV",
            "Vortex Vanquisher (no shield)",
            "110.12",
            "Shenhe can't stack this off-field, but the innate ATK% is enough to still be fairly strong.",
        ],
        [
            "W_SoH",
            "Staff of Homa (>= 50% HP)",
            "106.36",
            "Offers high base ATK but Shenhe doesn't make good use of the CRIT DMG. This weapon is much better off being used on other characters who can use the secondary stat.",
        ],
        [
            "W_WF",
            "Wavebreaker's Fin (R1)",
            "104.24",
            "Decent stat-stick with its high base ATK. With refinements, it can increase Shenhe's personal damage.",
        ],
        [
            "W_C",
            '"The Catch" (R5)',
            "101.41",
            "Solid ER and Elemental Burst DMG bonus and Crit Rate. However, its lower base ATK keeps it behind other options.",
        ],
        [
            "W_RS",
            "Royal Spear",
            "100.17",
            "Base ATK stat-stick. Not recommended, as it doesn't really offer anything besides that.",
        ],
        [
            "W_FL",
            "Favonius Lance",
            "100.00",
            "One of the best weapons for Shenhe. It significantly decreases your ER requirements, which allows you to reinvest some ER substats into damage substats. This is the best choice if you want Shenhe to help you generate energy for your team, particularly with Ayaka or Eula.",
        ],
        [
            "W_KCS",
            "Kitain Cross Spear",
            "99.57",
            "Provides decent base ATK and a useful passive that can help mitigate ER requirements. Your rotations may need to change; because of the passive, you will have to use your Elemental Burst before your Elemental Skill, and your ER requirement drops to about 158%.",
        ],
    ] as [string, string, string, string][];
</script>

<script lang="ts">
    import Blockquote from "$lib/Blockquote.svelte";
    import Callout from "$lib/Callout.svelte";
    import Container from "$lib/Container.svelte";
    import IconTitle from "$lib/IconTitle.svelte";

    let width: number = 0;
    let size: number = 100;
    let sizepx: string = "100px";

    $: size = width < 1000 ? width * 0.1 : 100;
    $: sizepx = `${size}px`;
</script>

<svelte:window bind:innerWidth={width} />

<div id="top-block" />

<div style="background-color: #146; padding-top: 50px; padding-bottom: 150px">
    <Container>
        <div id="toc">
            <b>Table of Contents</b>
            <ul>
                <li><a href="#whois">Who is Shenhe?</a></li>
                <li><a href="#role">What is her role?</a></li>
                <li>
                    <a href="#why">Why should you play/pull for Shenhe?</a>
                    <ul><li><a href="#pros-cons">Pros &amp; Cons</a></li></ul>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#talents">Talents</a>
                    <ul>
                        <li><a href="#breakdown">Breakdown</a></li>
                        <li><a href="#priority">Priority</a></li>
                        <li><a href="#ascension">Ascension</a></li>
                    </ul>
                </li>
                <li><a href="#constellations">Constellations</a></li>
            </ul>
            <ul>
                <li>
                    <a href="#artifacts">Artifacts</a>
                    <ul>
                        <li><a href="#sets">Sets</a></li>
                        <li><a href="#stats">Stats</a></li>
                        <li><a href="#er">ER Requirements</a></li>
                    </ul>
                </li>
                <li><a href="#weapons">Weapons</a></li>
            </ul>
            <ul>
                <li>
                    <a href="#credits">Credits</a>
                </li>
            </ul>
        </div>
    </Container>
    <br />
    <br />
    <br />
    <h1 class="blue banner"><Container>Introduction</Container></h1>
    <br />
    <div class="main">
        <Container>
            <h2 id="whois">Who is Shenhe?</h2>
            <p>
                Shenhe is a <b>5-star Cryo polearm unit</b> whose kit mainly fits the roles of both
                a
                <b>support</b>
                and <b>sub-dps</b>, and has been proven to shine especially within cryo team
                compositions.
            </p>
            <br />
            <h2 id="role">What role does Shenhe fill in a team?</h2>
            <p>
                Shenhe is designated as a <b>cryo-buffing support</b>. While her kit contains
                elements attributed to sub-dps units, her own personal damage output is rather low,
                which is significantly compensated by amplifying the damage dealt by her teammates.
            </p>
            <p>
                Her kit mainly provides buffing capabilities through a combination of DMG% bonus
                buffs, Cryo and Physical RES shred, and the ability to add flat damage to instances
                of Cryo damage dealt by teammates. In addition, she's able to provide cryo resonance
                and particles and hold artifact sets with buffing capabilities such as the 4-piece
                Noblesse Oblige set.
            </p>
            <br />
            <h2 id="why">Why should you play/pull for Shenhe?</h2>
            <Callout icon="❕" color="#b23">
                Whether you should pull for Shenhe or not is, ultimately, your choice. Please
                remember that only you can decide if a character is worth spending your time, money,
                and resources on. This guide's main purpose is to give you the most information
                possible in order to clear any misunderstandings about Shenhe and help you
                understand her kit better. That said, below are some of Shenhe's pros and cons.
            </Callout>
            <br />
            <h3 id="pros-cons">Pros</h3>
            <ul>
                <li>
                    <p>
                        <b>relatively cheap</b> to build since her kit scales on only ATK and doesn't
                        require crit
                    </p>
                </li>
                <li>
                    <p>
                        offers up to <b>30% total DMG% bonus for Cryo</b> elemental bursts while also
                        having built-in Cryo RES shred
                    </p>
                </li>
                <li><p>has decent weapon access and good synergy with existing 5* options</p></li>
                <li><p>fairly <b>low field time</b>, enabling "quick-swap" rotations</p></li>
                <li>
                    <p>
                        universally <b>good with Cryo</b> units, giving her high flexibility within teams
                        that deal primarily Cryo damage
                    </p>
                </li>
                <li><p><b>opens up non-traditional Cryo teams</b> such as Mono-Cryo</p></li>
                <li>
                    <p>
                        quills can apply to off-field abilities after they are cast, allowing
                        flexible rotations
                    </p>
                </li>
                <li>
                    <p>
                        Icy Quill <b>damage scales with the level of investment of your team</b>,
                        not just of Shenhe
                    </p>
                </li>
                <li>
                    <p>
                        viable in Physical teams and other non-Cryo teams that can make use of her
                        A4 buff and off-field cryo application.
                    </p>
                </li>
            </ul>
            <br />
            <h3>Cons</h3>
            <ul>
                <li><p><b>high ER% requirement</b> due to her high burst cost (80 energy)</p></li>
                <li>
                    <p>
                        damage contribution mainly comes from teammates triggering Icy Quills rather
                        than personal burst/skill damage due to her personal multipliers being
                        relatively low
                    </p>
                </li>
                <li>
                    <p>
                        Icy Quills are treated as instances of single target damage and consumed as
                        such, meaning her quills become <b>less impactful with more enemies</b>
                    </p>
                </li>
                <li>
                    <p>
                        she can be <b>difficult to slot into existing teams</b>, as she is often
                        competing for a position with other supports such as healers/shielders,
                        Anemo units for grouping and VV-shred, or Hydro/Pyro enablers for
                        Freeze/Melt teams
                    </p>
                </li>
                <li>
                    <p>
                        lower value in teams that do not use many Cryo or Anemo units that cannot
                        consume her quills or take advantage of her buffs
                    </p>
                </li>
            </ul>
            <br />
            <h3>Conclusion</h3>
            <p>
                Shenhe is a well-designed, balanced, and competitive support/sub-DPS unit whose
                unique blend of energy generation, resistance shredding, damage buffs, and Icy Quill
                damage both improves existing teams and enables new ones such as Mono-Cryo.
            </p>
            <p>
                As a supportive unit, she is reliant on bolstering already well-invested Cryo units
                &mdash; however, the utility she brings in doing so makes her very competitive.
            </p>
        </Container>
    </div>
    <br />
    <h1 class="teal banner"><Container>Character Overview</Container></h1>
    <br />
    <div class="main">
        <Container>
            <h2 id="talents">Talents</h2>
            <br />
            <h3 id="breakdown">Breakdown</h3>
            <br />
            <IconTitle key="normal_attack" />
            <Blockquote color="#57d">
                Shenhe performs up to 5 consecutive spear strikes. Her charged attack lunges
                forward, dealing damage to enemies along the path. Her plunge attack functions the
                same as usual.
            </Blockquote>
            <p>
                Due to her low multipliers, her normal and charged attacks are usually neglected and
                not worth using for most team compositions. However, you could make main DPS Shenhe
                work, we will just not cover it here as it is not usually performant.
            </p>
            <br />
            <IconTitle key="elemental_skill" />
            <Blockquote color="#57d">
                Shenhe grants her allies the Icy Quill effect and deals Cryo DMG. If it is tapped,
                she rushes forward and deals damage to enemies along the way. If it is held, she
                deals AoE damage around her and does not move.
            </Blockquote>
            <p>
                Shenhe's <b>Elemental Skill</b> is the talent that contributes to the majority of her
                team damage. It mainly revolves around her Icy Quills and is very easy to use.
            </p>
            <br />
            <p><b>About Icy Quills:</b></p>
            <ul>
                <li>
                    <p>
                        Depending on if you tap or hold the skill, the behavior is different. In the
                        following information, attributes that differ will be shown as [tap]/[hold].
                    </p>
                </li>
                <li>
                    <p>
                        Icy Quills add 5/7 instances of flat damage that scale off of Shenhe's ATK.
                        This flat damage is applied whenever Cryo damage is dealt by a member of the
                        team.
                    </p>
                </li>
                <li>
                    <p>
                        The ability does not snapshot, so the flat damage is based on Shenhe's
                        present ATK and not the ATK at the time of casting the skill.
                    </p>
                </li>
                <li>
                    <p>
                        Each time a team member deals Cryo damage, the damage will be added onto
                        theirs, and their DMG%, critical strike damage, and elemental mastery will
                        be used when determining the final damage. Therefore, it is usually not
                        worth investing in any stats for Shenhe herself besides raw ATK, as her crit
                        and DMG% stats will not contribute towards her quill damage.
                    </p>
                    <ul>
                        <li>
                            <p>
                                However, her burst and the quills triggered by it will still use her
                                crit and DMG%, so it is not totally worthless.
                            </p>
                        </li>
                    </ul>
                </li>
                <li>
                    <p>
                        Anemo units dealing Cryo damage through infusion will activate Icy Quills,
                        but Swirl damage will not.
                    </p>
                </li>
                <li>
                    <p>
                        Each teammate has their own Icy Quill quota and consumes them independently
                        of each other. This includes Shenhe herself.
                    </p>
                </li>
                <li>
                    <p>
                        Shenhe will consume an Icy Quill on the initial skill cast to increase the
                        damage of the skill and will benefit from the 4th Ascension buff.
                    </p>
                </li>
                <li>
                    <p>
                        Quills are consumed on hit, including by shields, and will do 15-20% more
                        damage to shields. This means that if an instance of damage hits multiple
                        enemies, one quill will be consumed per enemy hit.
                    </p>
                </li>
                <li>
                    <p>
                        Icy Quills can be triggered by off-field abilities that have already
                        snapshotted their stats in the middle of that ability's duration.
                    </p>
                </li>
            </ul>
            <br />
            <IconTitle key="elemental_burst" />
            <Blockquote color="#57d">
                Shenhe unleashes the Talisman Spirit, allow it to roam free, dealing AoE Cryo DMG.
                It then occupies a fixed area on the playing field and deals AoE Cryo DMG twice
                every two seconds for 12 seconds. Enemies within the field have their Cryo RES and
                Physical RES reduced by 6-15% (based on talent level &mdash; maximum at level 10).
            </Blockquote>
            <p>
                This talent is Shenhe's main source of personal damage and the best way to trigger
                her own Icy Quills. The buffs from her 1st Ascension talent and the RES shred add
                significant damage to her team, meaning this talent is generally worth leveling up
                it is a good idea to build enough ER to use it off cooldown, even if the raw damage
                from her Elemental Burst and her own Icy Quills will generally be lower than that of
                her Cryo teammates.
            </p>
            <ul>
                <li>
                    <p>
                        It deals an initial burst of damage, then every 2 seconds, it hits twice,
                        totalling 12 hits at C0/C1 and 18 hits at C2+.
                    </p>
                </li>
                <li><p>DoT ticks follow normal ICD (2.5s/3).</p></li>
                <li>
                    <p>
                        This ability snapshots buffs except for her 1st Ascension talent's Cryo DMG%
                        buff.
                    </p>
                </li>
            </ul>
            <br />
            <h3 id="priority">Priority</h3>
            <div style="display: flex; flex-direction: column; align-items: center; width: 100%">
                <div style="display: flex; flex-direction: row; align-items: center">
                    <IconTitle key="elemental_skill" show="image" size={sizepx} />
                    <svg width={sizepx} height={sizepx}>
                        <polyline
                            points="{size * 0.25},{size * 0.25} {size * 0.5},{size * 0.5} {size *
                                0.25},{size * 0.75}"
                            stroke="white"
                            stroke-width={Math.floor(size / 20)}
                            fill="none"
                        />
                    </svg>
                    <IconTitle key="elemental_burst" show="image" size={sizepx} />
                    <svg width={sizepx} height={sizepx}>
                        <polyline
                            points="{size * 0.15},{size * 0.25} {size * 0.4},{size * 0.5} {size *
                                0.15},{size * 0.75}"
                            stroke="white"
                            stroke-width={Math.floor(size / 20)}
                            fill="none"
                        />
                        <polyline
                            points="{size * 0.35},{size * 0.25} {size * 0.6},{size * 0.5} {size *
                                0.35},{size * 0.75}"
                            stroke="white"
                            stroke-width={Math.floor(size / 20)}
                            fill="none"
                        />
                    </svg>
                    <IconTitle key="normal_attack" show="image" size={sizepx} />
                </div>
            </div>
            <p>
                Shenhe's skill contributes the most damage for whatever team she is in, so this
                should be your top priority. Her burst is a good source of personal damage and is
                worth leveling up for the increased RES shred.
            </p>
            <Callout icon="⚠" color="#c80">
                Her attacks have unimpressive multipliers and because she does not have infusion,
                are relatively useless. For niche Chongyun/Yunjin-based teams, you would level them
                up to use her as a main DPS, but for the standard meta Shenhe teams, you do not need
                to level up her attacks.
            </Callout>
            <br />
            <h3 id="ascension">Ascension</h3>
            <IconTitle key="ascension_1" />
            <Blockquote color="#57d">
                Active characters within the field generated by
                <b>[Elemental Burst] Divine Maiden's Deliverance</b>
                gain 15% Cryo DMG Bonus.
            </Blockquote>
            <p>
                Shenhe's A1 gives a nice cryo damage buff to the active character on-field. It can
                be snapshotted except by Shenhe's own elemental burst.
            </p>
            <br />
            <IconTitle key="ascension_4" />
            <Blockquote color="#57d">
                After Shenhe uses <b>[Elemental Skill] Spring Spirit Summoning</b>, she will grant
                nearby party members the following effects:
                <ul>
                    <li>
                        <b>Tap:</b> +15% to Elemental Skill and Elemental Burst damage for 10 seconds
                    </li>
                    <li>
                        <b>Hold:</b> +15% to Normal, Charged, and Plunging Attack damage for 10 seconds
                    </li>
                </ul>
            </Blockquote>
            <p>
                Shenhe's A4 allows her to buff her teammates' skills and bursts, or their attacks.
                At C0, you can have 100% uptime on one buff but not both.
            </p>
            <p>
                It is important to note that these bonuses cannot be snapshotted, but can be
                dynamically added to snapshotting skills that are already cast. For example, if you
                cast Ayaka's burst and then cast Shenhe's skill (tap), Ayaka's burst will start
                dealing more damage.
            </p>
            <p>
                Most of the time, the tap buff will be more useful, at least as of the time of
                writing; however, some teams like Melt Ganyu will prefer the hold buff, and if you
                have C1 or C6, you may be more inclined to use the hold buff.
            </p>
            <br />
            <h3 id="constellations">Constellations</h3>
            <Callout icon="ℹ️" color="#257">
                The damage increase calculations are all according to the
                <a href="https://keqingmains.com/shenhe/" target="_blank" rel="noreferrer"
                    >KQM guide</a
                >. They all refer to average team damage, not Shenhe's individual damage. Keep in
                mind that the effects you observe will vary based on what teammates you use with
                Shenhe and the level of investment of your other characters. These numbers are only
                for guidance, not to instruct you what is worth or not worth your money.
            </Callout>
            <br />
            <IconTitle key="c1" suffix="(4-5% increase from C0)" />
            <Blockquote color="#57d">
                <b>[Elemental Skill] Spring Spirit Summoning</b> can be used 1 more time.
            </Blockquote>
            <p>
                C1 gives Shenhe two charges on her elemental skill. The quills do not stack, so
                casting it will overwrite any existing quills. However, the A4 buffs do not
                overwrite each other, so you can have both types simultaneously with C1.
            </p>
            <Callout icon="💡" color="#2a8">
                <b>Example Rotation:</b> Tap Shenhe's Elemental Skill, use the 5 quills, swap to Shenhe,
                hold Shenhe's Elemental Skill for 7 quills and the hold buff. You will not be limited
                by the held E's longer cooldown.
            </Callout>
            <br />
            <IconTitle key="c2" suffix="(14-15% increase from C0, 9-10% from C1)" />
            <Blockquote color="#57d">
                <b>[Elemental Burst] Divine Maiden's Deliverance</b> lasts for 6 seconds longer. Active
                characters within its field gain +15% Cryo CRIT DMG.
            </Blockquote>
            <p>
                C2 is Shenhe's most impactful constellation for increasing damage, and the extended
                duration of her burst extends the uptime of her Cryo RES shred and A1 buff. While
                the A1 talent snapshots, note that the C2 Cryo CRIT DMG bonus does not.
            </p>
            <p>
                This means that her C2 is less significant for Cryo units who deal most of their
                damage from off-field.
            </p>
            <p>
                With C2, her burst ticks for 18 seconds total, dealing 18 ticks of damage, still at
                a rate of twice per 2 seconds (increased from the base 12 ticks / 12 seconds).
            </p>
            <br />
            <IconTitle key="c3" suffix="(17-18% increase from C0, ~3% from C2)" />
            <Blockquote color="#57d">
                Increases the level of <b>[Elemental Skill] Sprint Spirit</b> by 3. Maximum level is
                15.
            </Blockquote>
            <br />
            <IconTitle key="c4" suffix="(18-19% increase from C0, ~1% from C3)" />
            <Blockquote color="#57d">
                When a character uses an Icy Quill, Shenhe gains a stack of <b>Skyfrost Mantra</b>.
                <ul>
                    <li>
                        When Shenhe uses <b>[Elemental Skill] Spring Spirit Summoning</b>, she will
                        consume all stacks of <b>Skyfrost Mantra</b>, increasing the damage of the
                        skill by 5% per stack.
                    </li>
                    <li>She can hold up to 50 stacks and each stack lasts for up to 60 seconds.</li>
                </ul>
            </Blockquote>
            <p>
                Shenhe's C4 allows her to accumulate a tremendous amount of damage for her next
                Elemental Skill cast. However, this effect is quite insignificant for overall team
                DPS. You can get bigger burst damage from Shenhe herself. You may find potential
                synergy in combination with C6 (otherwise it is impractical to reach the maximum
                stack count), but C4 on its own is not very impactful.
            </p>
            <br />
            <IconTitle key="c5" suffix="(19-20% increase from C0, ~1% from C4)" />
            <Blockquote color="#57d">
                Increases the level of <b>[Elemental Burst] Divine Maiden's Deliverance</b> by 3. Maximum
                level is 15.
            </Blockquote>
            <Callout icon="ℹ️" color="#257">
                The RES shred caps at 15% debuff at Level 10. Once you have crowned her Elemental
                Burst, this constellation will only slightly increase her Burst damage.
            </Callout>
            <br />
            <IconTitle key="c6" suffix="(~24% increase from C0, 3-4% from C5)" />
            <Blockquote color="#57d">
                When characters trigger Icy Quills using Normal and Charged Attack DMG, it does not
                count towards the quota.
            </Blockquote>
            <p>The above calculations are based on C0 Ayaka against a single target.</p>
            <p>
                While this may sound extremely strong, keep in mind that quills are still consumed
                by Elemental Skills and Bursts, meaning it's quite easy to run out of quills, at
                which point your Normal and Charged Attack DMG will no longer apply quill damage
                bceause your buff has ended.
            </p>
            <p>
                If you are using this, you will want to save Shenhe's held Elemental Skill to fill
                rotation downtime with attacks.
            </p>
            <p>
                This upgrade may be more powerful in whale-level Melt Ganyu teams as C6 would allow
                Ganyu to apply melt quills to any number of targets, which removes a significant
                barrier to Shenhe-Ganyu teams, that being the rapid consumption of quills on AoE
                DMG.
            </p>
            <Callout icon="ℹ️" color="#257">
                See the <a
                    href="https://keqingmains.com/shenhe/#Constellations"
                    target="_blank"
                    rel="noreferrer">KQM Guide</a
                > for more detailed information about these calculations and the strengths and weaknesses
                of this upgrade.
            </Callout>
        </Container>
    </div>
    <br />
    <h1 class="blue banner"><Container>Builds &mdash; Artifacts &amp; Weapons</Container></h1>
    <br />
    <div class="main">
        <Container>
            <h2 id="artifacts">Artifacts</h2>
            <br />
            <h3 id="sets">Sets</h3>
            <IconTitle key="set_4no" />
            <p>
                This artifact set allows Shenhe to further boost her team's overall damage and is
                often her best-in-slot for overall team performance.
            </p>
            <br />
            <IconTitle key="set_4bs" />
            <p>
                This artifact set increases Shenhe's personal damage significantly, especially
                against a higher number of targets. It also increases the consistency of Favonius
                Lance. It is recommended to use this in Freeze/Mono-Cryo teams if the team already
                has another Noblesse Oblige holder (e.g. Mona or Diona).
            </p>
            <br />
            <IconTitle key="set_mix" />
            <p>
                This option is easier to farm if the above sets aren't available, so may be better
                for low-investment teams. 2 each of a +18% ATK set can be the best for raw Icy Quill
                damage, but if you do not have another Noblesse Oblige holder, this will not perform
                as well as 4-Piece Noblesse Oblige.
            </p>
            <br />
            <Callout icon="ℹ️" color="#257">
                Check the <a
                    href="https://docs.google.com/spreadsheets/d/1iVnT2RPD76f2GZT6GQ5LV1MtGwvOwObhbi0svAdYS2M/edit#gid=1766355629"
                    target="_blank"
                    rel="noreferrer">mastersheet</a
                > for a damage comparison of each set.
            </Callout>
            <br />
            <h3 id="stats">Stats</h3>
            <p>
                Shenhe's stat priority is quite straightforward. Ideally, you want ATK% for all of
                your main stats, but ER% for the sands, Cryo DMG% for the goblet, and Crit% (either
                one) for the circlet are acceptable options as well.
            </p>
            <p>
                The substat priority is ER% until your ER requirements are satisfied, and then ATK%
                > Crit Rate/Crit DMG. When using Favonius Lance, Crit Rate has a higher priority,
                but otherwise they are roughly the same.
            </p>
            <Callout icon="ℹ️" color="#257">
                Check the <a
                    href="https://docs.google.com/spreadsheets/d/1iVnT2RPD76f2GZT6GQ5LV1MtGwvOwObhbi0svAdYS2M/edit#gid=1766355629"
                    target="_blank"
                    rel="noreferrer">mastersheet</a
                > for a comparison of the performance of each main stat.
            </Callout>
            <br />
            <h3 id="er">ER Requirements</h3>
            <p>
                ER requirements will vary from team to team, but you generally want
                <b>180-190 ER%</b> for teams with one other Cryo unit. Favonious Lance generally
                lowers the requirement to about <b>165-175 ER%</b>.
            </p>
            <p>
                With two other Cryo units, or one other and Venti, her ER requirements drop to
                <b>130-145 ER%</b>.
            </p>
            <br />
            <h2 id="weapons">Weapons</h2>

            <Callout icon="ℹ️" color="#257">
                <b>%</b> shows the damage performance relative to Favonius Lance. Check the
                <a
                    href="https://docs.google.com/spreadsheets/d/1iVnT2RPD76f2GZT6GQ5LV1MtGwvOwObhbi0svAdYS2M"
                    target="_blank"
                    rel="noreferrer">mastersheet</a
                > for in-depth comparisons.
            </Callout>
            <table cellspacing="0">
                <tr>
                    <td />
                    <td><h4>Weapon</h4></td>
                    <td><h4>%</h4></td>
                    {#if width > 1000}
                        <td><h4>Details</h4></td>
                    {/if}
                </tr>
                {#each weapons as [img, name, ratio, details], index}
                    {@const style = index % 2 === 0 ? "" : "background-color: #fff1"}
                    <tr {style}>
                        <td><img src="/images/icons/{img}.webp" alt={name} width="50px" /></td>
                        <td>{name}</td>
                        <td>{ratio}%</td>
                        {#if width > 1000}
                            <td>{details}</td>
                        {/if}
                    </tr>
                    {#if width <= 1000}
                        <tr {style}>
                            <td colspan={3}>
                                {details}
                            </td>
                        </tr>
                    {/if}
                {/each}
            </table>
        </Container>
    </div>
    <br />
    <h1 id="credits" class="teal banner"><Container>Credits</Container></h1>
    <br />
    <div class="main">
        <Container>
            <p>
                The majority of this information was sourced from the
                <b
                    ><a href="https://keqingmains.com/shenhe/" target="_blank" rel="noreferrer"
                        >KQM Shenhe Guide</a
                    ></b
                >. Huge thanks to KQM and the writers for all of the hard work that went into the
                original guide! Lead Writer: <b>XenoVX#6150</b>. Co-Writers: <b>Zamo#6399</b>,
                <b>KB#1111</b>, <b>ApolloIV#8177</b>, <b>Sitri#9504</b>.
            </p>
            <p>
                Much of the data used for these conclusions and calculations are from the <b
                    ><a
                        href="https://docs.google.com/spreadsheets/d/1iVnT2RPD76f2GZT6GQ5LV1MtGwvOwObhbi0svAdYS2M/edit"
                        target="_blank"
                        rel="noreferrer">Shenhe Mastersheet</a
                    ></b
                >, so thank you very much to <b>Sitri#9504</b> and <b>jrm.spirit#2671</b> for the analysis
                and calculation work!
            </p>
            <p>
                Special thanks to the Shenhe Mains staff and TC team for reviewing all of this
                information.
            </p>
            <p>Website created by HyperNeutrino#1759.</p>
        </Container>
    </div>
</div>

<style lang="scss">
    div#top-block {
        background-color: #28a;
        padding-top: 300px;

        @media screen and (max-width: 1000px) {
            padding-top: 100px;
        }
    }

    @media screen and (min-width: 1000px) {
        div#toc {
            position: fixed;
            top: 30vh;
            right: 10vw;

            background-color: #ffffff11;
            backdrop-filter: blur(5px);
            padding: 2em;
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
</style>
