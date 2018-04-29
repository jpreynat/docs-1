gets a corpse worn item.
### Arguments
**Name**|**Type**|**Description**
:---|:---|:---
equipSlot||

### Example

```perl
my $equipSlot = 1;
my $val = $corpse->GetWornItem($equipSlot);
quest::say($val); # Returns uint
```


Generated On 2018-04-29T00:35:14-07:00