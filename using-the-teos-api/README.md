# TEOS API overview

The TEOS API is the primary way for apps to read and write to the Blockchain. All of our SDKs and products interact with the TEOS API in some way, and our other APIs are extensions of the TEOS API, so understanding how the TEOS API works is crucial.

## The Basics

The TEOS API is named after CoreLedger's product TEOS (Token Economy Operational System). It's composed of:

* REST Endpoint, built in accordance with [OData 4.01 Standard](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html) (with some limitations)
* Notification Endpoint is based on Rabbit MQ library
* Identity Server, implementing OAuth 2.0 protocol

## How TEOS API can be used

Test scripts, made for [postman](https://www.postman.com) can be found in [TEOS API Github Repository](https://github.com/CoreLedger-TEOS/API). Contact CoreLedger support if you don't have access to it.
