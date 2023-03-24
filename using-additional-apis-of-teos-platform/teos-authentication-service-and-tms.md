# TEOS Authentication service and TMS

The following diagram describes the typical request flow from authentication/authorization point of view. You can find detailed description of each step below.

<figure><img src="../.gitbook/assets/TMS login flow.png" alt=""><figcaption></figcaption></figure>

1.0. User executes any action that triggers request to Teos Api.

1.1. Application must check if the user access token is valid (present and not expired) (exact implementation is application-specific and is out of scope of this document).

If the access token is not valid, application should authenticate a user and retrieve a new access token from auth-server using `/connect/authorize` endpoint (steps 1.2-1.6):

1.2. Application opens browser page, targeting `/connect/authorize` url.

1.3. The auth-server login page is shown to the user.

1.4. If the user is not registered on auth server, it registers in auth-server. Otherwise existing credentials are used for login.

1.5. After successful login/registration, the browser is redirected to the 'redirect uri'.

1.6. The application must listen on the 'redirect uri' and store the provided access token.

1.7. Application sends request to the 'user' endpoint in TMS to retrieve information about authenticated user:

```
GET /users
Auth: Bearer <access-token>
```

1.8. Application processes response from 1.7.

If the response HTTP status code from step 1.7 is 200, the response body will contain user data in response body (see step 1.18).

If the response HTTP status code from step 1.7 is 403 and the response body contains message `{"Error": "email not verified"}`, this means that user needs to confirm it's email address.

1.9. Application shows 'You need to confirm email address' screen to the user (exact implementation is application-specific and is out of scope of this document).

1.10. The user checks his mailbox for a confirmation email from auth-server and confirms his email address.

1.11. After confirmation, the user presses 'I confirmed' button (exact implementation is application-specific and is out of scope of this document).

1.12. Application repeats the flow, starting from the step 1.7

If the response HTTP status code from step 1.7 is 404, this means that user was created in auth-server, but was not created in the customer's tenant. The application must initiate tenant-user creation:

1.13. Application calls /templates endpoint:

```
GET /templates
Auth: Bearer <access-token>
```

The response body will contain the information about registration template for the customer's tenant: `{"ReferralCodeRequired": true}`. This data must be used on the next step.

1.14. Application shows 'signup' screen for a user. This screen should provide the user the possibility to read and accept T\&C and (if required) to fill in the referral code.

1.15. User fills in the necessary data and submits his request.

1.16. Application calls the 'signup' endpoint in TMS:

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

The `TCAccepted` field must be set to `true`, otherwise TMS will respond with HTTP 400 and body `"User must accept terms and conditions"`.

Other fields are optional and may be omitted (default values are shown in the example request).

1.17. TMS responds with the created tenant-user's data in response body (see next step).

1.18. Based on the application logic, application may process the user data, retrieved on steps 1.8 or 1.17 (exact implementation of user-data processing is application-specific and is out of scope of this document):

```json
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

1.19. Application sends request to Teos Api.

1.20. Application shows a user a screen with the requested data.
