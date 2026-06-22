# Warp search

From client application perspective, warp search consists of two major steps: initiate a search, using http request, which returns the search identifier, and then subscribe to warp search results, using the provided search id. Details are provided below.

1.  Initiate a warp search.

    Warp search is initiated, using the corresponding endpoint (`/warps/search`). Please refer to [Developer Reference](https://teos-uat.dev.coreledger.net/swagger/index.html?urls.primaryName=TEOS%20Api%20v0.1) for details.
2.  Subscription to search results.

    Search results are returned as RabbitMQ events (Please refer to [this section](https://teos-docs.coreledger.net/using-the-teos-api/teos-events) for details about connection to RabbitMQ of TEOS Api).

    After receiving the search Id in the step 1, the client needs to subscribe to events from the queue named `"warps-{searchId}"` (`{searchId}` must be replaced by the actual identifier of the search, retrieved in step 1). TEOS Api guarantees, that the queue exists by the time of returning the response in step 1. The queue exists for 5 minutes.

There are two types of messages, that can arrive from the queue:

### WarpFound

Contains the details of the warp. Example of the message:

```json
{
  "Type": "WarpFound",
  "SearchId": "2fa2b214-93d4-4391-8071-c629e16cc5a4",
  "GrossProbabilityFactor": 0.95,
  "InputAssetId": "0827cb8534cfaba240cc90001",
  "InputAmount": "4",
  "OutputAssetId": "0c271bf2bec1796539ab20001",
  "OutputAmount": "1",
  "SupplyIds": [
    "0x827CB8534CFABA240CC90001C271BF2BEC1796539AB2000168E4D1DC000007C7"
  ],
  "EstimatedGasCost": "200386",
  "Length": 1,
  "MaxPossibleOutputAmount": "97",
  "DetailedSteps": [
    {
      "Supply": "0x827CB8534CFABA240CC90001C271BF2BEC1796539AB2000168E4D1DC000007C7",
      "IncomingAssetId": "0827cb8534cfaba240cc90001",
      "OutgoingAssetId": "0c271bf2bec1796539ab20001",
      "IncomingAmount": "4",
      "OutgoingAmount": "1",
      "RemainingSupplyAmount": "97",
      "MaximalPossibleAmount": "1",
      "SupplyExtRef": "0x68e4d1dc"
    }
  ],
  "RequestCharacteristic": "Ok",
  "ExchangeRate": {
    "Mantissa": "25",
    "Exponent": -2
  }
}
```

### WarpSearchSummary

Contains the summary of warp search. Please be aware that due to async nature of the warp search, this message does not necessarily arrive after all the result have arrived. The `FoundWarpCount` property shows, how many `WarpFound` messages must arrive within this search.

```json
{
  "Type": "WarpSearchSummary",
  "SearchId": "2fa2b214-93d4-4391-8071-c629e16cc5a4",
  "FoundWarpCount": 1
}
```
