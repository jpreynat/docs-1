NukeItem.
### Arguments
**Name**|**Type**|**Description**
:---|:---|:---
itemnum||
where_to_check||

### Example

```perl
my $itemnum = 1;
my $where_to_check = 1;
my $val = $client->NukeItem($itemnum, $where_to_check);
quest::say($val); # Returns uint
```


Generated On 2018-04-29T00:30:15-07:00