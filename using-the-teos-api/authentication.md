# Authentication

TEOS API uses two types of access tokens: api key for most of cases and user access token only in case TEOS consumer uses CoreLedger Authentication services. Both tokens are of type bearer.

### Api key

is a long-lived access token, provided by CoreLedger technical team. Such token is valid for a year and can be acquired by tenant administrators only. These tokens can be invalidated, if necessary, under certain conditions. Most of the TEOS API functionality can be used with api key only. If some endpoint needs user token for authorization, swagger documentation will clearly state it (like in the example below).

<figure><img src="../.gitbook/assets/image.png" alt=""><figcaption><p>Example of the functionality not supported with api key</p></figcaption></figure>

### User access token

is short-lived and is valid for 48 hours (subject of changes). It is issued, when a user signs into an application, integrated with the TEOS identity server. To integrate an app with TEOS identity server a service request should be sent to [support@coreledger.net](mailto:support@coreledger.net).

## Token scopes and claims

TEOS API requires `prod.teosapi` scope to be included in the token. The claim `tid` with the TenantId (GUID) should also be included within the Token. Both necessary scope and claim are added during token creation.
