spawn2.
### Arguments
**Name**|**Type**|**Description**
:---|:---|:---
npc_type_id|int|
grid_id|int|
int_unused|int|
x|float|
y|float|
z|float|
heading|float|

### Example

```perl
my $npc_type_id = 1;
my $grid_id = 1;
my $int_unused = 1;
my $x = 1;
my $y = 1;
my $z = 1;
my $heading = 1;
my $val = quest::spawn2($npc_type_id, $grid_id, $int_unused, $x, $y, $z, $heading);
quest::say($val); # Returns uint
```


Generated On 2018-04-29T00:30:15-07:00