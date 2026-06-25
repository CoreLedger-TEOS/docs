---
slug: /using-additional-apis-of-teos-platform/adding-wallet-to-the-teos-platform-flow-with-txserver-and-teos-api
---

# Adding wallet to the TEOS Platform flow with TxServer and TEOS API

To add a signable wallet to the TeosAPI following calls, depicted in the Diagram 1. should be performed:

* Device token should be acquired for the next calls to TeosApi and TxServer. For the details refer to the [device authorization flow](./device-authorization-flow-with-txserver-and-teos-authentication-service.md)
* TeosApi function [InitWalletRegistration](https://teosapi.coreledger.net/swagger/index.html) is called, to generate WalletRegistrationClaim
* Using the data from the claim, received in previous step, the app calls TXServer function [SendAddressToProvider](https://txapi.coreledger.net/swagger/index.html#/Device/post_api_Device_SendAddressToProvider), to link the wallet with the transactions provider (more about provider [here](./using-txserver-api/index.md#provider))

![](/img/gitbook-assets/adding-signable-wallet-flow.png)

_Diagram 1. Adding Signable Wallet to the TeosApi_
