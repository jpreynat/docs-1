Damage.
### Arguments
**Name**|**Type**|**Description**
:---|:---|:---
from|string|
damage||
spell_id|int|
attack_skill||
avoidable||

### Example

```perl
my $from = "test";
my $damage = 1;
my $spell_id = 1;
my $attack_skill = 1;
my $avoidable = 1;

$mob->Damage($from, $damage, $spell_id, $attack_skill, $avoidable); # Returns void
```


Generated On 2018-04-29T00:35:14-07:00