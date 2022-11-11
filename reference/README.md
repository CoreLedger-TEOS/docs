# API Reference

{% hint style="info" %}
Check [versioning.md](../using-the-teos-api/versioning.md "mention") concept and [authentication.md](../using-the-teos-api/authentication.md "mention") to start trying out TEOS API
{% endhint %}

## Common request parameters

Most of the TEOS API calls require authentication header: Bearer token.

[OData query builder syntax](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html) can be used for most of the TEOS API requests, swagger documentation provides explicitly the info about the methods which are odata-compatible already and which are not yet.

{% hint style="danger" %}
Please, note that TEOS API is case sensitive. Pay attention to the upper/lower-case usage within request data
{% endhint %}

{% hint style="warning" %}
Please, note that starting from v0.5 the api object referencing using "resource/key" style is **deprecated**
{% endhint %}

## Examples of TEOS API calls

Test scripts, made for [postman](https://www.postman.com) can be found in [TEOS API Github Repository](https://github.com/CoreLedger-TEOS/API). Contact CoreLedger support if you don't have access to it.

## Asynchronous processing of OData Actions and writing verbs

All changes to the blockchain state take more time, than usual synchronous request timeouts are allowing. Therefore, according to [OData Standard Point 11.6](https://docs.oasis-open.org/odata/odata/v4.01/os/part1-protocol/odata-v4.01-os-part1-protocol.html#sec\_AsynchronousRequests), all exposed actions and writing http verbs are executing asynchronously and return `Code 202 Accepted` with transaction Id even when client does not specify `respond-async` in the request.
