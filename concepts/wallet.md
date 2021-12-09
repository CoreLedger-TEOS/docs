# Wallet

Wallet is an entity that belongs to a user and has the following structure:

```json
{
            "Id": "b92e295a-03d9-47de-493a-08d9a2a559e6",
            "Name": "John's wallet",
            "Description": "",
            "EthereumAddress": "0xa94f93dbfce5bb64603d245d4519e625c002fee5",
            "UserId": "37514be7-d096-4bb8-95da-edb03b723bb2"
}
```

where&#x20;

* Id - wallet's unique identifier within TEOS Api&#x20;
* Name and Description are self explanatory properties
* EthereumAddress - is an [Ethereum address](https://info.etherscan.com/what-is-an-ethereum-address/)
* UserId - the unique identifier of the user that owns the wallet



## Balance

Balance indicates the amount of sparks available on the specified address:

```json
{
            "Amount": "100",
            "Address": "0xa94f93dbfce5bb64603d245d4519e625c002fee5",
            "UniqueAssetId": "5481bcdf50dccec144f00001"
}
```
