# Supply management

TEOS users (including WLM users) can create supplies in order to trade their assets. **Supply is an offer** created by a user **to get specific amount of units of desired asset in exchange to specific amount of units of offered asset**.

Supplies are consumed by other TEOS users when they execute trades, or execute warps, where supplies existing on blockchain take part. Check more about asset trading in [search-buy-sell-asset.md](search-buy-sell-asset.md "mention")

All supplies can be in one of the following status:

* Draft - supplies which were created in WLM but not written to blockchain (most likely you didn't sign the transaction)
* Active - supplies which are written to blockchain and ready for trading
* Exhausted - supplies which were consumed
* Expired - this status is set for all supplies which end date has come
* Activating - this is intermediate status which is set for the supplies which are being written to blockchain at the moment
* Inactive - supplies which were terminated by the owner

All supplies are grouped under 4 tabs:

* Active - only active supplies are displayed in this group
* Critical - supplies which are going to be exhausted or expired soon can be found in this section&#x20;
* Inactive - supplies with status "Expired", "Exhausted" and "Inactive" are displayed here
* Draft - supplies with status "Draft" and "Activating"

## **Create supply**

User can create supply from "My Supplies" page (Market -> My Supplies) or from Exchange screen when no available warps are found by clicking on “Create Supply”.&#x20;

The new form opens where you should define&#x20;

* **assets** to trade (proposed and desired assets)
* **exchange rate** between them and amount to pay or to receive OR only both amounts, the system calculates the other part for you
* **wallet from** which proposed asset will be paid
* **expiration date** of the supply
* (optional) **wallet to** which desired asset will be delivered. If it's not filled, same wallet as the wallet from
* (optional) set the flag whether to let consume this supply partly or let trade it only with the full amount

![](<../.gitbook/assets/image (12).png>)

Note, if you come to this from from Exchange screen after your search didn't succeed, then assets and amounts will be prefilled with the selected search criteria. You can change these parameters.

You can provide the amounts in natural units or in sparks. See more about the difference [#units-of-measure](create-asset.md#units-of-measure "mention")

By clicking on “Activate” the transaction is being pushed to the TX.Mobile app. Sign the transaction [sign-and-check-executed-transactions.md](sign-and-check-executed-transactions.md "mention")

After you singed the transaction and it was processed successfully, supply will be posted, like postings on a bulletin board. Supply will be part of the warps which can be found under Market [search-buy-sell-asset.md](search-buy-sell-asset.md "mention"). As soon as someone in the WLM wants to buy your proposed asset and clicks on “Trade” on his WARP results – a WARP will be executed, and your supply will be automatically processed.

You will get a notification that the amount of the proposed asset has changed.

## Edit supply

### Change exchange rate

It might happen that you find initial exchange rate set for supply as not optimum one. You can either create new supply with another exchange rate (in case you want existing supply still to be available on the market) or you can change its exchange rate.

Go to supply menu and select "Change rate". You will have to update exchange rate and sign the transaction [sign-and-check-executed-transactions.md](sign-and-check-executed-transactions.md "mention")

### Renew supply

It might also happen, that your supply will expire without being consumed at all or consumed partly. In such case you can extend the supply without creating new one.

Go to supply menu and select "Extend". You will have to update end date and sign the transaction [sign-and-check-executed-transactions.md](sign-and-check-executed-transactions.md "mention")

### Restock supply

If you supply is consumed partly or fully, you can refill it in case you still have some items of your proposed asset to trade. Alternatively, you can always create a new supply.

To refill existing supply, go to supply menu and select "Restock". You will have to update the amount of asset to propose, exchange rate won't be changed, the system calculates the other part for you. After pressing "Activate" sign the transaction as usual to finish the process [sign-and-check-executed-transactions.md](sign-and-check-executed-transactions.md "mention")

### Terminate supply

In case you want to remove your active supply from the market, you can do it by changing the status to "Inactive".&#x20;

Go to supply menu and select "Terminate". You will have to sign the transaction to finish the process [sign-and-check-executed-transactions.md](sign-and-check-executed-transactions.md "mention")
