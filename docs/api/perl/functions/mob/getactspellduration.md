gets a mob act spell duration.
### Arguments
**Name**|**Type**|**Description**
:---|:---|:---
spell_id|int|
duration|int|

### Example

```perl
my $spell_id = 1;
my $duration = 1;
my $val = $mob->GetActSpellDuration($spell_id, $duration);
quest::say($val); # Returns int
```


Generated On 2018-04-29T00:35:14-07:00