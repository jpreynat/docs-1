gets a mob item stat.
### Arguments
**Name**|**Type**|**Description**
:---|:---|:---
itemid||
stat||

### Example

```perl
my $itemid = 1;
my $stat = 1;
my $val = $mob->GetItemStat($itemid, $stat);
quest::say($val); # Returns int
```


Generated On 2018-04-29T00:30:15-07:00