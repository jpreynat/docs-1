* [[$mob->:IsRunning() # bool|Perl-Mob-:IsRunning]]
* [[$mob->AddFeignMemory(attacker) # void|Perl-Mob-AddFeignMemory]]
* [[$mob->AddToHateList(other, hate) # void|Perl-Mob-AddToHateList]]
* [[$mob->Attack(other, Hand) # bool|Perl-Mob-Attack]]
* [[$mob->BehindMob(other) # bool|Perl-Mob-BehindMob]]
* [[$mob->BuffFadeAll() # void|Perl-Mob-BuffFadeAll]]
* [[$mob->BuffFadeByEffect(effectid, skipslot) # void|Perl-Mob-BuffFadeByEffect]]
* [[$mob->BuffFadeBySlot(int slot, iRecalcBonuses) # void|Perl-Mob-BuffFadeBySlot]]
* [[$mob->BuffFadeBySpellID(int spell_id) # void|Perl-Mob-BuffFadeBySpellID]]
* [[$mob->CalculateDistance(float x, float y, float z) # double|Perl-Mob-CalculateDistance]]
* [[$mob->CalculateHeadingToTarget(in_x, in_y) # int|Perl-Mob-CalculateHeadingToTarget]]
* [[$mob->CalculateNewPosition(float x, float y, float z, speed, checkZ) # bool|Perl-Mob-CalculateNewPosition]]
* [[$mob->CalculateNewPosition2(float x, float y, float z, speed, checkZ) # bool|Perl-Mob-CalculateNewPosition2]]
* [[$mob->CameraEffect(int duration, intensity, singleclient, global) # void|Perl-Mob-CameraEffect]]
* [[$mob->CanBuffStack(spellid, caster_level, iFailIfOverwrite) # int|Perl-Mob-CanBuffStack]]
* [[$mob->CanClassEquipItem(int item_id) # bool|Perl-Mob-CanClassEquipItem]]
* [[$mob->CanThisClassDodge() # bool|Perl-Mob-CanThisClassDodge]]
* [[$mob->CanThisClassDoubleAttack() # bool|Perl-Mob-CanThisClassDoubleAttack]]
* [[$mob->CanThisClassDualWield() # bool|Perl-Mob-CanThisClassDualWield]]
* [[$mob->CanThisClassParry() # bool|Perl-Mob-CanThisClassParry]]
* [[$mob->CanThisClassRiposte() # bool|Perl-Mob-CanThisClassRiposte]]
* [[$mob->CastSpell(int spell_id, int target_id, int slot) # void|Perl-Mob-CastSpell]]
* [[$mob->CastToClient() # void|Perl-Mob-CastToClient]]
* [[$mob->CastToCorpse() # void|Perl-Mob-CastToCorpse]]
* [[$mob->CastToMob() # void|Perl-Mob-CastToMob]]
* [[$mob->CastToNPC() # void|Perl-Mob-CastToNPC]]
* [[$mob->CastingSpellID() # uint|Perl-Mob-CastingSpellID]]
* [[$mob->ChangeLastName(string name) # void|Perl-Mob-ChangeLastName]]
* [[$mob->ChangeSize(in_size, bNoRestriction) # void|Perl-Mob-ChangeSize]]
* [[$mob->Charmed() # bool|Perl-Mob-Charmed]]
* [[$mob->CheckAggro(other) # bool|Perl-Mob-CheckAggro]]
* [[$mob->CheckAggroAmount(spellid) # uint|Perl-Mob-CheckAggroAmount]]
* [[$mob->CheckHealAggroAmount(spellid, possible_heal_amt) # uint|Perl-Mob-CheckHealAggroAmount]]
* [[$mob->CheckLoS(mob mob) # bool|Perl-Mob-CheckLoS]]
* [[$mob->CheckLoSToLoc(loc_x, loc_y, loc_z, mob_size) # bool|Perl-Mob-CheckLoSToLoc]]
* [[$mob->ClearFeignMemory() # void|Perl-Mob-ClearFeignMemory]]
* [[$mob->ClearLastName() # void|Perl-Mob-ClearLastName]]
* [[$mob->ClearSpecialAbilities() # void|Perl-Mob-ClearSpecialAbilities]]
* [[$mob->CombatRange(target) # bool|Perl-Mob-CombatRange]]
* [[$mob->Damage(string from, damage, int spell_id, attack_skill, avoidable) # void|Perl-Mob-Damage]]
* [[$mob->Depop(StartSpawnTimer) # void|Perl-Mob-Depop]]
* [[$mob->DivineAura() # bool|Perl-Mob-DivineAura]]
* [[$mob->DoAnim(animnum, int type) # void|Perl-Mob-DoAnim]]
* [[$mob->DoArcheryAttackDmg(target, RangeWeapon) # void|Perl-Mob-DoArcheryAttackDmg]]
* [[$mob->DoKnockback(caster, pushback, pushup) # void|Perl-Mob-DoKnockback]]
* [[$mob->DoMeleeSkillAttackDmg(target, weapon_damage, skill, chance_mod, focus, CanRiposte) # void|Perl-Mob-DoMeleeSkillAttackDmg]]
* [[$mob->DoSpecialAttackDamage(target, skill, max_damage, min_damage) # void|Perl-Mob-DoSpecialAttackDamage]]
* [[$mob->DoThrowingAttackDmg(target, RangeWeapon) # void|Perl-Mob-DoThrowingAttackDmg]]
* [[$mob->DontBuffMeBefore() # uint|Perl-Mob-DontBuffMeBefore]]
* [[$mob->DontDotMeBefore() # uint|Perl-Mob-DontDotMeBefore]]
* [[$mob->DontHealMeBefore() # uint|Perl-Mob-DontHealMeBefore]]
* [[$mob->DontRootMeBefore() # uint|Perl-Mob-DontRootMeBefore]]
* [[$mob->DontSnareMeBefore() # uint|Perl-Mob-DontSnareMeBefore]]
* [[$mob->DoubleAggro(other) # void|Perl-Mob-DoubleAggro]]
* [[$mob->Emote(string format, ...) # void|Perl-Mob-Emote]]
* [[$mob->EntityVariableExists(id) # bool|Perl-Mob-EntityVariableExists]]
* [[$mob->FaceTarget(MobToFace) # void|Perl-Mob-FaceTarget]]
* [[$mob->FindBuff(spellid) # bool|Perl-Mob-FindBuff]]
* [[$mob->FindGroundZ(new_x, new_y, z_offset) # double|Perl-Mob-FindGroundZ]]
* [[$mob->FindType(int type, bOffensive) # bool|Perl-Mob-FindType]]
* [[$mob->GMMove(float x, float y, float z, float heading) # void|Perl-Mob-GMMove]]
* [[$mob->Gate() # void|Perl-Mob-Gate]]
* [[$mob->GetAA(rank_id) # uint|Perl-Mob-GetAA]]
* [[$mob->GetAAByAAID(aa_id) # uint|Perl-Mob-GetAAByAAID]]
* [[$mob->GetAC() # uint|Perl-Mob-GetAC]]
* [[$mob->GetAGI() # int|Perl-Mob-GetAGI]]
* [[$mob->GetATK() # uint|Perl-Mob-GetATK]]
* [[$mob->GetActSpellCasttime(int spell_id, casttime) # int|Perl-Mob-GetActSpellCasttime]]
* [[$mob->GetActSpellCost(int spell_id, int cost) # int|Perl-Mob-GetActSpellCost]]
* [[$mob->GetActSpellDamage(int spell_id, int value) # int|Perl-Mob-GetActSpellDamage]]
* [[$mob->GetActSpellDuration(int spell_id, int duration) # int|Perl-Mob-GetActSpellDuration]]
* [[$mob->GetActSpellHealing(int spell_id, int value) # int|Perl-Mob-GetActSpellHealing]]
* [[$mob->GetActSpellRange(int spell_id, range) # double|Perl-Mob-GetActSpellRange]]
* [[$mob->GetAggroRange() # double|Perl-Mob-GetAggroRange]]
* [[$mob->GetAllowBeneficial() # bool|Perl-Mob-GetAllowBeneficial]]
* [[$mob->GetAppearance() # uint|Perl-Mob-GetAppearance]]
* [[$mob->GetArmorTint(material_slot) # int|Perl-Mob-GetArmorTint]]
* [[$mob->GetAssistRange() # double|Perl-Mob-GetAssistRange]]
* [[$mob->GetBaseGender() # uint|Perl-Mob-GetBaseGender]]
* [[$mob->GetBaseRace() # uint|Perl-Mob-GetBaseRace]]
* [[$mob->GetBaseSize() # double|Perl-Mob-GetBaseSize]]
* [[$mob->GetBeard() # uint|Perl-Mob-GetBeard]]
* [[$mob->GetBeardColor() # uint|Perl-Mob-GetBeardColor]]
* [[$mob->GetBodyType() # uint|Perl-Mob-GetBodyType]]
* [[$mob->GetBuffSlotFromType(int type) # int|Perl-Mob-GetBuffSlotFromType]]
* [[$mob->GetCHA() # int|Perl-Mob-GetCHA]]
* [[$mob->GetCR() # int|Perl-Mob-GetCR]]
* [[$mob->GetCasterLevel(int spell_id) # int|Perl-Mob-GetCasterLevel]]
* [[$mob->GetClass() # uint|Perl-Mob-GetClass]]
* [[$mob->GetClassLevelFactor() # uint|Perl-Mob-GetClassLevelFactor]]
* [[$mob->GetCleanName() # string|Perl-Mob-GetCleanName]]
* [[$mob->GetCorruption() # int|Perl-Mob-GetCorruption]]
* [[$mob->GetDEX() # int|Perl-Mob-GetDEX]]
* [[$mob->GetDR() # int|Perl-Mob-GetDR]]
* [[$mob->GetDamageAmount(tmob) # uint|Perl-Mob-GetDamageAmount]]
* [[$mob->GetDeity() # uint|Perl-Mob-GetDeity]]
* [[$mob->GetDrakkinDetails() # uint|Perl-Mob-GetDrakkinDetails]]
* [[$mob->GetDrakkinHeritage() # uint|Perl-Mob-GetDrakkinHeritage]]
* [[$mob->GetDrakkinTattoo() # uint|Perl-Mob-GetDrakkinTattoo]]
* [[$mob->GetEntityVariable(id) # string|Perl-Mob-GetEntityVariable]]
* [[$mob->GetEquipment(material_slot) # int|Perl-Mob-GetEquipment]]
* [[$mob->GetEquipmentColor(material_slot) # int|Perl-Mob-GetEquipmentColor]]
* [[$mob->GetEquipmentMaterial(material_slot) # int|Perl-Mob-GetEquipmentMaterial]]
* [[$mob->GetEyeColor1() # uint|Perl-Mob-GetEyeColor1]]
* [[$mob->GetEyeColor2() # uint|Perl-Mob-GetEyeColor2]]
* [[$mob->GetFR() # int|Perl-Mob-GetFR]]
* [[$mob->GetFlurryChance() # uint|Perl-Mob-GetFlurryChance]]
* [[$mob->GetFollowID() # uint|Perl-Mob-GetFollowID]]
* [[$mob->GetGender() # uint|Perl-Mob-GetGender]]
* [[$mob->GetHP() # int|Perl-Mob-GetHP]]
* [[$mob->GetHPRatio() # double|Perl-Mob-GetHPRatio]]
* [[$mob->GetHairColor() # uint|Perl-Mob-GetHairColor]]
* [[$mob->GetHairStyle() # uint|Perl-Mob-GetHairStyle]]
* [[$mob->GetHandToHandDamage() # int|Perl-Mob-GetHandToHandDamage]]
* [[$mob->GetHandToHandDelay() # int|Perl-Mob-GetHandToHandDelay]]
* [[$mob->GetHaste() # int|Perl-Mob-GetHaste]]
* [[$mob->GetHateAmount(tmob, is_dam) # uint|Perl-Mob-GetHateAmount]]
* [[$mob->GetHateDamageTop(other) # void|Perl-Mob-GetHateDamageTop]]
* [[$mob->GetHateList() # array|Perl-Mob-GetHateList]]
* [[$mob->GetHateRandom() # void|Perl-Mob-GetHateRandom]]
* [[$mob->GetHateTop() # void|Perl-Mob-GetHateTop]]
* [[$mob->GetHeading() # double|Perl-Mob-GetHeading]]
* [[$mob->GetHelmTexture() # uint|Perl-Mob-GetHelmTexture]]
* [[$mob->GetHerosForgeModel(material_slot) # int|Perl-Mob-GetHerosForgeModel]]
* [[$mob->GetID() # uint|Perl-Mob-GetID]]
* [[$mob->GetINT() # int|Perl-Mob-GetINT]]
* [[$mob->GetInvul() # bool|Perl-Mob-GetInvul]]
* [[$mob->GetItemHPBonuses() # int|Perl-Mob-GetItemHPBonuses]]
* [[$mob->GetItemStat(itemid, stat) # int|Perl-Mob-GetItemStat]]
* [[$mob->GetLevel() # uint|Perl-Mob-GetLevel]]
* [[$mob->GetLevelCon(iOtherLevel) # uint|Perl-Mob-GetLevelCon]]
* [[$mob->GetLevelHP(tlevel) # uint|Perl-Mob-GetLevelHP]]
* [[$mob->GetLuclinFace() # uint|Perl-Mob-GetLuclinFace]]
* [[$mob->GetMR() # int|Perl-Mob-GetMR]]
* [[$mob->GetMana() # int|Perl-Mob-GetMana]]
* [[$mob->GetManaRatio() # double|Perl-Mob-GetManaRatio]]
* [[$mob->GetMaxAGI() # int|Perl-Mob-GetMaxAGI]]
* [[$mob->GetMaxCHA() # int|Perl-Mob-GetMaxCHA]]
* [[$mob->GetMaxDEX() # int|Perl-Mob-GetMaxDEX]]
* [[$mob->GetMaxHP() # int|Perl-Mob-GetMaxHP]]
* [[$mob->GetMaxINT() # int|Perl-Mob-GetMaxINT]]
* [[$mob->GetMaxMana() # int|Perl-Mob-GetMaxMana]]
* [[$mob->GetMaxSTA() # int|Perl-Mob-GetMaxSTA]]
* [[$mob->GetMaxSTR() # int|Perl-Mob-GetMaxSTR]]
* [[$mob->GetMaxWIS() # int|Perl-Mob-GetMaxWIS]]
* [[$mob->GetMeleeMitigation() # int|Perl-Mob-GetMeleeMitigation]]
* [[$mob->GetModSkillDmgTaken(skill_num) # int|Perl-Mob-GetModSkillDmgTaken]]
* [[$mob->GetModVulnerability(resist) # int|Perl-Mob-GetModVulnerability]]
* [[$mob->GetNPCTypeID() # uint|Perl-Mob-GetNPCTypeID]]
* [[$mob->GetName() # string|Perl-Mob-GetName]]
* [[$mob->GetNimbusEffect1() # uint|Perl-Mob-GetNimbusEffect1]]
* [[$mob->GetNimbusEffect2() # uint|Perl-Mob-GetNimbusEffect2]]
* [[$mob->GetNimbusEffect3() # uint|Perl-Mob-GetNimbusEffect3]]
* [[$mob->GetOwnerID() # uint|Perl-Mob-GetOwnerID]]
* [[$mob->GetPR() # int|Perl-Mob-GetPR]]
* [[$mob->GetPetID() # uint|Perl-Mob-GetPetID]]
* [[$mob->GetPetOrder() # int|Perl-Mob-GetPetOrder]]
* [[$mob->GetPetType() # uint|Perl-Mob-GetPetType]]
* [[$mob->GetPhR() # int|Perl-Mob-GetPhR]]
* [[$mob->GetRace() # uint|Perl-Mob-GetRace]]
* [[$mob->GetResist(int type) # int|Perl-Mob-GetResist]]
* [[$mob->GetReverseFactionCon(iOther) # int|Perl-Mob-GetReverseFactionCon]]
* [[$mob->GetRunAnimSpeed() # uint|Perl-Mob-GetRunAnimSpeed]]
* [[$mob->GetRunspeed() # double|Perl-Mob-GetRunspeed]]
* [[$mob->GetSTA() # int|Perl-Mob-GetSTA]]
* [[$mob->GetSTR() # int|Perl-Mob-GetSTR]]
* [[$mob->GetShieldTarget() # void|Perl-Mob-GetShieldTarget]]
* [[$mob->GetSize() # double|Perl-Mob-GetSize]]
* [[$mob->GetSkill(skill_num) # uint|Perl-Mob-GetSkill]]
* [[$mob->GetSkillDmgTaken(skill_num) # uint|Perl-Mob-GetSkillDmgTaken]]
* [[$mob->GetSpecialAbility(special_ability) # int|Perl-Mob-GetSpecialAbility]]
* [[$mob->GetSpecialAbilityParam(special_ability, param) # int|Perl-Mob-GetSpecialAbilityParam]]
* [[$mob->GetSpecializeSkillValue(int spell_id) # uint|Perl-Mob-GetSpecializeSkillValue]]
* [[$mob->GetSpellHPBonuses() # int|Perl-Mob-GetSpellHPBonuses]]
* [[$mob->GetSpellIDFromSlot(int slot) # int|Perl-Mob-GetSpellIDFromSlot]]
* [[$mob->GetSpellStat(itemid, stat, int slot) # int|Perl-Mob-GetSpellStat]]
* [[$mob->GetTarget() # void|Perl-Mob-GetTarget]]
* [[$mob->GetTexture() # uint|Perl-Mob-GetTexture]]
* [[$mob->GetWIS() # int|Perl-Mob-GetWIS]]
* [[$mob->GetWalkspeed() # double|Perl-Mob-GetWalkspeed]]
* [[$mob->GetWaypointH() # double|Perl-Mob-GetWaypointH]]
* [[$mob->GetWaypointID() # uint|Perl-Mob-GetWaypointID]]
* [[$mob->GetWaypointPause() # uint|Perl-Mob-GetWaypointPause]]
* [[$mob->GetWaypointX() # double|Perl-Mob-GetWaypointX]]
* [[$mob->GetWaypointY() # double|Perl-Mob-GetWaypointY]]
* [[$mob->GetWaypointZ() # double|Perl-Mob-GetWaypointZ]]
* [[$mob->GetX() # double|Perl-Mob-GetX]]
* [[$mob->GetY() # double|Perl-Mob-GetY]]
* [[$mob->GetZ() # double|Perl-Mob-GetZ]]
* [[$mob->GetZoneID() # uint|Perl-Mob-GetZoneID]]
* [[$mob->GoToBind() # void|Perl-Mob-GoToBind]]
* [[$mob->HalveAggro(other) # void|Perl-Mob-HalveAggro]]
* [[$mob->HasNPCSpecialAtk(parse) # bool|Perl-Mob-HasNPCSpecialAtk]]
* [[$mob->HasOwner() # bool|Perl-Mob-HasOwner]]
* [[$mob->HasPet() # bool|Perl-Mob-HasPet]]
* [[$mob->HasProcs() # bool|Perl-Mob-HasProcs]]
* [[$mob->HasShieldEquiped() # bool|Perl-Mob-HasShieldEquiped]]
* [[$mob->HasTwoHandBluntEquiped() # bool|Perl-Mob-HasTwoHandBluntEquiped]]
* [[$mob->HasTwoHanderEquipped() # bool|Perl-Mob-HasTwoHanderEquipped]]
* [[$mob->HateSummon() # bool|Perl-Mob-HateSummon]]
* [[$mob->Heal() # void|Perl-Mob-Heal]]
* [[$mob->HealDamage(amount, caster) # void|Perl-Mob-HealDamage]]
* [[$mob->InterruptSpell(spellid) # void|Perl-Mob-InterruptSpell]]
* [[$mob->IsAIControlled() # bool|Perl-Mob-IsAIControlled]]
* [[$mob->IsAmnesiad() # bool|Perl-Mob-IsAmnesiad]]
* [[$mob->IsBeacon() # bool|Perl-Mob-IsBeacon]]
* [[$mob->IsBeneficialAllowed(target) # bool|Perl-Mob-IsBeneficialAllowed]]
* [[$mob->IsBlind() # bool|Perl-Mob-IsBlind]]
* [[$mob->IsCasting() # bool|Perl-Mob-IsCasting]]
* [[$mob->IsClient() # bool|Perl-Mob-IsClient]]
* [[$mob->IsCorpse() # bool|Perl-Mob-IsCorpse]]
* [[$mob->IsDoor() # bool|Perl-Mob-IsDoor]]
* [[$mob->IsEliteMaterialItem(material_slot) # uint|Perl-Mob-IsEliteMaterialItem]]
* [[$mob->IsEngaged() # bool|Perl-Mob-IsEngaged]]
* [[$mob->IsEnraged() # bool|Perl-Mob-IsEnraged]]
* [[$mob->IsFeared() # bool|Perl-Mob-IsFeared]]
* [[$mob->IsImmuneToSpell(int spell_id, caster) # bool|Perl-Mob-IsImmuneToSpell]]
* [[$mob->IsInvisible(other) # bool|Perl-Mob-IsInvisible]]
* [[$mob->IsMeleeDisabled() # bool|Perl-Mob-IsMeleeDisabled]]
* [[$mob->IsMezzed() # bool|Perl-Mob-IsMezzed]]
* [[$mob->IsMob() # bool|Perl-Mob-IsMob]]
* [[$mob->IsMoving() # bool|Perl-Mob-IsMoving]]
* [[$mob->IsNPC() # bool|Perl-Mob-IsNPC]]
* [[$mob->IsNPCCorpse() # bool|Perl-Mob-IsNPCCorpse]]
* [[$mob->IsObject() # bool|Perl-Mob-IsObject]]
* [[$mob->IsPet() # bool|Perl-Mob-IsPet]]
* [[$mob->IsPlayerCorpse() # bool|Perl-Mob-IsPlayerCorpse]]
* [[$mob->IsRoamer() # bool|Perl-Mob-IsRoamer]]
* [[$mob->IsRooted() # bool|Perl-Mob-IsRooted]]
* [[$mob->IsSilenced() # bool|Perl-Mob-IsSilenced]]
* [[$mob->IsStunned() # bool|Perl-Mob-IsStunned]]
* [[$mob->IsTargetable() # bool|Perl-Mob-IsTargetable]]
* [[$mob->IsTargeted() # bool|Perl-Mob-IsTargeted]]
* [[$mob->IsTrap() # bool|Perl-Mob-IsTrap]]
* [[$mob->IsWarriorClass() # bool|Perl-Mob-IsWarriorClass]]
* [[$mob->Kill() # void|Perl-Mob-Kill]]
* [[$mob->MakePet(int spell_id, pettype, string name) # void|Perl-Mob-MakePet]]
* [[$mob->MakeTempPet(int spell_id, string name) # void|Perl-Mob-MakeTempPet]]
* [[$mob->Mesmerize() # void|Perl-Mob-Mesmerize]]
* [[$mob->Message(int type, string message, ...) # void|Perl-Mob-Message]]
* [[$mob->Message_StringID(int type, string_id, int distance) # void|Perl-Mob-Message_StringID]]
* [[$mob->ModSkillDmgTaken(skill, int value) # void|Perl-Mob-ModSkillDmgTaken]]
* [[$mob->ModVulnerability(resist, int value) # void|Perl-Mob-ModVulnerability]]
* [[$mob->NPCSpecialAttacks(parse, permtag, reset, remove) # void|Perl-Mob-NPCSpecialAttacks]]
* [[$mob->ProcessSpecialAbilities(str) # void|Perl-Mob-ProcessSpecialAbilities]]
* [[$mob->ProjectileAnim(mob mob, int item_id, IsArrow, speed, angle, tilt, arc) # void|Perl-Mob-ProjectileAnim]]
* [[$mob->RangedAttack(other) # void|Perl-Mob-RangedAttack]]
* [[$mob->RemoveFromFeignMemory(attacker) # void|Perl-Mob-RemoveFromFeignMemory]]
* [[$mob->RemoveNimbusEffect(effectid) # void|Perl-Mob-RemoveNimbusEffect]]
* [[$mob->ResistSpell(ressit_type, int spell_id, caster) # double|Perl-Mob-ResistSpell]]
* [[$mob->RogueAssassinate(other) # void|Perl-Mob-RogueAssassinate]]
* [[$mob->Say(string format, ...) # void|Perl-Mob-Say]]
* [[$mob->SeeHide() # bool|Perl-Mob-SeeHide]]
* [[$mob->SeeImprovedHide() # bool|Perl-Mob-SeeImprovedHide]]
* [[$mob->SeeInvisible() # uint|Perl-Mob-SeeInvisible]]
* [[$mob->SeeInvisibleUndead() # bool|Perl-Mob-SeeInvisibleUndead]]
* [[$mob->SendAppearanceEffect(parm1, parm2, parm3, parm4, parm5, singleclient) # void|Perl-Mob-SendAppearanceEffect]]
* [[$mob->SendIllusion(race, gender, texture, helmtexture, face, hairstyle, haircolor, beard, beardcolor, drakkin_heritage, drakkin_tattoo, drakkin_details, int size) # void|Perl-Mob-SendIllusion]]
* [[$mob->SendPosUpdate(int iSendToSelf) # void|Perl-Mob-SendPosUpdate]]
* [[$mob->SendPosition() # void|Perl-Mob-SendPosition]]
* [[$mob->SendTo(new_x, new_y, new_z) # void|Perl-Mob-SendTo]]
* [[$mob->SendToFixZ(new_x, new_y, new_z) # void|Perl-Mob-SendToFixZ]]
* [[$mob->SendWearChange(material_slot) # void|Perl-Mob-SendWearChange]]
* [[$mob->SetAA(aa_id, points, int charges) # bool|Perl-Mob-SetAA]]
* [[$mob->SetAllowBeneficial(int value) # void|Perl-Mob-SetAllowBeneficial]]
* [[$mob->SetAppearance(app, iIgnoreSelf) # void|Perl-Mob-SetAppearance]]
* [[$mob->SetBodyType(int type, overwrite_orig) # void|Perl-Mob-SetBodyType]]
* [[$mob->SetCurrentWP(waypoint) # void|Perl-Mob-SetCurrentWP]]
* [[$mob->SetDeltas(delta_x, delta_y, delta_z, delta_h) # void|Perl-Mob-SetDeltas]]
* [[$mob->SetDisableMelee(int value) # void|Perl-Mob-SetDisableMelee]]
* [[$mob->SetEntityVariable(id, var) # void|Perl-Mob-SetEntityVariable]]
* [[$mob->SetExtraHaste(Haste) # void|Perl-Mob-SetExtraHaste]]
* [[$mob->SetFlurryChance(int value) # void|Perl-Mob-SetFlurryChance]]
* [[$mob->SetFlyMode(0|1|2|3) # void|Perl-Mob-SetFlyMode]]
* [[$mob->SetFollowID(id) # void|Perl-Mob-SetFollowID]]
* [[$mob->SetGender(gender) # void|Perl-Mob-SetGender]]
* [[$mob->SetHP(hp) # void|Perl-Mob-SetHP]]
* [[$mob->SetHate(other, hate) # void|Perl-Mob-SetHate]]
* [[$mob->SetHeading(iHeading) # void|Perl-Mob-SetHeading]]
* [[$mob->SetInvisible(state) # void|Perl-Mob-SetInvisible]]
* [[$mob->SetInvul(invul) # void|Perl-Mob-SetInvul]]
* [[$mob->SetLD(int value) # void|Perl-Mob-SetLD]]
* [[$mob->SetLevel(in_level, command) # void|Perl-Mob-SetLevel]]
* [[$mob->SetMana(amount) # void|Perl-Mob-SetMana]]
* [[$mob->SetMaxHP() # void|Perl-Mob-SetMaxHP]]
* [[$mob->SetOOCRegen(newoocregen) # void|Perl-Mob-SetOOCRegen]]
* [[$mob->SetOwnerID(NewOwnerID) # void|Perl-Mob-SetOwnerID]]
* [[$mob->SetPetID(NewPetID) # void|Perl-Mob-SetPetID]]
* [[$mob->SetPetOrder(i) # void|Perl-Mob-SetPetOrder]]
* [[$mob->SetRace(race) # void|Perl-Mob-SetRace]]
* [[$mob->SetRunAnimSpeed(in) # void|Perl-Mob-SetRunAnimSpeed]]
* [[$mob->SetRunning(int value) # void|Perl-Mob-SetRunning]]
* [[$mob->SetShieldTarget(mob mob) # void|Perl-Mob-SetShieldTarget]]
* [[$mob->SetSlotTint(material_slot, red_tint, green_tint, blue_tint) # void|Perl-Mob-SetSlotTint]]
* [[$mob->SetSpecialAbility(ability, int value) # void|Perl-Mob-SetSpecialAbility]]
* [[$mob->SetSpecialAbilityParam(ability, param, int value) # void|Perl-Mob-SetSpecialAbilityParam]]
* [[$mob->SetTarget(mob mob) # void|Perl-Mob-SetTarget]]
* [[$mob->SetTargetDestSteps(target_steps) # void|Perl-Mob-SetTargetDestSteps]]
* [[$mob->SetTargetable(on) # void|Perl-Mob-SetTargetable]]
* [[$mob->SetTexture(texture) # void|Perl-Mob-SetTexture]]
* [[$mob->Shout(string format, ...) # void|Perl-Mob-Shout]]
* [[$mob->SignalClient(client client, data) # void|Perl-Mob-SignalClient]]
* [[$mob->SpellEffect(effect, int duration, finish_delay, zone_wide, unk20, perm_effect, client client) # void|Perl-Mob-SpellEffect]]
* [[$mob->SpellFinished(int spell_id, spell_target) # void|Perl-Mob-SpellFinished]]
* [[$mob->Spin() # void|Perl-Mob-Spin]]
* [[$mob->StartEnrage() # void|Perl-Mob-StartEnrage]]
* [[$mob->Stun(int duration) # void|Perl-Mob-Stun]]
* [[$mob->TempName(string name) # void|Perl-Mob-TempName]]
* [[$mob->ThrowingAttack(other) # void|Perl-Mob-ThrowingAttack]]
* [[$mob->TypesTempPet(typesid, string name) # void|Perl-Mob-TypesTempPet]]
* [[$mob->WearChange(material_slot, texture, int color, hero_forge_model) # void|Perl-Mob-WearChange]]
* [[$mob->WipeHateList() # void|Perl-Mob-WipeHateList]]


Generated On 2018-04-29T00:30:15-07:00