EVENT_DEATH_ZONE
### Exports
**Name**|**Type**|**Description**
:-----|:-----|:-----
killer_id|int|
killer_damage|int|
killer_spell|int|
killer_skill|int|
killed_npc_id|int|
### Example
```perl
sub EVENT_DEATH_ZONE {
	quest::say($killer_id); # returns int
	quest::say($killer_damage); # returns int
	quest::say($killer_spell); # returns int
	quest::say($killer_skill); # returns int
	quest::say($killed_npc_id); # returns int
}
```

Generated On 2018-04-29T00:35:14-07:00