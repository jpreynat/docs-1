EVENT_LOOT
### Exports
**Name**|**Type**|**Description**
:-----|:-----|:-----
looted_id|int|
looted_charges|int|
corpse|int|
### Example
```perl
sub EVENT_LOOT {
	quest::say($looted_id); # returns int
	quest::say($looted_charges); # returns int
	quest::say($corpse); # returns int
}
```

Generated On 2018-04-29T00:35:14-07:00