# Version 0.23

### New features

:point\_right: We've simplified WLA setup by using the same Terms and Conditions and Data Policy in all platform components. Now admins are not expected to provide separate files with their Terms for WLA. Now Terms and Conditions and Data Policy must be provided only once during the tenant setup ([read more](https://teos-docs.coreledger.net/v/white-label-management-tool/admin-user-guide/teos-platform-preparation)). &#x20;

### Configuration changes

Because of the changes in the Terms configuration flow, data policy localization is not used anymore, you can keep default values there.

```
"localization": {
		"datapolicy-**-**": "[en]datapolicy.md",
		"datapolicy-en-**": "[en]datapolicy.md",
		"datapolicy-de-**": "[de]datapolicy.md"
	},
```

