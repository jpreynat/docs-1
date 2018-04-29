EVENT_USE_SKILL
### Exports
**Name**|**Type**|**Description**
:-----|:-----|:-----
skill_id|int|
skill_level|int|
### Example
```perl
sub EVENT_USE_SKILL {
	quest::say($skill_id); # returns int
	quest::say($skill_level); # returns int
}
```

Generated On 2018-04-29T00:35:14-07:00