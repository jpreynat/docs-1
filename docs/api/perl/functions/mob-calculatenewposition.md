CalculateNewPosition.
### Arguments
**Name**|**Type**|**Description**
:---|:---|:---
x|float|
y|float|
z|float|
speed||
checkZ||

### Example

```perl
my $x = 1;
my $y = 1;
my $z = 1;
my $speed = 1;
my $checkZ = 1;
my $val = $mob->CalculateNewPosition($x, $y, $z, $speed, $checkZ);
quest::say($val); # Returns bool
```


Generated On 2018-04-29T00:30:15-07:00