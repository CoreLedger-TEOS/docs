---
description: Types of access tokens, how to get them and how to use
---

# Authentication

TEOS API uses two types of access tokens:&#x20;

* **API key** for most of cases&#x20;
* **user token** only in case TEOS API consumer uses CoreLedger Authentication services

Both tokens are of type Bearer and have following characteristics:

* scoped to a single user, in case of API key user acts on behalf of the TEOS platform consumer
* can be used for most of the functionality of TEOS API. Some specific methods can work either with API key only or with user token only, swagger documentation clearly provides this info

### API key generation

**API key** is a long-lived access token, provided by CoreLedger technical team. Such token is valid for a year and can be acquired by tenant administrators only after the legal contract is signed.&#x20;

These tokens can be invalidated, if necessary, under certain conditions. If you need it, please, contact your CoreLedger manager or send a service request to [support@coreledger.net](mailto:support@coreledger.net).

Most of the TEOS API functionality can be used with API key. If some endpoint needs user token for authorization, swagger documentation will clearly state it (like in the example below).

<figure><img src="../.gitbook/assets/image.png" alt=""><figcaption><p>Example of the functionality not supported with api key</p></figcaption></figure>

### User token generation

**User token** is short-lived and is valid for 48 hours (subject of changes, new validity period can be set on customer request). It is issued, when a user signs into an application, integrated with the TEOS identity server. To integrate an app with TEOS identity server, please, contact your CoreLedger manager or send a service request to [support@coreledger.net](mailto:support@coreledger.net).

## Token scopes and claims

TEOS API requires `prod.teosapi` scope to be included in the token. The claim `tid` with the TenantId (GUID) should also be included within the Token. Both necessary scope and claim are added during token creation.

## Sending access token as a Bearer token

When making an API call, supply the API key or user access token as a Bearer token in the authorization header:

```
Authorization: Bearer 9D19D3CA6361713D49CFC4C8668C4D9A9ED3B3621E763B0607F77D24CF13E5BA
```

In curl:

```
curl -X 'GET' \
  'https://teosapi.coreledger.net/odata/v0.7/AssetClasses(code=,,languageCode=,)' \
  -H 'accept: application/json'
  -H 'Authorization: Bearer 9D19D3CA6361713D49CFC4C8668C4D9A9ED3B3621E763B0607F77D24CF13E5BA'
```



