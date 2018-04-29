toggle_spawn_event.
### Arguments
**Name**|**Type**|**Description**
:---|:---|:---
event_id|uint|
is_enabled|bool|
is_strict|bool|
reset_base|bool|

### Example

```perl
my $event_id = 1;
my $is_enabled = 1;
my $is_strict = 1;
my $reset_base = 1;

quest::toggle_spawn_event($event_id, $is_enabled, $is_strict, $reset_base); # Returns void
```


Generated On 2018-04-29T00:35:14-07:00