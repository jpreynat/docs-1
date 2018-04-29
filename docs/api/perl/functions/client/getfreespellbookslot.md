gets a client free spell book slot.
### Arguments
**Name**|**Type**|**Description**
:---|:---|:---
start_slot||

### Example

```perl
my $start_slot = 1;
my $val = $client->GetFreeSpellBookSlot($start_slot);
quest::say($val); # Returns int
```


Generated On 2018-04-29T00:35:14-07:00