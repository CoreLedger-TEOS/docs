# TEOS API overview

The TEOS API is the primary way for apps to read and write to the blockchain. All our platform components interact with the TEOS API in some way, and our other APIs are extensions of the TEOS API, so understanding how the TEOS API works is crucial.

## The Basics

The TEOS API is named after CoreLedger's main product TEOS (Token Economy Operational System). It's composed of:

* REST Endpoint, built in accordance with [OData 4.01 Standard](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html) (with some limitations)
* Notification Endpoint, based on Rabbit MQ library

Check [overview](../overview/ "mention") and [reference](../reference/ "mention")

If you're going to use TEOS Authentication services, you will need to use following additional APIs of TEOS Platform:

* **TEOS Authentication service**, implementing OAuth 2.0 protocol, and **Tenant Management Service** for retrieving user data and singing up new users. TEOS Authentication service should be used only if TEOS API is used with the user access token. Read more in [tenant-setup-options.md](architecture-note/tenant-setup-options.md "mention"), [authentication.md](authentication.md "mention") and [using-additional-apis-of-teos-platform](../using-additional-apis-of-teos-platform/ "mention")
* **TxServer**, responsible for blockchain transactions processing and authorizing devices of end users. TxServer should be called directly only if TEOS API is used with the user access token. Read more in [tenant-setup-options.md](architecture-note/tenant-setup-options.md "mention")

{% hint style="info" %}
For the case when TEOS API is called with the API key, integration with TEOS API REST endpoint itself and Notification Endpoint is necessary
{% endhint %}

## How TEOS API can be used

Test scripts, made for [postman](https://www.postman.com), can be found in the [TEOS API Github Repository](https://github.com/CoreLedger-TEOS/API). Contact CoreLedger support if you don't have access to it.
