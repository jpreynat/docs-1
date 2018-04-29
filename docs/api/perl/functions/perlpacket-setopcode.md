sets a perlpacket opcode.
### Arguments
**Name**|**Type**|**Description**
:---|:---|:---
opcode||

### Example

```perl
my $opcode = 1;
my $val = $perlpacket->SetOpcode($opcode);
quest::say($val); # Returns bool
```


Generated On 2018-04-29T00:30:15-07:00