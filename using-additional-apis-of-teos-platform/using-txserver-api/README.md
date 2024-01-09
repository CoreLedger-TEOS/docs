# Using TxServer API

**Coreledger TxServer** is a component of the TEOS platform, responsible for wallet and device management and for signing and submitting transactions to the blockchains.

**Coreledger TxServer** is required to be used along with TEOS API in case TEOS API Consumer has devices which operate as private keys holder and must be able to sign the transactions with these devices. [Read more](../../using-the-teos-api/architecture-note/tenant-setup-options.md#using-teos-api-with-the-user-access-token)

## TXServer Concepts

### Device

TXServer device entity represents a physical user device, like a smartphone or a virtual device, like some software worker. In the transaction flow the device API is used to notify a device, responsible for signing, about incoming transaction and about its status updates, after it was signed and submitted for writing into a blockchain.

#### Device Token

The device token is a special type of OAuth access token, containing information about user and device. It is not related to the OAuth device grant flow. Acquisition of the device token is described in the [device authorization flow](../device-authorization-flow-with-txserver-and-teos-authentication-service.md) article.

#### Device API

This is an API of TXServer with device-specific functionality. Developer reference can be found in [Swagger](https://txapi.coreledger.net/swagger). Most of the functions require the [device token](./#device-token) as Bearer.

### Provider

TXServer provider entity represents a consumer of provider API, responsible for transaction initiation and business logic of an application. Examples of providers are: TeosAPI tenants, WLM tenants.

#### Provider API

This API of TXServer is used by various TEOS platform components, e.g. TeosAPI.



