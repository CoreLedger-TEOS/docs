---
description: Gas distribution mechanism
---

# How to get gas for signing transactions

There is a gas cost for every transaction which must be paid for in Ether. TEOS Platform is integrated with several blockchains, depending on the selected option there are two approaches to getting Ether:

* If Ethereum Mainnet or Polygon are used, then TEOS API consumer takes care about making sure its end users have enough Ether to sign transactions (normally wallet owners should buy Ether to be able to operate).
* If ICP is used, then TEOS API consumer takes care about making sure its end users have enough cycles to sign transactions (normally wallet owners need to convert ICP into cycles to be able to operate).
* If private blockchains ([SparkNet ](https://sparknet.online/)or DevilNet) are used, then TEOS API consumer shouldn't care about Ether necessary for gas costs paying because TEOS Platform provides the mechanism for Ether distribution described below.

### Ether distribution mechanism in TEOS Platform for private blockchains

{% hint style="info" %}
Please, note that this mechanism is valid only for SparkNet, DevilNet. It does NOT work for Ethereum MainNet, Polygon and ICP.
{% endhint %}

#### How mechanism works

All newly registered addresses, which create transaction (post asset, create, destroy, transfer sparks or run warp) first time, get some Ether automatically. As soon as received Ether is nearly consumed (balance is less than 10% of original amount), address is automatically refilled.

Important thing to note: Ether is distributed via transfer transactions, so it takes some time. Sending Ether to a new address is triggered only when this address is used as an author of transaction, so you need to wait until Ether is received in order to submit the transaction signed by this address successfully. In case address doesn't have enough Ether, transaction will be revoked by blockchain because of the lack of gas. [Read more](transaction-creation-and-submission/first-transaction-creation-and-submission-for-a-new-address-on-the-private-blockchain.md) about the flow for creating first transaction for a new address

#### Limits

All tenants have the same limit of Ether distribution per month. We need these limits to prevent malicious behavior. Right now **limit is 100 Ether** per tenant per month (30 days) but we keep the right to change it.

Limits are the same for development and productive environments but they are not summarized. So, if you run one tenant on development environment and one tenant on productive environement, you have 100 Ether limit per month for each tenant.

In case the tenant reaches its limit, tenant admin receives a notification to the email (email is provided to CoreLedger when tenant is being setup). As soon as the limit is reached for the tenant, new addresses won't get Ether, old addresses won't be refilled until month (30 days) is over.

If you think that your business case needs another amount of Ether, please, contact your CoreLedger manager.
