sets a quest global.
### Arguments
**Name**|**Type**|**Description**
:---|:---|:---
key|string|
str_value|string|
options|int|
duration|int|

### Example

```perl
my $key = "test";
my $str_value = "test";
my $options = 1;
my $duration = 1;

quest::setglobal($key, $str_value, $options, $duration); # Returns void
```


Generated On 2018-04-29T00:35:14-07:00