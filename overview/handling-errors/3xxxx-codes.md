# 3xxxx codes

Addresses parameter of the GetAddressBalances request is empty.

## 31000

|             |                                                                                                                                                                               |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Description | These error codes are related to the logic of the component for off-chain storage. They always come with the subcode, error-specific details are provided within the subcodes |
| What to do  | Check details of the subcode                                                                                                                                                  |

#### 31000-10002

|             |                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | object with docType: `asset` and docId: `docId` already exists                                                                                                                                                                                                                                                                                                                                                         |
| Description | The creation of a new document failed because a document with the same type and the document id already exists                                                                                                                                                                                                                                                                                                         |
| What to do  | <p>If you're trying to create an asset, try again, if error persists, contact CoreLedger and provide <code>clTraceId</code><br><br>If you're trying to amend an asset, check that you don't have not signed and not rejected amendments for this asset. If there are any, complete transaction. If there are no not signed amendments and if error persists, contact CoreLedger and provide <code>clTraceId</code></p> |

#### 31000-10003

|             |                                                                                         |
| ----------- | --------------------------------------------------------------------------------------- |
| Message     | mongo write operations response with error code: `errorCode`                            |
| Description | The requested operation failed because of the internal error of the 3rd party component |
| What to do  | Try again, if error persists, contact CoreLedger and provide `clTraceId`                |

#### 31000-10004

|             |                                                                                         |
| ----------- | --------------------------------------------------------------------------------------- |
| Message     | mongo operations response with error code: `errorCode`                                  |
| Description | The requested operation failed because of the internal error of the 3rd party component |
| What to do  | Try again, if error persists, contact CoreLedger and provide `clTraceId`                |

#### 31000-10005

|             |                                                                                                                                                                                                                                                                                               |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | Document with type: `docType` and id: `docId` not found.                                                                                                                                                                                                                                      |
| Description | The requested document is not found                                                                                                                                                                                                                                                           |
| What to do  | <p>If you expect this document to be written to the off-chain storage of the TEOS Platform, contact CoreLedger and provide <code>clTraceId</code> and <code>uniqueAssetId</code><br>If you don't expect this asset to be written to the off-chain storage of the TEOS Platform, ignore it</p> |

#### 31000-10006

|             |                                                                          |
| ----------- | ------------------------------------------------------------------------ |
| Message     | Document unexpected error `message`                                      |
| Description | Some unexpected error happened, most likely you've managed to find a bug |
| What to do  | Try again, if error persists, contact CoreLedger and provide `clTraceId` |

#### 31000-10007

|             |                                                                                                                                                             |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | Object with docType: `docType` and docId: `docId` blockreference is not empty                                                                               |
| Description | The request for deleting the asset document can't be completed because asset is already written to the blockchain. Most likely you've managed to find a bug |
| What to do  | Try again, if error persists, contact CoreLedger and provide `clTraceId`                                                                                    |

#### 31000-10008

|             |                                                                                                                                                                                       |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | `searchType` not supported. Supported search types are: fullRecords, records and ids                                                                                                  |
| Description | While searching for assets it is necessary to specify the type of the search. These are supported types: "fullRecords", "records" and "ids", most likely you've managed to find a bug |
| What to do  | Try again, if error persists, contact CoreLedger and provide `clTraceId`                                                                                                              |

#### 31000-10012

|             |                                                                                                                                                                                                    |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | refId or refType missing                                                                                                                                                                           |
| Description | The amendment request doesn't have all necessary info about original asset record. Most likely you've managed to find a bug                                                                        |
| What to do  | Check that you provide correct `refId` (original asset's uniqueAssetId in decimal representation), `refType`("asset") and try again, if error persists, contact CoreLedger and provide `clTraceId` |

#### 31000-10013

|             |                                                                                                              |
| ----------- | ------------------------------------------------------------------------------------------------------------ |
| Message     | Amendment referenced parent not found with docId: `docId` and docType: `docType`                             |
| Description | The amendment request is for the original asset record which was not found                                   |
| What to do  | Provide correct `uniqueAssetId` and try again, if error persists, contact CoreLedger and provide `clTraceId` |

#### 31000-10015

|             |                                                                                                                                                    |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | Amendment author `amendmentAuthor` does not match parent author: `refDocAuthor`                                                                    |
| Description | Issuer address of the amendment must be the same as the issuer of the original asset record.                                                       |
| What to do  | Make sure that the amendment request is created using the same wallet and try again, if error persists, contact CoreLedger and provide `clTraceId` |

#### 31000-10016

|             |                                                                                                                                                                                                |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | Amendment referenced tenant not match amendment tenant:`amendmentTenant` parent tenant:`parentTenant`                                                                                          |
| Description | Tenant of the amendment must be the same as the tenant of the original asset record                                                                                                            |
| What to do  | Make sure that the amendment request is created from the same tenant where the original asset record was created  and try again, if error persists, contact CoreLedger and provide `clTraceId` |

#### 31000-10017

|             |                                                                                                                                                                                                |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | Amendment referenced tenant not match amendment blockchain:`amendmentBlockChain` parent blockchain:`parentBlockChain`                                                                          |
| Description | Blockchain of the amendment must be the same as the blockchain of the original asset record                                                                                                    |
| What to do  | Make sure that the amendment request is created from the same tenant where the original asset record was created  and try again, if error persists, contact CoreLedger and provide `clTraceId` |

#### 31000-10018

|             |                                                                                                                                     |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Message     | Object with docType: `docType` and docId: `docId` blockreference is already set                                                     |
| Description | There was a try to set block reference for the asset where block reference is already set. Most likely you've managed to find a bug |
| What to do  | Try again, if error persists, contact CoreLedger and provide `clTraceId`                                                            |

#### 31000-10023

|             |                                                                                                                                                                                                                                                                                                                                                        |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Message     | Schema names array `schemaKey.schemaKey` and display names array `schemaKey.dispalyName` have different length                                                                                                                                                                                                                                         |
| Description | Asset object misses the display names for the sections path of custom definition items.                                                                                                                                                                                                                                                                |
| What to do  | Provide value for `SectionsPathNames` structured in the way which will match the `SectionsPath` for custom definition items_._ For example, if `SectionsPath` is defined as \[General]\[Issuer], then `SectionsPathNames` must have structure \[DisplayNameForGeneral]\[DisplayNameForIssuer]. [Read more](../../using-the-teos-api/concepts/asset.md) |

#### 31000-10024

|             |                                                                                                                                                                       |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | Amendment with docId:`docId` changes an immutable property `[GENERAL][tuf]`                                                                                           |
| Description | There was a try to change asset general properties which are not allowed to be amended                                                                                |
| What to do  | Make sure that your amendment request does not contain [general properties ](../../using-the-teos-api/concepts/asset.md#general-properties)of the asset and try again |

#### 31000-10025

|             |                                                                    |
| ----------- | ------------------------------------------------------------------ |
| Message     | Documents are already linked ({UniqueAssetIds})                    |
| Description | There was a try to link assets and some of them are already linked |
| What to do  | Make sure that you only link assets which are not yet linked       |

#### 31000-10026

|             |                                                                  |
| ----------- | ---------------------------------------------------------------- |
| Message     | Documents are not linked ({UniqueAssetIds})                      |
| Description | There was a try to unlink assets and some of them are not linked |
| What to do  | Make sure that you only unlink assets which are linked           |

#### 31000-10027

|             |                                                                                                                                            |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Message     | Cannot remove property ({schemaNames}) because it was already updated.                                                                     |
| Description | In a same amendment a value for a property was set and then there was a try to remove this property. These actions are mutually exclusive. |
| What to do  | Choose what to do: either update or delete the same property, but not both                                                                 |

#### 31000-10028

|             |                                                                                                                                                                                           |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | Cannot remove language ({language}). The current document already contains some data in this language.                                                                                    |
| Description | In a same amendment a value for a property was set in a certain language and then there was a try to remove the whole translation to that language. These actions are mutually exclusive. |
| What to do  | Choose what to do: either update some properties in a certain language or delete the whole translation in that language, but not both                                                     |

#### 31000-10029

|             |                                                                                                                                                |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | Cannot update property ({fullSchemaPath}) because it was removed.                                                                              |
| Description | A property was removed in an amendment. Then there was a try to update a property in the same amendment. These actions are mutually exclusive. |
| What to do  | Choose what to do: either update or delete the same property, but not both                                                                     |

#### 31000-10030

|             |                                                                                                                                                                    |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Message     | Cannot write or translate in the language ({language}) that was removed.                                                                                           |
| Description | In an amendment a translation in a certain language was removed. Then there was a try to update a property in that language. These actions are mutually exclusive. |
| What to do  | Choose what to do: either update some properties in a certain language or delete the whole translation in that language, but not both                              |

#### 31000-20002

|             |                                                                                                       |
| ----------- | ----------------------------------------------------------------------------------------------------- |
| Message     | Parameter docType can not be null                                                                     |
| Description | Some unexpected error happened when processing your request, most likely you've managed to find a bug |
| What to do  | Try again, if error persists, contact CoreLedger and provide `clTraceId`                              |



## 32000&#x20;

|             |                                                                                                                                                                                        |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Description | These error codes are related to the logic of the component which writes to the blockchain. They always come with the subcode, error-specific details are provided within the subcodes |
| What to do  | Check details of the subcode                                                                                                                                                           |

#### 32000-10000

|             |                                                                                                       |
| ----------- | ----------------------------------------------------------------------------------------------------- |
| Message     | Error code `errorCode` not found                                                                      |
| Description | Some unexpected error happened when processing your request, most likely you've managed to find a bug |
| What to do  | Try again, if error persists, contact CoreLedger and provide `clTraceId`                              |

#### 32000-10001

|             |                                                                                                                                                                         |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | Error message has wrong format or count of passed parameters do not match. Error message: `message` , parameters: `parameters`, format error description: `description` |
| Description | Some unexpected error happened when processing your request, most likely you've managed to find a bug                                                                   |
| What to do  | Try again, if error persists, contact CoreLedger and provide `clTraceId`                                                                                                |

#### 32000-10004

|             |                                                                                                                                                                                                                                                            |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | Error validating request.                                                                                                                                                                                                                                  |
| Description | Some validation of the request body has failed                                                                                                                                                                                                             |
| What to do  | <p>If you use TxServer directly, check that your request meets the requirements of the api and try again.<br><br>If you receive this error when calling TEOS API, try again, if error persists, contact CoreLedger and provide <code>clTraceId</code>.</p> |

#### 32000-10011

|             |                                                                                                                                                                                                                                                                                                                                              |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | Provider `provider` not found                                                                                                                                                                                                                                                                                                                |
| Description | The provider associated with the transaction could not be found                                                                                                                                                                                                                                                                              |
| What to do  | <p>If you use TxServer directly, make sure that the request contains correct <code>provider</code> and try again, if error persists, contact CoreLedger and provide <code>clTraceId.</code><br><br>If you receive this error when calling TEOS API, try again, if error persists, contact CoreLedger and provide <code>clTraceId</code>.</p> |

#### 32000-10012

|             |                                                                                                                                                                                                                                                                                                                                              |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | Provider `provider` not active                                                                                                                                                                                                                                                                                                               |
| Description | The provider which is used in the request data is not active anymore and relation between the wallet and this provider can't be established                                                                                                                                                                                                  |
| What to do  | <p>If you use TxServer directly, make sure that the request contains correct <code>provider</code> and try again, if error persists, contact CoreLedger and provide <code>clTraceId.</code><br><br>If you receive this error when calling TEOS API, try again, if error persists, contact CoreLedger and provide <code>clTraceId</code>.</p> |

#### <mark style="color:yellow;">32000-10013</mark>

|             |                                                                                                       |
| ----------- | ----------------------------------------------------------------------------------------------------- |
| Message     | Provider `provider` has no public key set.                                                            |
| Description | Some unexpected error happened when processing your request, most likely you've managed to find a bug |
| What to do  | Try again, if error persists, contact CoreLedger and provide `clTraceId`                              |

#### <mark style="color:yellow;">32000-10021</mark>

|             |                                                                                                                                                                                                                                                                                                                                                              |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Message     | No configured address `address` found for provider `provider`.                                                                                                                                                                                                                                                                                               |
| Description | No configured contract address with requested technology found for provider                                                                                                                                                                                                                                                                                  |
| What to do  | <p>If you use TxServer directly, make sure that the request contains correct contract address and technology and try again. If error persists, contact CoreLedger and provide <code>clTraceId</code>.</p><p></p><p>If you receive this error when calling TEOS API, try again, if error persists, contact CoreLedger and provide <code>clTraceId</code>.</p> |

#### <mark style="color:yellow;">32000-10022</mark>

|             |                                                                                                       |
| ----------- | ----------------------------------------------------------------------------------------------------- |
| Message     | Address `address` for provider `provider` is inactive.                                                |
| Description | Some unexpected error happened when processing your request, most likely you've managed to find a bug |
| What to do  | Try again, if error persists, contact CoreLedger and provide `clTraceId`                              |

#### <mark style="color:yellow;">32000-10023</mark>

|             |                                                                                                       |
| ----------- | ----------------------------------------------------------------------------------------------------- |
| Message     | More than one active address `address` configured for provider `provider`.                            |
| Description | Some unexpected error happened when processing your request, most likely you've managed to find a bug |
| What to do  | Try again, if error persists, contact CoreLedger and provide `clTraceId`                              |

#### <mark style="color:yellow;">32000-10024</mark>

|             |                                                                                                                                                                                                                                                                                                                                    |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | Provider address nonce `nonce` is invalid.                                                                                                                                                                                                                                                                                         |
| Description | Error occurred during validating nonce of the transaction being posted                                                                                                                                                                                                                                                             |
| What to do  | <p>If you use TxServer directly, make sure that the request contains correct nonce and try again, if error persists, contact CoreLedger and provide <code>clTraceId</code>.</p><p></p><p>If you receive this error when calling TEOS API, try again, if error persists, contact CoreLedger and provide <code>clTraceId</code>.</p> |

#### <mark style="color:yellow;">32000-10031</mark>

|             |                                                                                                                                                                                                                                                                                                                                                                                            |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Message     | Source address `address` with technology `technology` not found.                                                                                                                                                                                                                                                                                                                           |
| Description | No address address with technology technology associated with device was found during validation of a signed transaction.                                                                                                                                                                                                                                                                  |
| What to do  | <p>If you use TxServer directly, check that you are using correct device and correct signer address (wallet), and that the address is added to the device. If error persists, contact CoreLedger and provide <code>clTraceId</code>.</p><p></p><p>If you receive this error when calling TEOS API, try again, if error persists, contact CoreLedger and provide <code>clTraceId</code></p> |

#### <mark style="color:yellow;">32000-10032</mark>

|             |                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | Source address `address` with technology `technology` is inactive.                                                                                                                                                                                                                                                                                                                          |
| Description | No active address with technology associated with device was found during validation of a signed transaction.                                                                                                                                                                                                                                                                               |
| What to do  | <p>If you use TxServer directly, check that you are using correct device and correct signer address (wallet), and that the address is added to the device. If error persists, contact CoreLedger and provide <code>clTraceId</code>.</p><p></p><p>If you receive this error when calling TEOS API, try again, if error persists, contact CoreLedger and provide <code>clTraceId</code>.</p> |

#### <mark style="color:yellow;">32000-10033</mark>

|             |                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | No active assignments between client device and source address `address` with technology `technology` available.                                                                                                                                                                                                                                                                            |
| Description | No active address address with technology technology associated with to any device was found during posting a transaction.                                                                                                                                                                                                                                                                  |
| What to do  | <p>If you use TxServer directly, check that you are using correct device and correct signer address (wallet), and that the address is added to the device. If error persists, contact CoreLedger and provide <code>clTraceId</code>.</p><p></p><p>If you receive this error when calling TEOS API, try again, if error persists, contact CoreLedger and provide <code>clTraceId</code>.</p> |

#### 32000-10051

|             |                                                                                                                                                                                                                                                                                                                                                               |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | Signature missing                                                                                                                                                                                                                                                                                                                                             |
| Description | Posted transaction doesn't have required parameter "Signature".                                                                                                                                                                                                                                                                                               |
| What to do  | <p>If you use TxServer directly, check that you sign the posted transaction with correct provider certificate and try again. If error persists, contact CoreLedger and provide <code>clTraceId</code>.</p><p></p><p>If you receive this error when calling TEOS API, try again, if error persists, contact CoreLedger and provide <code>clTraceId</code>.</p> |

#### 32000-10052

|             |                                                                                                                                                                                                                                                                                                                                                               |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | Signature does not match request data.                                                                                                                                                                                                                                                                                                                        |
| Description | Posted transaction has invalid parameter "Signature".                                                                                                                                                                                                                                                                                                         |
| What to do  | <p>If you use TxServer directly, check that you sign the posted transaction with correct provider certificate and try again. If error persists, contact CoreLedger and provide <code>clTraceId</code>.</p><p></p><p>If you receive this error when calling TEOS API, try again, if error persists, contact CoreLedger and provide <code>clTraceId</code>.</p> |

#### <mark style="color:yellow;">32000-10111</mark>

|             |                                                                                                                                                                                                                                                                                                                                                                     |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | Device `deviceId` not found.                                                                                                                                                                                                                                                                                                                                        |
| Description | Device which is used in the request is not found in TEOS Platform                                                                                                                                                                                                                                                                                                   |
| What to do  | <p>If you use TxServer directly, make sure that you're using the device id which was registered and connected to TxServer and try again, if error persists, contact CoreLedger and provide <code>clTraceId.</code><br><br>If you receive this error when calling TEOS API, try again, if error persists, contact CoreLedger and provide <code>clTraceId</code>.</p> |

#### <mark style="color:yellow;">32000-10112</mark>

|             |                                                                                                                                                                                                                                                                                                                                                                     |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | Device `deviceId` not active.                                                                                                                                                                                                                                                                                                                                       |
| Description | Device which is used in the request is not active anymore in TEOS Platform                                                                                                                                                                                                                                                                                          |
| What to do  | <p>If you use TxServer directly, make sure that you're using the device id which was registered and connected to TxServer and try again, if error persists, contact CoreLedger and provide <code>clTraceId.</code><br><br>If you receive this error when calling TEOS API, try again, if error persists, contact CoreLedger and provide <code>clTraceId</code>.</p> |

#### <mark style="color:red;">32000-10121</mark>

|             |                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | No configured address `address` found for device `deviceId.`                                                                                                                                                                                                                                                                                                                                |
| Description | This error may happen when configuring association between provider and device addresses.                                                                                                                                                                                                                                                                                                   |
| What to do  | <p>If you use TxServer directly, check that you are using correct device and correct signer address (wallet), and that the address is added to the device. If error persists, contact CoreLedger and provide <code>clTraceId</code>.</p><p></p><p>If you receive this error when calling TEOS API, try again, if error persists, contact CoreLedger and provide <code>clTraceId.</code></p> |

#### 32000-10123

|             |                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | Access token does not reference to device id.                                                                                                                                                                                                                                                                                                                                                                                            |
| Description | Access token used in the request data is not related to the device id in the request data                                                                                                                                                                                                                                                                                                                                                |
| What to do  | <p>If you use TxServer directly, make sure that you're using correct access token of the authenticated user and that you're using the device id which was registered and connected to TxServer and try again, if error persists, contact CoreLedger and provide <code>clTraceId.</code><br><br>If you receive this error when calling TEOS API, try again, if error persists, contact CoreLedger and provide <code>clTraceId</code>.</p> |

#### <mark style="color:yellow;">32000-10124</mark>

|             |                                                                                                       |
| ----------- | ----------------------------------------------------------------------------------------------------- |
| Message     | Could not revoke access token.                                                                        |
| Description | Some unexpected error happened when processing your request, most likely you've managed to find a bug |
| What to do  | Try again, if error persists, contact CoreLedger and provide `clTraceId`                              |

#### 32000-10125

|             |                                                                                                                                                                                                                                                                                                                                                               |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | No configured provider `provider` found for address `address` for device `deviceId`                                                                                                                                                                                                                                                                           |
| Description | There is no any transaction provider associated with the pair address and deviceId in the request data                                                                                                                                                                                                                                                        |
| What to do  | <p>If you use TxServer directly, add transaction provider to the <code>address</code> for this <code>deviceId</code>and try again, if error persists, contact CoreLedger and provide <code>clTraceId.</code><br><br>If you receive this error when calling TEOS API, try again, if error persists, contact CoreLedger and provide <code>clTraceId</code>.</p> |

#### 32000-10201

|             |                                                                                                                                                                                                                                                                                                                          |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Message     | Blockchain technology `technology` invalid                                                                                                                                                                                                                                                                               |
| Description | Technology used in the request data is not valid                                                                                                                                                                                                                                                                         |
| What to do  | <p>If you use TxServer directly, provide correct <code>technology</code> value and try again, if error persists, contact CoreLedger and provide <code>clTraceId.</code><br><br>If you receive this error when calling TEOS API, try again, if error persists, contact CoreLedger and provide <code>clTraceId</code>.</p> |

#### 32000-10202

|             |                                                                                                                                                                                                                                                                                                                                                |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | Contract definition for contract `contract` not found.                                                                                                                                                                                                                                                                                         |
| Description | Contract definition for contract and technology not found.                                                                                                                                                                                                                                                                                     |
| What to do  | <p>If you use TxServer directly, check that you are using correct contract address and blockchain technology. If error persists, contact CoreLedger and provide <code>clTraceId</code>.</p><p></p><p>If you receive this error when calling TEOS API, try again, if error persists, contact CoreLedger and provide <code>clTraceId</code>.</p> |

#### <mark style="color:yellow;">32000-10301</mark>

|             |                                                                                                                                                                                                                                                                                                                    |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Message     | Address registration grant `grant` not found                                                                                                                                                                                                                                                                       |
| Description | This error may happen when configuring association between provider and device addresses.                                                                                                                                                                                                                          |
| What to do  | <p>If you use TxServer directly, generate new address registration grant and try again, if error persists, contact CoreLedger and provide <code>clTraceId.</code><br><br>If you receive this error when calling TEOS API, try again, if error persists, contact CoreLedger and provide <code>clTraceId</code>.</p> |

#### <mark style="color:yellow;">32000-10302</mark>

|             |                                                                                                                                                                                                                                                                                                                    |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Message     | Address registration grant `grant` already processed.                                                                                                                                                                                                                                                              |
| Description | This error may happen when configuring association between provider and device addresses.                                                                                                                                                                                                                          |
| What to do  | <p>If you use TxServer directly, generate new address registration grant and try again, if error persists, contact CoreLedger and provide <code>clTraceId.</code><br><br>If you receive this error when calling TEOS API, try again, if error persists, contact CoreLedger and provide <code>clTraceId</code>.</p> |

#### <mark style="color:yellow;">32000-10303</mark>

|             |                                                                                                                                                                                                                                                                                                                    |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Message     | Address registration grant `grant` has been expired.                                                                                                                                                                                                                                                               |
| Description | This error may happen when configuring association between provider and device addresses.                                                                                                                                                                                                                          |
| What to do  | <p>If you use TxServer directly, generate new address registration grant and try again, if error persists, contact CoreLedger and provide <code>clTraceId.</code><br><br>If you receive this error when calling TEOS API, try again, if error persists, contact CoreLedger and provide <code>clTraceId</code>.</p> |

#### <mark style="color:yellow;">32000-10304</mark>

|             |                                                                                                                                                                                                                                                                                                                                     |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | Address registration grant `grant` technology mismatch.                                                                                                                                                                                                                                                                             |
| Description | This error may happen when configuring association between provider and device addresses, when the access registration grant was requested for a blockchain technology other then in the request.                                                                                                                                   |
| What to do  | <p>If you use TxServer directly, check that you are using correct value for blockchain technology. If error persists, contact CoreLedger and provide <code>clTraceId</code>.</p><p></p><p>If you receive this error when calling TEOS API, try again, if error persists, contact CoreLedger and provide <code>clTraceId</code>.</p> |

#### 32000-10401

|             |                                                                 |
| ----------- | --------------------------------------------------------------- |
| Message     | Transaction `transactionId` not found                           |
| Description | Transaction with specified id was not found                     |
| What to do  | Provide correct transactionId in the request data and try again |

#### 32000-10402

|             |                                                                                                                                                          |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | Transaction `transactionId` has invalid state                                                                                                            |
| Description | Transaction with specified id has invalid state                                                                                                          |
| What to do  | Revoke this transaction and create a new transaction. If you observe this problem with several transactions, contact CoreLedger and provide `clTraceId`. |

#### <mark style="color:yellow;">32000-10403</mark>

|             |                                                                                                                                                                                                                                                                                                                         |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | Transaction `transactionId` is not assigned to device `deviceId`.                                                                                                                                                                                                                                                       |
| Description | This error may happen, when you try to get a transaction from a device, that does not have an associated address, used as transaction signer address.                                                                                                                                                                   |
| What to do  | <p>If you use TxServer directly, check that the signer address is added to the device. If error persists, contact CoreLedger and provide <code>clTraceId</code>.</p><p></p><p>If you receive this error when calling TEOS API, try again, if error persists, contact CoreLedger and provide <code>clTraceId</code>.</p> |

#### <mark style="color:yellow;">32000-10421</mark>

|             |                                                                                                                                                                                                                                                                                                                         |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | Transaction signature for transaction `transactionId`  and device `deviceId` not found.                                                                                                                                                                                                                                 |
| Description | This error may happen, when you try to submit a signed transaction from a device, that does not have an associated address, used as transaction signer address.                                                                                                                                                         |
| What to do  | <p>If you use TxServer directly, check that the signer address is added to the device. If error persists, contact CoreLedger and provide <code>clTraceId</code>.</p><p></p><p>If you receive this error when calling TEOS API, try again, if error persists, contact CoreLedger and provide <code>clTraceId</code>.</p> |

#### <mark style="color:yellow;">32000-10422</mark>

|             |                                                                                                                                                                                                                                                                                                        |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Message     | Transaction signature for transaction `transactionId`  and device `deviceId`  has invalid state.                                                                                                                                                                                                       |
| Description | This error may happen, when trying to perform an operation on the transaction, which is invalid for current transaction state.                                                                                                                                                                         |
| What to do  | <p>If you use TxServer directly, check the logic of your application. If error persists, contact CoreLedger and provide <code>clTraceId</code>.</p><p></p><p>If you receive this error when calling TEOS API, try again, if error persists, contact CoreLedger and provide <code>clTraceId</code>.</p> |

#### 32000-20000

|             |                                                                                                                                                          |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | `Error specific message related to the Blockchain processing`                                                                                            |
| Description | Some error happened when processing your request in the Blockchain                                                                                       |
| What to do  | Revoke this transaction and create a new transaction. If you observe this problem with several transactions, contact CoreLedger and provide `clTraceId`. |

#### 32000-20001

|             |                                                                                                                                                                                                                                                                                                                                        |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | Address `address` is invalid.                                                                                                                                                                                                                                                                                                          |
| Description | This error may happen when adding an address to a device.                                                                                                                                                                                                                                                                              |
| What to do  | <p>If you use TxServer directly, check that the address provided in the request has a correct format. If error persists, contact CoreLedger and provide <code>clTraceId</code>.</p><p></p><p>If you receive this error when calling TEOS API, try again, if error persists, contact CoreLedger and provide <code>clTraceId</code>.</p> |

#### <mark style="color:yellow;">32000-20002</mark>

|             |                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | Duplicate nonce used for transaction.                                                                                                                                                                                                                                                                                                                                                                                                        |
| Description | This error may happen when several transactions with the same signer address are being submitted simultaneously.                                                                                                                                                                                                                                                                                                                             |
| What to do  | <p>If you use TxServer directly, try to increase nonce value (+1), sign the transaction and submit again. In general, you should avoid submitting transactions from the same signer address simultaneously. If error persists, contact CoreLedger and provide <code>clTraceId</code>.</p><p></p><p>If you receive this error when calling TEOS API, try again, if error persists, contact CoreLedger and provide <code>clTraceId</code>.</p> |

#### 32000-20003

|             |                                                                                                                                                        |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Message     | Insufficient funds for transaction.                                                                                                                    |
| Description | Address does not have enough ether to complete transaction processing                                                                                  |
| What to do  | Top up the address balance or change gas parameters: decrease gas price and gas limit (it may help to decrease the price of this specific transaction) |

#### <mark style="color:yellow;">32000-20004</mark>

|             |                                                                                                                                                                                                                                                                                                                                                                 |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | Duplicate transaction.                                                                                                                                                                                                                                                                                                                                          |
| Description | This error may happen when the same transactions with identical parameters is being submitted several times.                                                                                                                                                                                                                                                    |
| What to do  | <p>If you use TxServer directly, change the parameters of the transaction (nonce, gas price) and submit the transaction again. If error persists, contact CoreLedger and provide <code>clTraceId</code>.</p><p></p><p>If you receive this error when calling TEOS API, try again, if error persists, contact CoreLedger and provide <code>clTraceId</code>.</p> |

#### 32000-20100

|             |                                                                                                                                                                                                               |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | Transaction will probably run into error.                                                                                                                                                                     |
| Description | This warning may occur when testing transaction against the current state of blockchain without actually submitting it.                                                                                       |
| What to do  | Check the parameters of the transaction and correct if necessary before submission. After the transaction is submitted, make sure that it reaches the state "Confirmed". If not - create another transaction. |

#### <mark style="color:yellow;">32000-20101</mark>

|             |                                                                                                                                                                                                                                                                                                                     |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | No address data submitted.                                                                                                                                                                                                                                                                                          |
| Description | `Addresses` parameter of the `GetAddressBalances` request is empty.                                                                                                                                                                                                                                                 |
| What to do  | <p>If you use TxServer directly, provide at least one address in the request data. If error persists, contact CoreLedger and provide <code>clTraceId</code>.</p><p></p><p>If you receive this error when calling TEOS API, try again, if error persists, contact CoreLedger and provide <code>clTraceId</code>.</p> |

#### <mark style="color:yellow;">32000-21000</mark>

|             |                                                                            |
| ----------- | -------------------------------------------------------------------------- |
| Message     | `Error specific message related to validation of an Ethereum transaction.` |
| Description | Error occurred during validating signed Ethereum transaction               |
| What to do  | Contact CoreLedger and provide `clTraceId`.                                |

#### <mark style="color:yellow;">32000-21001</mark>

<table><thead><tr><th width="339.5"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>Transaction data invalid. RLP data must contain 9 values.</td></tr><tr><td>Description</td><td>Error occurred during validating signed Ethereum transaction</td></tr><tr><td>What to do</td><td><p>If you use TxServer directly, check that parameters of the transaction signed and submitted by device correspond to the parameters of the transaction posted by provider. If error persists, contact CoreLedger and provide <code>clTraceId</code>.</p><p></p><p>If you receive this error when calling TEOS API, try again, if error persists, contact CoreLedger and provide <code>clTraceId</code>.</p></td></tr></tbody></table>

#### <mark style="color:yellow;">32000-21002</mark>

|             |                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | Target address does not match.                                                                                                                                                                                                                                                                                                                                                                                |
| Description | Error occurred during validating signed Ethereum transaction.                                                                                                                                                                                                                                                                                                                                                 |
| What to do  | <p>If you use TxServer directly, check that parameters of the transaction signed and submitted by device correspond to the parameters of the transaction posted by provider. If error persists, contact CoreLedger and provide <code>clTraceId</code>.</p><p></p><p>If you receive this error when calling TEOS API, try again, if error persists, contact CoreLedger and provide <code>clTraceId</code>.</p> |

#### <mark style="color:yellow;">32000-21003</mark>

|             |                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | Amount does not match.                                                                                                                                                                                                                                                                                                                                                                                        |
| Description | Error occurred during validating signed Ethereum transaction.                                                                                                                                                                                                                                                                                                                                                 |
| What to do  | <p>If you use TxServer directly, check that parameters of the transaction signed and submitted by device correspond to the parameters of the transaction posted by provider. If error persists, contact CoreLedger and provide <code>clTraceId</code>.</p><p></p><p>If you receive this error when calling TEOS API, try again, if error persists, contact CoreLedger and provide <code>clTraceId</code>.</p> |

#### <mark style="color:yellow;">32000-21004</mark>

|             |                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | Transaction data does not match.                                                                                                                                                                                                                                                                                                                                                                              |
| Description | Error occurred during validating signed Ethereum transaction.                                                                                                                                                                                                                                                                                                                                                 |
| What to do  | <p>If you use TxServer directly, check that parameters of the transaction signed and submitted by device correspond to the parameters of the transaction posted by provider. If error persists, contact CoreLedger and provide <code>clTraceId</code>.</p><p></p><p>If you receive this error when calling TEOS API, try again, if error persists, contact CoreLedger and provide <code>clTraceId</code>.</p> |

## 33000

|             |                                                                                                                                                                                                                                             |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Description | <p>This error code indicates, that a problem has occurred while processing the request in the backbone components of TEOS Platform<br>Such errors always come with the subcode, error-specific details are provided within the subcodes</p> |
| What to do  | check the subcode and its details                                                                                                                                                                                                           |

#### 33000-31000

|             |                                                                                                                               |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Message     | Warp simulation error occured.                                                                                                |
| Description | This error is returned, when some problem was found during warp execution simulation. For the details check the error subcode |
| What to do  | Check the error details and respective suggestions                                                                            |

#### 33000-31001

|             |                                                                                                                                   |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Message     | There is no `inputAmount` tokens of `DesiredAssetId` available on the Address `Address`                                           |
| Description | Exchange with the selected warp can't be executed because the address offering desired asset doesn't have enough amount of sparks |
| What to do  | Select another warp or change the offered amount and try again                                                                    |

#### 33000-31002

|             |                                                                                                                                                                                                                                                                                                                       |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | Asset Mismatch                                                                                                                                                                                                                                                                                                        |
| Description | Warp consists of a chain of supplies. Each next supply should have the desiredAssetId same as the previous supply's offeredAssetId, e.g. (desired1-offered2)->(desired2-offered3), where offered2 equals to desired2. The error will be returned if a warp with supply ids, breaking this rule, is executed/simulated |
| What to do  | Make sure that the warp supplies make a chain or select another warp and try again                                                                                                                                                                                                                                    |

#### 33000-31003

|             |                                                                                                     |
| ----------- | --------------------------------------------------------------------------------------------------- |
| Message     | One of supplies in the WARP failed                                                                  |
| Description | Exchange with the selected warp can't be executed because of the problems with one of the supplies  |
| What to do  | Select another warp and try again.                                                                  |

#### 33000-31004

|             |                                                                                                      |
| ----------- | ---------------------------------------------------------------------------------------------------- |
| Message     | One of supplies does not exist                                                                       |
| Description | Exchange with the selected warp can't be executed because one of the supplies does not exist anymore |
| What to do  | Select another warp and try again                                                                    |

#### 33000-31005

|             |                                                                                                    |
| ----------- | -------------------------------------------------------------------------------------------------- |
| Message     | Sender is blocked by compliance                                                                    |
| Description | There is a controller, preventing warp execution, if the sender (last supply owner) is blacklisted |
| What to do  | Select another warp and try again                                                                  |

#### 33000-31006

|             |                                                                                                                                      |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Message     | Receiver is blocked by compliance                                                                                                    |
| Description | Exchange with the selected warp can't be executed because one of the receivers of the assets is not allowed to receive desired asset |
| What to do  | Select another warp or provide another address as a transaction signer and try again                                                 |

#### 33000-31007

|             |                                                            |
| ----------- | ---------------------------------------------------------- |
| Message     | Cannot estimate gas cost                                   |
| Description | Unexpected error during warp execution gas cost estimation |
| What to do  | Select another warp and try again                          |

#### 33000-32001

|             |                                                                                              |
| ----------- | -------------------------------------------------------------------------------------------- |
| Message     | Supply `supplyId` Issue: Not existing                                                        |
| Description | Exchange with the selected warp can't be executed because one of the supplies does not exist |
| What to do  | Select another warp and try again                                                            |

#### 33000-32002

|             |                                                                                                    |
| ----------- | -------------------------------------------------------------------------------------------------- |
| Message     | Supply `supplyId` Issue: Exhausted. Tokens fom this Supply are not available anymore               |
| Description | Exchange with the selected warp can't be executed because one of the supplies was already consumed |
| What to do  | Select another warp and try again                                                                  |

#### 33000-32003

| Message     | Supply `supplyId` Issue: Expired on `ExpiryTime`                                          |
| ----------- | ----------------------------------------------------------------------------------------- |
| Description | Exchange with the selected warp can't be executed because one of the supplies has expired |
| What to do  | Select another warp and try again                                                         |

#### 33000-32006

|             |                                                                                                                 |
| ----------- | --------------------------------------------------------------------------------------------------------------- |
| Message     | Supply `supplyId` Issue: Insufficient amount on owner's account                                                 |
| Description | The specified supply can not be executed, because its owner does not have enough sparks to the execution moment |
| What to do  | Select another warp and try again                                                                               |

#### 33000-32007

|             |                                                                                                                                                                                      |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Message     | Supply `supplyId` Issue: Something with TakeAll or other bad things                                                                                                                  |
| Description | Exchange with the selected warp can't be executed because the supply must be consumed fully ("take all" was set) but calculated output amount is less, than available in the supply  |
| What to do  | Select another warp and try again                                                                                                                                                    |

#### 33000-32008

| Message     | Some special rules were applied to supply `supplyId` consumption in supply container contract                       |
| ----------- | ------------------------------------------------------------------------------------------------------------------- |
| Description | The warp can not be executed, as the were some special rules in supply container contract, preventing the execution |
| What to do  | Select another warp and try again                                                                                   |

#### 33000-32010

|             |                                                                                                                                                |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | Supply `supplyId` Issue: Compliance: Consume failed                                                                                            |
| Description | The transfer within the selected warp can't be executed because of compliance restrictions (e.g. asset controller doesn't allow this transfer) |
| What to do  | Select another warp and try again                                                                                                              |

#### 33000-32011

|             |                                                                        |
| ----------- | ---------------------------------------------------------------------- |
| Message     | Supply `supplyId` Issue: Compliance: Send failed                       |
| Description | The owner address of the supply is not allowed to give the sparks away |
| What to do  | Select another warp and try again                                      |

#### 33000-32012

|             |                                                                    |
| ----------- | ------------------------------------------------------------------ |
| Message     | Supply `supplyId` Issue: Compliance: Receive failed                |
| Description | The desired address in the supply is not allowed to receive sparks |
| What to do  | Select another warp and try again                                  |

#### 33000-32013

|             |                                                                                         |
| ----------- | --------------------------------------------------------------------------------------- |
| Message     | Provided ExternalReference `ExternalReference` is already linked to supplyId `supplyId` |
| Description | The external reference, provided for the supply is already used for another supply      |
| What to do  | Retry the supply creation with another external reference                               |

#### 33000-32014

|             |                                                                                                                       |
| ----------- | --------------------------------------------------------------------------------------------------------------------- |
| Message     | Balance of the address `targetAddress` (`addressBalanceEth` ETH) exceeds max amount (`thresholdEth` ETH) for donation |
| Description | The balance of the target address exceeds the limit for donation, request can't be completed                          |
| What to do  | Try again when `addressBalanceEth` of `targetAddress` is below `thresholdEth`                                         |

#### 33000-34001

|             |                                                                                                                                                        |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Message     | Only issuer or administrator can change this controller. The address `address` does not have access to modify the controller                           |
| Description | Controller can't be changed by the address which is used for signing transaction. Current address is not the issuer or administrator of the controller |
| What to do  | Use the address of controller issuer or administrator to change the controller                                                                         |

#### 33000-34002

|             |                                                                                                |
| ----------- | ---------------------------------------------------------------------------------------------- |
| Message     | BlacklistReason not in the right format. The BlacklistReason value should be between 1 and 255 |
| Description | Incorrect format of the blacklistReason                                                        |
| What to do  | Provide blacklistReason in the correct format and try again                                    |

#### 33000-35001

|             |                                                                                                    |
| ----------- | -------------------------------------------------------------------------------------------------- |
| Message     | Address `address` does not have `TokensAmount` tokens (UniqueAssetId=`UniqueAssetId`) to transfer. |
| Description | The address from which transfer is initiated doesn't have enough sparks of the asset               |
| What to do  | Provide another `UniqueAssetId` or change the `amount` to transfer and try again                   |

#### 33000-35002

|             |                                                                                                                                       |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | AssetId `UniqueAssetId` Signing Address `SigningAddress` Issue: Transfer failed because compliance check failed                       |
| Description | The request can't be executed because of the compliance restrictions (asset controller doesn't allow transfers to the target address) |
| What to do  | Provide another `UniqueAssetId` or contact the address issuer to change compliance restrictions                                       |

#### 33000-35003

|             |                                                                                                                             |
| ----------- | --------------------------------------------------------------------------------------------------------------------------- |
| Message     | AssetId `UniqueAssetId` Signing Address `SigningAddress` Issue: Transfer failed because ledger does not exist               |
| Description | Some unexpected error happened, most likely you've managed to find a bug.                                                   |
| What to do  | Check the unique asset Id and its ledger part. Try again, if the error persists, contact CoreLedger and provide `clTraceId` |

#### 33000-35004

|             |                                                                                              |
| ----------- | -------------------------------------------------------------------------------------------- |
| Message     | AssetId `UniqueAssetId` Signing Address `SigningAddress`Issue: Not enough tokens to transfer |
| Description | The address from which transfer is initiated doesn't have enough sparks of the asset         |
| What to do  | Provide another `UniqueAssetId` or change the `Amount` to transfer and try again             |

#### 33000-36001

|             |                                                                                                                      |
| ----------- | -------------------------------------------------------------------------------------------------------------------- |
| Message     | Supply `supplyId` Issue: Insufficient amount on owner's account                                                      |
| Description | Supply can't be created because signing address doesn't have enough sparks of the offered asset                      |
| What to do  | Provide less value for the `offeredAmount`, change the `offeredAsset` or use another `address` to create this supply |

#### 33000-36002

|             |                                                                                                                               |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Message     | Supply `supplyId` Issue: Supply type invalid.                                                                                 |
| Description | Supply can't be created because the type is invalid. Some unexpected error happened, most likely you've managed to find a bug |
| What to do  | Try again, if error persists, contact CoreLedger and provide `clTraceId`                                                      |

#### 33000-36003

|             |                                                                                                                                                                                                                       |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | Supply `supplyId` Issue: Compliance failed                                                                                                                                                                            |
| Description | Supply can't be created because of compliance restrictions (e.g. asset controller doesn't allow the transfer of the desired asset to the signing address or the transfer of the offered asset from the owner address) |
| What to do  | Provide another `desiredAsset` or another `signingAddress` or contact the asset issuer to change compliance restrictions                                                                                              |

#### 33000-36004

|             |                                                                                                                            |
| ----------- | -------------------------------------------------------------------------------------------------------------------------- |
| Message     | Supply `supplyId` Issue: Can not pay supply creation fee                                                                   |
| Description | There is not enough service asset sparks on the signing address to pay a fee for the supply creation                       |
| What to do  | Use another `signingAddress` to sign a transaction or top up the balance of `signingAddress` with the service asset tokens |

#### 33000-36005

|             |                                                                   |
| ----------- | ----------------------------------------------------------------- |
| Message     | Supply `supplyId` Issue: Zero amount is not allowed in the supply |
| Description | Supply can't be created with the amount  = 0                      |
| What to do  | Set the amount bigger than 0 and try again                        |

#### 33000-36006

|             |                                                                          |
| ----------- | ------------------------------------------------------------------------ |
| Message     | Supply `supplyId` Issue: Zero exchange rate is not allowed in the supply |
| Description | Supply can't be created with the exchange rate = 0                       |
| What to do  | Set the exchange rate bigger than 0 and try again                        |

#### 33000-36007

|             |                                                                |
| ----------- | -------------------------------------------------------------- |
| Message     | Supply `supplyId` Issue: Invalid expiration date (in the past) |
| Description | The supply expiration date can not be set in the past          |
| What to do  | Change the expiration date of the supply and try again         |
