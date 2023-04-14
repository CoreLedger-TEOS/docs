---
description: User authentication flow description
---

# User authentication  flow with TEOS Authentication service and TMS

The following diagram describes the typical request flow from authentication/authorization point of view. You can find detailed description of each step below.

You can find detailed description of the endpoints, used in the steps, [here](https://tms-dev3.dev.coreledger.net/swagger/index.html).

<figure><img src="../.gitbook/assets/TMS auth flow.png" alt=""><figcaption></figcaption></figure>

1.0. User executes any action that triggers request to TEOS API.

1.1. Application must check if the user access token is valid (present and not expired) (exact implementation is application-specific and is out of scope of this document).

If the access token is not valid, application should authenticate a user and retrieve a new access token from auth-server (steps 1.2-1.3):&#x20;

1.2-1.3. Please refer to [authentication.md](../using-the-teos-api/authentication.md "mention") section to know the details about authentication.

1.4. Application sends request to the 'user' endpoint in TMS to retrieve information about authenticated user:&#x20;

```
GET /templates
Auth: Bearer <access-token>
```

1.5. Application processes response from 1.4.&#x20;

If the response HTTP status code is 200, the response body will contain user data in response body (see step 1.11).

If the response HTTP status code is 404, this means that user was created in auth-server, but was not created in the customer's tenant. The application must initiate tenant-user creation (steps 1.6-1.10):

1.6. Application calls `/templates` endpoint:&#x20;

```
GET /templates
Auth: Bearer <access-token>
```

The response body will contain the information about registration template for the customer's tenant: `{"ReferralCodeRequired": true}`. This data must be used on the next step.

1.7. Application shows 'signup' screen for a user. This screen should provide the user the possibility to read and accept T\&C and (if required) to fill in the referral code.

1.8. User fills in the necessary data and submits his request.

1.9. Application calls the 'signup' endpoint in TMS:&#x20;

```
POST /users/signup 
{
    "language": "en-US",
    "timeZoneId": "W. Europe Standard Time",
    "currency": "USD",
    "TCAccepted": true
} 
Auth: Bearer <access-token> 
```

The `TCAccepted` field must be set to true, otherwise TMS will respond with HTTP 400 and body "User must accept terms and conditions". Other fields are optional and may be omitted (default values are shown in the example request).

1.10. TMS responds with the created tenant-user's data in response body (see next step).

1.11. Based on the application logic, application may process the user data, retrieved on steps 1.4 or 1.10 (exact implementation of user-data processing is application-specific and is out of scope of this document):&#x20;

```
{
    "id": "6e270fac-f9cf-4f15-a280-15454bdd3d74",
    "isConfirmedByAdmin": false,
    "hasAcceptedTC": true,
    "profile": {
        "language": "en-US",
        "timeZoneId": "W. Europe Standard Time",
        "currency": "USD"
    },
    "firstName": "user-first-name",
    "lastName": "user-last-name",
    "emailAddress": "new-tenant-user@example.com"
}
```

1.12. Application sends request to TEOS API.

1.13. Application shows a user a screen with the requested data.
