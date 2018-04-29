gets a client instrument mod.
### Arguments
**Name**|**Type**|**Description**
:---|:---|:---
spell_id|int|

### Example

```perl
my $spell_id = 1;
my $val = $client->GetInstrumentMod($spell_id);
quest::say($val); # Returns uint
```


Generated On 2018-04-29T00:35:14-07:00