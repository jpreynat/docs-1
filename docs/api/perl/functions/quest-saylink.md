saylink.
### Arguments
**Name**|**Type**|**Description**
:---|:---|:---
message|string|
silent|bool|
link_name|string|

### Example

```perl
my $message = "test";
my $silent = 1;
my $link_name = "test";
my $val = quest::saylink($message, $silent, $link_name);
quest::say($val); # Returns string
```


Generated On 2018-04-29T00:30:15-07:00