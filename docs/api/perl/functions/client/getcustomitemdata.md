gets a client custom item data.
### Arguments
**Name**|**Type**|**Description**
:---|:---|:---
slot_id||
identifier||

### Example

```perl
my $slot_id = 1;
my $identifier = 1;
my $val = $client->GetCustomItemData($slot_id, $identifier);
quest::say($val); # Returns string
```


Generated On 2018-04-29T00:35:14-07:00