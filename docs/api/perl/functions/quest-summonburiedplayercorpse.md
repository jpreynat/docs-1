summonburiedplayercorpse.
### Arguments
**Name**|**Type**|**Description**
:---|:---|:---
char_id|int|
dest_x|float|
dest_y|float|
dest_z|float|
dest_heading|float|

### Example

```perl
my $char_id = 1;
my $dest_x = 1;
my $dest_y = 1;
my $dest_z = 1;
my $dest_heading = 1;
my $val = quest::summonburiedplayercorpse($char_id, $dest_x, $dest_y, $dest_z, $dest_heading);
quest::say($val); # Returns bool
```


Generated On 2018-04-29T00:30:15-07:00