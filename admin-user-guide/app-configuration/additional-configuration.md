# Additional configuration

## Seed words additional check

You have the possibility to enable additional check of seed words which are displayed during wallet creation process. It can help users to make sure they saved the seed words which are crucial for wallet restoral process.

```
"check_seed_words": true
```

If set to true, users must re-enter two random seed words to prove they wrote down the seed words. If set to false, this proof is not necessary.



## Data policy

Data policy files for corresponding language must be placed in the root folder  **trading-app-configs** and path to them must be defined in the ui config as described below**.**

We understand that you can have users with different locales. You can provide \[en], \[de] and \[es] translations for the data policy. Depending on the language settings of the mobile phone, the WLA will either take the information from \[en], \[de] or \[es]. With "\*\***- \*\***" you define the fallback file. For example, in the example below English files are defined as fallback option which means that if user with French locale comes, he will see English version of data.&#x20;

```
"localization": {
		"datapolicy-**-**": "[en]datapolicy.md",
		"datapolicy-en-**": "[en]datapolicy.md",
		"datapolicy-de-**": "[de]datapolicy.md"
	},
```
