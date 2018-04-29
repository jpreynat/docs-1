gets a mob special ability param.
### Arguments
**Name**|**Type**|**Description**
:---|:---|:---
special_ability||
param||

### Example

```perl
my $special_ability = 1;
my $param = 1;
my $val = $mob->GetSpecialAbilityParam($special_ability, $param);
quest::say($val); # Returns int
```


Generated On 2018-04-29T00:35:14-07:00