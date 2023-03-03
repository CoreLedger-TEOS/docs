---
description: Data isolation for tenants, high-availability, interfaces
---

# Architecture note

TEOS platform architecture was designed in a way to address most development and IT operations concerns. Here you can find how we cover the most sensitive topics.

## Data isolation

TEOS platform has an architecture that ensures every customer and its project has data isolated to the required extent. One of the key concepts of TEOS platform architecture is a tenant.

{% hint style="info" %}
Tenant is a logical, uniquely identifiable grouping of information and settings in TEOS Platform related to the specific customer. Platform components are configured for every tenant specifically. One customer can have one or more tenants (for example, on different environments or on the same environment but for different business solutions).
{% endhint %}

There are several layers of logical data isolation for tenants which are represented in the picture.

<figure><img src="../../.gitbook/assets/CL_TEOS API_Arch note-Data layers.drawio.svg" alt=""><figcaption></figcaption></figure>

### Blockchain level <a href="#network-layer" id="network-layer"></a>

Every tenant is configured to be connected with the specific blockchain. TEOS platform is integrated with the list of blockchains, some of which are used mainly for development purposes (DevilNet). TEOS API consumers can decide with which blockchain to integrate when a tenant is being set up.

Data written to the blockchain is available for any blockchain reader. For example, in the picture tenants A and B have access to the data written to the Ethereum blockchain. Tenants C and D have access to the data written to the SparkNet blockchain. Though data can be encrypted and filtered on the application level.

Also, the TEOS Platform provides a possibility to use controllers which operate on the blockchain level and restrict specific operations with specific data types.

### Application level <a href="#application-layer" id="application-layer"></a>

All platform components have in-built authorization to get access to the tenant data.

TEOS platform has a multi-tenancy concept which means that several tenants are served by one set of components. Each tenant has its own logically isolated data storage on the application level, access to which is provided only for authorized components and users.

[Assets ](../concepts/asset.md)written to the blockchain contain a hash of all parameters which define the specific asset and which are available in the TEOS platform. Assets have special parameters which allow filtering data on the application level to limit access to the blockchain data for end users of TEOS API consumers.

### Environments <a href="#environments-and-nodes" id="environments-and-nodes"></a>

TEOS platform has a list of environments that have different purposes. We distinguish Production, Pilot and Development environments which have different sets of TEOS platform components with different SLAs and transaction costs.&#x20;

* Production - the environment for production-ready solutions, high SLAs, both private and public blockchains can be used
* Pilot - the environment is used normally for solutions at the MVP stage (stable and ready for investments raising but not production-ready), high SLAs, only private blockchain is available. [Active Sandbox](https://coreledger.net/active-sandbox/) solutions always run on Pilot
* Development - the environment for ongoing development, only private blockchain is available

Normally TEOS API consumers first create a tenant in the Development environment with test data to have a chance to develop their solution against it. As soon as the customer solution is ready enough, the tenant in the Production or Pilot environment is set up.

Please, note that all technical resources are strictly related to the environment in which they are used. For example, application credentials in the Development environment are unusable in the Production environment.

## High availability

TEOS Platform is designed in a way to make sure that all components are scalable and can meet overall SLAs.

All components of the application level in the Production and Pilot environments run on the cloud infrastructure. This allows using all essential features provided by cloud providers to make sure that the TEOS Platform runs according to customer expectations:

* available up to 99,9% of the time (dependent on the cloud platform SLAs and customer agreement)
* scales with the load
* is performant enough

To fulfill these expectations, the following measures are taken:

* usage of load balancing
* automated scaling of the component under the load
* health monitoring of each component instance
* throttling of requests, when the quota is reached (see [Rate Limits](../../overview/rate-limits.md))

All network communications are secured with SSL.&#x20;

## Interfaces

To integrate with TeosAPI the following interfaces should be utilized:

#### OData

OData (Open Data Protocol) is an [ISO/IEC-approved](https://www.oasis-open.org/news/pr/iso-iec-jtc-1-approves-oasis-odata-standard-for-open-data-exchange), [OASIS standard](https://www.oasis-open.org/committees/tc\_home.php?wg\_abbrev=odata) that defines a set of best practices for building and consuming RESTful APIs. More details can be found [here](../../reference/).

#### RabbitMQ

RabbitMQ is the widely deployed open-source message broker. It is used to deliver TEOS events. More details about its usage with the TEOS can be found [here](../../overview/teos-events.md#subscribing-to-events).

#### OpenApi

The OpenAPI Specification, previously known as the Swagger Specification, is a specification for a machine-readable interface definition language for describing, producing, consuming, and visualizing RESTful web services. The TEOS Api produces the OpenApi output to describe itself. The link to it can be found under [API Reference](../../reference/)
