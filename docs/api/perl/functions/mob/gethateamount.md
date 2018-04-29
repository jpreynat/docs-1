gets a mob hate amount.
### Arguments
**Name**|**Type**|**Description**
:---|:---|:---
tmob||
is_dam||

### Example

```perl
my $tmob = 1;
my $is_dam = 1;
my $val = $mob->GetHateAmount($tmob, $is_dam);
quest::say($val); # Returns uint
```


Generated On 2018-04-29T00:35:14-07:00