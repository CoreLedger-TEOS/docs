---
description: Integration with TEOS Authentication service, TMS, TxServer
---

# Using additional APIs of TEOS Platform

Additional APIs are required to be used along with TEOS API in case TEOS API Consumer doesn't have its own authentication service and needs TEOS Authentication service. [Read more](../using-the-teos-api/architecture-note/tenant-setup-options.md#using-teos-api-with-the-user-access-token)

**TEOS Authentication service** is used to authenticate users for TEOS Platform components including TEOS API.

[**Tenant Management Service /TMS/**](using-tms-api/) is used to get user data and sign up new user in TEOS Platform.

You will need to integrate with both TEOS Authentication service and Tenant Management Service for [authentication and authorization flow of end users within your tenant](user-authentication-flow-with-teos-authentication-service-and-tms.md).

**TxServer** is used to authorize user devices for blockchain transactions in TEOS platform and to manage blockchain wallets.
