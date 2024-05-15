# Using TEOS API

## HTTP

All data transfers conform to HTTP/1.1, and all endpoints require HTTPS. Because the TEOS API and all additional APIs are HTTP-based, they work with any language that have an HTTP library, such as cURL and urllib. This means you can use the TEOS API and additional APIs directly in your browser. For example, requesting this URL of the TEOS API in your browser...

[https://teosapi.coreledger.net/odata/v0.9/$metadata](https://teosapi.coreledger.net/odata/v0.9/$metadata)

... is equivalent to performing this cURL request:

```
curl -X 'GET' \
  'https://teosapi.coreledger.net/odata/v0.7/$metadata' \
  -H 'accept: application/json;odata.metadata=minimal;odata.streaming=true'
```

### Versions <a href="#versions" id="versions"></a>

The TEOS API has multiple versions. You can read more about versioning in [versioning.md](../using-the-teos-api/versioning.md "mention"), but here we'll explain how you make a call to a specific version.

It's really simple — just build your query with the endpoint containing necessary version. For example, here's a call to version 0.8:

```
curl -X 'GET' \
  'https://teosapi.coreledger.net/odata/v0.8' \
  -H 'accept: application/json;odata.metadata=minimal;odata.streaming=true'
```

In the [TEOS API changelog](../changelog/) you can find all available versions. Our [Reference docs](../reference/) allow you to filter content by version.

{% hint style="info" %}
Please, note that additional APIs used together with the TEOS API may have their own versions or may have no versioning at all. Please, check the [documentation of the specific API](../using-additional-apis-of-teos-platform/) to find out its versioning concept
{% endhint %}
