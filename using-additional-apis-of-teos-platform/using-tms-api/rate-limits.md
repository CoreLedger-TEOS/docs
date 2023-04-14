# Rate limits

A rate limit is the number of API calls a consumer can make within a given time period. If this limit is exceeded or if CPU or total time limits are exceeded, the consumer may be throttled. API requests made by a throttled consumer will fail.

All API requests are subject to rate limits. TMS API requests are subject to [Platform Rate Limits](rate-limits.md#platform-rate-limits).

Real-time rate limit usage statistics are described in headers that are included with most API responses once enough calls have been made to an endpoint. Once a rate limit is reached, any subsequent requests made by your app will fail and the API will return an error code until enough time has passed for the call count to drop below the limit.

### Platform Rate Limits <a href="#platform-rate-limits" id="platform-rate-limits"></a>

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
