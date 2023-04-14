# Using TMS API

## HTTP

All data transfers conform to HTTP/1.1, and all endpoints require HTTPS. Because the TMS API is HTTP-based, it works with any language that has an HTTP library, such as cURL and urllib. This means you can use the TMS API directly in your browser. For example, requesting this URL in your browser...

{% embed url="https://tms.coreledger.net/users" %}

.. is equivalent to performing this cURL request:

```
curl -X 'GET' \
  'https://tms.coreledger.net/users' \
  -H 'accept: application/json'
```

