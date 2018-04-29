is a quest taskactivityactive.
### Arguments
**Name**|**Type**|**Description**
:---|:---|:---
task_id|uint|
activity_id|uint|

### Example

```perl
my $task_id = 1;
my $activity_id = 1;
my $val = quest::istaskactivityactive($task_id, $activity_id);
quest::say($val); # Returns uint
```


Generated On 2018-04-29T00:30:15-07:00