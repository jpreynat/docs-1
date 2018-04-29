QuestReward.
### Arguments
**Name**|**Type**|**Description**
:---|:---|:---
mob|mob|
copper|int|
silver|int|
gold|int|
platinum|int|
itemid||
exp|int|
faction||

### Example

```perl
my $mob = 1;
my $copper = 1;
my $silver = 1;
my $gold = 1;
my $platinum = 1;
my $itemid = 1;
my $exp = 1;
my $faction = 1;

$client->QuestReward($mob, $copper, $silver, $gold, $platinum, $itemid, $exp, $faction); # Returns void
```


Generated On 2018-04-29T00:35:14-07:00