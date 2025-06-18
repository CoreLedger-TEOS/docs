# 2xxxx codes

Error codes `2xxxx` indicate business logic related issues with input (failed preconditions, validations etc.).

## 21000

<table><thead><tr><th width="324.5"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>One or more preconditions failed</td></tr><tr><td>Description</td><td>The provided input data are valid, but do not conform some of the prerequisites of the requested operation</td></tr><tr><td>Details</td><td>Contains details about the failed preconditions. See error codes of the details below</td></tr><tr><td>What to do</td><td>Check the <code>details</code> field for additional information</td></tr></tbody></table>

#### 21000-1001

<table><thead><tr><th width="323.5"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>asset with unique Id <code>uniqueAssetId</code> does not exist</td></tr><tr><td>Description</td><td>the requested operation requires, that the asset with the 'uniqueAssetId' exists prior to execution of this operation</td></tr><tr><td>What to do</td><td>check that correct <code>uniqueAssetId</code> is used</td></tr><tr><td>Arguments</td><td><code>uniqueAssetId</code></td></tr></tbody></table>

#### 21000-1002

<table><thead><tr><th width="324.5"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>the user <code>userId</code> does not own asset <code>uniqueAssetId</code> issuer's address <code>assetIssuerAddress</code></td></tr><tr><td>Description</td><td>the requested operation requires, that the user, requesting the operation, owns the wallet, that was used to create the asset</td></tr><tr><td>What to do</td><td><p>- check that correct uniqueAssetId is used</p><p>- check that correct user in requesting the operation</p><p>- check that the 'assetIssuerAddress' wallet is added to user's wallet</p></td></tr><tr><td>Arguments</td><td><p><code>userId</code></p><p><code>uniqueAssetId</code></p><p><code>assetIssuerAddress</code></p></td></tr></tbody></table>

#### 21000-1003

<table><thead><tr><th width="326.5"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>invalid units amount provided (must be positive integer): <code>providedAmount</code></td></tr><tr><td>Description</td><td>the amount of sparks is less than or equal to zero</td></tr><tr><td>What to do</td><td>check the value of the sparks and provide correct value of <code>providedAmount</code></td></tr><tr><td>Arguments</td><td><code>providedAmount</code></td></tr></tbody></table>

#### 21000-1004

<table><thead><tr><th width="326.5"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>spark factor is not defined for the asset <code>uniqueAssetId</code></td></tr><tr><td>Description</td><td>the requested operation requires, that the spark factor is defined for the asset, but it's actually missing</td></tr><tr><td>What to do</td><td>add <code>sparkFactor</code> to the asset description</td></tr><tr><td>Arguments</td><td><code>uniqueAssetId</code></td></tr></tbody></table>

#### 21000-1005

<table><thead><tr><th width="322.5"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>the user <code>userId</code> does not own signer address <code>signerAddress</code></td></tr><tr><td>Description</td><td>the user does not own the signer address</td></tr><tr><td>What to do</td><td>check that the 'assetIssuerAddress' wallet is added to user's wallet</td></tr><tr><td>Arguments</td><td><p><code>userId</code></p><p><code>signerAddress</code></p></td></tr></tbody></table>

#### 21000-1006

<table><thead><tr><th width="323.5"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>not enough sparks on the balance. Address: <code>signerAddress</code>, uniqueAssetId: <code>uniqueAssetId</code>, required amount: <code>requiredAmount</code>, actual amount: <code>actualAmount</code></td></tr><tr><td>Description</td><td>the requested operation requires, that there's at least 'actualAmount' of sparks on the 'signerAddress' asset balance</td></tr><tr><td>What to do</td><td>add enough sparks of the asset to the 'signerAddress'</td></tr><tr><td>Arguments</td><td><p><code>signerAddress</code></p><p><code>uniqueAssetId</code></p><p><code>requiredAmount</code></p><p><code>actualAmount</code></p></td></tr></tbody></table>

#### 21000-1007

<table><thead><tr><th width="322.5"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>the instance is configured to operate on assets from ledger <code>configuredLedgerId</code>, but the requested asset '<code>uniqueAssetId</code>' is from ledger <code>assetLedgerId</code></td></tr><tr><td>Description</td><td>the requested operation requires, that the asset with the 'uniqueAssetId' was created in the ledger, that is configured for the current instance</td></tr><tr><td>What to do</td><td>check that correct uniqueAssetId is used</td></tr><tr><td>Arguments</td><td><p><code>configuredLedgerId</code></p><p><code>uniqueAssetId</code></p><p><code>assetLedgerId</code></p></td></tr></tbody></table>

#### 21000-1008

<table><thead><tr><th width="318.5"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>the source asset with id '<code>sourceUniqueAssetId</code>' is already linked to the asset with id '<code>targetUniqueAssetId</code>'</td></tr><tr><td>Description</td><td>it is not possible to link an already liked asset</td></tr><tr><td>What to do</td><td>check that the targetUniqueAssetId belongs to an asset that is not yet linked</td></tr><tr><td>Arguments</td><td><p><code>sourceUniqueAssetId</code></p><p><code>targetUniqueAssetId</code></p></td></tr></tbody></table>

#### 21000-1009

<table><thead><tr><th width="317.5"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>the source asset with id '<code>sourceUniqueAssetId</code>' is not linked to the asset with id '<code>targetUniqueAssetId</code>'</td></tr><tr><td>Description</td><td>it is not possible to unlink assets which are not linked</td></tr><tr><td>What to do</td><td>check that the targetUniqueAssetId of a linked asset is used</td></tr><tr><td>Arguments</td><td><p><code>sourceUniqueAssetId</code></p><p><code>targetUniqueAssetId</code></p></td></tr></tbody></table>

#### 21000-1019

<table><thead><tr><th width="329"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>invalid exchange rate provided (must be positive): '<code>providedAmount</code>'</td></tr><tr><td>Description</td><td>the exchange rate is less than or equal to zero</td></tr><tr><td>What to do</td><td>check the value of the exchange rate and provide correct value of <code>providedAmount</code></td></tr><tr><td>Arguments</td><td><code>providedAmount</code></td></tr></tbody></table>

#### 21000-1020

<table><thead><tr><th width="334"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>supply end date must be specified using ExpirationDate or ExpirationBlock</td></tr><tr><td>Description</td><td>the requested operation requires, that either of the parameters: ExpirationDate or ExpirationOnBlock is specified. You can't specify both of them</td></tr><tr><td>What to do</td><td>specify only one parameter: ExpirationDate or ExpirationOnBlock in the request</td></tr></tbody></table>

#### 21000-1021

<table><thead><tr><th width="334"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>supply with Id '<code>supplyId'</code> does not exist</td></tr><tr><td>Description</td><td>the requested operation requires, that the supply with the 'supplyId' exists prior to execution of this operation</td></tr><tr><td>What to do</td><td>check that correct <code>supplyId</code> is used</td></tr><tr><td>Arguments</td><td><code>supplyId</code></td></tr></tbody></table>

### 22000

<table><thead><tr><th width="315.5"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>One or more validations failed</td></tr><tr><td>Description</td><td>The provided input data are correct, but do not conform some of the prerequisites of the requested operation</td></tr><tr><td>Details</td><td>contains details about the failed validations. See error codes of the details below</td></tr><tr><td>What to do</td><td>Check the <code>details</code> field for additional information</td></tr></tbody></table>

#### 22000-2001

<table><thead><tr><th width="315.5"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>Either asset name or issuer address should be provided in search request</td></tr><tr><td>Description</td><td>when executing a search, either asset name or issuer address or both should be provided in search request, but both fields are empty</td></tr><tr><td>What to do</td><td>fill either or both of the requested fields</td></tr></tbody></table>

#### 22000-2002

<table><thead><tr><th width="314.5"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>Issuer address value should be 40 or 42 symbol long</td></tr><tr><td>Description</td><td>When executing a search a valid address should be provided: it should be 40 characters long or 42 if prefixed with 0x</td></tr><tr><td>What to do</td><td>Provide a correct issuer address</td></tr></tbody></table>

#### 22000-2003

<table><thead><tr><th width="314.5"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>Valid language code should be provided for asset</td></tr><tr><td>Description</td><td>A created asset must have a value for the field 'Language'</td></tr><tr><td>What to do</td><td>Assign a correct value taken from the document db collection of attributes</td></tr></tbody></table>

#### 22000-2004

<table><thead><tr><th width="313.5"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>Valid jurisdiction should be provided for asset</td></tr><tr><td>Description</td><td>A created asset must have a value for the field 'jurisdiction'</td></tr><tr><td>What to do</td><td>Assign a correct value taken from the document db collection of attributes</td></tr></tbody></table>

#### 22000-2005

<table><thead><tr><th width="312.5"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>Asset's unit of measure is not valid</td></tr><tr><td>Description</td><td>An incorrect value is provided for the asset's property 'UnitOfMeasure'</td></tr><tr><td>What to do</td><td>Assign a correct value taken from the document db collection of attributes</td></tr></tbody></table>

#### 22000-2006

<table><thead><tr><th width="311.5"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>Asset's spark factor is not valid</td></tr><tr><td>Description</td><td>An incorrect value is provided or the asset's property 'SparkFactor'</td></tr><tr><td>What to do</td><td>Provide a valid number for the asset's property 'SparkFactor'</td></tr></tbody></table>

#### 22000-2007

<table><thead><tr><th width="306.5"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>Asset's class is not valid</td></tr><tr><td>Description</td><td>An incorrect value is provided for the asset's property 'AssetClass'</td></tr><tr><td>What to do</td><td>Assign a correct value taken from the document db collection of attributes</td></tr></tbody></table>

#### 22000-2008

<table><thead><tr><th width="306.5"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>The number of sections in Asset custom definition item's SectionsPathNames differs from SectionsPath</td></tr><tr><td>Description</td><td>The number of sections in Asset custom definition item's SectionsPathNames differs from SectionsPath. For example, SectionPath="[main][fields][name]" has three sections and SectionsPathNames has only two "[Main][Asset properties]"</td></tr><tr><td>What to do</td><td>Either provide the same number of section names in SectionsPathNames as for SectionsPath or leave it empty. In latter case the names will be copied from SectionsPath</td></tr></tbody></table>

#### 22000-2009

<table><thead><tr><th width="305.5"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>Offered asset unqueId must be specified in request</td></tr><tr><td>Description</td><td>The request does not contain a value for the required property <code>OfferedAssetId</code></td></tr><tr><td>What to do</td><td>Provide a value for the property <code>OfferedAssetId</code></td></tr></tbody></table>

#### 22000-2010

<table><thead><tr><th width="304.5"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>Desired asset unqueId must be specified in request</td></tr><tr><td>Description</td><td>The request does not contain a value for the required property <code>DesiredAssetId</code></td></tr><tr><td>What to do</td><td>Provide a value for the property <code>DesiredAssetId</code></td></tr></tbody></table>

#### 22000-2011

<table><thead><tr><th width="303.5"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>Desired and offered assets unqueIds must differ</td></tr><tr><td>Description</td><td>Same values are provided for both <code>OfferedAssetId</code> and <code>DesiredAssetId</code> properties in the request</td></tr><tr><td>What to do</td><td>Provide different values for the properties <code>OfferedAssetId</code> and <code>DesiredAssetId</code></td></tr></tbody></table>

#### 22000-2012

<table><thead><tr><th width="301.5"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>Either offered or desired amount of sparks must be specified in request but not both</td></tr><tr><td>Description</td><td>It is required, that either <code>OfferedAmount</code> or <code>DesiredAmount</code> value is specified in the request (not both)</td></tr><tr><td>What to do</td><td>Check that one and only one property (either <code>OfferedAmount</code> or <code>DesiredAmount</code>) is assigned a value</td></tr></tbody></table>

#### 22000-2013

<table><thead><tr><th width="299.5"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>Signer address must be specified</td></tr><tr><td>Description</td><td>An authenticated user can have different owned address, so the signer address must be specified</td></tr><tr><td>What to do</td><td>Provide a value for the property <code>SignerAddress</code></td></tr></tbody></table>

#### 22000-2014

<table><thead><tr><th width="300.5"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>Input amount must be a positive integer</td></tr><tr><td>Description</td><td>Incorrect value is specified for the property <code>InputAmount</code></td></tr><tr><td>What to do</td><td>Provide a positive integer value for the property <code>InputAmount</code></td></tr></tbody></table>

#### 22000-2015

<table><thead><tr><th width="298.5"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>Array of supply ids must contain at least one supply id</td></tr><tr><td>Description</td><td>The <code>SupplyIds</code> property must be a non-empty array</td></tr><tr><td>What to do</td><td>Provide a correct value (non-empty array) for the <code>SupplyIds</code> property</td></tr></tbody></table>

#### 22000-2016

<table><thead><tr><th width="298.5"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>Array of target unique asset ids must not be empty</td></tr><tr><td>Description</td><td>The <code>TargetAssetIds</code> property must be a non-empty array</td></tr><tr><td>What to do</td><td>Provide a correct value (non-empty array) for the <code>TargetAssetIds</code> property</td></tr></tbody></table>

#### 22000-2017

<table><thead><tr><th width="297.5"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>User can delete only his own data. Calling user:<code>callingUser</code>User to delete:<code>userToDelete</code></td></tr><tr><td>Description</td><td>The user id of currently logged-in user is different than the id, provided as parameter for deletion</td></tr><tr><td>What to do</td><td>Provide the userId as parameter same as the current user id</td></tr></tbody></table>

#### 22000-2018

<table><thead><tr><th width="296.5"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>Desired amount must be a positive integer</td></tr><tr><td>Description</td><td>The request contains incorrect value of <code>DesiredAmount</code>, it must be positive integer</td></tr><tr><td>What to do</td><td><p>Provide correct value in sparks for the</p><p><code>DesiredAmount</code></p></td></tr></tbody></table>

#### 22000-2019

<table><thead><tr><th width="295.5"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>Target address must be specified</td></tr><tr><td>Description</td><td>The request does not contain a value for the required property <code>TargetAddress</code></td></tr><tr><td>What to do</td><td>Provide the address <code>TargetAddress</code> to which sparks will be sent when invoice is paid</td></tr></tbody></table>

#### 22000-2020

<table><thead><tr><th width="294.5"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>The due date is required and must be in the future</td></tr><tr><td>Description</td><td>The request contains incorrect value of <code>DueOn</code>, it must be the date in the future (more than current date)</td></tr><tr><td>What to do</td><td><p>Provide correct date for the</p><p><code>DueOn</code></p></td></tr></tbody></table>

#### 22000-2021

<table><thead><tr><th width="292.5"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>Asset's currency is not valid</td></tr><tr><td>Description</td><td><p>The request contains incorrect value of</p><p><code>CurrencyCode</code></p></td></tr><tr><td>What to do</td><td>Check the list of available currencies by calling <code>GET /Currencies</code> and provide correct value for <code>CurrencyCode</code></td></tr></tbody></table>

#### 22000-2022

<table><thead><tr><th width="291.5"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>Unit of measure field is not supported for current asset type</td></tr><tr><td>Description</td><td><p>The request contains value of</p><p><code>UnitOfMeasureCode</code> though the asset has the type which doesn't support property <code>UnitOfMeasureCode</code>, asset should have <code>CurrencyCode</code> instead</p></td></tr><tr><td>What to do</td><td>Remove <code>UnitOfMeasureCode</code> from the request or change the asset</td></tr></tbody></table>

#### 22000-2023

<table><thead><tr><th width="292.5"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>Currency field is not supported for current asset type</td></tr><tr><td>Description</td><td><p>The request contains value of</p><p><code>CurrencyCode</code> though the asset has the type which doesn't support property <code>CurrencyCode</code>, asset should have <code>UnitOfMeasureCode</code> instead</p></td></tr><tr><td>What to do</td><td>Remove <code>CurrencyCode</code> from the request or change the asset</td></tr></tbody></table>

#### 22000-2024

<table><thead><tr><th width="294"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>Wallet with <code>EthereumAddress</code> already exists</td></tr><tr><td>Description</td><td>The wallet address which was used as <code>EthereumAddress</code> in the request already exists in the list of wallets of the specified <code>UserId</code></td></tr><tr><td>What to do</td><td>Provide correct request data: new <code>EthereumAddress</code> for the specified <code>UserId</code> or new <code>UserId</code> for the specified <code>EthereumAddress</code></td></tr></tbody></table>

#### 22000-2025

<table><thead><tr><th width="294.5"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>Warp desired asset <code>warpDesiredUniqueAssetId</code> does not match the invoice asset <code>invoiceUniqueAssetId</code>"</td></tr><tr><td>Description</td><td>The result of the warp execution gives the units of an asset that is different form the asset defined in the invoice</td></tr><tr><td>What to do</td><td>When paying an invoice with WARP, the WARP desired asset must correspond to the asset defined in the invoice.</td></tr></tbody></table>

#### 22000-2026

<table><thead><tr><th width="293.5"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>The output amount after warp execution is not sufficient</td></tr><tr><td>Description</td><td>The result of the warp execution gives an amount that is less than the amount defined in the invoice</td></tr><tr><td>What to do</td><td>Specify the higher amount. Or better use the input amount provided in the result of the WARP search</td></tr></tbody></table>

#### 22000-2030

<table><thead><tr><th width="299"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>supply end date must be in range <code>minSupplyEndDate</code> to <code>maxSupplyEndDate</code></td></tr><tr><td>Description</td><td>either of the supply end date parameters (ExpirationDate or ExpirationOnBlock) does not fit in the min/max end date limit</td></tr><tr><td>What to do</td><td>check the value of the supply end date and provide correct value</td></tr></tbody></table>
