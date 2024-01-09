# Using TMS API

Additional APIs are required to be used along with TEOS API in case TEOS API Consumer doesn't have its own authentication service and needs TEOS Authentication service. [Read more](../../using-the-teos-api/architecture-note/tenant-setup-options.md#using-teos-api-with-the-user-access-token)

**Tenant Management Service /TMS/** is used to get user data and sign up new user in TEOS Platform.

Check [TMS API swagger](https://tms.coreledger.net/swagger/index.html).

## Main things to know when using TMS API

### HTTP-based

All data transfers conform to HTTP/1.1, and all endpoints require HTTPS. Because the TMS API is HTTP-based, it works with any language that has an HTTP library, such as cURL and urllib. This means you can use the TMS API directly in your browser. For example, requesting this URL in your browser...

{% embed url="https://tms.coreledger.net/v1/users" %}

.. is equivalent to performing this cURL request:

```
curl -X 'GET' \
  'https://tms.coreledger.net/v1/users' \
  -H 'accept: application/json'
```

### Rate limits <a href="#versions" id="versions"></a>

A rate limit is the number of API calls a consumer can make within a given time period. If this limit is exceeded or if CPU or total time limits are exceeded, the consumer may be throttled. API requests made by a throttled consumer will fail.

All API requests are subject to rate limits. TMS API requests are subject to [Platform Rate Limits](./#platform-rate-limits).

Real-time rate limit usage statistics are described in headers that are included with most API responses once enough calls have been made to an endpoint. Once a rate limit is reached, any subsequent requests made by your app will fail and the API will return an error code until enough time has passed for the call count to drop below the limit.

#### Platform Rate Limits <a href="#platform-rate-limits" id="platform-rate-limits"></a>

TMS API requests made with an [API key](../../using-the-teos-api/authentication.md#api-key) or [user access token](../../using-the-teos-api/authentication.md#user-access-token) are counted against that tenant’s rate limit. A tenant’s call count is the number of calls it can make during a rolling twenty-four-hour window and is defined as follows:

`Calls within twenty-four hours = 10000`

To prevent the spikes in a short time, the default limit of 100 calls per minute is applied:

`Calls within a minute = 100`

#### Headers <a href="#headers" id="headers"></a>

If a consumer exceeds the TMS API rate limits, the response will have HTTP Status Code 429 and contain a header `X-Rate-Limit-Reset`with value, represeting UTC date time (ISO 8601) when the limits resets.

&#x20;client can parse the `X-Rate-Limit-Reset` like this:

```
DateTime resetDate = DateTime.ParseExact(resetHeader, "o", 
    DateTimeFormatInfo.InvariantInfo);
```

#### Best Practices <a href="#best-practices" id="best-practices"></a>

* When the limit has been reached, stop making API calls. Continuing to make calls will continue to increase your call count, which will increase the time before calls will be successful again.
* Spread out queries evenly to avoid traffic spikes.

### Versions <a href="#versions" id="versions"></a>

The TMS API has multiple versions. You can read more about versioning in [versioning.md](../../using-the-teos-api/versioning.md "mention").

Build your query with the endpoint containing necessary version. For example, here's a call to version 1:

```
curl -X 'GET' \
  'https://tms.coreledger.net/v1/users' \
  -H 'accept: application/json'
```

We don't expect a lot of changes coming, but you can always find the latest versions in the [changelog.md](changelog.md "mention").

Currently there are two available versions:

* v1 which we strongly recommend to use
* v0.1 which is deprecated
