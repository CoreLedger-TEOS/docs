# Changelog

## December, 2023

#### Changes:

* Now TMS API has its own versioning! v1.0 is already available, you're welcome to use it.
* We've improved error processing and error texts.

#### Fixes:

* The issue of incorrect http error code returned when calling "/Templates" with no Registration form active has been fixed (check [user-authentication-flow-with-teos-authentication-service-and-tms.md](../user-authentication-flow-with-teos-authentication-service-and-tms.md "mention")). Now TEOS API consumer gets 404 error code if registration template is turned off in WLM.
