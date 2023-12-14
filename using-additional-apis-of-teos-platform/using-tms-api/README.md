---
description: TMS API v1
---

# Using TMS API

## HTTP

All data transfers conform to HTTP/1.1, and all endpoints require HTTPS. Because the TMS API is HTTP-based, it works with any language that has an HTTP library, such as cURL and urllib. This means you can use the TMS API directly in your browser. For example, requesting this URL in your browser...

{% embed url="https://tms.coreledger.net/v1/users" %}

.. is equivalent to performing this cURL request:

```
curl -X 'GET' \
  'https://tms.coreledger.net/v1/users' \
  -H 'accept: application/json'
```

### Versions <a href="#versions" id="versions"></a>

The TMS API has multiple versions. You can read more about versioning in [versioning.md](../../using-the-teos-api/versioning.md "mention").

Build your query with the endpoint containing necessary version. For example, here's a call to version 1:

```
curl -X 'GET' \
  'https://tms.coreledger.net/v1/users' \
  -H 'accept: application/json'
```

We don't expect a lot of changes coming, but you can always find the latest versions in the [changelog](../../changelog/ "mention")

|   |   |   |
| - | - | - |
|   |   |   |
|   |   |   |
|   |   |   |
