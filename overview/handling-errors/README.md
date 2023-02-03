---
description: Error response structure, errors overview
---

# Handling Errors

Requests made to our APIs can result in several different error responses. The following document describes a list of error values with a map to the most common recovery tactic to use.

## Error Responses <a href="#receiving-errorcodes" id="receiving-errorcodes"></a>

TEOS API is using HTTP status codes as a highest level of response codes. Following status codes can be returned by TEOS API:

* HTTP 4xx - error on the client side
  * HTTP 400 - request body error(incorrect parameters, failed preconditions)
  * HTTP 401/403 - error with authentication/authorization
  * HTTP 404 - error in resource URI
* HTTP 500 - internal server error

The following json-structure represents a common error response body resulting from a failed API request:

```javascript
{
  "code": "21000",
  "message": "One or more preconditions failed",
  "target": "assets('090299f8f5d95aea86f280001')/destroyunits",
  "details": [
    {
      "code": "1006",
      "message": "not enough sparks on the balance. Address: 0xe0450ce1e2ef73b15514ae6a003b90d0ebac8835, required amount: 50, actual amount: 0",
      "arguments": {
        "signerAddress": "0xe0450ce1e2ef73b15514ae6a003b90d0ebac8835",
        "requiredAmount": "50",
        "actualAmount": "0"
      }
    }
  ],
  "clTraceId": "12a56f61-54f8-44fd-9f74-d0d2bbd942f6"
}
```

Where

* `code`: high-level error code
* `message`: a message, describing the issue
* `target`: the path requested
* `details`: depending on the error, may be present or not. They specify the details of the error.
  * `code`: the subcode of the issue
  * `message`: a message, describing the details of the issue
  * `arguments`: if a message contains any data (strings, decimals etc), that need to be used for i18n of the error message, this field contains the names and the values of the data
* `clTraceId`: Internal support identifier. When reporting a bug related to a TEOS API call, include the `clTraceId` to help us find log data for debugging.

Error codes `1xxxx` indicate non-business logic related issues with input (auth issues, issues with parsing input data, rate limiting etc.). These errors are mostly 'technical' (non-user), related to the problems in the client app's code.

Error codes `2xxxx` indicate business logic related issues with input (failed preconditions, validations etc.).

| HTTP status | Code              | Details.Code          | Message                                                                                                                                                      |
| ----------- | ----------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 401         | [11001](./#11001) |                       | UserId was not found in provided authentication data                                                                                                         |
| 400         | [12001](./#12001) |                       | There were OData validation errors                                                                                                                           |
| 400         | [12002](./#12002) |                       | Input binding failed                                                                                                                                         |
| 400         | [21000](./#21000) |                       | One or more preconditions failed                                                                                                                             |
| 400         | [21000](./#21000) | [1001](./#21000-1001) | Asset with uinque Id '{uniqueAssetId}' does not exist                                                                                                        |
| 400         | [21000](./#21000) | [1002](./#21000-1002) | the user '{userId}' does not own asset ('uniqueAssetId') issuer's address '{assetIssuerAddress}'                                                             |
| 400         | [21000](./#21000) | [1003](./#21000-1003) | invalid units amount provided (must be positive integer): '{providedAmount}'                                                                                 |
| 400         | [21000](./#21000) | [1004](./#21000-1004) | spark factor is not defined for the asset '{uniqueAssetId}'                                                                                                  |
| 400         | [21000](./#21000) | [1005](./#21000-1005) | the user '{userId}' does not own signer address '{signerAddress}'                                                                                            |
| 400         | [21000](./#21000) | [1006](./#21000-1006) | not enough sparks on the balance. Address: {signerAddress}, uniqueAssetId: {uniqueAssetId}, required amount: {requiredAmount}, actual amount: {actualAmount} |
| 400         | [21000](./#21000) | [1007](./#21000-1007) | the instance is configured to operate on assets from ledger {configuredLedgerId}, but the requested asset '{uniqueAssetId}' is from ledger {assetLedgerId}   |
| 400         | [21000](./#21000) | [1008](./#21000-1008) | The source asset with Id '{sourceUniqueAssetId}' is already linked to asset with id '{targetUniqueAssetId}'                                                  |
| 400         | [21000](./#21000) | [1009](./#21000-1009) | The source asset with Id '{sourceUniqueAssetId}' is not linked to asset with id '{targetUniqueAssetId}'                                                      |
| 400         | [22000](./#22000) |                       | One or more validations failed                                                                                                                               |
| 400         | [22000](./#22000) | [2001](./#22000-2001) | Either asset name or issuer address should be provided in search request                                                                                     |
| 400         | [22000](./#22000) | [2002](./#22000-2002) | Issuer address value should be 40 or 42 symbol long                                                                                                          |
| 400         | [22000](./#22000) | [2003](./#22000-2003) | Valid language code should be provided for asset                                                                                                             |
| 400         | [22000](./#22000) | [2004](./#22000-2004) | Valid jurisdiction should be provided for asset                                                                                                              |
| 400         | [22000](./#22000) | [2005](./#22000-2005) | Asset's unit of measure is not valid                                                                                                                         |
| 400         | [22000](./#22000) | [2006](./#22000-2006) | Asset's spark factor is not valid                                                                                                                            |
| 400         | [22000](./#22000) | [2007](./#22000-2007) | Asset's asset class is not valid                                                                                                                             |
| 400         | [22000](./#22000) | [2008](./#22000-2008) | The number of sections in asset custom definition item's SectionsPathNames differs from SectionsPath                                                         |
| 400         | [22000](./#22000) | [2009](./#22000-2009) | Offered asset unqueId must be specified in request                                                                                                           |
| 400         | [22000](./#22000) | [2010](./#22000-2010) | Desired asset unqueId must be specified in request                                                                                                           |
| 400         | [22000](./#22000) | [2011](./#22000-2011) | Desired and offered assets unqueIds must differ                                                                                                              |
| 400         | [22000](./#22000) | [2012](./#22000-2012) | Either offered or desired amount of sparks must be specified in request but not both                                                                         |
| 400         | [22000](./#22000) | [2013](./#22000-2013) | Signer address must be specified                                                                                                                             |
| 400         | [22000](./#22000) | [2014](./#22000-2014) | Input amount must be a positive integer                                                                                                                      |
| 400         | [22000](./#22000) | [2015](./#22000-2015) | Array of supply ids must contain at least one supply id                                                                                                      |
| 400         | [22000](./#22000) | [2016](./#22000-2016) | Array of target unique asset ids must not be empty                                                                                                           |
|             |                   |                       |                                                                                                                                                              |
| 400         | [22000](./#22000) | [2017](./#22000-2017) | User can delete only his own data                                                                                                                            |
| 400         | [23000](./#23000) |                       | \<Sdk error code>:\<Sdk error message>                                                                                                                       |
