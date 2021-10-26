# Reference

## TEOS API Root Nodes

| Node         | Description                                      |
| ------------ | ------------------------------------------------ |
| Assets       | CRUD and bound functions and actions on Assets.  |
| Wallets      | CRUD and bound functions and actions on Wallets. |
| Transactions | Transaction information (read only)              |

## Common request parameters

Most of the TEOS API calls require authentication header: Bearer token.

To call a specific api version, the version should be provided using `api-version` parameter in query string or `api-version` request header.

## End2End Tests

Test scripts, made for [postman](https://www.postman.com) can be found in [TEOS API Github Repository](https://github.com/CoreLedger-TEOS/API).

## Asynchronous processing of OData Actions and writing verbs

All changes to the blockchain state take more time, than usual synchronous request timeouts are allowing. Therefore, according to [OData Standard Point 11.6](https://docs.oasis-open.org/odata/odata/v4.01/os/part1-protocol/odata-v4.01-os-part1-protocol.html#sec\_AsynchronousRequests), all exposed actions and writing http verbs are executing asynchronously and return `Code 202 Accepted` with transaction Id even when client does not specify `respond-async` in the request.



