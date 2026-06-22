---
description: How to authenticate
---

# 🚀 Quickstart Guide

This guide explains the types of access tokens supported by TEOS API, how to get them, and how to use them in API calls.

#### Types of access tokens

TEOS API uses two types of access tokens:

* API key – for most of the cases
* User token – only in case TEOS API consumer uses TEOS Authentication service

Both are Bearer-type tokens and have the following characteristics:

* Scoped to a single user.
* In the case of the API key, the user acts on behalf of the TEOS platform consumer.
* Can be used for most of the functionality of the TEOS API.
* Some specific methods can work either with API key only or with user token only ([Swagger documentation provides this info](https://teosapi.coreledger.net/swagger/index.html)).

#### API key generation

* The API key is a long-lived access token, provided by the CoreLedger technical team.
* Token validity: 1 year.
* Can be acquired by tenant administrators only after the legal contract is signed.
* API keys can be invalidated under certain conditions. To request invalidation, contact your CoreLedger manager or send a service request to [support@coreledger.net](mailto:support@coreledger.net).

Most TEOS API functionality can be used with the API key. If some endpoint needs a user token for authorization, swagger documentation will clearly state it.

#### User token generation

* The user token is a short-lived token valid for 48 hours (the validity period can be adjusted on request).
* It is issued when a user signs into an application integrated with the TEOS Authentication service.
* To integrate an application with TEOS Authentication, contact your CoreLedger manager or send a service request to [support@coreledger.net](mailto:support@coreledger.net).

During sign-up or sign-in to a tenant (or after Terms & Conditions are updated), the user may need to accept the current versions of T\&C and data protection policy. Without acceptance, sign-up or login is not possible.

#### Token scopes and claims

TEOS API requires:

* Scope: prod.teosapi
* Claim: tid with the TenantId (GUID)

Both are added during token creation.

#### Sending access token as a Bearer token

When making an API call, supply the API key or user token in the Authorization header:

```http
Authorization: Bearer 9D19D3CA6361713D49CFC4C8668C4D9A9ED3B3621E763B0607F77D24CF13E5BA
```

#### Example with curl

```http
curl -X 'GET' \
  'https://teosapi.coreledger.net/odata/v0.7/AssetClasses(code=,,languageCode=,)' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer 9D19D3CA6361713D49CFC4C8668C4D9A9ED3B3621E763B0607F77D24CF13'

```
