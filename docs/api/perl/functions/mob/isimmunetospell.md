is a mob immune to spell.
### Arguments
**Name**|**Type**|**Description**
:---|:---|:---
spell_id|int|
caster||

### Example

```perl
my $spell_id = 1;
my $caster = 1;
my $val = $mob->IsImmuneToSpell($spell_id, $caster);
quest::say($val); # Returns bool
```


Generated On 2018-04-29T00:35:14-07:00