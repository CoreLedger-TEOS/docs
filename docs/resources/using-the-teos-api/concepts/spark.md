# Spark and natural units of measure

There are two types of units which can be used in TEOS  for displaying asset amount: natural units of measure and sparks.

Every asset has its own representation in real world and thus has its own natural units of measure which are defined for the digital asset when it is created.  For example, steel is measure in kilograms or tons and man-hours in days or hours.

Every digital asset written to the blockchain has unified indivisible unit of measure. In TEOS we call it Spark. Spark is the generalized term for the smallest indivisible fraction of a digital asset (like one Satoshi is for Bitcoin or one Wei is for Ether).

The number of sparks needed to get one unit of measure (kilogram, liter, token) can be defined by the TEOS user with the help of the Spark factor.

For example, asset has unit of measure defined as liter and Spark factor as 1000. That means, that its smallest indivisible part refers to milliliter in the physical world. In this example, the smallest indivisible fraction for a TEOS to operate is 0.001 liter (1 Spark) of this asset.

### Spark operation

Spark operation is an any transaction resulting in the sparks transfer from one wallet to another.

TEOS user can **create** and **destroy sparks** to manage the available amount of his digital asset.

TEOS user can **transfer sparks** of his assets from wallet where he keeps them to another wallets (owned by him or other users).

TEOS user can get sparks of assets and TEOS user's sparks of assets can be consumed as a part of **warp execution** process. [Learn more](./warp/index.md)
