gets a mob act spell cost.
### Arguments
**Name**|**Type**|**Description**
:---|:---|:---
spell_id|int|
cost|int|

### Example

```perl
my $spell_id = 1;
my $cost = 1;
my $val = $mob->GetActSpellCost($spell_id, $cost);
quest::say($val); # Returns int
```


Generated On 2018-04-29T00:35:14-07:00