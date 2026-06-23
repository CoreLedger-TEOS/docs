# FAQ

## How do I get data from a blockchain using the TEOS API?

Our TEOS blockchain infrastructure processes blockchain transactions constantly and caches relevant data in a convenient format. You will need an access token in order to make TEOS API calls from your app. Check out [authentication.md](using-the-teos-api/authentication.md "mention") for more details about the access token types. TEOS API requests go through a host URL, usually `teosapi.coreledger.net`, and the ID of the object you are trying to access.

You can read any object by performing a GET operation on the relevant endpoint. You can choose the fields that you want to be returned with the `$select` query parameter. You can also order certain data sets chronologically or by other fields using an `$orderby`query parameter.

For more information, see the [using-the-teos-api](using-the-teos-api/ "mention"), which documents the basics of TEOS API terminology and structure, [overview](overview/ "mention"), and [reference](reference/ "mention"), which contains more details about the various operations you can perform with the TEOS API.

## Need to write to a blockchain using the TEOS API?

In order to write to a blockchain, the TEOS API creates transactions using TXServer which is a part of the TEOS platform. This transaction should be signed using transaction signing components provided by the TEOS platform or by the TEOS API consumer (mobile app or any signing service). When the transaction is signed, TXServer sends it to the blockchain and as soon as it is confirmed by signing nodes, the results can be read using the TEOS API.

## Why can I not read newly created data?

Because of the blockchain specifics. The data creation or modification transaction is not immediately reflected in the blockchain. It should be confirmed by blockchain nodes, called signers. If it is confirmed by enough signers, it is written to the blockchain and will be synchronized by the TEOS platform. When this is done, the event is broadcasted and the data can then be read.

## How to report an issue?

If you find an issue, please report it in our [GitHub Repository for TEOS API](https://github.com/CoreLedger-TEOS/API/issues).

## How do end users delete their accounts and data from the TEOS Platform?

TEOS API consumer can decide whether they want to let their users delete profiles from a specific application or to delete user account from TEOS Authentication service if it is used and all associated data from the TEOS platform.

For deleting profiles from specific applications you can use the TEOS API "Delete User" method.

For deleting user accounts in the TEOS Authentication service, the users should be redirected to TEOS Authentication service UI which is used for the login process. There they will find the button "Delete Account".

{% hint style="info" %}
Note: We will still keep the history of transactions that were made with user's wallets (managing assets, supplies, controllers) and objects written to blockchain because blockchain technology does not allow it to be deleted from the ledger.
{% endhint %}
