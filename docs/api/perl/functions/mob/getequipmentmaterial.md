gets a mob equipment material.
### Arguments
**Name**|**Type**|**Description**
:---|:---|:---
material_slot||

### Example

```perl
my $material_slot = 1;
my $val = $mob->GetEquipmentMaterial($material_slot);
quest::say($val); # Returns int
```


Generated On 2018-04-29T00:35:14-07:00