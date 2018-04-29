EVENT_GROUP_CHANGE
### Exports
**Name**|**Type**|**Description**
:-----|:-----|:-----
grouped|int|
raided|int|
### Example
```perl
sub EVENT_GROUP_CHANGE {
	quest::say($grouped); # returns int
	quest::say($raided); # returns int
}
```

Generated On 2018-04-29T00:35:14-07:00