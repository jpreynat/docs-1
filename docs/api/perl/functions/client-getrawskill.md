gets a client raw skill.
### Arguments
**Name**|**Type**|**Description**
:---|:---|:---
skill_id||

### Example

```perl
my $skill_id = 1;
my $val = $client->GetRawSkill($skill_id);
quest::say($val); # Returns uint
```


Generated On 2018-04-29T00:30:15-07:00