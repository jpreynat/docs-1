EVENT_SPAWN_ZONE
### Exports
**Name**|**Type**|**Description**
:-----|:-----|:-----
spawned_entity_id|int|
spawned_npc_id|int|
### Example
```perl
sub EVENT_SPAWN_ZONE {
	quest::say($spawned_entity_id); # returns int
	quest::say($spawned_npc_id); # returns int
}
```

Generated On 2018-04-29T00:35:14-07:00