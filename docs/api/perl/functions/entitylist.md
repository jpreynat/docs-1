* [[$entity_list->CanAddHateForMob(p) # bool|Perl-EntityList-CanAddHateForMob]]
* [[$entity_list->Clear() # void|Perl-EntityList-Clear]]
* [[$entity_list->ClearClientPetitionQueue() # void|Perl-EntityList-ClearClientPetitionQueue]]
* [[$entity_list->ClearFeignAggro(targ) # void|Perl-EntityList-ClearFeignAggro]]
* [[$entity_list->DeleteNPCCorpses() # int|Perl-EntityList-DeleteNPCCorpses]]
* [[$entity_list->DeletePlayerCorpses() # int|Perl-EntityList-DeletePlayerCorpses]]
* [[$entity_list->DoubleAggro(who) # void|Perl-EntityList-DoubleAggro]]
* [[$entity_list->Fighting(targ) # bool|Perl-EntityList-Fighting]]
* [[$entity_list->FindDoor(id) # void|Perl-EntityList-FindDoor]]
* [[$entity_list->GetClientByAccID(accid) # void|Perl-EntityList-GetClientByAccID]]
* [[$entity_list->GetClientByCharID(iCharID) # void|Perl-EntityList-GetClientByCharID]]
* [[$entity_list->GetClientByID(id) # void|Perl-EntityList-GetClientByID]]
* [[$entity_list->GetClientByName(string name) # void|Perl-EntityList-GetClientByName]]
* [[$entity_list->GetClientByWID(iWID) # void|Perl-EntityList-GetClientByWID]]
* [[$entity_list->GetClientList() # array|Perl-EntityList-GetClientList]]
* [[$entity_list->GetCorpseByID(id) # void|Perl-EntityList-GetCorpseByID]]
* [[$entity_list->GetCorpseByName(string name) # void|Perl-EntityList-GetCorpseByName]]
* [[$entity_list->GetCorpseByOwner(client client) # void|Perl-EntityList-GetCorpseByOwner]]
* [[$entity_list->GetCorpseList() # array|Perl-EntityList-GetCorpseList]]
* [[$entity_list->GetCorpseList() # array|Perl-EntityList-GetCorpseList]]
* [[$entity_list->GetDoorsByDBID(id) # void|Perl-EntityList-GetDoorsByDBID]]
* [[$entity_list->GetDoorsByDoorID(id) # void|Perl-EntityList-GetDoorsByDoorID]]
* [[$entity_list->GetDoorsByID(id) # void|Perl-EntityList-GetDoorsByID]]
* [[$entity_list->GetDoorsList() # array|Perl-EntityList-GetDoorsList]]
* [[$entity_list->GetGroupByClient(client client) # void|Perl-EntityList-GetGroupByClient]]
* [[$entity_list->GetGroupByID(id) # void|Perl-EntityList-GetGroupByID]]
* [[$entity_list->GetGroupByLeaderName(leader) # void|Perl-EntityList-GetGroupByLeaderName]]
* [[$entity_list->GetGroupByMob(mob mob) # void|Perl-EntityList-GetGroupByMob]]
* [[$entity_list->GetMob(string name) # void|Perl-EntityList-GetMob]]
* [[$entity_list->GetMobByID(id) # void|Perl-EntityList-GetMobByID]]
* [[$entity_list->GetMobByNpcTypeID(get_id) # void|Perl-EntityList-GetMobByNpcTypeID]]
* [[$entity_list->GetMobID(id) # void|Perl-EntityList-GetMobID]]
* [[$entity_list->GetMobList() # array|Perl-EntityList-GetMobList]]
* [[$entity_list->GetNPCByID(id) # void|Perl-EntityList-GetNPCByID]]
* [[$entity_list->GetNPCByNPCTypeID(int npc_id) # void|Perl-EntityList-GetNPCByNPCTypeID]]
* [[$entity_list->GetNPCList() # array|Perl-EntityList-GetNPCList]]
* [[$entity_list->GetObjectByDBID(id) # void|Perl-EntityList-GetObjectByDBID]]
* [[$entity_list->GetObjectByID(id) # void|Perl-EntityList-GetObjectByID]]
* [[$entity_list->GetObjectList() # array|Perl-EntityList-GetObjectList]]
* [[$entity_list->GetRaidByClient(client client) # void|Perl-EntityList-GetRaidByClient]]
* [[$entity_list->GetRaidByID(id) # void|Perl-EntityList-GetRaidByID]]
* [[$entity_list->GetRandomClient(float x, float y, float z, int distance, excludeclient) # void|Perl-EntityList-GetRandomClient]]
* [[$entity_list->HalveAggro(who) # void|Perl-EntityList-HalveAggro]]
* [[$entity_list->MakeNameUnique(string name) # string|Perl-EntityList-MakeNameUnique]]
* [[$entity_list->Message(to_guilddbid, int type, string message, ...) # void|Perl-EntityList-Message]]
* [[$entity_list->MessageClose(sender, skipsender, dist, int type, string message, ...) # void|Perl-EntityList-MessageClose]]
* [[$entity_list->MessageGroup(sender, skipclose, int type, string message, ...) # void|Perl-EntityList-MessageGroup]]
* [[$entity_list->MessageStatus(to_guilddbid, to_minstatus, int type, string message, ...) # void|Perl-EntityList-MessageStatus]]
* [[$entity_list->OpenDoorsNear(opener) # void|Perl-EntityList-OpenDoorsNear]]
* [[$entity_list->RemoveAllClients() # void|Perl-EntityList-RemoveAllClients]]
* [[$entity_list->RemoveAllCorpses() # void|Perl-EntityList-RemoveAllCorpses]]
* [[$entity_list->RemoveAllDoors() # void|Perl-EntityList-RemoveAllDoors]]
* [[$entity_list->RemoveAllGroups() # void|Perl-EntityList-RemoveAllGroups]]
* [[$entity_list->RemoveAllMobs() # void|Perl-EntityList-RemoveAllMobs]]
* [[$entity_list->RemoveAllNPCs() # void|Perl-EntityList-RemoveAllNPCs]]
* [[$entity_list->RemoveAllObjects() # void|Perl-EntityList-RemoveAllObjects]]
* [[$entity_list->RemoveAllTraps() # void|Perl-EntityList-RemoveAllTraps]]
* [[$entity_list->RemoveClient(delete_id) # bool|Perl-EntityList-RemoveClient]]
* [[$entity_list->RemoveCorpse(delete_id) # bool|Perl-EntityList-RemoveCorpse]]
* [[$entity_list->RemoveDoor(delete_id) # bool|Perl-EntityList-RemoveDoor]]
* [[$entity_list->RemoveEntity(id) # void|Perl-EntityList-RemoveEntity]]
* [[$entity_list->RemoveFromHateLists(mob mob, settoone) # void|Perl-EntityList-RemoveFromHateLists]]
* [[$entity_list->RemoveFromTargets(mob mob) # void|Perl-EntityList-RemoveFromTargets]]
* [[$entity_list->RemoveGroup(delete_id) # bool|Perl-EntityList-RemoveGroup]]
* [[$entity_list->RemoveMob(delete_id) # bool|Perl-EntityList-RemoveMob]]
* [[$entity_list->RemoveNPC(delete_id) # bool|Perl-EntityList-RemoveNPC]]
* [[$entity_list->RemoveNumbers(CLASS, string name) # string|Perl-EntityList-RemoveNumbers]]
* [[$entity_list->RemoveObject(delete_id) # bool|Perl-EntityList-RemoveObject]]
* [[$entity_list->RemoveTrap(delete_id) # bool|Perl-EntityList-RemoveTrap]]
* [[$entity_list->ReplaceWithTarget(pOldMob, pNewTarget) # void|Perl-EntityList-ReplaceWithTarget]]
* [[$entity_list->SignalMobsByNPCID(npc_type, int signal_id) # void|Perl-EntityList-SignalMobsByNPCID]]
* [[$entity_list->ValidMobByNpcTypeID(get_id) # bool|Perl-EntityList-ValidMobByNpcTypeID]]


Generated On 2018-04-29T00:30:15-07:00