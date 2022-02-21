# Warp

TEOS users can look for offers and execute the trades in order to get specific amount of sparks of desired asset in exchange to specific amount of sparks of offered asset using warp search and warp execution functionality. **Warp** is a chain of supplies that is automatically defined on-the-fly based on a mathematical optimization algorithm where the supplies, available in TEOS at the moment, play the role of chain links.

Warp search is referred to a process of identifying possible chains of supplies based on the following criteria:

* unique asset id of offered asset
* unique asset id of desired asset
* amount of sparks of desired asset to get OR amount of sparks of offered asset to pay

Warp search results in the list of identified warps that meet the following criteria:

* not more than _amount of sparks of offered asset to pay_ must be paid
* not less than _amount of sparks of desired asset to get_ must be received
* exchange rate of amount of sparks of offered asset to pay against amount of sparks of desired asset to get is optimum

TEOS user can select the warp matching his goals the most and run warp execution. [Learn how to implement it with TEOS API](../using-the-teos-api/warp-search.md)

