# FAQ

## How do I get data from blockchain using the TEOS API?

TEOS blockchain infrastructure processes the blockchain transactions constantly and caches relevant data in convenient format. You will need an access token, which is obtained via Auth server, in order to make TEOS API calls from your app. TEOS API requests go through a host URL, most usually `teosapi.coreledger.net`, and the ID of the object you are trying to access.

You can read any object by performing a GET operation on the relevant endpoint. You can choose the fields that you want returned with the `$select` query parameter. You can also order certain data sets chronologically or by other fields using `$orderby`query parameter.

For more information, see the [TEOS API Overview](overview/), which documents the basics of TEOS API terminology and structure, and the [Using the Graph API documentation](using-the-teos-api/), which contains more details about the various operations you can perform with the Graph API.

## Have to write to blockchain using the TEOS API?

To write to blockchain TEOS API will create a transaction using so-called TXService. This transaction should be signed, using tx infrastructure (mobile app, notification service etc.) When the transaction is signed, TXService sends it to the blockchain and as soon as it is confirmed by signing nodes, results can be read using TEOS API.

## Why I can not read just created data?

Because of the blockchain specifics. The data creation or modification transaction is not immidiately reflected in the blockchain. It should be confirmed by blockchain nodes, called signers. If it is confirmed by enough signer, it is written to the blockchain and will be synchronized by TEOS. When it is done, event is broadcasted using notification endpoint and after that the data can be read.

## How to report an issue?

If you find an issue, please report it in our [GitHub Repository for TEOS API](https://github.com/CoreLedger-TEOS/API/issues).

## How do end-users delete their accounts and data from TEOS solution?

User can decide whether they want to delete their profile from specific application or to delete CoreLedger account from TEOS at all.

For deleting profile from specific application you can use TEOS API Delete user method.

For deleting CoreLedger account users should be redirected to Auth Server UI which is used for login process. There they will find the button "Delete account".

{% hint style="info" %}
Note: in any case we will still keep the history of transactions that were made with user's wallets (managing assets, supplies, controllers) and objects written to blockchain because we use blockchain technology and cannot remove it
{% endhint %}
