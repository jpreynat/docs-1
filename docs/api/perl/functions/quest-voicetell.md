voicetell.
### Arguments
**Name**|**Type**|**Description**
:---|:---|:---
client_name|string|
macro_id|int|
race_id|int|
gender_id|int|

### Example

```perl
my $client_name = "test";
my $macro_id = 1;
my $race_id = 1;
my $gender_id = 1;

quest::voicetell($client_name, $macro_id, $race_id, $gender_id); # Returns void
```


Generated On 2018-04-29T00:30:15-07:00