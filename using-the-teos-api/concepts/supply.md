# Supply

TEOS users can create supplies in order to trade their assets. Supply is an offer created by a user to get specific amount of sparks of desired asset in exchange to specific amount of sparks of offered asset.

Supplies are consumed by other TEOS users when they execute trades, or execute [warps](warp.md), where supplies existing on blockchain take part.

### EVM-compatible networks

In EVM-compatible networks (e.g., Sparknet, Ethereum, Polygon), supply object has the following structure:

```json
{
    "SupplyId": "913896df-9959-4c93-8c59-05962c3ae7c7",
    "UniqueAssetIdOffered": "ae2abab0-f65b-4209-ba0b-9cc89a690ec4",
    "UniqueAssetIdDesired": "949edb18-54fa-4231-a205-27e1ea55acce",
    "OfferedAmount": "2000",
    "RemainingAmount": "2000",
    "RealRemaining": "1000",
    "DesiredAssetAmount": "20000",
    "ExchangeRate": "10",
    "OriginatorAddress": "0x1f68e487d04e4801f9025fb6f56835b18c49ff4a",
    "ReceiverAddress": "0x2b9a5a18cc542e9b1dc7c4965d1a2d78e664c04d",
    "ExpirationDate": "2022-03-21T23:27:18.0681707",
    "ExpirationOnBlock": "19439529",
    "TakeAll": true,
    "CreatedOn": "2024-03-07T12:27:32.1182341",
    "CreatedOnBlock": "19439510",
    "UpdatedOn": "2022-05-06 13:28:57.990",
    "CreatedInBlockchainOn": "2022-05-18T15:23:12.5246259+02:00"
  }
```

Main properties description:

* UniqueAssetIdOffered - ID of an asset, which is offered for the exchange.
* UniqueAssetIdDesired - ID of an asset to be received in exchange for the offered asset.
* OfferedAmount - amount of offered asset in sparks, which was offered initially.
* RemainingAmount - amount of offered asset in sparks, which is left at the moment.
* RealRemaining - amount of offered asset at the moment in OriginatorAddress.
* ExchangeRate - the amount of desired asset, received for 1 spark of offered asset (rate of the exchange).
* OriginatorAddress - address of the issuer.
* ReceiverAddress - address of the receiver of the desired asset.
* ExpirationDate - date when supply becomes unavailable for trading (its status becomes "Inactive").
* ExpirationOnBlock - the estimated number of block in blockchain, when supply becomes unavailable for trading (its status becomes "Inactive").
* TakeAll - setup for withdrawing the whole amount of offered asset in sparks at one iteration (true).
* CreatedInBlockchainOn - the timestamp when supply is written to blockchain. Until supply creation transaction is confirmed, this parameter is empty.
* CreatedOnBlock - the number of block in blockchain, when supply was created.

{% hint style="info" %}
CreatedOn is the parameter that indicates the timestamp when supply was created in TEOS Platform, while CreatedInBlockchainOn parameter indicates the timestamp when supply was written to blockchain.
{% endhint %}

### Non-EVM networks

For non-EVM networks, the supply will have the same structure as for EVM-compatible ones, with the only difference being the address format. For example, in Internet Computer, the address consists of 64 characters.

### Supply operations

TEOS user can **create a supply** by providing the following parameters in the request body:

* UniqueAssetIdOffered
* UniqueAssetIdDesired
* OfferedAmount(in sparks)
* ExchangeRate
* OriginatorAddress

{% hint style="info" %}
TEOS user can act as a middleware for the end users, therefore can provide issuer address separately on behalf of the end user.
{% endhint %}

* ReceiverAddress
* TakeAll (optional). If not provided, will be assigned automatically with "false" value in the response.
* ExpirationDate / ExpirationOnBlock

{% hint style="info" %}
ExpirationDate and ExpirationOnBlock parameters are mutually exclusive: TEOS user must provide only one of them. The other parameter will be returned in the response.
{% endhint %}

TEOS user can **change exchange rate** of a supply by providing the corresponding SupplyId and new ExchangeRate.

TEOS user can **change supply expiration** by providing corresponding SupplyId, new ExpirationDate or new ExpirationOnBlock. ExpirationDate and ExpirationBlock parameters are mutually exclusive: TEOS user must provide either of them.

TEOS user can **restock a supply** by providing corresponding SupplyId and OfferedAmount in sparks.

{% hint style="info" %}
OfferedAmount must indicate the amount, to which the supply must be restocked.
{% endhint %}

TEOS user can **delete a supply** by providing corresponding SupplyId. After the supply is deleted, it will be excluded from WARP search.

{% hint style="info" %}
The method can be called for the list of SupplyIds.
{% endhint %}
