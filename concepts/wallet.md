# Wallet

Each user of TEOS solution can have one or more wallets. **Wallets are used to keep sparks of assets owned by a TEOS user**. Each wallet consists of a pair of public address and private key.&#x20;

Public address is used to identify wallet in all [spark operations](spark.md#spark-operations) as a spark sender and spark receiver. Public address is publicly available. TEOS solution has an Ethereum blockchain technology in its backbone that's why Ethereum address is used as public address of the wallet. Public addresses are created from the private key through a complicated mathematical algorithm.&#x20;

A private key is an extremely large number that is used in cryptography, similar to a password. Private keys are used to create digital signatures that can easily be verified, without revealing the private key. Private keys represent final control and ownership of a wallet. Private keys are not transferred or sent in TEOS solution, they are securely kept on your mobile device where you sign the transactions and manage your wallets.

The pairs of public addresses and private keys are generated with the help of mathematical algorithm based on seed words displayed to you when setting up a device for wallet management which you are asked to safely store.

Wallet has the following structure:

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

Balance indicates the amount of sparks of specific asset available on the specified address:

```json
{
            "Amount": "100",
            "Address": "0xa94f93dbfce5bb64603d245d4519e625c002fee5",
            "UniqueAssetId": "5481bcdf50dccec144f00001"
}
```
