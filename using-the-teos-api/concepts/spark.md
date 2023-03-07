# Spark

Each asset has its own unit of measure which is defined based on the nature of the asset, for example, steel is measured in kilograms or tons and man-hours in days or hours. **Spark is the generalized term for the smallest indivisible fraction of a digital asset** (like one Satoshi is for Bitcoin or one Wei is for Ether).

The number of sparks needed to get one unit of measure (kilogram, liter, token) can be defined by the TEOS API consumer with the help of the Spark factor.

The asset described [here](asset.md) has kilogram as defined unit of measure and a Spark factor of 1000000. That means, that its smallest indivisible part refers to milligram in the physical world. In this example, the smallest indivisible fraction for a TEOS API consumer to operate is 0.000001 kg (1 Spark) of this asset.

For better understanding read [our article on Medium](https://medium.com/coreledger/introducing-spark-80ca62b3ebd3).

### Spark operation

Spark operation is an any transaction resulting in the sparks transfer from one wallet to another.

TEOS user can **create** and **destroy sparks** to manage the available amount of his digital asset.&#x20;

TEOS user can **transfer sparks** of his assets from wallet where he keeps them to another wallets (owned by him or other users).

TEOS user can get sparks of assets and TEOS user's sparks of assets can be consumed as a part of **warp execution** process. [Learn more](warp.md)



