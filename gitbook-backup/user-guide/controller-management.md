# Controller management

If you want to limit the access to your assets to specific wallets, you can issue the exclusive rights to buy, sell, trade etc. by using a controller.&#x20;

{% hint style="info" %}
Adding controller to the asset can only be done by the issuer of an asset
{% endhint %}

You can always check available controllers in "Settings" -> "Controllers". Please, pay attention to the status of your controllers. You can use only "Active" ones.&#x20;

* Active - controllers which are written to blockchain
* Updating - controllers which are in the process of writing to blockchain
* Draft - controllers which were created in WLM but not written to blockchain (most likely you didn't sign the transaction)

![](<../.gitbook/assets/image (4) (1).png>)

First make sure that all the public addresses of the wallets you want to give access to your assets or restrict access are either in My wallets or in Other wallets [wallet-management-in-wlm-+-tx.mobile](wallet-management-in-wlm-+-tx.mobile/ "mention")

## Create new controller

To add a controller, click on “Settings” and choose “Controllers”. Afterwards you can click on “Add controller”. A new form with the option to add an “External controller” or create a “New controller” opens. If you click on “New controller” you can provide a name and a description for it.

![](<../.gitbook/assets/image (20).png>)

Afterwards, you get a notification and a transaction in TX.Mobile for creating a controller which needs to be signed [sign-and-check-executed-transactions.md](sign-and-check-executed-transactions.md "mention")

{% hint style="info" %}
Please, note that WLM always uses your Current wallet for creating transaction. Signature will be expected from this wallet. Current wallet is displayed right under your account name in the sidebar menu.
{% endhint %}

After you confirmed the transaction with TX.Mobile, a new controller is created.

## Manage whitelist and blacklist of a Controller

If you select your created controller and click on “Manage”, you can create a “**Whitelist**” and thus give access to your assets to selected wallets or "**Blacklist**" and thus restrict the access to your assets for selected wallets.&#x20;

Select the wallets you added previously, to put them on desired type of the list. Finish the process by clicking on “Save” and sign the transaction with TX.Mobile [sign-and-check-executed-transactions.md](sign-and-check-executed-transactions.md "mention")

![](<../.gitbook/assets/image (16).png>)

After you created a controller and added necessary wallets to Whitelist or Blacklist, you can add the controller to an asset you issued.

{% hint style="info" %}
Please, be careful with adding wallets to Whitelist or Blacklist. It doesn't make much sense in having both for one asset.

Only wallets added to Whitelist will be able to receive units of the assets to which the controller will be added..

Only wallets added to Blacklist won't have possibility to receive units of the assets to which the controller will be added.&#x20;
{% endhint %}

### Add controller to the asset

Go to “Assets” and select “My Assets”, then choose the asset which you want to add the controller to. On the top right of the page, you now see “Controller”.&#x20;

When you click on “Change” you can add the controller to the asset. Only active controllers can be selected. Click on “Select” and confirm with TX.Mobile [sign-and-check-executed-transactions.md](sign-and-check-executed-transactions.md "mention")

![](<../.gitbook/assets/image (21).png>)

The access to the asset is now limited according to Whitelist and Blacklist of your controller.
