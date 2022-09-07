# Additional configuration

## Seed words additional check

You have the possibility to enable additional check of seed words which are displayed during wallet creation process. It can help users to make sure they saved the seed words which are crucial for wallet restoral process.

```
"check_seed_words": true
```

If set to true, users must re-enter two random seed words to prove they wrote down the seed words. If set to false, this proof is not necessary.

## My activity list settings

You have the possibility to initiate transactions in WLA and WLM with the same wallet (check [login-and-wallet-creation.md](login-and-wallet-creation.md "mention")). You have the option not to display in My activity transactions initiated in WLM with the same wallet used in WLA.&#x20;

When following parameter is set to false, transactions triggered by WLM will not be listed under “My Activity”.

```
"transactions": {
"show_all_transactions_in_my_activity": false
},
```

When all transactions should be shown under “My Activity”, this parameter needs to be set to true

## Supply expiry date

The expiry date of supplies created in the app can be set with the following option:

```
"supply": {
"days_before_expired": 10
},
```

The set expiry date in this example will be today + 10 days.

