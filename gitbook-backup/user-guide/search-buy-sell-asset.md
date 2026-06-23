# Search, buy, sell asset

As soon as you create your asset and create units for it, you have something to offer for exchange. Go to “Search Assets” in the left menu bar under the “Assets” and start looking for an asset you want to buy.

## Search assets

You can decide if you use the simple search or if you want to perform a detailed search (advanced search).

![](<../.gitbook/assets/image (52).png>)

Within the **simple search** just type in the name of the asset you are looking for (e.g. Gold, Bitcoins, Coffee, Banana...). As a result, you will get a list with all assets containing the keyword in the name.

The **advanced search** is designed for a more precise query. You can group and ungroup the criteria for your search by simply clicking on the operators “or” & “and”.

![](<../.gitbook/assets/image (31).png>)

Every property of an asset can be polled. You should add the properties to be polled and to define the values if needed.

You can find the example for a query with “gold” in the name and in the jurisdiction Switzerland below.&#x20;

![](<../.gitbook/assets/image (38).png>)

If you want to save your query, you can click on “Save filter” and enter a name as well as a description of the filter. Note, if you want to generate a master filter as an administrator you need to select “Save as tenant filter”. Read more about filters [#filters-management](additional-settings-management.md#filters-management "mention")

After you found an asset you need, you can select the asset and click on “More info”. By selecting “Additional Properties”, all properties that were defined for this asset are shown.&#x20;

![](<../.gitbook/assets/image (11).png>)

Furthermore, if you click on “Download PDF” (bottom of the right menu bar) you get all the information about the asset in one document. You can decide which type of the document you need - Asset description or Asset prospectus. Also you can select the language on which this document should be generated.

Both documents are generated automatically based on the templates defined by admins [#asset-description-pdf-generation](../admin-user-guide/wlm-configuration/templates-management.md#asset-description-pdf-generation "mention")

## Buy and sell asset

If you decide to buy this asset you can click on “Buy” (at the right side of the page). The exchange form opens. The same form will be opened if you click on "Sell" for any other asset.

![](<../.gitbook/assets/image (70).png>)

Select the asset you want to propose (left) in exchange for the asset you want to buy (right). Define the amount you want to buy (or the amount you want to pay) and click on “Search WARPs”. Amount can be set in units or sparks, check more about units/sparks in [#units-of-measure](create-asset.md#units-of-measure "mention")

{% hint style="info" %}
Please, note that only one amount (to pay or to receive) can be defined to start search but both assets must be specified.
{% endhint %}

The WLM will start looking for some matching trade chains for you. Each potential way to process your request (WARP) will be displayed separately as a tile.

![](<../.gitbook/assets/image (81).png>)

Each tile representing different warps can have different gas costs, exchange rates, probabilities to be processed with such characteristics. You can select the one, which fulfills your needs the best. By clicking on “Trade” the warp will be executed, and your buying process/transaction will start. You will get a notification on the TX.Mobile app to sign the transaction [sign-and-check-executed-transactions.md](sign-and-check-executed-transactions.md "mention")

{% hint style="info" %}
Please, note that WLM always uses your Current wallet for creating transaction. Signature will be expected from this wallet. Current wallet is displayed right under your account name in the sidebar menu.
{% endhint %}

After a successfully processed transaction, you will own specific amount of the recently bought asset. At the same time amount of asset you offered in exchange will be deducted from your holdings. To check it, you can click on the menu “Assets”. In the view “Holdings” you should now see the assets (and their amount) you hold [#assets-list](manage-asset-asset-details-asset-operations/#assets-list "mention")

If no result was found for your request, you can trigger another search by changing search criteria.

Alternatively you can create your own supply by clicking on “Create Supply” [#create-supply](supply-management.md#create-supply "mention")

