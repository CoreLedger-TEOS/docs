# Wallet

### Public address and private key

Each user of TEOS platform can have one or more wallets. **Wallets are used to keep sparks of assets owned by a TEOS user**. Each wallet consists of a pair of public address and private key.

Public address is used to identify wallet in all [spark operations](spark.md#spark-operations) as a spark sender and spark receiver. Public address is publicly available. Public addresses are created from the private key through a complicated mathematical algorithm.&#x20;

A private key is an extremely large number that is used in cryptography, similar to a password. Private keys are used to create digital signatures that can easily be verified, without revealing the private key. Private keys represent final control and ownership of a wallet. Private keys are not transferred or sent in TEOS platform, they are securely kept on your mobile device where you sign the transactions and manage your wallets.

The pairs of public addresses and private keys are generated with the help of mathematical algorithm based on seed words displayed to you when setting up a device for wallet management which you are asked to safely store.

### EVM-compatible networks

**Wallet**

In EVM-compatible networks (e.g., Sparknet, Ethereum, Polygon), a wallet is structured as follows:

```json
{
            "Id": "b92e295a-03d9-47de-493a-08d9a2a559e6",
            "Name": "John's wallet",
            "Description": "",
            "EthereumAddress": "0xa94f93dbfce5bb64603d245d4519e625c002fee5",
            "UserId": "37514be7-d096-4bb8-95da-edb03b723bb2"
}
```

where

* Id - wallet's unique identifier within TEOS Platform
* Name and Description are self explanatory properties
* EthereumAddress - is an [Ethereum address](https://info.etherscan.com/what-is-an-ethereum-address/)
* UserId - the unique identifier of the user that owns the wallet

**Balance**

Balance indicates the amount of sparks of the specific asset available on the specified address. In EVM-compatible networks (e.g., Sparknet, Ethereum, Polygon), a balance is structured as follows:

```
{
            "Amount": "100",
            "Address": "0xa94f93dbfce5bb64603d245d4519e625c002fee5",
            "UniqueAssetId": "5481bcdf50dccec144f00001"
}
```

### Non-EVM networks

**Wallet**

For non-EVM networks, the wallet will have the same structure as for EVM-compatible ones, with the only difference being the address format. For example, in Internet Computer, the address consists of 64 characters.

```
{
            "Id": "b92e295a-03d9-47de-493a-08d9a2a559e6",
            "Name": "John's wallet",
            "Description": "",
            "InternetComputerAddress": "0dff47055d84fd0d89cc55ff477c24026b5c2c9175f8fd36bcb66bb68cac81be",
            "UserId": "37514be7-d096-4bb8-95da-edb03b723bb2"
}
```

where

* Id - wallet's unique identifier within TEOS Platform
* Name and Description are self explanatory properties
* InternetComputerAddress - is an [Internet Computer address](https://internetcomputer.org/)&#x20;
* UserId - the unique identifier of the user that owns the wallet

**Balance**

For non-EVM networks, the balance has the same structure as for EVM-compatible ones, with the only difference being the address format. For example, in Internet Computer, the address consists of 64 characters.

```
{
            "Amount": "100",
            "Address": "0dff47055d84fd0d89cc55ff477c24026b5c2c9175f8fd36bcb66bb68cac81be",
            "UniqueAssetId": "5481bcdf50dccec144f00001"
}
```

