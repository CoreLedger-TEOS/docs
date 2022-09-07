# Sign and check executed transactions

## Sign transaction

To write something to the blockchain user must sign data with his private key of the wallet used for this action. Each try to write data to the blockchain is called transaction.&#x20;

{% hint style="info" %}
Every time you create asset, create supply or do any other transaction signing related action, check which wallet is selected as your current wallet in WLM. Transaction is created for the current wallet and pushed to the device with TX.Mobile where the private key pf current wallet is stored.
{% endhint %}

In WLM you can run following operations which result in the transaction and thus writing to blockchain:

* create asset
* amend asset
* create units of the asset
* destroy units of the asset
* transfer units of the asset
* create controller
* change controller (add/remove addresses to/from the controller)
* change controller of the asset
* create supply
* change supply (change due date, refill supply, change exchange rate)
* run warp
* link asset, unlink assets
* create FT contract
* create NFT contract, add asset to NFT contract

When you trigger one of these actions in WLM, the transaction is being pushed to the TX.Mobile app. You get a notification on your mobile phone.

To finish the transaction, you have to sign it by clicking on “Confirm”, otherwise it won’t be processed. You also can reject it, then it won't be processed further too.

![](<../.gitbook/assets/image (10).png>)

When you sign the transaction, data is pushed to the server and is written to the blockchain. After some time, you will receive a notification of the successful operation in WLM and in the mobile app.&#x20;

{% hint style="info" %}
Writing to blockchain can take some time so the **time between placing signature and receiving notification about successful result** of operation depends on the blockchain (local/global) and current activity of all contributors to it.

Also **transaction costs (aka gas costs)** depend on the blockchain which is connected to the system. In local blockchain networks the costs are stable and very low. In global Ethereum network they can vary significantly.
{% endhint %}

## Check executed transaction

You can check the details of the triggered transaction both in WLM web app and in TX.Mobile.

### Check transaction in WLM

Go to "Dashboard" in sidebar menu and stay under "My activity" tab to see the list of all triggered transactions by all addresses from the list of My wallets.

![](<../.gitbook/assets/image (62).png>)

By selecting the transaction, you can check its details. You can always check the status and errors in case the transaction has failed. Apart from this metadata details depend on the type of the transaction are also displayed.

By switching to "Other" tab you can check the transactions which were triggered by some other user's wallets and which involved your address as a receiver.

### Check transaction in TX.Mobile

When you open the app you see all triggered transactions by all addresses from the list of Wallets in TX.Mobile.&#x20;

By selecting the transaction, you can check its details. You can always check the status and errors in case the transaction has failed. Apart from this metadata details depend on the type of the transaction are also displayed.

You can follow the transaction and its processing by checking the states.

![](<../.gitbook/assets/image (74).png>)

## Transaction status

All transactions can be in one of the following statuses:

* submitted - transaction was created, signed and submitted to blockchain by TEOS
* committed - transaction was written to blockchain according to blockchain's feedback, due to nature of blockchain technology this fact needs additional verification
* confirmed - transaction's data was found in blockchain, verification has passed
* rejected - transaction was rejected by user
* failed - there was some error while processing
