# Settings

Settings represent the global configuration parameters of the TEOS system that define how supplies and controllers operate. They include limits, thresholds, and operational rules that affect system behavior. Settings are divided into categories, such as Supplies, which control supply expiration and availability, and Controllers, which define operational limits like the maximum number of addresses per transaction.

The `GET /odata/v1.0/Settings` endpoint allows clients to retrieve the current system settings. This method is read-only and provides a snapshot of configuration parameters at the time of the request. Accessing these settings helps users and integrators understand the operational constraints of the TEOS system and ensure that transactions and supply management comply with system rules.

📘 [Learn more](../../../guides/settings/get-settings.md) about "Get settings" method.
