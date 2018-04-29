gets a perlpacket byte.
### Arguments
**Name**|**Type**|**Description**
:---|:---|:---
pos||

### Example

```perl
my $pos = 1;
my $val = $perlpacket->GetByte($pos);
quest::say($val); # Returns uint
```


Generated On 2018-04-29T00:35:14-07:00