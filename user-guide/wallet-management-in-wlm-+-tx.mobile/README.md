# Wallet management in WLM + TX.Mobile

All wallets in TEOS are divided into My wallets and Other wallets.

**My wallet** is the one with which you can sign transactions. You must be the older of the private key of this wallet and it must be stored in TX.Mobile. The private key is automatically saved in TX.Mobile when you create the wallet directly in the app [step-4-setup-a-wallet-wlm-+-tx.mobile.md](../../where-to-start/step-4-setup-a-wallet-wlm-+-tx.mobile.md "mention")

**Other wallet** is just some wallet to the private key of which you don't have access. Treat it like a contact saved in your address book. You have only public address of this wallet.

![](<../../.gitbook/assets/image (5).png>)

## Add my wallet

Click "Add wallet", select "Add Provider" tab and scan this QR code by TX.Mobile in the step "Add provider" [#add-wlm-as-the-provider-of-transactions-to-the-wallet](../../where-to-start/step-4-setup-a-wallet-wlm-+-tx.mobile.md#add-wlm-as-the-provider-of-transactions-to-the-wallet "mention")

![](<../../.gitbook/assets/image (46).png>)

After you scan QR code with TX.Mobile, WLM will be connected to your selected wallet as transaction provider and WLM will get all the info about this wallet. Now you use it as your wallet for all transaction signing related actions.

### Change my current wallet

Note that every transaction signing related action needs the specified wallet. WLM always uses your Current wallet for this purpose. It is displayed right under your account name.

You can change it by selecting a new one from the dropdown which contains My wallets list.

{% hint style="info" %}
Every time you create asset, create supply or do any other transaction signing related action, check which wallet is selected as your current wallet in WLM. It can be selected and always displayed right under your account name

![](<../../.gitbook/assets/image (43).png>)
{% endhint %}

## Add other wallet

Click "Add wallet", select "Existing wallet" and fill in the proposed form. You need to know only public address of the wallet you're adding. Names and description are used for your convenience, define the name in the way to make this wallet easily recognizable by yourself.

After you add the wallet to Other wallets list you can add it to controllers [controller-management.md](../controller-management.md "mention") or as a target address for units transfer in WLM or even as a collection method in WLP [White Label Portal](http://localhost:5000/o/ZaeNizhnU47lCcTSk7wB/s/iTYqY7GQFlQO0s8Vbk2r/ "mention")

![](<../../.gitbook/assets/image (71).png>)

## Manage Ether

TEOS runs on Ethereum blockchain, every transaction signing requires spending gas - Ethereum measured in ETH or wei.

### Get Ether

Based on tenant configuration, some of the tenants have access to the Ethereum global network widely known all over the world, some of the tenants are connected to Ethereum technology based blockchain networks (SparkNet, DevilNet) which run by CoreLedger (for example, all Active Sandboxes have such configuration). For such tenants you can request Ether in case you're running out of it.

To request Ether, click "Get Ether" and select token type, ask your tenant admin or CL manager if it's not clear which token type to use. In most cases you will have only one option.

![](<../../.gitbook/assets/image (8).png>)

### Convert Ether&#x20;

Some tenants may use Ether as a digital asset to perform functions available for all other digital assets. In this case you may need to convert service Ether to digital asset and withdraw it in opposite.

To do it, use "Manage Ether" button and select desired wallet.

![](<../../.gitbook/assets/image (68).png>)
