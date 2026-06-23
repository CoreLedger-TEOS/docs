# Warp

TEOS users can look for offers and execute the trades in order to get specific amount of sparks of desired asset in exchange to specific amount of sparks of offered asset using warp search and warp execution functionality. **Warp** is a chain of supplies that is automatically defined on-the-fly based on a mathematical optimization algorithm where the supplies, available in TEOS Platform at the moment, play the role of chain links.

Warp search is referred to a process of identifying possible chains of supplies based on the following criteria:

* unique asset id of offered asset
* unique asset id of desired asset
* amount of sparks of desired asset to get OR amount of sparks of offered asset to pay - you can define **only one** of these parameters

### Warp search results

Warp search results are the identified warps which meet given search criteria.

* If the amount of sparks of offered asset to pay is set, search will result in
  * warps that allow you to get any amount of desired asset for the amount of sparks not more than _amount of sparks of offered asset to pay_
  * warps that allow you to get 1 spark of desired asset if you offered amount of sparks less than it is needed to get 1 spark of desired asset
* If the amount of sparks of desired asset to get is set, search will result in
  * warps that allow you to get the amount of sparks of desired asset not less than _amount of sparks of desired asset to get_ which was set
  * warps that allow you to get maximum available amount of sparks of desired asset if you desired amount of sparks more than it is available on the market

Found warps can be different by amount of offered and desired assets and exchange rate for trading them.

TEOS user can select the warp matching his goals the most and run warp execution. Before executing the selected warp TEOS will check that user has enough amount of sparks of offered asset to pay. [Learn how to implement it with TEOS API](../../overview/warp-search.md)
