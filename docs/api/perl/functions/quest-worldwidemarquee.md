worldwidemarquee.
### Arguments
**Name**|**Type**|**Description**
:---|:---|:---
color_id|int|
priority|int|
fade_in|int|
fade_out|int|
duration|int|
message|string|

### Example

```perl
my $color_id = 1;
my $priority = 1;
my $fade_in = 1;
my $fade_out = 1;
my $duration = 1;
my $message = "test";

quest::worldwidemarquee($color_id, $priority, $fade_in, $fade_out, $duration, $message); # Returns void
```


Generated On 2018-04-29T00:30:15-07:00