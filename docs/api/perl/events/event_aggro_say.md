EVENT_AGGRO_SAY
### Exports
**Name**|**Type**|**Description**
:-----|:-----|:-----
data|int|
text|int|
langid|int|
### Example
```perl
sub EVENT_AGGRO_SAY {
	quest::say($data); # returns int
	quest::say($text); # returns int
	quest::say($langid); # returns int
}
```

Generated On 2018-04-29T00:35:14-07:00