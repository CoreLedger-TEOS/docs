# Version 0.23

### New features

👉 We've simplified WLA setup by using the same Terms and Conditions and Data Policy in all platform components. Now admins are not expected to provide separate files with their Terms for WLA. Now Terms and Conditions and Data Policy must be provided only once during the tenant setup ([read more](../admin-user-guide/teos-platform-preparation.md)).

### Configuration changes

Because of the changes in the Terms configuration flow, data policy localization is not used anymore, you can keep default values there.

```
"localization": {
		"datapolicy-**-**": "[en]datapolicy.md",
		"datapolicy-en-**": "[en]datapolicy.md",
		"datapolicy-de-**": "[de]datapolicy.md"
	},
```
