gets a mob act spell casttime.
### Arguments
**Name**|**Type**|**Description**
:---|:---|:---
spell_id|int|
casttime||

### Example

```perl
my $spell_id = 1;
my $casttime = 1;
my $val = $mob->GetActSpellCasttime($spell_id, $casttime);
quest::say($val); # Returns int
```


Generated On 2018-04-29T00:30:15-07:00