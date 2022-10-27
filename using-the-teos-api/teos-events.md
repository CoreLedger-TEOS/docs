---
description: Subscribing to events, types of events, receiving events
---

# TEOS Events

Numerous requests to our API are asynchronous. Results to such calls arrive shortly in forms of events. Here you can find what types of events are produced and how to subscribe to them.

## Subscribing to events

TEOS API distributes events using [RabbitMQ](https://www.rabbitmq.com) message-queueing platform. This chapter describes how one can subscribe to TEOS Events. Some knowledge of RabbitMQ is required.

### Connection details and user credentials

To establish a connection to the RabbbitMQ and to create a channel the following data(examples) is provided by TEOS API administrator:

Host: teos-events.coreledger.net\
Port: 30000\
Username: test-user\
Password: test-pass

### Queues

Only queues with server-generated names are allowed which means the queue names should be empty while declaring a new queue.

### Exchange

Event messages are sent to an exchange of type "topic" with a specific name, also provided by the administrator. Each TEOS Event, published to the exchange, has its own specific routing key (see lower) - a list of words, delimited by dots.

### Bindings

Queues are bound to the exchange with a routing key. The routing key specifies what types of events will be delivered to the queue. Wildcards are supported:

* \* (star) can substitute for exactly one word.
* \# (hash) can substitute for zero or more words

Example: the routing key "asset.#" will bind the queue to all asset events

The same queue can be bound multiple times to the exchange with different routing keys.

## Events overview

This chapter provides the list of published events, with their routing keys and payload examples

### AccountBalanceChanged

Routing Key: **{tenant-id}.account.balance\_changed**

```
{
    "AccountId": "0xE0450CE1E2EF73B15514AE6A003B90D0EBAC88357649376D2AD894314E190001",
    "AddressId": "0xe0450ce1e2ef73b15514ae6a003b90d0ebac8835",
    "AssetId": "7649376d2ad894314e190001",
    "NewBalance": "100000000",
    "Receiver": "0xe0450ce1e2ef73b15514ae6a003b90d0ebac8835",
    "TransactionHash": "0xf3635ec8e1a3090c664fe4dae0262eebba9bea89748da2dd1d42e56d119fca8d",
    "TransactionGuid": "89f1e9c6-719b-4bd9-10dd-08d986feb196",
    "TransactionSigner": "0xe0450ce1e2ef73b15514ae6a003b90d0ebac8835"
}
```

### AssetChanged

Routing Key: **{tenant-id}.asset.changed**

```
{
    "AssetId": "7649376d2ad894314e190001",
    "EventId": 2,
    "TransactionHash": "0x7a6012f485dfee9a3e1cebe9b03a13a5cac090425fee893330e1faa1639cb05e",
    "TransactionGuid": "139cda98-69b7-4018-10dc-08d986feb196"
}
```

### AmendmentChanged

Routing Key: **{tenant-id}.amendment.changed**

```
{
    "AmendmentId": "0x000000017649376D2AD894314E190001",
    "TransactionHash": "0xd964f9aab397951df27eb543ced3a0dbfd15b32a1a756c076670b4fbe752267e",
    "TransactionGuid": "4c0bb9f8-d8c4-471e-10de-08d986feb196"
}
```

### SupplyChanged

Routing Key: **{tenant-id}.supply.changed**

```
{
    "SupplyId": "0x0000000000000000000A00015E8469497E9E6176001F000124856494000004F6",
    "ExtReference": "0x24856494",
    "Type": 1,
    "CurrentAmount": "10000000000",
    "TransactionHash": "0x86dd6f687e5e121e5644aa4f063fd4d321991b7f9a981ccd1c52ffdf1c7830c0",
    "TransactionGuid": "7cc1a5af-7c78-451f-10df-08d986feb196"
}
```

### ControllerCreated

Routing Key: **{tenant-id}**.**controller.created**

```
{
    "ControllerAddress": "0x27fd8eec08ac380868bb8fd24fb439e573f71fc1",
    "TransactionHash": "0x35aa4fbbc67398d30ebd925756b14134344ea1724d075cddb5500b2bd0f008f6",
    "TransactionGuid": "52335a15-8ed6-4795-10e0-08d986feb196"
}
```

### ControllerLimitChanged

Routing Key: **{tenant-id}.controller.limit\_changed**

```
{
    "ControllerAddress": "0x27fd8eec08ac380868bb8fd24fb439e573f71fc1",
    "AffectedAddress": "0xe0450ce1e2ef73b15514ae6a003b90d0ebac8835",
    "NewLimit": "115792089237316195423570985008687907853269984665640564039457584007913129639935",
    "TransactionHash": "0x35aa4fbbc67398d30ebd925756b14134344ea1724d075cddb5500b2bd0f008f6",
    "TransactionGuid": "52335a15-8ed6-4795-10e0-08d986feb196"
}
```

### ControllerAdminChanged

Routing Key: **{tenant-id}.controller.admin\_changed**

```
{
    "ControllerAddress": "0x27fd8eec08ac380868bb8fd24fb439e573f71fc1",
    "AffectedAddress": "0xe0450ce1e2ef73b15514ae6a003b90d0ebac8835",
    "Type": 1,
    "TransactionHash": "0x35aa4fbbc67398d30ebd925756b14134344ea1724d075cddb5500b2bd0f008f6",
    "TransactionGuid": "52335a15-8ed6-4795-10e0-08d986feb196"
}
```

### ControllerBlacklistChanged

Routing Key: **{tenant-id}.controller.black\_list\_changed**

```
{
    "ControllerAddress": "0x707e5cfa3ae9296bac22b7271100281b5f11e126",
    "AffectedAddress": "0x5f49ab3db8206fd430af21cffd9399721da55710",
    "Code": 1,
    "TransactionHash": "0x8307930af52d01aecc8c75b7d3234de3ed65bc3b3ec5390e01c5f2e722677ac1",
    "TransactionGuid": "1a431bf3-0905-4423-10e3-08d986feb196"
}
```

### TokenContractCreated

Routing Key: **{tenant-id}.token\_contract.created**

```
{
    "UniqueAssetId": "0b16aca584ed4c5024780004",
    "ContractAddress": "0x574b968cae66485c8549c65f5d669f33ad68294f",
    "Name": "unicorn_05",
    "Symbol": "test",
    "Decimals": 6,
    "TransactionHash": "0x4eb8f1f49502c31bc7aedacffd362dca29e3fd38cc207b4f29b94ead9b717668",
    "TransactionGuid": "131fbc13-a9d4-4ffa-44be-08d986fa9e01",
    "TransactionBlock": "11996974",
    "TransactionSigner": "0xa24c453a869dd993f421b59f050283423194b7d0"
}
```

### NFTContractCreated

Routing Key: **{tenant-id}.nft\_contract.created**

```
{
    "ContractAddress": "0x66d3a43207b1ea65d052a03b76665dad93cf2d44",
    "Name": "12345678901234567890",
    "Symbol": "1234567890",
    "BaseUri": "https://documents.dev.coreledger.net",
    "OwnerAddress": "0xa24c453a869dd993f421b59f050283423194b7d0",
    "TransactionHash": "0x6f2757f6fdeae475f5ef48f18c94eeafc423766012572afa57d84066fae7ef38",
    "TransactionGuid": "7696900e-485f-44b2-448d-08d986fa9e01",
    "TransactionBlock": "11994856",
    "TransactionSigner": "0xa24c453a869dd993f421b59f050283423194b7d0"
}
```

### AssetTokenized

Routing Key: **{tenant-id}.asset.tokenized**

```
{
    "UniqueAssetId": "0c9b2c6a372ccecd4313d0007",
    "NFTContractAddress": "0x271423f9350eaa325bf4215a1be2bd06d436ef1f",
    "NFTokenId": "1",
    "TransactionHash": "0x8ae55b326fce1d3296595c22a3c12cd56dd6401bed615eafb532c2f161ddfd2f",
    "TransactionGuid": "ec1c1a83-981d-42bd-5819-08d984a7584d",
    "TransactionBlock": "11961076",
    "TransactionSigner": "0xa24c453a869dd993f421b59f050283423194b7d0"
}
```

### AddressRegistered

Routing Key: **{tenant-id}.address.registered**

```
{
    "Token": "c5047f39-1846-40b5-126f-08d986fe91d2",
    "Technology": "ETH",
    "Address": "0x3af53c08428fd2470290ecd8191b94dd1a671ad2",
    "DisplayName": "tradeapp_dc5a44e9-2a57-4a7b-817a-14a1217fedfa",
    "Description": "google sdk_gphone_x86_arm"
}
```

### TransactionStateChanged

Routing Key: **{tenant-id}.transaction.state\_changed**

```
{
    "TransactionId": "1a431bf3-0905-4423-10e3-08d986feb196",
    "State": "Confirmed",
    "BlockchainTransactionId": "0x8307930af52d01aecc8c75b7d3234de3ed65bc3b3ec5390e01c5f2e722677ac1",
    "OccuredOn": "2021-10-04T13:12:19.6213943Z",
    "CommittedOnBlock": "11998156",
    "GasPrice": "1800000000",
    "GasUsed": "56520"
}
```

### InvoiceStateChanged

Routing Key: **{tenant-id}.invoice.state\_changed**

```
{
    "InvoiceId": "1a431bf3-0905-4423-10e3-08d986feb196",
    "State": "Open"
}
```
