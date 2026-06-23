---
description: Welcome to the WLP API documentation. This API follows the OData protocol.
---

# WLP API documentation

**Introduction**

The latest Swagger documentation is available at [this URL](https://wlp-dev2.dev.coreledger.net/api/swagger).

### Versioning

The API uses an `api-version` query parameter to specify the version of the request. If no version is specified, the API defaults to the latest available version, which is currently **1.3**.

#### Example:

*   Explicit versioning:

    ```http
    GET /odata/Orders?api-version=1.3
    ```
*   Using the default version:

    ```http
    GET /odata/Orders
    ```

    Since no `api-version` parameter is provided, the API will assume version **1.3** by default.

### Paging

The majority of endpoints have a limit of 100 rows per response. Except for the following endpoints:

* `odata/Currencies`
* `odata/Languages`
* `odata/Countries`

### Endpoints

**General Structure**

Each endpoint follows OData conventions, enabling filtering, sorting, and expanding related entities.

#### Example Endpoints

**List Orders**

```http
GET /odata/Orders?api-version=1.3
```

**Fetch a Single Order**

```http
GET /odata/Orders(1)?api-version=1.3
```

### Best Practices

**Efficient Data Retrieval**

To optimize performance:

* Use `$select` to specify only the required properties.
* Apply `$filter` to reduce the dataset size.
* Use `$top` and `$skip` for paging, adhering to the 100-row limit.
* Avoid `$expand` unless necessary, as it can impact performance.

**Example:**

```http
GET /odata/Orders?$select=Id,Name&$filter=CreatedOn gt '2024-01-01'&api-version=1.3
```

#### Paging Implementation

**Example:**

```http
GET /odata/Orders?$top=100&$skip=200&api-version=1.3
```
