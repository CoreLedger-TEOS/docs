// Migrated from GitBook and manually normalized for Docusaurus.
// Do not regenerate with convert:gitbook without reapplying the product sidebar hierarchy.

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  "docsSidebar": [
    {
      "type": "category",
      "label": "TEOS API",
      "collapsed": false,
      "items": [
        {
          "type": "doc",
          "id": "index",
          "label": "👋 Welcome to TEOS API"
        },
        {
          "type": "category",
          "label": "Get started",
          "items": [
            {
              "type": "doc",
              "id": "get-started/quickstart-guide",
              "label": "🚀 Quickstart Guide"
            },
            {
              "type": "doc",
              "id": "get-started/authentication-types",
              "label": "Authentication Types"
            }
          ],
          "collapsed": true,
          "link": {
            "type": "doc",
            "id": "get-started/index"
          }
        },
        {
          "type": "category",
          "label": "Guides",
          "items": [
            {
              "type": "category",
              "label": "Assets",
              "items": [
                {
                  "type": "doc",
                  "id": "guides/assets/create-an-asset",
                  "label": "Create an asset"
                },
                {
                  "type": "doc",
                  "id": "guides/assets/retrieve-assets",
                  "label": "Retrieve assets"
                },
                {
                  "type": "doc",
                  "id": "guides/assets/retrieve-an-asset-by-unique-asset-id",
                  "label": "Retrieve an asset by unique asset Id"
                },
                {
                  "type": "doc",
                  "id": "guides/assets/create-units-for-an-asset",
                  "label": "Create units for an asset"
                },
                {
                  "type": "doc",
                  "id": "guides/assets/destroy-asset-units",
                  "label": "Destroy asset units"
                },
                {
                  "type": "doc",
                  "id": "guides/assets/retrieve-asset-documentdb-record",
                  "label": "Retrieve asset DocumentDb record"
                },
                {
                  "type": "doc",
                  "id": "guides/assets/retrieve-linked-assets",
                  "label": "Retrieve linked assets"
                },
                {
                  "type": "doc",
                  "id": "guides/assets/get-asset-meta-data",
                  "label": "Get asset meta data"
                },
                {
                  "type": "doc",
                  "id": "guides/assets/remove-asset-controller",
                  "label": "Remove asset controller"
                },
                {
                  "type": "doc",
                  "id": "guides/assets/set-asset-controller",
                  "label": "Set asset controller"
                },
                {
                  "type": "doc",
                  "id": "guides/assets/get-total-amount-of-an-asset",
                  "label": "Get total amount of an asset"
                },
                {
                  "type": "doc",
                  "id": "guides/assets/transfer-units-of-an-asset",
                  "label": "Transfer units of an asset"
                },
                {
                  "type": "doc",
                  "id": "guides/assets/unlink-assets",
                  "label": "Unlink assets"
                }
              ],
              "collapsed": true,
              "link": {
                "type": "doc",
                "id": "guides/assets/index"
              }
            },
            {
              "type": "category",
              "label": "Attributes",
              "items": [
                {
                  "type": "doc",
                  "id": "guides/attributes/get-asset-classes",
                  "label": "Get asset classes"
                },
                {
                  "type": "doc",
                  "id": "guides/attributes/get-a-single-asset-class",
                  "label": "Get a single asset class"
                },
                {
                  "type": "doc",
                  "id": "guides/attributes/get-asset-detail-classes",
                  "label": "Get asset detail classes"
                },
                {
                  "type": "doc",
                  "id": "guides/attributes/get-a-single-asset-detail-class",
                  "label": "Get a single asset detail class"
                },
                {
                  "type": "doc",
                  "id": "guides/attributes/get-countries",
                  "label": "Get countries"
                },
                {
                  "type": "doc",
                  "id": "guides/attributes/get-a-single-country",
                  "label": "Get a single country"
                },
                {
                  "type": "doc",
                  "id": "guides/attributes/get-currencies",
                  "label": "Get currencies"
                },
                {
                  "type": "doc",
                  "id": "guides/attributes/get-a-single-currency",
                  "label": "Get a single currency"
                },
                {
                  "type": "doc",
                  "id": "guides/attributes/get-languages",
                  "label": "Get languages"
                },
                {
                  "type": "doc",
                  "id": "guides/attributes/get-a-single-language",
                  "label": "Get a single language"
                },
                {
                  "type": "doc",
                  "id": "guides/attributes/get-search-properties",
                  "label": "Get search properties"
                },
                {
                  "type": "doc",
                  "id": "guides/attributes/get-a-single-search-property",
                  "label": "Get a single search property"
                },
                {
                  "type": "doc",
                  "id": "guides/attributes/get-units",
                  "label": "Get units"
                }
              ],
              "collapsed": true,
              "link": {
                "type": "doc",
                "id": "guides/attributes/index"
              }
            },
            {
              "type": "category",
              "label": "Balances",
              "items": [
                {
                  "type": "doc",
                  "id": "guides/balances/get-asset-balance",
                  "label": "Get asset balance"
                },
                {
                  "type": "doc",
                  "id": "guides/balances/get-multiple-asset-balances",
                  "label": "Get multiple asset balances"
                },
                {
                  "type": "doc",
                  "id": "guides/balances/get-my-balances",
                  "label": "Get my balances"
                },
                {
                  "type": "doc",
                  "id": "guides/balances/get-eth-balances",
                  "label": "Get ETH balances"
                }
              ],
              "collapsed": true,
              "link": {
                "type": "doc",
                "id": "guides/balances/index"
              }
            },
            {
              "type": "category",
              "label": "Users",
              "items": [
                {
                  "type": "doc",
                  "id": "guides/users/delete-a-user",
                  "label": "Delete a user"
                }
              ],
              "collapsed": true,
              "link": {
                "type": "doc",
                "id": "guides/users/index"
              }
            },
            {
              "type": "category",
              "label": "Wallets",
              "items": [
                {
                  "type": "doc",
                  "id": "guides/wallets/create-a-wallet",
                  "label": "Create a wallet"
                },
                {
                  "type": "doc",
                  "id": "guides/wallets/retrieve-wallets",
                  "label": "Retrieve wallets"
                },
                {
                  "type": "doc",
                  "id": "guides/wallets/retrieve-a-wallet-by-id",
                  "label": "Retrieve a wallet by id"
                },
                {
                  "type": "doc",
                  "id": "guides/wallets/retrieve-a-current-user-wallets",
                  "label": "Retrieve a current user wallets"
                },
                {
                  "type": "doc",
                  "id": "guides/wallets/delete-a-wallet",
                  "label": "Delete a wallet"
                }
              ],
              "collapsed": true,
              "link": {
                "type": "doc",
                "id": "guides/wallets/index"
              }
            },
            {
              "type": "category",
              "label": "Invoices",
              "items": [
                {
                  "type": "doc",
                  "id": "guides/invoices/create-an-invoice",
                  "label": "Create an invoice"
                },
                {
                  "type": "doc",
                  "id": "guides/invoices/retrieve-invoices",
                  "label": "Retrieve invoices"
                },
                {
                  "type": "doc",
                  "id": "guides/invoices/retrieve-an-invoice-by-id",
                  "label": "Retrieve an invoice by id"
                },
                {
                  "type": "doc",
                  "id": "guides/invoices/pay-an-invoice-with-transfer",
                  "label": "Pay an invoice with transfer"
                },
                {
                  "type": "doc",
                  "id": "guides/invoices/pay-an-invoice-with-warp",
                  "label": "Pay an invoice with WARP"
                },
                {
                  "type": "doc",
                  "id": "guides/invoices/cancel-invoices",
                  "label": "Cancel invoices"
                }
              ],
              "collapsed": true,
              "link": {
                "type": "doc",
                "id": "guides/invoices/index"
              }
            },
            {
              "type": "category",
              "label": "Transactions",
              "items": [
                {
                  "type": "doc",
                  "id": "guides/transactions/submit-a-transaction",
                  "label": "Submit a transaction"
                },
                {
                  "type": "doc",
                  "id": "guides/transactions/get-current-user-transactions",
                  "label": "Get current user transactions"
                },
                {
                  "type": "doc",
                  "id": "guides/transactions/retrieve-transactions",
                  "label": "Retrieve transactions"
                },
                {
                  "type": "doc",
                  "id": "guides/transactions/retrieve-a-transaction-by-id",
                  "label": "Retrieve a transaction by Id"
                },
                {
                  "type": "doc",
                  "id": "guides/transactions/retrieve-signing-parameters-by-transaction-id",
                  "label": "Retrieve signing parameters by transaction Id"
                },
                {
                  "type": "doc",
                  "id": "guides/transactions/revoke-a-transaction",
                  "label": "Revoke a transaction"
                }
              ],
              "collapsed": true,
              "link": {
                "type": "doc",
                "id": "guides/transactions/index"
              }
            },
            {
              "type": "category",
              "label": "Spark operations",
              "items": [
                {
                  "type": "doc",
                  "id": "guides/spark-operations/spark-operations",
                  "label": "Spark operations"
                }
              ],
              "collapsed": true,
              "link": {
                "type": "doc",
                "id": "guides/spark-operations/index"
              }
            },
            {
              "type": "category",
              "label": "Supplies",
              "items": [
                {
                  "type": "doc",
                  "id": "guides/supplies/create-a-supply",
                  "label": "Create a supply"
                },
                {
                  "type": "doc",
                  "id": "guides/supplies/retrieve-supplies",
                  "label": "Retrieve supplies"
                },
                {
                  "type": "doc",
                  "id": "guides/supplies/retrieve-a-supply-by-id",
                  "label": "Retrieve a supply by id"
                },
                {
                  "type": "doc",
                  "id": "guides/supplies/change-a-supply-exchange-rate",
                  "label": "Change a supply exchange rate"
                },
                {
                  "type": "doc",
                  "id": "guides/supplies/extend-a-supply",
                  "label": "Extend a supply"
                },
                {
                  "type": "doc",
                  "id": "guides/supplies/restock-a-supply",
                  "label": "Restock a supply"
                },
                {
                  "type": "doc",
                  "id": "guides/supplies/delete-a-supply",
                  "label": "Delete a supply"
                }
              ],
              "collapsed": true,
              "link": {
                "type": "doc",
                "id": "guides/supplies/index"
              }
            },
            {
              "type": "category",
              "label": "Warp",
              "items": [
                {
                  "type": "doc",
                  "id": "guides/warp/warp-execution",
                  "label": "Warp Execution"
                },
                {
                  "type": "doc",
                  "id": "guides/warp/warp-search",
                  "label": "Warp Search"
                }
              ],
              "collapsed": true,
              "link": {
                "type": "doc",
                "id": "guides/warp/index"
              }
            },
            {
              "type": "category",
              "label": "Controllers",
              "items": [
                {
                  "type": "doc",
                  "id": "guides/controllers/create-a-controller",
                  "label": "Create a controller"
                },
                {
                  "type": "doc",
                  "id": "guides/controllers/add-an-existing-controller",
                  "label": "Add an existing controller"
                },
                {
                  "type": "doc",
                  "id": "guides/controllers/retrieve-controllers",
                  "label": "Retrieve controllers"
                },
                {
                  "type": "doc",
                  "id": "guides/controllers/retrieve-a-controller-by-id",
                  "label": "Retrieve a controller by id"
                },
                {
                  "type": "doc",
                  "id": "guides/controllers/update-a-controller",
                  "label": "Update a controller"
                },
                {
                  "type": "doc",
                  "id": "guides/controllers/update-a-controller-patch",
                  "label": "Update a controller (PATCH)"
                },
                {
                  "type": "doc",
                  "id": "guides/controllers/set-a-blacklist-addresses",
                  "label": "Set a blacklist addresses"
                },
                {
                  "type": "doc",
                  "id": "guides/controllers/remove-blacklist-addresses",
                  "label": "Remove blacklist addresses"
                },
                {
                  "type": "doc",
                  "id": "guides/controllers/set-a-whitelist-addresses",
                  "label": "Set a whitelist addresses"
                },
                {
                  "type": "doc",
                  "id": "guides/controllers/remove-whitelist-addresses",
                  "label": "Remove whitelist addresses"
                },
                {
                  "type": "doc",
                  "id": "guides/controllers/retrieve-my-controllers",
                  "label": "Retrieve my controllers"
                }
              ],
              "collapsed": true,
              "link": {
                "type": "doc",
                "id": "guides/controllers/index"
              }
            },
            {
              "type": "category",
              "label": "Settings",
              "items": [
                {
                  "type": "doc",
                  "id": "guides/settings/get-settings",
                  "label": "Get Settings"
                }
              ],
              "collapsed": true,
              "link": {
                "type": "doc",
                "id": "guides/settings/index"
              }
            },
            {
              "type": "category",
              "label": "Health",
              "items": [
                {
                  "type": "doc",
                  "id": "guides/health/health-check",
                  "label": "Health Check"
                }
              ],
              "collapsed": true,
              "link": {
                "type": "doc",
                "id": "guides/health/index"
              }
            },
            {
              "type": "category",
              "label": "Meta data",
              "items": [
                {
                  "type": "doc",
                  "id": "guides/meta-data/asset-metadata",
                  "label": "Asset Metadata"
                },
                {
                  "type": "doc",
                  "id": "guides/meta-data/get-entity-sets",
                  "label": "Get Entity Sets"
                }
              ],
              "collapsed": true,
              "link": {
                "type": "doc",
                "id": "guides/meta-data/index"
              }
            }
          ],
          "collapsed": true,
          "link": {
            "type": "doc",
            "id": "guides/index"
          }
        },
        {
          "type": "category",
          "label": "TEOS API references",
          "items": [
            {
              "type": "link",
              "label": "TEOS API Swagger (OpenAPI)",
              "href": "https://teosapi.coreledger.net/swagger/index.html"
            },
            {
              "type": "link",
              "label": "Postman examples",
              "href": "https://github.com/CoreLedger-TEOS/API"
            }
          ],
          "collapsed": true,
          "link": {
            "type": "doc",
            "id": "reference/index"
          }
        },
        {
          "type": "category",
          "label": "Using TEOS API",
          "items": [
            {
              "type": "doc",
              "id": "overview/rate-limits",
              "label": "Rate limits"
            },
            {
              "type": "category",
              "label": "Handling errors",
              "items": [
                {
                  "type": "doc",
                  "id": "overview/handling-errors/1xxxx-codes",
                  "label": "1xxxx codes"
                },
                {
                  "type": "doc",
                  "id": "overview/handling-errors/2xxxx-codes",
                  "label": "2xxxx codes"
                },
                {
                  "type": "doc",
                  "id": "overview/handling-errors/3xxxx-codes",
                  "label": "3xxxx codes"
                }
              ],
              "collapsed": true,
              "link": {
                "type": "doc",
                "id": "overview/handling-errors/index"
              }
            },
            {
              "type": "doc",
              "id": "overview/teos-events",
              "label": "TEOS Events"
            }
          ],
          "collapsed": true,
          "link": {
            "type": "doc",
            "id": "overview/index"
          }
        },
        {
          "type": "category",
          "label": "Resources",
          "items": [
            {
              "type": "category",
              "label": "TEOS API overview",
              "items": [
                {
                  "type": "category",
                  "label": "TEOS Platform terms and concepts",
                  "items": [
                    {
                      "type": "doc",
                      "id": "resources/using-the-teos-api/concepts/asset",
                      "label": "Asset"
                    },
                    {
                      "type": "doc",
                      "id": "resources/using-the-teos-api/concepts/attributes",
                      "label": "Attributes"
                    },
                    {
                      "type": "doc",
                      "id": "resources/using-the-teos-api/concepts/spark",
                      "label": "Spark and natural units of measure"
                    },
                    {
                      "type": "doc",
                      "id": "resources/using-the-teos-api/concepts/wallet",
                      "label": "Wallet"
                    },
                    {
                      "type": "doc",
                      "id": "resources/using-the-teos-api/concepts/supply",
                      "label": "Supply"
                    },
                    {
                      "type": "category",
                      "label": "Warp",
                      "items": [
                        {
                          "type": "doc",
                          "id": "resources/using-the-teos-api/concepts/warp/warp-search",
                          "label": "Warp search"
                        }
                      ],
                      "collapsed": true,
                      "link": {
                        "type": "doc",
                        "id": "resources/using-the-teos-api/concepts/warp/index"
                      }
                    },
                    {
                      "type": "doc",
                      "id": "resources/using-the-teos-api/concepts/invoice",
                      "label": "Invoice"
                    },
                    {
                      "type": "doc",
                      "id": "resources/using-the-teos-api/concepts/transaction",
                      "label": "Transaction"
                    },
                    {
                      "type": "doc",
                      "id": "resources/using-the-teos-api/concepts/controllers",
                      "label": "Controllers"
                    },
                    {
                      "type": "doc",
                      "id": "resources/using-the-teos-api/concepts/settings",
                      "label": "Settings"
                    }
                  ],
                  "collapsed": true,
                  "link": {
                    "type": "doc",
                    "id": "resources/using-the-teos-api/concepts/index"
                  }
                },
                {
                  "type": "category",
                  "label": "Architecture note",
                  "items": [
                    {
                      "type": "doc",
                      "id": "resources/using-the-teos-api/architecture-note/blockchain-networks",
                      "label": "Blockchain networks"
                    }
                  ],
                  "collapsed": true,
                  "link": {
                    "type": "doc",
                    "id": "resources/using-the-teos-api/architecture-note/index"
                  }
                }
              ],
              "collapsed": true,
              "link": {
                "type": "doc",
                "id": "resources/using-the-teos-api/index"
              }
            },
            {
              "type": "category",
              "label": "Using additional APIs of TEOS Platform",
              "items": [
                {
                  "type": "doc",
                  "id": "resources/using-additional-apis-of-teos-platform/user-authentication-flow-with-teos-authentication-service-and-tms",
                  "label": "User authentication flow with TEOS Authentication service and TMS"
                },
                {
                  "type": "doc",
                  "id": "resources/using-additional-apis-of-teos-platform/device-authorization-flow-with-txserver-and-teos-authentication-service",
                  "label": "Device authorization flow with TxServer and TEOS Authentication service"
                },
                {
                  "type": "doc",
                  "id": "resources/using-additional-apis-of-teos-platform/adding-wallet-to-the-teos-platform-flow-with-txserver-and-teos-api",
                  "label": "Adding wallet to the TEOS Platform flow with TxServer and TEOS API"
                },
                {
                  "type": "category",
                  "label": "Using TxServer API",
                  "items": [
                    {
                      "type": "link",
                      "label": "TxServer API (OpenAPI)",
                      "href": "https://txapi.coreledger.net/swagger"
                    },
                    {
                      "type": "doc",
                      "id": "resources/using-additional-apis-of-teos-platform/using-txserver-api/key-pair-generation.-transaction-signing",
                      "label": "Key Pair Generation. Transaction Signing"
                    },
                    {
                      "type": "doc",
                      "id": "resources/using-additional-apis-of-teos-platform/using-txserver-api/device-restoration",
                      "label": "Device Restoration"
                    }
                  ],
                  "collapsed": true,
                  "link": {
                    "type": "doc",
                    "id": "resources/using-additional-apis-of-teos-platform/using-txserver-api/index"
                  }
                },
                {
                  "type": "category",
                  "label": "Using TEOS Authentication service",
                  "items": [
                    {
                      "type": "link",
                      "label": "TEOS Authentication Service API",
                      "href": "https://auth.coreledger.net/swagger"
                    }
                  ],
                  "collapsed": true,
                  "link": {
                    "type": "doc",
                    "id": "resources/using-additional-apis-of-teos-platform/using-teos-authentication-service/index"
                  }
                },
                {
                  "type": "category",
                  "label": "Using TMS API",
                  "items": [
                    {
                      "type": "link",
                      "label": "TMS API Swagger (OpenAPI)",
                      "href": "https://tms.coreledger.net/swagger/index.html"
                    },
                    {
                      "type": "doc",
                      "id": "resources/using-additional-apis-of-teos-platform/using-tms-api/handling-errors",
                      "label": "Handling errors"
                    },
                    {
                      "type": "doc",
                      "id": "resources/using-additional-apis-of-teos-platform/using-tms-api/changelog",
                      "label": "Changelog"
                    }
                  ],
                  "collapsed": true,
                  "link": {
                    "type": "doc",
                    "id": "resources/using-additional-apis-of-teos-platform/using-tms-api/index"
                  }
                },
                {
                  "type": "doc",
                  "id": "resources/using-additional-apis-of-teos-platform/using-discovery-service",
                  "label": "Using Discovery Service"
                }
              ],
              "collapsed": true,
              "link": {
                "type": "doc",
                "id": "resources/using-additional-apis-of-teos-platform/index"
              }
            },
            {
              "type": "category",
              "label": "Dealing with blockchain transactions",
              "items": [
                {
                  "type": "doc",
                  "id": "resources/dealing-with-blockchain-transactions/how-to-get-ether-for-signing-transactions",
                  "label": "How to get gas for signing transactions"
                },
                {
                  "type": "category",
                  "label": "Transaction creation and submission",
                  "items": [
                    {
                      "type": "doc",
                      "id": "resources/dealing-with-blockchain-transactions/transaction-creation-and-submission/first-transaction-creation-and-submission-for-a-new-address-on-the-private-blockchain",
                      "label": "First transaction creation and submission for a new address on the private blockchain"
                    }
                  ],
                  "collapsed": true,
                  "link": {
                    "type": "doc",
                    "id": "resources/dealing-with-blockchain-transactions/transaction-creation-and-submission/index"
                  }
                }
              ],
              "collapsed": true,
              "link": {
                "type": "doc",
                "id": "resources/dealing-with-blockchain-transactions/index"
              }
            }
          ],
          "collapsed": true,
          "link": {
            "type": "doc",
            "id": "resources/index"
          }
        },
        {
          "type": "category",
          "label": "Changelog",
          "items": [
            {
              "type": "doc",
              "id": "changelog/versioning",
              "label": "Versioning"
            },
            {
              "type": "doc",
              "id": "changelog/v1.0",
              "label": "v1.1"
            },
            {
              "type": "doc",
              "id": "changelog/v1.0-1",
              "label": "v1.0"
            },
            {
              "type": "doc",
              "id": "changelog/v0.9",
              "label": "v0.9"
            },
            {
              "type": "doc",
              "id": "changelog/non-versioned-changes",
              "label": "Non-versioned changes"
            },
            {
              "type": "doc",
              "id": "changelog/v0.3",
              "label": "Previous versions (not supported)"
            }
          ],
          "collapsed": true,
          "link": {
            "type": "doc",
            "id": "changelog/index"
          }
        },
        {
          "type": "doc",
          "id": "troubleshooting",
          "label": "Troubleshooting"
        }
      ]
    },
    {
      "type": "category",
      "label": "White Label Management Tool",
      "collapsed": true,
      "link": {
        "type": "doc",
        "id": "white-label-management-tool"
      },
      "items": [
        {
          "type": "category",
          "label": "Where to start",
          "collapsed": true,
          "link": {
            "type": "doc",
            "id": "where-to-start/index"
          },
          "items": [
            {
              "type": "doc",
              "id": "where-to-start/step-1-create-teos-account"
            },
            {
              "type": "doc",
              "id": "where-to-start/step-2-register-profile-in-wlm"
            },
            {
              "type": "doc",
              "id": "where-to-start/step-3-install-and-register-in-tx.mobile"
            },
            {
              "type": "doc",
              "id": "where-to-start/step-4-setup-a-wallet-wlm-+-tx.mobile"
            },
            {
              "type": "doc",
              "id": "where-to-start/step-5-start-using-wlm"
            }
          ]
        },
        {
          "type": "category",
          "label": "WLM versions and changelog",
          "collapsed": true,
          "link": {
            "type": "doc",
            "id": "wlm-versions-and-changelog/index"
          },
          "items": [
            {
              "type": "doc",
              "id": "wlm-versions-and-changelog/fox"
            },
            {
              "type": "doc",
              "id": "wlm-versions-and-changelog/fox-service-packs"
            },
            {
              "type": "doc",
              "id": "wlm-versions-and-changelog/gecko"
            },
            {
              "type": "doc",
              "id": "wlm-versions-and-changelog/estrella-service-packs"
            },
            {
              "type": "doc",
              "id": "wlm-versions-and-changelog/estrella"
            },
            {
              "type": "doc",
              "id": "wlm-versions-and-changelog/previous-versions-changelog"
            }
          ]
        },
        {
          "type": "category",
          "label": "Admin user guide",
          "collapsed": true,
          "link": {
            "type": "doc",
            "id": "admin-user-guide/index"
          },
          "items": [
            {
              "type": "category",
              "label": "WLM configuration",
              "collapsed": true,
              "link": {
                "type": "doc",
                "id": "admin-user-guide/wlm-configuration/index"
              },
              "items": [
                {
                  "type": "doc",
                  "id": "admin-user-guide/wlm-configuration/branding-management"
                },
                {
                  "type": "doc",
                  "id": "admin-user-guide/wlm-configuration/templates-management"
                },
                {
                  "type": "doc",
                  "id": "admin-user-guide/wlm-configuration/constraints-management"
                }
              ]
            },
            {
              "type": "doc",
              "id": "admin-user-guide/teos-platform-preparation"
            },
            {
              "type": "doc",
              "id": "admin-user-guide/user-management"
            },
            {
              "type": "doc",
              "id": "admin-user-guide/referral-management"
            },
            {
              "type": "doc",
              "id": "admin-user-guide/role-management"
            },
            {
              "type": "doc",
              "id": "admin-user-guide/how-to-transfer-tokens-to-the-external-wallet"
            }
          ]
        },
        {
          "type": "category",
          "label": "User guide",
          "collapsed": true,
          "link": {
            "type": "doc",
            "id": "user-guide/index"
          },
          "items": [
            {
              "type": "doc",
              "id": "user-guide/create-asset"
            },
            {
              "type": "category",
              "label": "Manage asset (asset details, asset operations)",
              "collapsed": true,
              "link": {
                "type": "doc",
                "id": "user-guide/manage-asset-asset-details-asset-operations/index"
              },
              "items": [
                {
                  "type": "doc",
                  "id": "user-guide/manage-asset-asset-details-asset-operations/create-units"
                },
                {
                  "type": "doc",
                  "id": "user-guide/manage-asset-asset-details-asset-operations/transfer-units"
                },
                {
                  "type": "doc",
                  "id": "user-guide/manage-asset-asset-details-asset-operations/destroy-units"
                },
                {
                  "type": "doc",
                  "id": "user-guide/manage-asset-asset-details-asset-operations/amend-asset-edit-translations"
                },
                {
                  "type": "doc",
                  "id": "user-guide/manage-asset-asset-details-asset-operations/link-assets"
                },
                {
                  "type": "doc",
                  "id": "user-guide/manage-asset-asset-details-asset-operations/ft-and-nft-contracts"
                }
              ]
            },
            {
              "type": "doc",
              "id": "user-guide/search-buy-sell-asset"
            },
            {
              "type": "doc",
              "id": "user-guide/sign-and-check-executed-transactions"
            },
            {
              "type": "category",
              "label": "Wallet management in WLM + TX.Mobile",
              "collapsed": true,
              "link": {
                "type": "doc",
                "id": "user-guide/wallet-management-in-wlm-+-tx.mobile/index"
              },
              "items": [
                {
                  "type": "doc",
                  "id": "user-guide/wallet-management-in-wlm-+-tx.mobile/add-external-wallets-tx.mobile"
                },
                {
                  "type": "doc",
                  "id": "user-guide/wallet-management-in-wlm-+-tx.mobile/restore-data-from-your-another-device-tx.mobile"
                }
              ]
            },
            {
              "type": "doc",
              "id": "user-guide/controller-management"
            },
            {
              "type": "doc",
              "id": "user-guide/additional-settings-management"
            },
            {
              "type": "doc",
              "id": "user-guide/supply-management"
            },
            {
              "type": "doc",
              "id": "user-guide/profile-settings"
            },
            {
              "type": "doc",
              "id": "user-guide/support"
            }
          ]
        },
        {
          "type": "doc",
          "id": "trooubleshooting",
          "label": "⁉️ Trooubleshooting"
        },
        {
          "type": "doc",
          "id": "glossary",
          "label": "Glossary"
        }
      ]
    },
    {
      "type": "category",
      "label": "White Label Portal",
      "collapsed": true,
      "link": {
        "type": "doc",
        "id": "white-label-portal"
      },
      "items": [
        {
          "type": "category",
          "label": "Admin user guide",
          "collapsed": true,
          "items": [
            {
              "type": "doc",
              "id": "admin-user-guide/admin-functionality"
            },
            {
              "type": "category",
              "label": "Portal configuration",
              "collapsed": true,
              "link": {
                "type": "doc",
                "id": "admin-user-guide/portal-configuration/index"
              },
              "items": [
                {
                  "type": "doc",
                  "id": "admin-user-guide/portal-configuration/tenant-configuration"
                },
                {
                  "type": "doc",
                  "id": "admin-user-guide/portal-configuration/branding-management"
                },
                {
                  "type": "doc",
                  "id": "admin-user-guide/portal-configuration/admin-users-management"
                },
                {
                  "type": "doc",
                  "id": "admin-user-guide/portal-configuration/asset-configuration"
                },
                {
                  "type": "category",
                  "label": "Features configuration",
                  "collapsed": true,
                  "link": {
                    "type": "doc",
                    "id": "admin-user-guide/portal-configuration/features-configuration/index"
                  },
                  "items": [
                    {
                      "type": "doc",
                      "id": "admin-user-guide/portal-configuration/features-configuration/kyc-checks"
                    },
                    {
                      "type": "category",
                      "label": "Purchase assets and featured asset",
                      "collapsed": true,
                      "link": {
                        "type": "doc",
                        "id": "admin-user-guide/portal-configuration/features-configuration/purchase-assets-and-featured-asset/index"
                      },
                      "items": [
                        {
                          "type": "doc",
                          "id": "admin-user-guide/portal-configuration/features-configuration/purchase-assets-and-featured-asset/payment-methods-configuration"
                        },
                        {
                          "type": "doc",
                          "id": "admin-user-guide/portal-configuration/features-configuration/purchase-assets-and-featured-asset/collection-methods-configuration"
                        },
                        {
                          "type": "doc",
                          "id": "admin-user-guide/portal-configuration/features-configuration/purchase-assets-and-featured-asset/templates-for-purchase-details-and-invoice-details"
                        }
                      ]
                    },
                    {
                      "type": "category",
                      "label": "Redemption functionality",
                      "collapsed": true,
                      "link": {
                        "type": "doc",
                        "id": "admin-user-guide/portal-configuration/features-configuration/redemption-functionality/index"
                      },
                      "items": [
                        {
                          "type": "doc",
                          "id": "admin-user-guide/portal-configuration/features-configuration/redemption-functionality/template-for-redemption-details"
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "doc",
                  "id": "admin-user-guide/portal-configuration/how-to-get-api-keys-of-third-party-services"
                },
                {
                  "type": "doc",
                  "id": "admin-user-guide/portal-configuration/how-to-prepare-custom-html"
                },
                {
                  "type": "doc",
                  "id": "admin-user-guide/portal-configuration/reference-code-logic"
                }
              ]
            },
            {
              "type": "doc",
              "id": "admin-user-guide/referral-management"
            }
          ]
        },
        {
          "type": "doc",
          "id": "how-your-users-interact-with-the-portal"
        },
        {
          "type": "category",
          "label": "Partner Onboarding",
          "collapsed": true,
          "link": {
            "type": "doc",
            "id": "partner-onboarding/index"
          },
          "items": [
            {
              "type": "doc",
              "id": "partner-onboarding/coinify"
            },
            {
              "type": "doc",
              "id": "partner-onboarding/payrexx"
            },
            {
              "type": "doc",
              "id": "partner-onboarding/shufti"
            }
          ]
        },
        {
          "type": "category",
          "label": "WLP versions and changelog",
          "collapsed": true,
          "link": {
            "type": "doc",
            "id": "wlp-versions-and-changelog/index"
          },
          "items": [
            {
              "type": "doc",
              "id": "wlp-versions-and-changelog/version-1.3"
            },
            {
              "type": "doc",
              "id": "wlp-versions-and-changelog/version-1.2"
            },
            {
              "type": "doc",
              "id": "wlp-versions-and-changelog/version-1.1"
            },
            {
              "type": "doc",
              "id": "wlp-versions-and-changelog/version-1.0"
            },
            {
              "type": "doc",
              "id": "wlp-versions-and-changelog/version-0.18"
            },
            {
              "type": "doc",
              "id": "wlp-versions-and-changelog/version-0.17"
            },
            {
              "type": "doc",
              "id": "wlp-versions-and-changelog/version-0.16"
            },
            {
              "type": "doc",
              "id": "wlp-versions-and-changelog/earlier-versions"
            }
          ]
        },
        {
          "type": "doc",
          "id": "trooubleshooting",
          "label": "⁉️ Trooubleshooting"
        },
        {
          "type": "doc",
          "id": "glossary",
          "label": "Glossary"
        },
        {
          "type": "doc",
          "id": "wlp-api-documentation"
        }
      ]
    },
    {
      "type": "category",
      "label": "White Label Mobile App",
      "collapsed": true,
      "link": {
        "type": "doc",
        "id": "white-label-mobile-app"
      },
      "items": [
        {
          "type": "category",
          "label": "Admin user guide",
          "collapsed": true,
          "items": [
            {
              "type": "doc",
              "id": "admin-user-guide/wla-modules"
            },
            {
              "type": "doc",
              "id": "admin-user-guide/login-and-wallet-creation"
            },
            {
              "type": "category",
              "label": "App configuration",
              "collapsed": true,
              "link": {
                "type": "doc",
                "id": "admin-user-guide/app-configuration/index"
              },
              "items": [
                {
                  "type": "doc",
                  "id": "admin-user-guide/app-configuration/branding-management"
                },
                {
                  "type": "doc",
                  "id": "admin-user-guide/app-configuration/user-management"
                },
                {
                  "type": "doc",
                  "id": "admin-user-guide/app-configuration/asset-configuration"
                },
                {
                  "type": "doc",
                  "id": "admin-user-guide/app-configuration/decentralized-market-and-payment-request-configuration"
                },
                {
                  "type": "doc",
                  "id": "admin-user-guide/app-configuration/non-productive-functionality"
                },
                {
                  "type": "doc",
                  "id": "admin-user-guide/app-configuration/additional-configuration"
                }
              ]
            }
          ]
        },
        {
          "type": "category",
          "label": "How your users interact with WLA",
          "collapsed": true,
          "link": {
            "type": "doc",
            "id": "how-your-users-interact-with-wla/index"
          },
          "items": [
            {
              "type": "doc",
              "id": "how-your-users-interact-with-wla/assets-and-transactions"
            },
            {
              "type": "doc",
              "id": "how-your-users-interact-with-wla/market-functionality"
            },
            {
              "type": "doc",
              "id": "how-your-users-interact-with-wla/my-wallet"
            },
            {
              "type": "doc",
              "id": "how-your-users-interact-with-wla/payment-request-and-invoices"
            }
          ]
        },
        {
          "type": "category",
          "label": "WLA versions and changelog",
          "collapsed": true,
          "link": {
            "type": "doc",
            "id": "wla-versions-and-changelog/index"
          },
          "items": [
            {
              "type": "doc",
              "id": "wla-versions-and-changelog/version-0.23"
            },
            {
              "type": "doc",
              "id": "wla-versions-and-changelog/version-0.22"
            },
            {
              "type": "doc",
              "id": "wla-versions-and-changelog/version-0.21"
            },
            {
              "type": "doc",
              "id": "wla-versions-and-changelog/earlier-versions"
            }
          ]
        },
        {
          "type": "doc",
          "id": "trooubleshooting",
          "label": "⁉️ Trooubleshooting"
        },
        {
          "type": "doc",
          "id": "glossary",
          "label": "Glossary"
        }
      ]
    }
  ]
};

module.exports = sidebars;
