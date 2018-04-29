sends a quest mail.
### Arguments
**Name**|**Type**|**Description**
:---|:---|:---
to|string|
from|string|
subject|string|
message|string|

### Example

```perl
my $to = "test";
my $from = "test";
my $subject = "test";
my $message = "test";

quest::SendMail($to, $from, $subject, $message); # Returns void
```


Generated On 2018-04-29T00:30:15-07:00