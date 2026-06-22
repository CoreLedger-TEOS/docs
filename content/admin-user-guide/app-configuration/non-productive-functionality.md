# Non-productive functionality

## Centralized market

No configuration available for this module. You can request to create your app with this module, then all assets having non-zero balance will have special asset tile offering deals against one specific asset. This functionality can not be used productively.



## Voting

Voting module can be used for showcasing how voting can be done based on blockchain. Configuration must be defined in the configuration file.

{% hint style="info" %}
If you don't need the voting functionality for your app, just remove "voting" object from your config file (there shouldn't be the word "voting" in your config file at all)
{% endhint %}

1. Define voting questions by setting\
   \- "id" for each question, we recommend to use "q-1", "q-2", etc\
   \- "asset" asset unique id for this question (with sparks of which asset this question can be answered)\
   \- "options" for each quesition by setting "id", "address" to which asset sparks must be transferred and amount of "sparks" which will be taken from the user if he votes with this option
2. Define descriptive text in the "localization" section for each question and option:\
   \- use "en-\*\***",** "de-\*\*", "es-\*\*", "fr-\*\*" blocks depending on which languages you want to set\
   \- "title" - use this parameter to define title for the whole voting section in the app\
   \- "\<question\_id>.title" - use the parameters starting with question id defined in "questions" sections and having "title" after the dot to define the question label\
   \- "\<question\_id>.desc" - use the parameters starting with question id defined in "questions" sections and having "desc" after the dot to define the question description\
   \- "\<option\_id>" - use the parameters equal to option ids defined in "questions" sections to define the option label

```json
	"voting": {
		"questions": [
			{
				"id": "q-1",
				"asset": "0x0ac20f390dcb00c0fa8d00001",
				"options": [
					{
						"id": "q-1-o-1",
						"address": "0x0cc8cfeed8ffd5ba870eac965944d8ef35daff0a",
						"sparks": "1000000"
					},
					{
						"id": "q-1-o-2",
						"address": "0x6bb7b81f12aeafc73f1417ea5a98000defd291b4",
						"sparks": "5000000000"
				}
				]
			},
			{
				"id": "q-2",
				"asset": "0x5db616f7e9aaa6fce9b0001",
				"options": [
				{
					"id": "q-2-o-1",
					"address": "0x6bb7b81f12aeafc73f1417ea5a98000defd291b5",
					"sparks": "1000000"
				},
				{
					"id": "q-2-o-2",
					"address": "0x6bb7b81f12aeafc73f1417ea5a98000defd291b6",
					"sparks": "1000000"
				},
				{
					"id": "q-2-o-3",
					"address": "0x6bb7b81f12aeafc73f1417ea5a98000defd291b7",
					"sparks": "1000000"
				},
				{
					"id": "q-2-o-4",
					"address": "0x6bb7b81f12aeafc73f1417ea5a98000defd291b8",
					"sparks": "1000000"
				}
				
				]
			},
			{
				"id": "q-3",
				"asset": "0x0ae09e45b3ab3821f4db10001",
				"options": [
					{
						"id": "q-3-o-1",
						"address": "0x6bb7b81f12aeafc73f1417ea5a98000defd291b1",
						"sparks": "1000000"
					},
					{
						"id": "q-3-o-2",
						"address": "0x6bb7b81f12aeafc73f1417ea5a98000defd291b2",
						"sparks": "1000000"
					}
				]
			}
		]
  	},
  		"localization": {
			"en-**": {
				"title": "WLA v0.22 demo voting",
				"q-1.title": "Test question 1",
				"q-1.desc": "Asset 'Freshwater' is used",
				"q-1-o-1": "1 unit to vote - NO",
				"q-1-o-2": "5000 units to vote - YES",
				"q-2.title": "Test question 2",
				"q-2.desc": "Asset 'Silver' is used",
				"q-2-o-1": "1 unit to vote - variant 1",
				"q-2-o-2": "1 unit to vote - variant 2",
				"q-2-o-3": "1 unit to vote - variant 3",
				"q-2-o-4": "1 unit to vote - variant 4",
				"q-3.title": "Test question 3",
				"q-3.desc": "Asset 'Diamonds' is used",
				"q-3-o-1": "1 unit to vote - YES",
				"q-3-o-2": "1 unit to vote - NO"
			},
			"de-**": {
				"title": "[DE]WLA v0.22 demo voting",
				"q-1.title": "[DE]Test question 1",
				"q-1.desc": "[DE]Asset 'Freshwater' is used",
				"q-1-o-1": "[DE]1 unit to vote - NO",
				"q-1-o-2": "[DE]5000 units to vote - YES",
				"q-2.title": "[DE]Test question 2",
				"q-2.desc": "[DE]Asset 'Silver' is used",
				"q-2-o-1": "[DE]1 unit to vote - variant 1",
				"q-2-o-2": "[DE]1 unit to vote - variant 2",
				"q-2-o-3": "[DE]1 unit to vote - variant 3",
				"q-2-o-4": "[DE]1 unit to vote - variant 4",
				"q-3.title": "[DE]Test question 3",
				"q-3.desc": "[DE]Asset 'Diamonds' is used",
				"q-3-o-1": "[DE]1 unit to vote - YES",
				"q-3-o-2": "[DE]1 unit to vote - NO"
			}
		}
}
```
