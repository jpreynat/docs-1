is a client task active.
### Arguments
**Name**|**Type**|**Description**
:---|:---|:---
TaskID||

### Example

```perl
my $TaskID = 1;
my $val = $client->IsTaskActive($TaskID);
quest::say($val); # Returns bool
```


Generated On 2018-04-29T00:30:15-07:00