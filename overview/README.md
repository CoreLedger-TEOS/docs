# Using TEOS API

## HTTP

All data transfers conform to HTTP/1.1, and all endpoints require HTTPS. Because the TEOS API is HTTP-based, it works with any language that has an HTTP library, such as cURL and urllib. This means you can use the TEOS API directly in your browser. For example, requesting this URL in your browser...

[https://teosapi.coreledger.net/odata/v0.7/$metadata](https://teosapi.coreledger.net/odata/v0.7/$metadata)

... is equivalent to performing this cURL request:

```
curl -X 'GET' \
  'https://teosapi.coreledger.net/odata/v0.7/$metadata' \
  -H 'accept: application/json;odata.metadata=minimal;odata.streaming=true'
```

### Versions <a href="#versions" id="versions"></a>

The TEOS API has multiple versions. You can read more about versioning in [versioning.md](../using-the-teos-api/versioning.md "mention"), but here we'll explain how you make a call to a specific version.

It's really simple — just use build your query with the endpoint containing necessary version. For example, here's a call to version 0.8:

```
curl -X 'GET' \
  'https://teosapi.coreledger.net/odata/v0.8' \
  -H 'accept: application/json;odata.metadata=minimal;odata.streaming=true'
```

In the [TEOS API changelog](../changelog/) you can find all available versions. Our [Reference docs](../reference/) allow you to filter content by version.
