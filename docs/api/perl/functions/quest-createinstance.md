CreateInstance.
### Arguments
**Name**|**Type**|**Description**
:---|:---|:---
zone_name|string|
version|int|
duration|int|

### Example

```perl
my $zone_name = "test";
my $version = 1;
my $duration = 1;

quest::CreateInstance($zone_name, $version, $duration); # Returns void
```


Generated On 2018-04-29T00:30:15-07:00