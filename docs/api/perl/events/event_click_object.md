EVENT_CLICK_OBJECT
### Exports
**Name**|**Type**|**Description**
:-----|:-----|:-----
objectid|int|
clicker_id|int|
### Example
```perl
sub EVENT_CLICK_OBJECT {
	quest::say($objectid); # returns int
	quest::say($clicker_id); # returns int
}
```

Generated On 2018-04-29T00:35:14-07:00