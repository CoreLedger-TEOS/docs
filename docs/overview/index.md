# Using TEOS API

## HTTP

All data transfers conform to HTTP/1.1, and all endpoints require HTTPS. Because the TEOS API and all additional APIs are HTTP-based, they work with any language that have an HTTP library, such as cURL and urllib. This means you can use the TEOS API and additional APIs directly in your browser. For example, requesting this URL of the TEOS API in your browser...

[https://teosapi.coreledger.net/odata/v1.0/$metadata](https://teosapi.coreledger.net/odata/v1.0/$metadata)

... is equivalent to performing this cURL request:

```
curl -X 'GET' \
  'https://teosapi.coreledger.net/odata/v1.0/$metadata' \
  -H 'accept: application/json;odata.metadata=minimal;odata.streaming=true'
```

### Versions
The TEOS API has multiple versions. You can read more about versioning in [Versioning](../changelog/versioning.md), but here we'll explain how you make a call to a specific version.

It's really simple — just build your query with the endpoint containing necessary version. For example, here's a call to version 0.9:

```
curl -X 'GET' \
  'https://teosapi.coreledger.net/odata/v0.9' \
  -H 'accept: application/json;odata.metadata=minimal;odata.streaming=true'
```

In the [TEOS API changelog](../changelog/index.md) you can find all available versions. Our [Reference docs](../reference/index.md) allow you to filter content by version.

:::info
Please, note that additional APIs used together with the TEOS API may have their own versions or may have no versioning at all. Please, check the [documentation of the specific API](../resources/using-additional-apis-of-teos-platform/index.md) to find out its versioning concept
:::
