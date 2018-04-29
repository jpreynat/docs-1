FindType.
### Arguments
**Name**|**Type**|**Description**
:---|:---|:---
type|int|
bOffensive||

### Example

```perl
my $type = 1;
my $bOffensive = 1;
my $val = $mob->FindType($type, $bOffensive);
quest::say($val); # Returns bool
```


Generated On 2018-04-29T00:35:14-07:00