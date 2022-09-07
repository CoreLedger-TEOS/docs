# Asset configuration

## Assets availability configuration

For the assets shown in the WLA, there are various configuration possibilities.

There are two files in the blob storage, \[en] and \[de]. Depending on the language settings of your mobile phone, the WLA will either take the information from \[en] or \[de].

Each Asset must be configured with the following parameters. For all assets to be shown in the WLA, this information is needed in the asset config file.

```
{
"name": "Test Asset en",
"assetId": "1164621626855822304252103",
"ledgerId": "1",
"ticker": "TEST",
"icon": "icons/swiss_francs.png",
"url": "https://en.wikipedia.org/wiki/Old_Master",
"uom": "CHF"
},
```

* Any name can be put to an asset
* For each asset to be shown in WLA, the correct asset ID is needed \
  The asset ID can be copied from the URL, when the corresponding asset is selected in WLM (see Figure 4).
* Ledger ID can be kept 1 for Pilot users
* Any ticker can be put to an asset (optional field)
* Any Icon can be put to an asset (see also section [#in-app-logo](branding-management.md#in-app-logo "mention")) (optional field)
* Any URL can be put to an asset, to show more information when the user clicks on it (optional field)
* Finally, the correct unit of measure should be entered

![Figure 4: Asset ID](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F7Xg7iannH70Bvo1bfqMb%2Fuploads%2FcFgTb9WyJzszs67tu4W0%2F5?alt=media)



## Zero balance assets displaying

If you want assets to be displayed in “My Asset” screen, even when the wallet has no Sparks, then the parameter _"show\_absent\_assets\_in\_my\_asset\_list"_ must be set to true, and all corresponding asset IDs need to be typed in here

```
"assets": {
"show_absent_assets_in_my_asset_list": true,
"limit_absent_list": [
"628250158773558491489789",
"1196885423266613894240897",
]
```

If only Assets should be listed which have Sparks, then set the parameter _"show\_absent\_assets\_in\_my\_asset\_list"_ to false.

​
