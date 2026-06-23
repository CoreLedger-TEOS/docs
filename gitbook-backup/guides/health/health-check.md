# Health Check

This endpoint is used to verify the availability and health of the TEOS API, as well as to confirm the validity of API keys.\
It performs no business logic and returns an empty successful response if the service is operational.

#### **Request Endpoint**

```http
GET /odata/v1.0/Ping
```

#### **Description**

* This method can be called to ensure that the TEOS API is online and responsive.
* It is also used to check whether the provided API key or authorization token is valid.
* The endpoint does not require any parameters or body payload.

#### **Usage**

**Typical use cases:**

* Automated health checks (e.g., by monitoring systems).
* Pre-flight validation of connectivity and credentials before sending other API requests

#### **Parameters**

None.

#### **Responses**

| **Code** | **Description**                                                                  |
| -------- | -------------------------------------------------------------------------------- |
| 200      | OK. The TEOS API is healthy, and the API key (if provided) is valid.             |
| 401      | Unauthorized. The provided API key or authorization token is missing or invalid. |

\
.
