gets a client mod character faction level.
### Arguments
**Name**|**Type**|**Description**
:---|:---|:---
faction_id||

### Example

```perl
my $faction_id = 1;
my $val = $client->GetModCharacterFactionLevel($faction_id);
quest::say($val); # Returns int
```


Generated On 2018-04-29T00:35:14-07:00