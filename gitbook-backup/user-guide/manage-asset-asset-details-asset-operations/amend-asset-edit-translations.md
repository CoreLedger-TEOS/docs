# Amend asset, edit translations

When asset is created, all data provided as part of the description is converted into asset hash and written to blockchain to make sure it can't be modified.&#x20;

Issuer of the asset may need to provide some additional details as part of the description or even change some parts of the description, including translations.&#x20;

To do it in WLM, issuer of the asset can create amendment by clicking "Amend asset" or "Edit translation".

{% hint style="info" %}
Please, note that WLM always uses your Current wallet for creating transaction. Signature will be expected from this wallet. Current wallet is displayed right under your account name in the sidebar menu.
{% endhint %}

![](<../../.gitbook/assets/image (57).png>)

After filling out the form with providing all necessary updates, amendment either can be saved as draft or activated right away. In case it is activated,  the transaction will be pushed to the TX.Mobile app for signature. Sign the transaction [sign-and-check-executed-transactions.md](../sign-and-check-executed-transactions.md "mention")

After its successful processing new hash is generated based on the latest description details and written to blockchain.

All amendments are collected under "Updates" tab of Asset details view.
