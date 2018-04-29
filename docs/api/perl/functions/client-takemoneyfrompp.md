TakeMoneyFromPP.
### Arguments
**Name**|**Type**|**Description**
:---|:---|:---
copper|int|
updateclient||

### Example

```perl
my $copper = 1;
my $updateclient = 1;
my $val = $client->TakeMoneyFromPP($copper, $updateclient);
quest::say($val); # Returns bool
```


Generated On 2018-04-29T00:30:15-07:00