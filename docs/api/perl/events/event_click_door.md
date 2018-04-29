EVENT_CLICK_DOOR
### Exports
**Name**|**Type**|**Description**
:-----|:-----|:-----
doorid|int|
version|int|
### Example
```perl
sub EVENT_CLICK_DOOR {
	quest::say($doorid); # returns int
	quest::say($version); # returns int
}
```

Generated On 2018-04-29T00:35:14-07:00