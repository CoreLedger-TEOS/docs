# Earlier versions

## Version 0.20 introduced in December, 2022

Admins can decide now at the very beginning of the project how many words should be used as a seed for wallet creation. This parameter can't be configured when app is already created.

Now users can find all operations which formed the balance of the asset by tapping the asset right on the Assets screen. Check out the details here [assets-and-transactions.md](../how-your-users-interact-with-wla/assets-and-transactions.md "mention")

We brought back animation when search is in progress on Market screen. Now you can clearly see that app is still searching for the best deal to offer you.

Also we added ETH balance to the wallet information. This is ETH which is necessary for signing and writing transaction to the blockchain. ETH balance should be always enough for users within [Active Sandbox](https://coreledger.net/active-sandbox/) because service asset is distributed automatically but in case a user faces 0 balance, admins can contact CoreLedger manager to solve this problem.

## Version 0.19 introduced in October, 2022

We added new functionality for creating invoices instead of payment requests, paying them and tracking their statuses. Check how it works in [payment-request-and-invoices.md](../how-your-users-interact-with-wla/payment-request-and-invoices.md "mention")&#x20;

Now our customers can decide which functionality is necessary in the app and which not - we introduced modular based approach for WLA creation. When creating WLA based app, you can define which of those modules should be included into your app. Check [wla-modules.md](../admin-user-guide/wla-modules.md "mention")

Also we changed the flow for initiating the search for trades in decentralized market. We hope that it will help your end users reach their goals easier!&#x20;

And as usual we fixed some bugs to make the app more user friendly and stable.

## Version 0.10 introduced in July, 2022

We added possibility to delete user profile from the app and account from TEOS all in all.

Also we fixed some bugs to make the app more user friendly and stable.

## Version 0.9 introduced in May, 2022

We fixed some bugs to make the app more user friendly and stable.&#x20;

Also we added language switcher, so now you can select in which language mobile app should work - English or German.&#x20;

To make sure that no one can still your seed words we removed possibility to check seed words after the registration and wallet creation process is successfully completed.

## Version 0.8 introduced in April, 2022

We fixed some bugs to make the app more user friendly and stable and added biometric authorization. Now you can use your preferred bio authentication to unlock the app.

Also we optimized assets parameters selection in Search for supplies screen by allowing swapping assets to sell and receive and setting amount for selling to maximum sparks owned by user with one click.

## Version 0.7 introduced in February, 2022

We fixed some bugs to make the app more user friendly and stable and added new features: now you can set the pin code for the application and enter referral code if you have one when creating a new account.

For customers using WLA code base: we switched transaction data retrieval to target [TEOS API component](https://app.gitbook.com/o/ZaeNizhnU47lCcTSk7wB/s/-McAKJLTTEmlfBIFJ-85/)
