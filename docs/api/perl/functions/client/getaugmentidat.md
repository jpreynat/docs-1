gets a client augment ida t.
### Arguments
**Name**|**Type**|**Description**
:---|:---|:---
slot_id||
augslot||

### Example

```perl
my $slot_id = 1;
my $augslot = 1;
my $val = $client->GetAugmentIDAt($slot_id, $augslot);
quest::say($val); # Returns int
```


Generated On 2018-04-29T00:35:14-07:00