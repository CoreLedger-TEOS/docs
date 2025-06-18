# Handling errors

Errors structure and errors handling approach is the same for all TEOS Platform APIs. Please, refer to [handling-errors](../../overview/handling-errors/ "mention") for the info about handling errors received from TMS API.

## 1xxxx codes

Error codes `1xxxx` indicate non-business logic related issues with input (auth issues, issues with parsing input data, rate limiting etc.). These errors are mostly 'technical', related to the problems in the API consumer's code.

### 12000 / 12001

<table><thead><tr><th width="185.5"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>There were OData validation errors</td></tr><tr><td>Description</td><td>malformed oData request (missing required fields, redundant fields etc.)</td></tr><tr><td>Details</td><td>contains the array of sub-errors, specifying the issue</td></tr><tr><td>What to do</td><td><ul><li>check the correctness of the request body according to oData and the request specs.</li><li>check the <code>details</code> field for additional information</li></ul></td></tr></tbody></table>

### 13000

<table><thead><tr><th width="187.5"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>Whoa! Calm down, cowboy! Quota exceeded</td></tr><tr><td>Description</td><td>requests quota for the tenant per 30 days was exceeded</td></tr><tr><td>Details</td><td>contains the details about the current quota, time to wait until requests are allowed again</td></tr><tr><td>What to do</td><td><ul><li>wait until the requests are allowed again</li><li>check why the quota was exceeded</li><li>if you want to change the quota, contact your CL manager</li></ul></td></tr></tbody></table>

## 2xxxx codes

Error codes `2xxxx` indicate business logic related issues with input (failed preconditions, validations etc.).

### 22000-2002

| Message     | User with id = `userId` already exists                                                                                                |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Description | You're trying to register a new user with existing user id                                                                            |
| What to do  | <p>Check that correct user in requesting the operation</p><p>Try again with the correct user. If it doesn't help, contact support</p> |

### 22000-2003

| Message     | Incorrect time zone id: `timeZoneId`                                                                                         |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Description | You're trying to register a new user with incorrect `timeZoneId`                                                             |
| What to do  | Try again with the correct `timeZoneId` format according to [api description](https://tms.coreledger.net/swagger/index.html) |

### 22000-2004

| Message     | Incorrect language code: `languageCode`                                                                                 |
| ----------- | ----------------------------------------------------------------------------------------------------------------------- |
| Description | You're trying to register a `languageCode` which is not supported by TEOS Platform                                      |
| What to do  | Try again with the correct `languageCode` according to [api description](https://tms.coreledger.net/swagger/index.html) |
