# Handling Errors

Requests made to our APIs can result in several different error responses. The following document describes the recovery tactics and provides a list of error values with a map to the most common recovery tactic to use.

## Error Responses <a href="receiving-errorcodes" id="receiving-errorcodes"></a>

TEOS API is using HTTP return codes as a highest level of response codes.

HTTP 4xx - error on the client side

* HTTP 400 - error in input (incorrect parameters, failed preconditions)
* HTTP 401/403 - error with authentication/authorization
* HTTP 404 - error in resource URI

HTTP 500 - internal server error

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

* `code`: high-level error code
* `message`: a message, describing the issue
* `target`: the path requested
* `details`: depending on the error, may be presented or not. specifies the details of the error.
  * `code`: the subcode of the issue
  * `message`: a message, describing the details of the issue
  * `arguments`: if a message contains any data (strings, decimals etc), that need to be used for i18n of the error message, this field contains the names and the values of the data
* `clTraceId`: Internal support identifier. When reporting a bug related to a TEOS API call, include the `clTraceId` to help us find log data for debugging.

Error codes `1xxxx` indicate non-business logic related issues with input (auth issues, issues with parsing input data, rate limiting etc.). These errors are mostly 'technical' (non-user), related to the problems in the client app's code.

Error codes `2xxxx` indicate business logic related issues with input (failed preconditions, validations etc.).

| HTTP status | Code                              | Details.Code                          | Message                                                                                                                                                      |
| ----------- | --------------------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 401         | [11001](handling-errors.md#11001) |                                       | UserId was not found in provided authentication data                                                                                                         |
| 400         | [12001](handling-errors.md#12001) |                                       | There were OData validation errors                                                                                                                           |
| 400         | [12002](handling-errors.md#12002) |                                       | Input binding failed                                                                                                                                         |
| 400         | [21000](handling-errors.md#21000) |                                       | One or more preconditions failed                                                                                                                             |
| 400         | [21000](handling-errors.md#21000) | [1001](handling-errors.md#21000-1001) | Asset with uinque Id '{uniqueAssetId}' does not exist                                                                                                        |
| 400         | [21000](handling-errors.md#21000) | [1002](handling-errors.md#21000-1002) | the user '{userId}' does not own asset ('uniqueAssetId') issuer's address '{assetIssuerAddress}'                                                             |
| 400         | [21000](handling-errors.md#21000) | [1003](handling-errors.md#21000-1003) | invalid units amount provided (must be positive integer): '{providedAmount}'                                                                                 |
| 400         | [21000](handling-errors.md#21000) | [1004](handling-errors.md#21000-1004) | spark factor is not defined for the asset '{uniqueAssetId}'                                                                                                  |
| 400         | [21000](handling-errors.md#21000) | [1005](handling-errors.md#21000-1005) | the user '{userId}' does not own signer address '{signerAddress}'                                                                                            |
| 400         | [21000](handling-errors.md#21000) | [1006](handling-errors.md#21000-1006) | not enough sparks on the balance. Address: {signerAddress}, uniqueAssetId: {uniqueAssetId}, required amount: {requiredAmount}, actual amount: {actualAmount} |
| 400         | [21000](handling-errors.md#21000) | [1007](handling-errors.md#21000-1007) | the instance is configured to operate on assets from ledger {configuredLedgerId}, but the requested asset '{uniqueAssetId}' is from ledger {assetLedgerId}   |
| 400         | [21000](handling-errors.md#21000) | [1008](handling-errors.md#21000-1008) | The source asset with Id '{sourceUniqueAssetId}' is already linked to asset with id '{targetUniqueAssetId}'                                                  |
| 400         | [21000](handling-errors.md#21000) | [1009](handling-errors.md#21000-1009) | The source asset with Id '{sourceUniqueAssetId}' is not linked to asset with id '{targetUniqueAssetId}'                                                      |
| 400         | [22000](handling-errors.md#22000) |                                       | One or more validations failed                                                                                                                               |
| 400         | [22000](handling-errors.md#22000) | [2001](handling-errors.md#22000-2001) | Either asset name or issuer address should be provided in search request                                                                                     |
| 400         | [22000](handling-errors.md#22000) | [2002](handling-errors.md#22000-2002) | Issuer address value should be 40 or 42 symbol long                                                                                                          |
| 400         | [22000](handling-errors.md#22000) | [2003](handling-errors.md#22000-2003) | Valid language code should be provided for asset                                                                                                             |
| 400         | [22000](handling-errors.md#22000) | [2004](handling-errors.md#22000-2004) | Valid jurisdiction should be provided for asset                                                                                                              |
| 400         | [22000](handling-errors.md#22000) | [2005](handling-errors.md#22000-2005) | Asset's unit of measure is not valid                                                                                                                         |
| 400         | [22000](handling-errors.md#22000) | [2006](handling-errors.md#22000-2006) | Asset's spark factor is not valid                                                                                                                            |
| 400         | [22000](handling-errors.md#22000) | [2007](handling-errors.md#22000-2007) | Asset's asset class is not valid                                                                                                                             |
| 400         | [22000](handling-errors.md#22000) | [2008](handling-errors.md#22000-2008) | The number of sections in asset custom definition item's SectionsPathNames differs from SectionsPath                                                         |
| 400         | [22000](handling-errors.md#22000) | [2009](handling-errors.md#22000-2009) | Offered asset unqueId must be specified in request                                                                                                           |
| 400         | [22000](handling-errors.md#22000) | [2010](handling-errors.md#22000-2010) | Desired asset unqueId must be specified in request                                                                                                           |
| 400         | [22000](handling-errors.md#22000) | [2011](handling-errors.md#22000-2011) | Desired and offered assets unqueIds must differ                                                                                                              |
| 400         | [22000](handling-errors.md#22000) | [2012](handling-errors.md#22000-2012) | Either offered or desired amount of sparks must be specified in request but not both                                                                         |
| 400         | [22000](handling-errors.md#22000) | [2013](handling-errors.md#22000-2013) | Signer address must be specified                                                                                                                             |
| 400         | [22000](handling-errors.md#22000) | [2014](handling-errors.md#22000-2014) | Input amount must be a positive integer                                                                                                                      |
| 400         | [22000](handling-errors.md#22000) | [2015](handling-errors.md#22000-2015) | Array of supply ids must contain at least one supply id                                                                                                      |
| 400         | [22000](handling-errors.md#22000) | [2016](handling-errors.md#22000-2016) | Array of target unique asset ids must not be empty                                                                                                           |
| 400         | [23000](handling-errors.md#23000) |                                       | \<Sdk error code>:\<Sdk error message>                                                                                                                       |

## 11001

|             |                                                      |
| ----------- | ---------------------------------------------------- |
| Message     | UserId was not found in provided authentication data |
| Description | user was not authenticated                           |
| What to do  | Check the authentication data                        |

## 12001

|             |                                                                                                                                                                      |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | There were OData validation errors                                                                                                                                   |
| Description | malformed oData request (missing required fields, redundant fields etc.)                                                                                             |
| Details     | contains the array of sub-errors, specifying the issue                                                                                                               |
| What to do  | <p>- check the correctness of the request body according to oData and the request specs.</p><p>- check the <code>details</code> field for additional information</p> |

## 12002

|             |                                                                                                                                                            |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | Input binding failed                                                                                                                                       |
| Description | malformed request body (issues when parsing etc.)                                                                                                          |
| Details     | contains the array of sub-errors, specifying the issue                                                                                                     |
| What to do  | <p>- check the correctness of the request body according to the request specs.</p><p>- check the <code>details</code> field for additional information</p> |

## 21000

|             |                                                                                                            |
| ----------- | ---------------------------------------------------------------------------------------------------------- |
| Message     | One or more preconditions failed                                                                           |
| Description | The provided input data are valid, but do not conform some of the prerequisites of the requested operation |
| Details     | Contains details about the failed preconditions. See error codes of the details below                      |
| What to do  | Check the `details` field for additional information                                                       |

## 21000-1001

|             |                                                                                                                       |
| ----------- | --------------------------------------------------------------------------------------------------------------------- |
| Message     | asset with uinque Id '{uniqueAssetId}' does not exist                                                                 |
| Description | the requested operation requires, that the asset with the 'uniqueAssetId' exists prior to execution of this operation |
| What to do  | check that correct uniqueAssetId is used                                                                              |
| Arguments   | `uniqueAssetId`                                                                                                       |

## 21000-1002

|             |                                                                                                                                                                                            |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Message     | the user '{userId}' does not own asset ('uniqueAssetId') issuer's address '{assetIssuerAddress}'                                                                                           |
| Description | the requested operation requires, that the user, requesting the operation, owns the wallet, that was used to create the asset                                                              |
| What to do  | <p>- check that correct uniqueAssetId is used</p><p>- check that correct user in requesting the operation</p><p>- check that the 'assetIssuerAddress' wallet is added to user's wallet</p> |
| Arguments   | <p><code>userId</code></p><p><code>uniqueAssetId</code></p><p><code>assetIssuerAddress</code></p>                                                                                          |

## 21000-1003

|             |                                                                              |
| ----------- | ---------------------------------------------------------------------------- |
| Message     | invalid units amount provided (must be positive integer): '{providedAmount}' |
| Description | the amount of sparks is less than or equal to zero                           |
| What to do  | check the value of the sparks                                                |
| Arguments   | `providedAmount`                                                             |

## 21000-1004

|             |                                                                                                             |
| ----------- | ----------------------------------------------------------------------------------------------------------- |
| Message     | spark factor is not defined for the asset '{uniqueAssetId}'                                                 |
| Description | the requested operation requires, that the spark factor is defined for the asset, but it's actually missing |
| What to do  | add spark factor to the asset description                                                                   |
| Arguments   | `uniqueAssetId`                                                                                             |

## 21000-1005

|             |                                                                      |
| ----------- | -------------------------------------------------------------------- |
| Message     | the user '{userId}' does not own signer address '{signerAddress}'    |
| Description | the user does not own the signer address                             |
| What to do  | check that the 'assetIssuerAddress' wallet is added to user's wallet |
| Arguments   | <p><code>userId</code></p><p><code>signerAddress</code></p>          |

## 21000-1006

|             |                                                                                                                                                              |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Message     | not enough sparks on the balance. Address: {signerAddress}, uniqueAssetId: {uniqueAssetId}, required amount: {requiredAmount}, actual amount: {actualAmount} |
| Description | the requested operation requires, that there's at least 'actualAmount' of sparks on the 'signerAddress' asset balance                                        |
| What to do  | add enough sparks of the asset to the 'signerAddress'                                                                                                        |
| Arguments   | <p><code>signerAddress</code></p><p><code>uniqueAssetId</code></p><p><code>requiredAmount</code></p><p><code>actualAmount</code></p>                         |

## 21000-1007

|             |                                                                                                                                                            |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | the instance is configured to operate on assets from ledger {configuredLedgerId}, but the requested asset '{uniqueAssetId}' is from ledger {assetLedgerId} |
| Description | the requested operation requires, that the asset with the 'uniqueAssetId' was created in the ledger, that is configured for the current istance            |
| What to do  | check that correct uniqueAssetId is used                                                                                                                   |
| Arguments   | <p><code>configuredLedgerId</code></p><p><code>uniqueAssetId</code></p><p><code>assetLedgerId</code></p>                                                   |

## 21000-1008

|             |                                                                                                                  |
| ----------- | ---------------------------------------------------------------------------------------------------------------- |
| Message     | the source asset with id  '{sourceUniqueAssetId}' is already linked to the asset with id '{targetUniqueAssetId}' |
| Description | it is not possible to link an already liked asset                                                                |
| What to do  | check that the targetUniqueAssetId belongs to an asset that is not yet linked                                    |
| Arguments   | <p><code>sourceUniqueAssetId</code></p><p><code>targetUniqueAssetId</code></p>                                   |

## 21000-1009

|             |                                                                                                              |
| ----------- | ------------------------------------------------------------------------------------------------------------ |
| Message     | the source asset with id  '{sourceUniqueAssetId}' is not linked to the asset with id '{targetUniqueAssetId}' |
| Description | it is not possible to unlink assets which are not linked                                                     |
| What to do  | check that the targetUniqueAssetId of a linked asset is used                                                 |
| Arguments   | <p><code>sourceUniqueAssetId</code></p><p><code>targetUniqueAssetId</code></p>                               |

## 22000

|             |                                                                                                              |
| ----------- | ------------------------------------------------------------------------------------------------------------ |
| Message     | One or more validations failed                                                                               |
| Description | The provided input data are correct, but do not conform some of the prerequisites of the requested operation |
| Details     | contains details about the failed validations. See error codes of the details below                          |
| What to do  | Check the `details` field for additional information                                                         |

## 22000-2001

|             |                                                                                                                                      |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Message     | Either asset name or issuer address should be provided in search request                                                             |
| Description | when executing a search, either asset name or issuer address or both should be provided in search request, but both fields are empty |
| What to do  | fill either or both of the requested fields                                                                                          |

## 22000-2002

|             |                                                                                                                       |
| ----------- | --------------------------------------------------------------------------------------------------------------------- |
| Message     | Issuer address value should be 40 or 42 symbol long                                                                   |
| Description | When executing a search a valid address should be provided: it should be 40 characters long or 42 if prefixed with 0x |
| What to do  | Provide a correct issuer address                                                                                      |

## 22000-2003

|             |                                                                            |
| ----------- | -------------------------------------------------------------------------- |
| Message     | Valid language code should be provided for asset                           |
| Description | A created asset must have a value for the field 'Language'                 |
| What to do  | Assign a correct value taken from the document db collection of attributes |

## 22000-2004

|             |                                                                            |
| ----------- | -------------------------------------------------------------------------- |
| Message     | Valid jurisdiction should be provided for asset                            |
| Description | A created asset must have a value for the field 'jurisdiction'             |
| What to do  | Assign a correct value taken from the document db collection of attributes |

## 22000-2005

|             |                                                                            |
| ----------- | -------------------------------------------------------------------------- |
| Message     | Asset's unit of measure is not valid                                       |
| Description | An incorrect value is provided for the asset's property 'UnitOfMeasure'    |
| What to do  | Assign a correct value taken from the document db collection of attributes |

## 22000-2006

|             |                                                                      |
| ----------- | -------------------------------------------------------------------- |
| Message     | Asset's spark factor is not valid                                    |
| Description | An incorrect value is provided or the asset's property 'SparkFactor' |
| What to do  | Provide a valid number for the asset's property 'SparkFactor'        |

## 22000-2007

|             |                                                                            |
| ----------- | -------------------------------------------------------------------------- |
| Message     | Asset's class is not valid                                                 |
| Description | An incorrect value is provided for the asset's property 'AssetClass'       |
| What to do  | Assign a correct value taken from the document db collection of attributes |

## 22000-2008

|             |                                                                                                                                                                                                                                             |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | The number of sections in Asset custom definition item's SectionsPathNames differs from SectionsPath                                                                                                                                        |
| Description | The number of sections in Asset custom definition item's SectionsPathNames differs from SectionsPath. For example, SectionPath="\[main]\[fields]\[name]" has three sections and SectionsPathNames has only two "\[Main]\[Asset properties]" |
| What to do  | Either provide the same number of section names in SectionsPathNames as for SectionsPath or leave it empty. In latter case the names will be copied from SectionsPath                                                                       |

## 22000-2009

|             |                                                                                 |
| ----------- | ------------------------------------------------------------------------------- |
| Message     | Offered asset unqueId must be specified in request                              |
| Description | The request does not contain a value for the required property `OfferedAssetId` |
| What to do  | Provide a value for the property `OfferedAssetId`                               |

## 22000-2010

|             |                                                                                 |
| ----------- | ------------------------------------------------------------------------------- |
| Message     | Desired asset unqueId must be specified in request                              |
| Description | The request does not contain a value for the required property `DesiredAssetId` |
| What to do  | Provide a value for the property `DesiredAssetId`                               |

## 22000-2011

|             |                                                                                                   |
| ----------- | ------------------------------------------------------------------------------------------------- |
| Message     | Desired and offered assets unqueIds must differ                                                   |
| Description | Same values are provided for both `OfferedAssetId` and `DesiredAssetId` properties in the request |
| What to do  | Provide different values for the properties `OfferedAssetId` and `DesiredAssetId`                 |

## 22000-2012

|             |                                                                                                             |
| ----------- | ----------------------------------------------------------------------------------------------------------- |
| Message     | Either offered or desired amount of sparks must be specified in request but not both                        |
| Description | It is required, that either `OfferedAmount` or `DesiredAmount` value is specified in the request (not both) |
| What to do  | Check that one and only one property (either `OfferedAmount` or `DesiredAmount`) is assigned a value        |

## 22000-2013

|             |                                                                                                 |
| ----------- | ----------------------------------------------------------------------------------------------- |
| Message     | Signer address must be specified                                                                |
| Description | An authenticated user can have different owned address, so the signer address must be specified |
| What to do  | Provide a value for the property `SignerAddress`                                                |

## 22000-2014

|             |                                                                 |
| ----------- | --------------------------------------------------------------- |
| Message     | Input amount must be a positive integer                         |
| Description | Incorrect value is specified for the property `InputAmount`     |
| What to do  | Provide a positive integer value for the property `InputAmount` |

## 22000-2015

|             |                                                                        |
| ----------- | ---------------------------------------------------------------------- |
| Message     | Array of supply ids must contain at least one supply id                |
| Description | The `SupplyIds` property must be a non-empty array                     |
| What to do  | Provide a correct value (non-empty array) for the `SupplyIds` property |

## 22000-2016

|             |                                                                        |
| ----------- | ---------------------------------------------------------------------- |
| Message     | Array of target unique asset ids must not be empty                |
| Description | The `TargetAssetIds` property must be a non-empty array                     |
| What to do  | Provide a correct value (non-empty array) for the `TargetAssetIds` property |

## 23000

|             |                                                                                                      |
| ----------- | ---------------------------------------------------------------------------------------------------- |
| Message     | \<SDK error code>:\<SDK error message>                                                               |
| Description | This error code indicates, that a problem has occurred while processing the request on the SDK side. |
| Details     | contains details about the issue                                                                     |
| What to do  | refer to the SDK documentation to find out the reasons and possible solutions for the problem        |

### Error Codes

| Code or Type   | Name                 | What To Do                                                                                                                                                                                                                       |
| -------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| OAuthException |                      | <p>If no subcode is present, the login status or access token has expired, been revoked, or is otherwise invalid. <a href="../authentication.md">Get a new access token</a>.</p><p>If a subcode is present, see the subcode.</p> |
| 100500?        | Invalid Access Token | Access token has expired, been revoked, or is otherwise invalid. [Handle expired access tokens](../authentication.md).                                                                                                           |
|                |                      |                                                                                                                                                                                                                                  |

### Validation Error Subcodes <a href="errorsubcodes" id="errorsubcodes"></a>

| Code    | Name                                     | What To Do                                                                                                                                   |
| ------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 100500? | API Unknown                              | Possibly a temporary issue due to downtime. Wait and retry the operation. If it occurs again, check that you are requesting an existing API. |
|         | API Too Many Calls                       | Temporary issue due to throttling. Wait and retry the operation, or examine your API request volume.                                         |
|         | API Tenant Too Many Calls                | Temporary issue due to throttling. Wait and retry the operation, or examine your API request volume.                                         |
|         |                                          |                                                                                                                                              |
| 100500? | Name is missing in the new asset request | Add new asset name to the request and try again                                                                                              |

### Authentication Error Subcodes <a href="errorsubcodes" id="errorsubcodes"></a>

| Code | Name                     | What To Do                                          |
| ---- | ------------------------ | --------------------------------------------------- |
|      | Access token has expired | [Get a new access token](../authentication.md).     |
|      | Unconfirmed User         | Administrator of the tenant should confirm the user |

### Rate Limiting Error Codes

| Throttling Type         | At least                   | Error Code |
| ----------------------- | -------------------------- | ---------- |
| IP-level throttling     | 5 calls per IP/second      | 6001       |
| Tenant-level throttling | 10000 calls per Tenant/24h | 6002       |
