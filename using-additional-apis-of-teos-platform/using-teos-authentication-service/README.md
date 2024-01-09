# Using TEOS Authentication service

Additional APIs are required to be used along with TEOS API in case TEOS API Consumer doesn't have its own authentication service and needs TEOS Authentication service. [Read more](../../using-the-teos-api/architecture-note/tenant-setup-options.md#using-teos-api-with-the-user-access-token)

**TEOS Authentication service** (we also refer to it as AuthServer) is used to authenticate users for TEOS Platform components including TEOS API.&#x20;

## OAuth Endpoints

[OAuth 2.0](https://oauth.net/2/) standard endpoint implementation details are described below. Custom endpoint references can be found [here](./#specific-endpoints).

**Discovery Endpoint**

{% swagger method="get" path="" baseUrl="/.well-known/openid-configuration" summary="Discovery Endpoint" fullWidth="false" %}
{% swagger-description %}
The discovery endpoint can be used to retrieve metadata about the AuthServer - it returns information like the issuer name, key material, supported scopes etc. See the [spec](https://openid.net/specs/openid-connect-discovery-1\_0.html) for more details.

The discovery endpoint is available via _/.well-known/openid-configuration_ relative to the base address, e.g.:&#x20;

`https://auth.coreledger.net/.well-known/openid-configuration`
{% endswagger-description %}

{% swagger-response status="200: OK" description="" %}

{% endswagger-response %}
{% endswagger %}

{% hint style="info" %}
You can use the [IdentityModel](https://github.com/IdentityModel/IdentityModel2) client library to programmatically access the discovery endpoint from .NET code. For more information check the IdentityModel [docs](https://identitymodel.readthedocs.io/en/latest/client/discovery.html).
{% endhint %}

**Authorize Endpoint**

{% swagger method="get" path="" baseUrl="/connect/authorize" summary="Authorize Endpoint" fullWidth="false" %}
{% swagger-description %}
The authorize endpoint can be used to request tokens or authorization codes via the browser. This process typically involves authentication of the end-user and optionally consent.
{% endswagger-description %}

{% swagger-parameter in="query" name="client_id" required="true" type="" %}
identifier of the client
{% endswagger-parameter %}

{% swagger-parameter in="query" name="request" %}
instead of providing all parameters as individual query string parameters, you can provide a subset or all of them as a JWT
{% endswagger-parameter %}

{% swagger-parameter in="query" name="request_uri" required="false" %}
URL of a pre-packaged JWT containing request parameters
{% endswagger-parameter %}

{% swagger-parameter in="query" name="scope" required="true" %}
one or more registered scopes
{% endswagger-parameter %}

{% swagger-parameter in="query" name="redirect_uri" required="true" %}
must exactly match one of the allowed redirect URIs for that client
{% endswagger-parameter %}

{% swagger-parameter in="query" name="response_type" type="" %}
`id_token` requests an identity token (only identity scopes are allowed)

`token` requests an access token (only resource scopes are allowed)

`id_token token` requests an identity token and an access token

`code` requests an authorization code

`code id_token` requests an authorization code and identity token

`code id_token token` requests an authorization code, identity token and access token
{% endswagger-parameter %}

{% swagger-parameter in="query" name="response_mode" %}
`form_post` sends the token response as a form post instead of a fragment encoded redirect
{% endswagger-parameter %}

{% swagger-parameter in="query" name="state" %}
auth server will echo back the state value on the token response, this is for round tripping state between client and provider, correlating request and response and CSRF/replay protection. (recommended)
{% endswagger-parameter %}

{% swagger-parameter in="query" name="nonce" %}
auth server will echo back the nonce value in the identity token (this is for replay protection)

_Required for identity tokens via implicit grant._
{% endswagger-parameter %}

{% swagger-parameter in="query" name="prompt" %}
`none` no UI will be shown during the request. If this is not possible (e.g. because the user has to sign in or consent) an error is returned

`login` the login UI will be shown, even if the user is already signed-in and has a valid session
{% endswagger-parameter %}

{% swagger-parameter in="query" name="code_challenge" %}
sends the code challenge for PKCE
{% endswagger-parameter %}

{% swagger-parameter in="query" name="code_challenge_method" %}
`plain` indicates that the challenge is using plain text (not recommended)&#x20;

`S256` indicates the challenge is hashed with SHA256
{% endswagger-parameter %}

{% swagger-parameter in="query" name="login_hint" %}
can be used to pre-fill the username field on the login page
{% endswagger-parameter %}

{% swagger-parameter in="query" name="ui_locales" %}
gives a hint about the desired display language of the login UI
{% endswagger-parameter %}

{% swagger-parameter in="query" name="max_age" %}
if the user’s logon session exceeds the max age (in seconds), the login UI will be shown
{% endswagger-parameter %}

{% swagger-parameter in="query" name="acr_values" %}


allows passing in additional authentication related information - identityserver special cases the following proprietary acr\_values:

`idp:name_of_idp` bypasses the login/home realm screen and forwards the user directly to the selected identity provider (if allowed per client configuration)

`tenant:name_of_tenant` can be used to pass a tenant name to the login UI
{% endswagger-parameter %}

{% swagger-response status="302: Found" description="Redirect to the login or an error page" %}
If the error page is returned, it is always the same, and stating \
`Sorry, there was an error: unauthorized_client`\
Reason for such an error could be: ClientId, scopes or redirect\_uri are sent to the /authorize endpoint not like they are defined in the [Discovery Service](https://teos-docs.coreledger.net/using-additional-apis-of-teos-platform/using-discovery-service). Exact reason could be determined by CoreLedger support.
{% endswagger-response %}
{% endswagger %}

{% hint style="info" %}
AuthServer supports a subset of the OpenID Connect and OAuth 2.0 authorize request parameters. For a full list, see [here](https://openid.net/specs/openid-connect-core-1\_0.html#AuthRequest).
{% endhint %}

Example:

```
GET /connect/authorize?
    client_id=client1&
    scope=openid email api1&
    response_type=id_token token&
    redirect_uri=https://myapp/callback&
    state=abc&
    nonce=xyz
```

(URL encoding removed, and line breaks added for readability)

{% hint style="info" %}
You can use the [IdentityModel](https://github.com/IdentityModel/IdentityModel2) client library to programmatically create authorize requests .NET code. For more information check the IdentityModel [docs](https://identitymodel.readthedocs.io/en/latest/client/authorize.html).
{% endhint %}

**Token Endpoint**

{% swagger method="post" path="" baseUrl="/connect/token" summary="Token Endpoint" %}
{% swagger-description %}
The token endpoint can be used to programmatically request tokens. It supports the `password`, `authorization_code`, `client_credentials`, `refresh_token` and `urn:ietf:params:oauth:grant-type:device_code` grant types. Furthermore the token endpoint can be extended to support extension grant types.
{% endswagger-description %}

{% swagger-parameter in="body" name="client_id" required="true" %}
client identifier (required – Either in the body or as part of the authorization header.)
{% endswagger-parameter %}

{% swagger-parameter in="body" name="client_secret" %}
client secret either in the post body, or as a basic authentication header
{% endswagger-parameter %}

{% swagger-parameter in="body" name="grant_type" %}
`authorization_code`, `client_credentials`, `password`, `refresh_token`, `urn:ietf:params:oauth:grant-type:device_code` or custom.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="scope" %}
one or more registered scopes. If not specified, a token for all explicitly allowed scopes will be issued.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="redirect_uri" %}
required for the `authorization_code` grant type
{% endswagger-parameter %}

{% swagger-parameter in="body" name="code" %}
the authorization code (required for `authorization_code` grant type)
{% endswagger-parameter %}

{% swagger-parameter in="body" name="code_verifier" %}
PKCE proof key
{% endswagger-parameter %}

{% swagger-parameter in="body" name="username" %}
resource owner username (required for `password` grant type)
{% endswagger-parameter %}

{% swagger-parameter in="body" name="password" %}
resource owner password (required for `password` grant type)
{% endswagger-parameter %}

{% swagger-parameter in="body" name="acr_values" %}


allows passing in additional authentication related information for the `password` grant type - identityserver special cases the following proprietary acr\_values:

`idp:name_of_idp` bypasses the login/home realm screen and forwards the user directly to the selected identity provider (if allowed per client configuration)

`tenant:name_of_tenant` can be used to pass a tenant name to the token endpoint
{% endswagger-parameter %}

{% swagger-parameter in="body" name="refresh_token" %}
the refresh token (required for `refresh_token` grant type)
{% endswagger-parameter %}

{% swagger-parameter in="body" name="device_code" %}
the device code (required for `urn:ietf:params:oauth:grant-type:device_code` grant type)
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}

{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="" %}

{% endswagger-response %}
{% endswagger %}

{% hint style="info" %}
AuthServer supports a subset of the OpenID Connect and OAuth 2.0 token request parameters. For a full list, see [here](http://openid.net/specs/openid-connect-core-1\_0.html#TokenRequest).
{% endhint %}

Example:

```
POST /connect/token
CONTENT-TYPE application/x-www-form-urlencoded

    client_id=client1&
    client_secret=secret&
    grant_type=authorization_code&
    code=hdh922&
    redirect_uri=https://myapp.com/callback
```

In the case of wrong request it returns the problem

```
{
    "error": "invalid_client"
}
```

(Form-encoding removed and line breaks added for readability)

{% hint style="info" %}
You can use the [IdentityModel](https://github.com/IdentityModel/IdentityModel) client library to programmatically access the token endpoint from .NET code. For more information check the IdentityModel [docs](https://identitymodel.readthedocs.io/en/latest/client/token.html).
{% endhint %}

**UserInfo Endpoint**

{% swagger method="get" path="" baseUrl="/connect/userinfo" summary="UserInfo Endpoint" %}
{% swagger-description %}
The UserInfo endpoint can be used to retrieve identity information about a user (see [spec](http://openid.net/specs/openid-connect-core-1\_0.html#UserInfo)).

The caller needs to send a valid access token representing the user. Depending on the granted scopes, the UserInfo endpoint will return the mapped claims (at least the _openid_ scope is required).
{% endswagger-description %}

{% swagger-response status="200: OK" description="" %}

{% endswagger-response %}
{% endswagger %}

Example:

```
GET /connect/userinfo
Authorization: Bearer <access_token>
```

```
HTTP/1.1 200 OK
Content-Type: application/json

{
    "sub": "248289761001",
    "name": "Bob Smith",
    "given_name": "Bob",
    "family_name": "Smith",
    "role": [
        "user",
        "admin"
    ]
}
```

{% hint style="info" %}
You can use the [IdentityModel](https://github.com/IdentityModel/IdentityModel2) client library to programmatically access the userinfo endpoint from .NET code. For more information check the IdentityModel [docs](https://identitymodel.readthedocs.io/en/latest/client/userinfo.html).
{% endhint %}

**Introspection Endpoint**

{% swagger method="post" path="" baseUrl="/connect/introspect" summary="Introspection Endpoint" %}
{% swagger-description %}
The introspection endpoint is an implementation of [RFC 7662](https://tools.ietf.org/html/rfc7662).

It can be used to validate reference tokens (or JWTs if the consumer does not have support for appropriate JWT or cryptographic libraries). The introspection endpoint requires authentication - since the client of an introspection endpoint is an API, you configure the secret on the `ApiResource`.
{% endswagger-description %}

{% swagger-response status="200: OK" description="A successful response will return a status code of 200 and either an active or inactive token" %}

{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="An invalid request" %}

{% endswagger-response %}

{% swagger-response status="401: Unauthorized" description="An unauthorized request" %}

{% endswagger-response %}
{% endswagger %}

Example:

```
POST /connect/introspect
Authorization: Basic xxxyyy

token=<token>
```

A successful response will return a status code of 200 and either an active or inactive token:

```
{
    "active": true,
    "sub": "123"
}
```

Unknown or expired tokens will be marked as inactive:

```
{
    "active": false,
}
```

An invalid request will return a 400, an unauthorized request 401.

{% hint style="info" %}
You can use the [IdentityModel](https://github.com/IdentityModel/IdentityModel2) client library to programmatically access the introspection endpoint from .NET code. For more information check the IdentityModel [docs](https://identitymodel.readthedocs.io/en/latest/client/introspection.html).
{% endhint %}

**Revocation Endpoint**

{% swagger method="post" path="" baseUrl="/connect/revocation" summary="Revocation Endpoint" %}
{% swagger-description %}
This endpoint allows revoking access tokens (reference tokens only) and refresh token. It implements the token revocation specification [(RFC 7009)](https://tools.ietf.org/html/rfc7009).
{% endswagger-description %}

{% swagger-parameter in="body" name="token" required="true" %}
the token to revoke
{% endswagger-parameter %}

{% swagger-parameter in="body" name="token_type_hint" %}
either `access_token` or `refresh_token`
{% endswagger-parameter %}
{% endswagger %}

Example:

```
POST /connect/revocation HTTP/1.1
Host: server.example.com
Content-Type: application/x-www-form-urlencoded
Authorization: Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW

token=45ghiukldjahdnhzdauz&token_type_hint=refresh_token
```

{% hint style="info" %}
You can use the [IdentityModel](https://github.com/IdentityModel/IdentityModel2) client library to programmatically access the revocation endpoint from .NET code. For more information check the IdentityModel [docs](https://identitymodel.readthedocs.io/en/latest/client/revocation.html).
{% endhint %}

**End Session Endpoint**

{% hint style="info" %}
The URL for the end session endpoint is available via the [discovery endpoint](./#discovery-endpoint).
{% endhint %}

{% swagger method="get" path="" baseUrl="/connect/endsession" summary="End Session Endpoint" %}
{% swagger-description %}
The end session endpoint can be used to trigger single sign-out (see [spec](https://openid.net/specs/openid-connect-rpinitiated-1\_0.html)).

To use the end session endpoint a client application will redirect the user’s browser to the end session URL. All applications that the user has logged into via the browser during the user’s session can participate in the sign-out.
{% endswagger-description %}

{% swagger-parameter in="query" name="id_token_hint" %}
When the user is redirected to the endpoint, they will be prompted if they really want to sign-out. This prompt can be bypassed by a client sending the original _id\_token_ received from authentication. This is passed as a query string parameter called `id_token_hint`.
{% endswagger-parameter %}

{% swagger-parameter in="query" name="post_logout_redirect_uri" %}
If a valid `id_token_hint` is passed, then the client may also send a `post_logout_redirect_uri` parameter. This can be used to allow the user to redirect back to the client after sign-out. The value must match one of the client’s pre-configured _PostLogoutRedirectUris._
{% endswagger-parameter %}

{% swagger-parameter in="query" name="state" %}
If a valid `post_logout_redirect_uri` is passed, then the client may also send a `state` parameter. This will be returned back to the client as a query string parameter after the user redirects back to the client. This is typically used by clients to round-trip state across the redirect.
{% endswagger-parameter %}

{% swagger-response status="302: Found" description="" %}

{% endswagger-response %}
{% endswagger %}

Example:

```
GET /connect/endsession?id_token_hint=eyJhbGciOiJSUzI1NiIsImtpZCI6IjdlOGFkZmMzMjU1OTEyNzI0ZDY4NWZmYmIwOThjNDEyIiwidHlwIjoiSldUIn0.eyJuYmYiOjE0OTE3NjUzMjEsImV4cCI6MTQ5MTc2NTYyMSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwIiwiYXVkIjoianNfb2lkYyIsIm5vbmNlIjoiYTQwNGFjN2NjYWEwNGFmNzkzNmJjYTkyNTJkYTRhODUiLCJpYXQiOjE0OTE3NjUzMjEsInNpZCI6IjI2YTYzNWVmOTQ2ZjRiZGU3ZWUzMzQ2ZjFmMWY1NTZjIiwic3ViIjoiODg0MjExMTMiLCJhdXRoX3RpbWUiOjE0OTE3NjUzMTksImlkcCI6ImxvY2FsIiwiYW1yIjpbInB3ZCJdfQ.STzOWoeVYMtZdRAeRT95cMYEmClixWkmGwVH2Yyiks9BETotbSZiSfgE5kRh72kghN78N3-RgCTUmM2edB3bZx4H5ut3wWsBnZtQ2JLfhTwJAjaLE9Ykt68ovNJySbm8hjZhHzPWKh55jzshivQvTX0GdtlbcDoEA1oNONxHkpDIcr3pRoGi6YveEAFsGOeSQwzT76aId-rAALhFPkyKnVc-uB8IHtGNSyRWLFhwVqAdS3fRNO7iIs5hYRxeFSU7a5ZuUqZ6RRi-bcDhI-djKO5uAwiyhfpbpYcaY_TxXWoCmq8N8uAw9zqFsQUwcXymfOAi2UF3eFZt02hBu-shKA&post_logout_redirect_uri=http%3A%2F%2Flocalhost%3A7017%2Findex.html
```

{% hint style="info" %}
You can use the [IdentityModel](https://github.com/IdentityModel/IdentityModel2) client library to programmatically create end\_session requests .NET code. For more information check the IdentityModel [docs](https://identitymodel.readthedocs.io/en/latest/client/end\_session.html).
{% endhint %}

## Specific endpoints

Refer to the [Auth Server Swagger](https://auth.coreledger.net/swagger)



## Rate limits

When developing integration with TEOS Authentication service you should take into account the limits described in [rate-limits.md](../../overview/rate-limits.md "mention") of TEOS API. Those limits are defined per tenant and shared by all TEOS Platform components.

