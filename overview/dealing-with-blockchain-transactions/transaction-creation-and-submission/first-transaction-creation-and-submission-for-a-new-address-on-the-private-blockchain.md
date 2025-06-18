---
description: >-
  How to build the flow for the first transaction submission for a new address
  registered in TEOS API
---

# First transaction creation and submission for a new address on the private blockchain

Ether is distributed via transfer transactions, so it takes some time. Sending Ether to a new address is triggered only when this address is used as a source of a transaction, so you need to wait until Ether is received in order to submit the transaction signed by this address successfully. In case the address doesn't have enough Ether, the transaction will be revoked by the blockchain because of the lack of gas.

#### Flow for creating and singing transactions first time for a new address

1. Post a Transaction (For example "Asset Creation")\
   The TEOS API consumer needs to wait until Ether sending transaction is confirmed. Usually, it takes up to one minute on SparkNet/DevilNet (with a maximum of 3 minutes). If after three minutes the address is not topped-up with the Ether, please, contact support@coreledger.net. To check the Eth balance of an address the ["GET /Balances/GetEthBalances"](../../../reference/) function can be used.
2. Sign the Transaction
3. Submit the Transaction\
   If the user tries to submit a transaction without having an Eth on the signing address, the validation error will be shown with an error Code=23000 and Subcode=20003 and a Message: "Insufficient funds for the transaction." In the case of such an error submission should be retried after the period, described in point 1, or after making sure that the address has enough Ether for signing.
