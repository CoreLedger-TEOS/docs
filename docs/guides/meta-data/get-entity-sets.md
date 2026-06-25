# Get Entity Sets

This API method returns a list of all **available entity sets** in the OData service. An **entity set** is a collection of entities (similar to a table in a database) that the service exposes. Each entity set corresponds to a type of data you can query, such as users, assets, or transactions.

This method provides the **service document**, which is a top-level overview of the service. It allows clients to discover what entity sets are available without needing to query each one individually. In OData terminology, this is part of the **metadata** that describes the structure of the service, including the types of entities and their relationships.

📘 [Learn more](./index.md) about meta data.

#### **Parameters:**

None

#### **Notes:**

* The response does not include the data itself, only the list of entity sets.
* This method is useful for dynamically exploring the service and understanding its structure before performing queries on specific entity sets.
* It provides the first step in accessing the **queryable metadata** of the OData service, which can be further inspected to learn about entity types, properties, and relationships.

#### **Responses:**

| Code | Description |
| ---- | ----------- |
| 200  | OK          |
