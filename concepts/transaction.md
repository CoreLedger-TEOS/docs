# Transaction

Each record to a blockchain (whether it is an [asset creation](asset.md), one of the [spark operations](spark.md#spark-operations), [supply creation and update](supply.md) or [warp execution](warp.md)) is a blockchain transaction. The data is entered into the blockchain in intervals known as blocks. Each block is time stamped and its order and transactions are verified.

### Transaction types available in TEOS platform:

| Id | Transaction        |
| -- | ------------------ |
| 1  | Activate asset     |
| 2  | Create sparks      |
| 3  | Destroy sparks     |
| 4  | Transfer sparks    |
| 10 | Run trade          |
| 38 | Add asset link     |
| 39 | Delete asset link  |
| 43 | Add asset links    |
| 44 | Delete asset links |

### Transaction states

| State                 | Description                                                                                                                                                                                                                                                                               |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Received              | Transaction is created with the state Received, at this moment it is not written to blockchain yet, it has only TxId provided by TxServer                                                                                                                                                 |
| Submitted             | Transaction is Submitted when it was signed with the private key and submitted to TxServer                                                                                                                                                                                                |
| Revoked by user       | Transaction can be rejected by its initiator instead of signing then transaction gets state Revoked by user                                                                                                                                                                               |
| Revoked by TxServer   | Transaction can be rejected y TxServer when submitting or committing due to some reasons. For example, if some business checks failed (signing address doesn't have enough sparks to transfer) or signing address doesn't have enough ETH necessary for writing transaction to blockchain |
| Committed             | Transaction is Committed when it passed all checks performed by TxServer and was successfully written to blockchain according to blockchain api response                                                                                                                                  |
| Revoked by Blockchain | Transaction can be rejected by blockchain when TxServer trying to make a record to blockchain                                                                                                                                                                                             |
| Confirmed             | Transaction is Confirmed when TxServer has successfully read the transaction from blockchain after some blocks have passed to make sure it was written                                                                                                                                    |
