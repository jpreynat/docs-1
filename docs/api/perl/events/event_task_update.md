EVENT_TASK_UPDATE
### Exports
**Name**|**Type**|**Description**
:-----|:-----|:-----
donecount|int|
activity_id|int|
task_id|int|
### Example
```perl
sub EVENT_TASK_UPDATE {
	quest::say($donecount); # returns int
	quest::say($activity_id); # returns int
	quest::say($task_id); # returns int
}
```

Generated On 2018-04-29T00:35:14-07:00