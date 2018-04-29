spawn_condition.
### Arguments
**Name**|**Type**|**Description**
:---|:---|:---
zone_short|string|
instance_id|int|
condition_id|int|
int_value|int|

### Example

```perl
my $zone_short = "test";
my $instance_id = 1;
my $condition_id = 1;
my $int_value = 1;

quest::spawn_condition($zone_short, $instance_id, $condition_id, $int_value); # Returns void
```


Generated On 2018-04-29T00:30:15-07:00