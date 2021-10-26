# Authentication

TeosAPI uses two type of access tokens: user access token and API Key. Both tokens are of type bearer.

### User access token

is short-lived and is valid for 48 hours (subject of changes). It is issued, when a user signs into an application, integrated with the TEOS identity server. To integrate an app with TEOS identity server a service request should be sent to [support@coreledger.net](mailto:support@coreledger.net).

### API Key

is a long-lived access token, provided by CoreLedger technical team. Such token is valid for a year and can be acquired by tenant administrators only. These tokens can be invalidated, if necessary, under certain conditions . Both token types should be sent to TeosAPI with each request using standard bearer authentication scheme (in header).

## Token Scopes and Claims

TEOS API requires `prod.teosapi` scope to be included in the token. The claim `tid` with the TenantId (GUID) should also be included within the Token. Both necessary scope and claim are added during token creation.
