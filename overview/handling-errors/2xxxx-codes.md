# 2xxxx codes

Error codes `2xxxx` indicate business logic related issues with input (failed preconditions, validations etc.).

## 21000

|             |                                                                                                            |
| ----------- | ---------------------------------------------------------------------------------------------------------- |
| Message     | One or more preconditions failed                                                                           |
| Description | The provided input data are valid, but do not conform some of the prerequisites of the requested operation |
| Details     | Contains details about the failed preconditions. See error codes of the details below                      |
| What to do  | Check the `details` field for additional information                                                       |

#### 21000-1001

|             |                                                                                                                       |
| ----------- | --------------------------------------------------------------------------------------------------------------------- |
| Message     | asset with uinque Id '{uniqueAssetId}' does not exist                                                                 |
| Description | the requested operation requires, that the asset with the 'uniqueAssetId' exists prior to execution of this operation |
| What to do  | check that correct uniqueAssetId is used                                                                              |
| Arguments   | `uniqueAssetId`                                                                                                       |

#### 21000-1002

|             |                                                                                                                                                                                            |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Message     | the user '{userId}' does not own asset ('uniqueAssetId') issuer's address '{assetIssuerAddress}'                                                                                           |
| Description | the requested operation requires, that the user, requesting the operation, owns the wallet, that was used to create the asset                                                              |
| What to do  | <p>- check that correct uniqueAssetId is used</p><p>- check that correct user in requesting the operation</p><p>- check that the 'assetIssuerAddress' wallet is added to user's wallet</p> |
| Arguments   | <p><code>userId</code></p><p><code>uniqueAssetId</code></p><p><code>assetIssuerAddress</code></p>                                                                                          |

#### 21000-1003

|             |                                                                              |
| ----------- | ---------------------------------------------------------------------------- |
| Message     | invalid units amount provided (must be positive integer): '{providedAmount}' |
| Description | the amount of sparks is less than or equal to zero                           |
| What to do  | check the value of the sparks                                                |
| Arguments   | `providedAmount`                                                             |

#### 21000-1004

|             |                                                                                                             |
| ----------- | ----------------------------------------------------------------------------------------------------------- |
| Message     | spark factor is not defined for the asset '{uniqueAssetId}'                                                 |
| Description | the requested operation requires, that the spark factor is defined for the asset, but it's actually missing |
| What to do  | add spark factor to the asset description                                                                   |
| Arguments   | `uniqueAssetId`                                                                                             |

#### 21000-1005

|             |                                                                      |
| ----------- | -------------------------------------------------------------------- |
| Message     | the user '{userId}' does not own signer address '{signerAddress}'    |
| Description | the user does not own the signer address                             |
| What to do  | check that the 'assetIssuerAddress' wallet is added to user's wallet |
| Arguments   | <p><code>userId</code></p><p><code>signerAddress</code></p>          |

#### 21000-1006

|             |                                                                                                                                                              |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Message     | not enough sparks on the balance. Address: {signerAddress}, uniqueAssetId: {uniqueAssetId}, required amount: {requiredAmount}, actual amount: {actualAmount} |
| Description | the requested operation requires, that there's at least 'actualAmount' of sparks on the 'signerAddress' asset balance                                        |
| What to do  | add enough sparks of the asset to the 'signerAddress'                                                                                                        |
| Arguments   | <p><code>signerAddress</code></p><p><code>uniqueAssetId</code></p><p><code>requiredAmount</code></p><p><code>actualAmount</code></p>                         |

#### 21000-1007

|             |                                                                                                                                                            |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | the instance is configured to operate on assets from ledger {configuredLedgerId}, but the requested asset '{uniqueAssetId}' is from ledger {assetLedgerId} |
| Description | the requested operation requires, that the asset with the 'uniqueAssetId' was created in the ledger, that is configured for the current istance            |
| What to do  | check that correct uniqueAssetId is used                                                                                                                   |
| Arguments   | <p><code>configuredLedgerId</code></p><p><code>uniqueAssetId</code></p><p><code>assetLedgerId</code></p>                                                   |

#### 21000-1008

|             |                                                                                                                 |
| ----------- | --------------------------------------------------------------------------------------------------------------- |
| Message     | the source asset with id '{sourceUniqueAssetId}' is already linked to the asset with id '{targetUniqueAssetId}' |
| Description | it is not possible to link an already liked asset                                                               |
| What to do  | check that the targetUniqueAssetId belongs to an asset that is not yet linked                                   |
| Arguments   | <p><code>sourceUniqueAssetId</code></p><p><code>targetUniqueAssetId</code></p>                                  |

#### 21000-1009

|             |                                                                                                             |
| ----------- | ----------------------------------------------------------------------------------------------------------- |
| Message     | the source asset with id '{sourceUniqueAssetId}' is not linked to the asset with id '{targetUniqueAssetId}' |
| Description | it is not possible to unlink assets which are not linked                                                    |
| What to do  | check that the targetUniqueAssetId of a linked asset is used                                                |
| Arguments   | <p><code>sourceUniqueAssetId</code></p><p><code>targetUniqueAssetId</code></p>                              |

## 22000

|             |                                                                                                              |
| ----------- | ------------------------------------------------------------------------------------------------------------ |
| Message     | One or more validations failed                                                                               |
| Description | The provided input data are correct, but do not conform some of the prerequisites of the requested operation |
| Details     | contains details about the failed validations. See error codes of the details below                          |
| What to do  | Check the `details` field for additional information                                                         |

#### 22000-2001

|             |                                                                                                                                      |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Message     | Either asset name or issuer address should be provided in search request                                                             |
| Description | when executing a search, either asset name or issuer address or both should be provided in search request, but both fields are empty |
| What to do  | fill either or both of the requested fields                                                                                          |

#### 22000-2002

|             |                                                                                                                       |
| ----------- | --------------------------------------------------------------------------------------------------------------------- |
| Message     | Issuer address value should be 40 or 42 symbol long                                                                   |
| Description | When executing a search a valid address should be provided: it should be 40 characters long or 42 if prefixed with 0x |
| What to do  | Provide a correct issuer address                                                                                      |

#### 22000-2003

|             |                                                                            |
| ----------- | -------------------------------------------------------------------------- |
| Message     | Valid language code should be provided for asset                           |
| Description | A created asset must have a value for the field 'Language'                 |
| What to do  | Assign a correct value taken from the document db collection of attributes |

#### 22000-2004

|             |                                                                            |
| ----------- | -------------------------------------------------------------------------- |
| Message     | Valid jurisdiction should be provided for asset                            |
| Description | A created asset must have a value for the field 'jurisdiction'             |
| What to do  | Assign a correct value taken from the document db collection of attributes |

#### 22000-2005

|             |                                                                            |
| ----------- | -------------------------------------------------------------------------- |
| Message     | Asset's unit of measure is not valid                                       |
| Description | An incorrect value is provided for the asset's property 'UnitOfMeasure'    |
| What to do  | Assign a correct value taken from the document db collection of attributes |

#### 22000-2006

|             |                                                                      |
| ----------- | -------------------------------------------------------------------- |
| Message     | Asset's spark factor is not valid                                    |
| Description | An incorrect value is provided or the asset's property 'SparkFactor' |
| What to do  | Provide a valid number for the asset's property 'SparkFactor'        |

#### 22000-2007

|             |                                                                            |
| ----------- | -------------------------------------------------------------------------- |
| Message     | Asset's class is not valid                                                 |
| Description | An incorrect value is provided for the asset's property 'AssetClass'       |
| What to do  | Assign a correct value taken from the document db collection of attributes |

#### 22000-2008

|             |                                                                                                                                                                                                                                             |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | The number of sections in Asset custom definition item's SectionsPathNames differs from SectionsPath                                                                                                                                        |
| Description | The number of sections in Asset custom definition item's SectionsPathNames differs from SectionsPath. For example, SectionPath="\[main]\[fields]\[name]" has three sections and SectionsPathNames has only two "\[Main]\[Asset properties]" |
| What to do  | Either provide the same number of section names in SectionsPathNames as for SectionsPath or leave it empty. In latter case the names will be copied from SectionsPath                                                                       |

#### 22000-2009

|             |                                                                                 |
| ----------- | ------------------------------------------------------------------------------- |
| Message     | Offered asset unqueId must be specified in request                              |
| Description | The request does not contain a value for the required property `OfferedAssetId` |
| What to do  | Provide a value for the property `OfferedAssetId`                               |

#### 22000-2010

|             |                                                                                 |
| ----------- | ------------------------------------------------------------------------------- |
| Message     | Desired asset unqueId must be specified in request                              |
| Description | The request does not contain a value for the required property `DesiredAssetId` |
| What to do  | Provide a value for the property `DesiredAssetId`                               |

#### 22000-2011

|             |                                                                                                   |
| ----------- | ------------------------------------------------------------------------------------------------- |
| Message     | Desired and offered assets unqueIds must differ                                                   |
| Description | Same values are provided for both `OfferedAssetId` and `DesiredAssetId` properties in the request |
| What to do  | Provide different values for the properties `OfferedAssetId` and `DesiredAssetId`                 |

#### 22000-2012

|             |                                                                                                             |
| ----------- | ----------------------------------------------------------------------------------------------------------- |
| Message     | Either offered or desired amount of sparks must be specified in request but not both                        |
| Description | It is required, that either `OfferedAmount` or `DesiredAmount` value is specified in the request (not both) |
| What to do  | Check that one and only one property (either `OfferedAmount` or `DesiredAmount`) is assigned a value        |

#### 22000-2013

|             |                                                                                                 |
| ----------- | ----------------------------------------------------------------------------------------------- |
| Message     | Signer address must be specified                                                                |
| Description | An authenticated user can have different owned address, so the signer address must be specified |
| What to do  | Provide a value for the property `SignerAddress`                                                |

#### 22000-2014

|             |                                                                 |
| ----------- | --------------------------------------------------------------- |
| Message     | Input amount must be a positive integer                         |
| Description | Incorrect value is specified for the property `InputAmount`     |
| What to do  | Provide a positive integer value for the property `InputAmount` |

#### 22000-2015

|             |                                                                        |
| ----------- | ---------------------------------------------------------------------- |
| Message     | Array of supply ids must contain at least one supply id                |
| Description | The `SupplyIds` property must be a non-empty array                     |
| What to do  | Provide a correct value (non-empty array) for the `SupplyIds` property |

#### 22000-2016

|             |                                                                             |
| ----------- | --------------------------------------------------------------------------- |
| Message     | Array of target unique asset ids must not be empty                          |
| Description | The `TargetAssetIds` property must be a non-empty array                     |
| What to do  | Provide a correct value (non-empty array) for the `TargetAssetIds` property |

#### 22000-2017

|             |                                                                                                      |
| ----------- | ---------------------------------------------------------------------------------------------------- |
| Message     | User can delete only his own data. Calling user:{callingUser} User to delete:{userToDelete}          |
| Description | The user id of currently logged-in user is different than the id, provided as paremeter for deletion |
| What to do  | Provide the userId as parameter same as the current user id                                          |
| Arguments   | <p><code>callingUser</code></p><p><code>userToDelete</code></p>                                      |

## 23000

|             |                                                                                                      |
| ----------- | ---------------------------------------------------------------------------------------------------- |
| Message     | \<SDK error code>:\<SDK error message>                                                               |
| Description | This error code indicates, that a problem has occurred while processing the request on the SDK side. |
| Details     | contains details about the issue                                                                     |
| What to do  | refer to the SDK documentation to find out the reasons and possible solutions for the problem        |
