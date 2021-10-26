# Overview

The TEOS API is the primary way for apps to read and write to the Blockchain. All of our SDKs and products interact with the TEOS API in some way, and our other APIs are extensions of the TEOS API, so understanding how the TEOS API works is crucial.

## The Basics

The TEOS API is named after CoreLedger's product TEOS (Token Economy Operational System). It's composed of:

* REST Endpoint, built in accordance with [OData 4.01 Standard](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html) (with some limitations)
* Notification Endpoint is based on Rabbit MQ library
* Identity Server, implementing OAuth 2.0 protocol

## HTTP

All data transfers conform to HTTP/1.1, and all endpoints require HTTPS. Because the TEOS API is HTTP-based, it works with any language that has an HTTP library, such as cURL and urllib. This means you can use the TEOS API directly in your browser. For example, requesting this URL in your browser...

[https://teosapi.coreledger.net/version](https://graph.facebook.com/facebook/picture?redirect=false)

... is equivalent to performing this cURL request:

```
curl -i -X GET \
 "https://teosapi.coreledger.net/version"
```

### Versions <a href="versions" id="versions"></a>

The TEOS API has multiple versions. You can read more about versioning in our [App Version guide](../using-the-teos-api/versioning.md), but here we'll explain how you make a call to a specific version.

It's really simple — just add the ApiVersion parameter to the request query. For example, here's a call to version 2.9:

```
curl -i -X GET \
  "https://teosapi.coreledger.net/odata/assets/{asset-id}
    ?ApiVersion=2.9"
```

If you do not include a version number we will default to the oldest available version, so it's best to include the version number in your requests.

Another possibility to define necessary version is to use the http request header "api-version"

The [TEOS API changelog](../changelog/) lists all available versions and our [Reference docs](../reference/) allow you to filter content by version.
