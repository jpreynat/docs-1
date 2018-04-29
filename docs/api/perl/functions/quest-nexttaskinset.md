nexttaskinset.
### Arguments
**Name**|**Type**|**Description**
:---|:---|:---
task_set|int|
task_id|uint|

### Example

```perl
my $task_set = 1;
my $task_id = 1;
my $val = quest::nexttaskinset($task_set, $task_id);
quest::say($val); # Returns int
```


Generated On 2018-04-29T00:30:15-07:00