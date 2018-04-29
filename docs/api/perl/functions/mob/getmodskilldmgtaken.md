gets a mob mod skill dmg taken.
### Arguments
**Name**|**Type**|**Description**
:---|:---|:---
skill_num||

### Example

```perl
my $skill_num = 1;
my $val = $mob->GetModSkillDmgTaken($skill_num);
quest::say($val); # Returns int
```


Generated On 2018-04-29T00:35:14-07:00