---
description: Types of access tokens, how to get them and how to use
---

# Authentication

TEOS API uses two types of access tokens:&#x20;

* **API key** for most of the cases&#x20;
* **User token** only in case TEOS API consumer uses TEOS Authentication service

Both are Bearer-type tokens and have the following characteristics:

* Scoped to a single user, in the case of the API key the user acts on behalf of the TEOS platform consumer.
* Can be used for most of the functionality of the TEOS API. Some specific methods can work either with API key only or with user token only, swagger documentation clearly provides this info.

Check [tenant-setup-options.md](architecture-note/tenant-setup-options.md "mention") for more info about why you may need specific authentication type.

### API key generation

The **API key** is a long-lived access token, provided by CoreLedger technical team. This token is valid for a year and can be acquired by tenant administrators only after the legal contract is signed.&#x20;

These tokens can be invalidated, if necessary, under certain conditions. If you need a token invalidated, please contact your CoreLedger manager or send a service request to [support@coreledger.net](mailto:support@coreledger.net).

Most of the TEOS API functionality can be used with the API key. If some endpoint needs a user token for authorization, swagger documentation will clearly state it (as in the example below).

<figure><img src="../.gitbook/assets/image.png" alt=""><figcaption><p>Example of the functionality not supported with api key</p></figcaption></figure>

### User token generation

The **user token** is short-lived and is valid for 48 hours (subject to changes, a new validity period can be set on request). It is issued when a user signs into an application integrated with the TEOS Authentication service. To integrate an app with the TEOS Authentication service, please contact your CoreLedger manager or send a service request to [support@coreledger.net](mailto:support@coreledger.net).

During signing up or signing in to a new tenant, or after T\&C are updated the user can receive a form, requiring to accept the current versions of terms and conditions and data protection policy. Without accepting them, the user won't be able to sign-up or login.

## Token scopes and claims

TEOS API requires `prod.teosapi` scope to be included in the token. The claim `tid` with the TenantId (GUID) should also be included within the Token. Both the necessary scope and claim are added during token creation.

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



