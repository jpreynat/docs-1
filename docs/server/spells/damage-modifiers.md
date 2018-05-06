**Overview of spell effects that modify Spell Damage**

---

<font color="#000000">**Key: **</font><span style="color: rgb(153, 0, 0);">**Focus Effect**</span><font color="#000000">**, **</font><span style="color: rgb(0, 0, 255);">**Item Effect**</span><font color="#000000">**, **</font><span style="color: rgb(0, 128, 0);">**Non-Focus Spell Effect**</span>

---

 * Spell damage criticals are not a flat (2x) they are determined soely by your 'critical damage modifer' value._

 * If multiple of same Focus Effect, highest avialable value is used. [Stacks] Indicates that if multiple of same effect, the final amount is the total of all effects. _

## Direct Damage

*   **Focus Effects** **that increase/decrease damage by percent.**
    *   <span style="color:#800000;">**SE_FcBaseEffects (413)** </span>Modifies by % the base damage value of the spell cast.
    *   <span style="color: rgb(153, 0, 0);">**SE_ImprovedDamage** **(124)**</span><span style="color: rgb(255, 0, 0);"></span>Modifies by % the damage value after (413) is applied. (This value CAN NOT critical)
    *   <span style="color:#800000;">**SE_FcDamagePctCrit (302)**</span><span style="color:#B22222;"></span>Modifies by % the damage value after (413) is applied. (This value CAN critical)

*   **Effects on CASTER that increase/decrease damage by a specific amount.**
    *   <span style="color:#800000;">**SE_FcDamageAmt** (286)** **</span>+/- a set damage amount (This value CAN NOT criticals).
    *   <span style="color:#800000;">**SE_FcDamageAmtCrit** (303)** **</span>+/- a set damageamount (This value CAN critical)
    *   **<span style="color: rgb(0, 0, 255);">Item 'Spell Damage Amount"</span>** - Amount specified on the item modified by formula bellow (This value CAN critical)
        *   Value is modified by the 'total cast time' of the spell it is being applied to
        *   _Total Cast Time_ is derived from adding which ever is greater(Recast OR Recovery time) to cast time.
        *   _Total Cast Time_ (0 - 2.5 seconds). 
            *   Damage Amount = Damagel Amount / 4
        *   _Total Cast Time_ (2.6 - 7.0 seconds)
            *   Damage Amount = Damage Amount*(0.167*(_Total Cast Time_)/1000))
        *   _Total Cast Time_ ( > 7.0 seconds)
            *   Damage Amount = Damage Amount / 7

*   **Effects on TARGET that increase/decrease damage by a specific amount.**
    *   <span style="color:#800000;">**SE_FcDamageAmtIncoming** (297)** **</span>+/- a set amount of damage (This value CAN NOT critical)

*   **Effects on TARGET that increase/decrease damage  by percent.**
    *   <span style="color:#800000;">**SE_FcSpellVulnerability** (296)****</span><span style="color:#B22222;"></span>Modifies by % the casters base damage value (This value CAN critical).

*   **Effects on CASTER that increase/decrease critical spell chance. **
    *   **<span style="color:#008000;">SE_CriticalSpellChance (294) </span>**Modfies by % the chance to critical spell chance AND critical damage modifer. [c_ritcal portion_ Stacks]
    *   <span style="color:#008000;">**SE_SpellCritChance **(170)** **</span>Modifies by % the chance to critical spell. [Stacks]
    *   <span style="color: rgb(0, 128, 0);">**SE_FrenziedDevastation (212) **</span>Modifies by % the chance to critical spells AND increases DD spells mana cost by 2x [Stacks]

*   **Effects on CASTER that increase/decrease critical spell damage. (_Critcal Spell Damage Modifier_)******
    *   **<span style="color: rgb(0, 128, 0);">SE_CriticalSpellChance (294) </span>**Modfies by % the chance to critical spell chance AND critical damage modifer. [_damage portion does not Stack_]
    *   <span style="color:#008000;">**SE_SpellCritDmgIncrease (155) **</span><span style="color:#000000;">Modifies by % the critical damage modifier. [Stacks]</span>

## Calculation

* **Critical Chance = ****<span style="color: rgb(0, 128, 0);">SE_CriticalSpellChance</span>****<span style="color: rgb(0, 128, 0);"> </span>+<span style="color: rgb(0, 128, 0);"> </span>****SE_SpellCritChance****<span style="color: rgb(0, 128, 0);"> </span>+<span style="color: rgb(0, 128, 0);"> </span>****SE_FrenziedDevastation **

* **X =** Damage Amount

* **CritMod**<span style="line-height: 1.6em;"> =  </span>**<span style="color: rgb(0, 128, 0);">SE_CriticalSpellChance + </span>****SE_SpellCritDmgIncrease**

* **Final Damage Amount = ( (X * ****SE_FcBaseEffects****) * ****SE_ImprovedDamage <span style="color: rgb(0, 0, 0);">) +</span> **** ((X * ****SE_FcBaseEffects****) *<span style="color:#800000;"> </span>**<span style="color:#800000;">**FcDamagePctCrit**</span>** <span style="color: rgb(0, 0, 0);">)*CritMod) </span>****<span style="color: rgb(0, 0, 0);">+  </span>****<span style="color: rgb(153, 0, 0);">SE_FcDamageAmt </span>+ (<span style="color: rgb(153, 0, 0);">SE_FcDamageAmtCritical </span>* CritMod)**

* **+ (<span style="color: rgb(0, 0, 255);">Item 'Spell Damage Amount" </span>* CritMod) ****+ <span style="color:#800000;">SE_FcDamageAmtIncoming</span><span style="color: rgb(178, 34, 34);"> </span>****+<span style="color: rgb(178, 34, 34);"> </span>**** (((X * ****SE_FcBaseEffects****) * **<span style="color:#800000;">**SE_FcSpellVulnerability**</span>** <span style="color: rgb(0, 0, 0);">)</span>***** CritMod))****<span style="color: rgb(0, 0, 0);">) </span>**

## Damage Over Time

 * Critical damage modifer for DOTs is always (2x) at baseline if you have a chance to critical._

*   **Focus Effects** **that increase/decrease damage by percent.**
    *   <span style="color: rgb(153, 0, 0);">**SE_FcBaseEffects (413)**</span> Modifies by % the base damage value of the spell cast.
    *   <span style="color: rgb(153, 0, 0);">**SE_ImprovedDamage** **(124)**</span><span style="color: rgb(255, 0, 0);"></span>Modifies by % the damage value after (413) is applied. (This value CAN critical) <span style="color:#8B4513;">_*Unlike DD spells this does critical for DOTS_</span>
    *   <span style="color:#800000;">**SE_FcDamagePctCrit (302**</span><span style="color: rgb(178, 34, 34);">**) **</span>Modifies by % the damage value after (413) is applied. (This value CAN critical)

*   **Effects on CASTER that increase/decrease damage by a specific amount. **<span style="color:#8B4513;">_<span style="font-size: 12px; line-height: 20px;"> *Damage is divided by duration and that value is applied to each tick</span>_</span>
    *   <span style="color:#800000;">**SE_FcDamageAmt** (286)** **</span>+/- a set damage amount (This value CAN NOT criticals).
    *   <span style="color:#800000;">**SE_FcDamageAmtCrit** (303)** **</span>+/- a set damageamount (This value CAN critical)
    *   **<span style="color: rgb(0, 0, 255);">Item 'Spell Damage Amount"</span>** <span style="color:#8B4513;">* Not applied to DOTS</span>

*   **Effects on TARGET that increase/decrease damage by a specific amount. **_*Damage is divided by duration and that value is applied to each tick_
    *   <span style="color:#800000;">**SE_FcDamageAmtIncoming** (297)** **</span>+/- a set amount of damage (This value CAN NOT critical)

*   **Effects on TARGET that increase/decrease damage by percent.**
    *   <span style="color:#800000;">**SE_FcSpellVulnerability** (296) ** **</span>Modifies by % the casters base damage value (This value CAN critical).

*   **Effects on CASTER that increase/decrease critical dot chance. **
    *   **<span style="color: rgb(0, 128, 0);">SE_CriticalDotChance (273) </span>**Modfies by % the chance to critical dot hance  [Stacks]
    *   **<span style="color: rgb(0, 128, 0);">SE_CriticalDotlDecay (433) </span>**Modifies by % the chance to critical dots. [Stacks]
        *   **<span style="color: rgb(0, 128, 0);"></span>** Effect value decreases if spell cast is over the maximum level specified.

*   **Effects on CASTER that increase/decrease critical dot damage. (_Critcal Spell Damage Modifier_)**********
    *   <span style="color:#008000;">**SE_DotCritDmgIncrease **(375)** **</span>Modifies by % the critical damage modifier. [Stacks]

## Calculation

**Critical Chance = ****<span style="color: rgb(0, 128, 0);">SE_CriticalDotChance</span>****<span style="color: rgb(0, 128, 0);"> </span>+<span style="color: rgb(0, 128, 0);"> </span>****SE_CriticalDotDecay**

**X = **Damage Amount

**CritMod**<span style="line-height: 1.6em;"> =  </span>**<span style="color: rgb(0, 128, 0);">Baseline(100%) + </span>****SE_DotCritDmgIncrease**

**Final DOT Damage Amount = ( (X * ****SE_FcBaseEffects****) * ****SE_ImprovedDamage <span style="color: rgb(0, 0, 0);">) + </span>**** ((X * ****SE_FcBaseEffects****) * **<span style="color:#800000;">**FcDamagePctCrit**</span>** <span style="color: rgb(0, 0, 0);">)*CritMod) </span>****<span style="color: rgb(0, 0, 0);">+  ((</span>****<span style="color: rgb(153, 0, 0);">SE_FcDamageAmt </span>+ (<span style="color: rgb(153, 0, 0);">SE_FcDamageAmtCrital </span>* CritMod)**

**+ <span style="color:#800000;">SE_FcDamageAmtIncoming</span><span style="color:#000000;">)/DURATION)</span><span style="color: rgb(178, 34, 34);"> </span>****+<span style="color: rgb(178, 34, 34);"> </span> ****(((X * ****SE_FcBaseEffects****) * **<span style="color:#800000;">**SE_FcSpellVulnerability**</span>** <span style="color: rgb(0, 0, 0);">)</span>***** CritMod))****<span style="color: rgb(0, 0, 0);">) </span>**