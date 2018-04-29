AssignTask.
### Arguments
**Name**|**Type**|**Description**
:---|:---|:---
TaskID||
NPCID||
enforce_level_requirement|bool|

### Example

```perl
my $TaskID = 1;
my $NPCID = 1;
my $enforce_level_requirement = 1;

$client->AssignTask($TaskID, $NPCID, $enforce_level_requirement); # Returns void
```


Generated On 2018-04-29T00:30:15-07:00