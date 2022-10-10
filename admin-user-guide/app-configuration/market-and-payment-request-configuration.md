---
description: Supply expiry date, invoice target address, invoice expiry date
---

# Market and payment request configuration

All configuration _is_ done within main configuration file _trading-app-configs/ui\_config.v1.json._

## Supply expiry date

Supplies can be created within Market functionality. The expiry date of supplies is set according to this setting:

```
"decentralized_market": {
    "supplies_days_before_expired": 10
    },
```

The set expiry date in this example will be today + 10 days. The setting is defined in the amount of days.

## Invoice configuration

Invoices can be created along with Payment requests. Some of the properties are defined based on config:&#x20;

* expiry date is defined as current date + "days\_before\_expired" set in the config file. The setting is defined in the amount of days.
* target address of the invoice (address which will receive paid asset) can be set in the config file. User can change it. But if not set in config - current user's address is set as default and still can be edited

```
"payment_request": {
	"invoices": {
		"days_before_expired": 10,
		"target_address": "0x4083fdfba2ebf8efc2f9f9b34537f6f989470840"
	}
}
```
