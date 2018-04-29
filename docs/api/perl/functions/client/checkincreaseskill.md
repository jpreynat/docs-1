CheckIncreaseSkill.
### Arguments
**Name**|**Type**|**Description**
:---|:---|:---
skillid||
chancemodi||

### Example

```perl
my $skillid = 1;
my $chancemodi = 1;
my $val = $client->CheckIncreaseSkill($skillid, $chancemodi);
quest::say($val); # Returns bool
```


Generated On 2018-04-29T00:35:14-07:00