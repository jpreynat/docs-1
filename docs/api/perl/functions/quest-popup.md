popup.
### Arguments
**Name**|**Type**|**Description**
:---|:---|:---
window_title|string|
message|string|
popup_id|int|
buttons|int|
duration|int|

### Example

```perl
my $window_title = "test";
my $message = "test";
my $popup_id = 1;
my $buttons = 1;
my $duration = 1;

quest::popup($window_title, $message, $popup_id, $buttons, $duration); # Returns void
```


Generated On 2018-04-29T00:30:15-07:00