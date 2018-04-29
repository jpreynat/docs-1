DecreaseByID.
### Arguments
**Name**|**Type**|**Description**
:---|:---|:---
type|int|
amt||

### Example

```perl
my $type = 1;
my $amt = 1;
my $val = $client->DecreaseByID($type, $amt);
quest::say($val); # Returns bool
```


Generated On 2018-04-29T00:30:15-07:00