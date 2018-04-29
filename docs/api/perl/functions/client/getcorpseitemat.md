gets a client corpse item at.
### Arguments
**Name**|**Type**|**Description**
:---|:---|:---
corpse_id||
slotid||

### Example

```perl
my $corpse_id = 1;
my $slotid = 1;
my $val = $client->GetCorpseItemAt($corpse_id, $slotid);
quest::say($val); # Returns int
```


Generated On 2018-04-29T00:35:14-07:00