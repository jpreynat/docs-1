**Overview of spell effects that modify Healing**

<span style="font-size:10px;"><font color="#000000"><span style="line-height: 20px;">**Key:** </span></font><span style="color:#990000;"><span style="line-height: 20px;">**Focus Effect**</span></span><font color="#000000"><span style="line-height: 20px;">**,** </span></font><span style="color:#0000FF;"><span style="line-height: 20px;">**Item Effect**</span></span><font color="#000000"><span style="line-height: 20px;">**,** </span></font><span style="color:#008000;"><span style="line-height: 20px;">**Non-Focus Spell Effect**</span></span></span>

---

<span style="font-size:14px;"><u>**INSTANT HEALS**</u></span>

* Heal critical modfier is always set at 100% (2x)

* If multiple of same Focus Effect, highest avialable value is used. [Stacks] Indicates that if multiple of same effect, the final amount is the total of all effects. 

---

*   **Focus Effects** **that increase/decrease healing by percent.**
    *   <span style="color:#990000;">**SE_FcBaseEffects (413)**</span> Modifies by % the base heal value of the spell cast.
    *   <span style="color:#990000;">**SE_ImprovedHeal** **(125)**</span><span style="color:#FF0000;"></span>Modifies by % the heal value after (413) is applied.

*   **Effects on CASTER that increase/decrease healing by a specific amount.**
    *   **<span style="color:#990000;">SE_FcHealAmt (392)</span> **+/- a set heal amount. (This value CAN NOT criticals).
    *   **<span style="color: rgb(153, 0, 0);">SE_FcHealAmtCrital (396) </span>**+/- a set heal amount. (This value CAN critical)
    *   **<span style="color:#0000FF;">Item 'Heal Amount"</span>** - Amount specified on the item modified by formula bellow. (This value CAN critical)
        *   Value is modified by the 'total cast time' of the spell it is being applied to
        *   _Total Cast Time_ is derived from adding which ever is greater(Recast OR Recovery time) to cast time.
        *   _Total Cast Time_ (0 - 2.5 seconds). 
            *   Heal Amount = Heal Amount / 4
        *   _Total Cast Time_ (2.6 - 7.0 seconds)
            *   Heal Amount = Heal Amount*(0.167*(_Total Cast Time_)/1000))
        *   _Total Cast Time_ ( > 7.0 seconds)
            *   Heal Amount = Heal Amount / 7

*   **Effects on TARGET that increase/decrease healing by a specific amount.**
    *   <span style="color:#800000;">**SE_FcHealAmtIncoming**</span>**<span style="color:#800000;"> (394)</span><span style="color: rgb(178, 34, 34);"> </span>**+/- a set amount of healing. (This value CAN NOT critical)

*   **Effects on TARGET that increase/decrease healing by percent.**
    *   **<span style="color:#008000;">SE_HealRate (120)</span> **Modfies by % the casters base heal value. (This value CAN NOT critical) [Stacks]
    *   <span style="color:#800000;">**SE_FcHealPctIncoming (**393)**  **</span>Modifies by % the casters base heal value. (This value CAN NOT critical).

*   **Effects on CASTER that increase critical spell chance.**
    *   **<span style="color:#008000;">SE_CriticalHealChance (274)</span> **Modfies by % the chance to critical heal.[Stacks]
    *   **<span style="color:#008000;">SE_CriticalHealDecay (434)</span> **Modifies by % the chance to critical heal. [Stacks]
        *   **<span style="color:#008000;"></span>** Effect value decreases if spell cast is over the maximum level specified.

*   **Effects on TARGET that increase critical spell chance.**
    *   **<span style="color:#800000;">SE_FcHealPctCritIncoming (395)</span> **Modifies by % the casters chance to critical heal.

<u>**Calculation**</u>

**Critical Chance = ****<span style="color: rgb(0, 128, 0);">SE_CriticalHealChance</span> <span style="color:#000000;">+</span><span style="color: rgb(0, 128, 0);">SE_CriticalHealDecay</span> <span style="color:#000000;">+</span><span style="color: rgb(0, 128, 0);"> </span><span style="color:#800000;">SE_FcHealPctCritIncoming</span>**

**X =** Heal Amount

**CritMod** <span style="line-height: 1.6em;">= 2 (Assume we critical, no critical set to 1)</span>

**Final Heal Amount = (((X * ****SE_FcBaseEffects****<font color="#000000">) * </font>****SE_ImprovedHeal <span style="color:#000000;">)*CritMod) +  </span>****<span style="color: rgb(153, 0, 0);">SE_FcHealAmt</span> <span style="color:#000000;">+ (</span><span style="color: rgb(153, 0, 0);">SE_FcHealAmtCrital</span> <span style="color:#000000;">* CritMod) + (</span><span style="color: rgb(0, 0, 255);">Item 'Heal Amount" </span><span style="color: rgb(0, 0, 0);">* CritMod) + </span><span style="color:#800000;">SE_FcHealAmtIncoming </span>**

**<span style="color:#000000;">+</span><span style="color: rgb(178, 34, 34);"> </span>**** ((X * ****SE_FcBaseEffects****<font color="#000000">) * </font>****<span style="color: rgb(0, 128, 0);">SE_HealRate</span>**** <span style="color: rgb(0, 0, 0);">)) + </span>****((X * ****SE_FcBaseEffects****<font color="#000000">) * </font>**<span style="color:#800000;">**SE_FcHealPctIncoming**</span>**<span style="color:#800000;"> </span><span style="color: rgb(0, 0, 0);">)) </span>**

<span style="font-size:14px;"><u>**<span style="color: rgb(0, 0, 0);">HEAL OVER TIME</span>**</u></span>

_*Heal critical modfier is always set at 100% (2x)_

*   <u>**Heal Over Time spells are NOT modifed by the following**</u>
    *   ******Effect****s on TARGET that increase/decrease healing by a specific amount.**
    *   **Effects on CASTER or TARGET that increase/decrease healing by a specific amount.**

*   **Effects on CASTER that increase critical spell chance. **
    *   <span style="color:#008000;">**SE_CriticalHealOverTime (319)** </span>Modfies by % the chance to critical heal. [Stacks]
    *   **<span style="color: rgb(0, 128, 0);">SE_CriticalRegenlDecay (435) </span>**Modifies by % the chance to critical heal. [Stacks]
        *   **<span style="color: rgb(0, 128, 0);"></span>** Effect value decreases if spell cast is over the maximum level specified.

*   **Effects on TARGET that increase critical spell chance.**
    *   **<span style="color:#800000;">SE_FcHealPctCritIncoming (395) </span>**Modifies by % the casters chance to critical heal.