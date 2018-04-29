npcfeature.
### Arguments
**Name**|**Type**|**Description**
:---|:---|:---
str_value|string|
int_value|int|

### Example

```perl
my $str_value = "test";
my $int_value = 1;
my $val = quest::npcfeature($str_value, $int_value);
quest::say($val); # Returns uint
```


Generated On 2018-04-29T00:30:15-07:00