# Authentication Types

The TEOS API supports two authentication scenarios. Depending on your application setup, you can use API Key or User Access Token.

#### Option 1: API Key

Use this option if your system already has its own backend and authentication for end users.

Characteristics:

* Self-sufficient system with a server-side component.
* The backend communicates directly with TEOS API.
* End users are authenticated by your system.
* Operations in TEOS API are executed on behalf of a registered administrator in TEOS Platform.
* One or several administrators are registered to configure and maintain TEOS API processes.
* API Key is generated for the administrator.

![](/img/gitbook-assets/data-layers-page-2.drawio.svg)

#### Option 2: User Access Token

Use this option if your application does not have its own backend or authentication system.

Characteristics:

* Client application without server-side authentication.
* WLA-based application.
* TEOS Authentication service is used to authenticate end users.
* User account data is stored in TEOS Authentication service.
* Integration with TEOS Authentication service is required to use TEOS API flows.

![](/img/gitbook-assets/data-layers-option-with-api-key.drawio.svg)

#### Quick Comparison

| **Feature / Setup**                     | **API Key**                             | **User Access Token**               |
| --------------------------------------- | --------------------------------------- | ----------------------------------- |
| **Backend required**                    | Yes                                     | No                                  |
| **Who authenticates end users?**        | Your system                             | TEOS Authentication service         |
| **Who is registered in TEOS Platform?** | Administrator(s)                        | End users (via TEOS Authentication) |
| **Storage of user account data**        | Your system                             | TEOS Authentication service         |
| **When to use**                         | Full backend with custom authentication | WLA-based applications              |
