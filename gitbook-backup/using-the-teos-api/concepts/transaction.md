# Transaction

Each data record written to the blockchain (whether it is an [asset creation](asset.md), one of the [spark operations](spark.md#spark-operations), [supply creation and update](supply.md) or [any other transaction type](transaction.md#transaction-types-available-in-teos-platform)) is a blockchain transaction. Writing data to the blockchain requires a valid signature to call functions of a smart contract. The data is entered into the blockchain in intervals known as blocks. Each block is time stamped and its order and transactions are verified.

It takes 5 steps to process each transaction in the TEOS Platform.

<figure><img src="../../.gitbook/assets/Untitled.drawio.svg" alt=""><figcaption><p>Optional calls and actions which can be omitted are marked with * sign</p></figcaption></figure>

#### 1) Transaction creation

The transaction is created for every action which requires data writing to the blockchain. Mind the difference: for example, retrieving the asset and its details involves only reading data from the blockchain, but creating a new asset requires writing to the blockchain. So, the transaction will be created only in the second case. Transaction creation is triggered when TEOS Platform receives the corresponding request from frontend or mobile apps (WLA, WLM, WLP, NOTRZR APP/WEB), third-party APIs (NOTRZR API) or via directly TEOS API call. Either way, the transaction parameters are passed to the TEOS Platform. The parameters must include the signer address (public address of the [wallet](wallet.md) that is going to sign the transaction).

#### 2) Transaction preparation for writing to the blockchain by the TEOS Platform

When TEOS API receives the request, it processes the request data and prepares the blockchain transaction which is ready for signing.

Parameters of the transaction including the TEOS Platform transaction id, which must be signed, are returned as the response of the corresponding TEOS API call.

Transaction parameters ready for signing can be retrieved later from the TEOS API or third party backend integrated with TEOS Platform (for example, Notardec API) using corresponding function by providing transaction id.

Or in case of direct integration with TxServer (TEOS Platform technical component responsible for the transactions processing) all transactions ready for singing can be retrieved from TxServer by authorized devices for signer address.

#### 3) Transaction signing

A device that holds the private key for the provided signer address receives the prepared transaction (by any mean described in the previous step). There can be many devices holding the same private key. The signature must be prepared using the private key.

[Signing transaction](https://ethereum.org/en/developers/docs/transactions/) is a process of creating signature using transaction data and private keys of the signing address. Signature can be prepared by any TEOS platform component with UI which has wallet and transaction management functionality (WLA, TX.Mobile), a tool for signing transactions automatically, a third party tool which has signing functionality (NOTRZR) and any TEOS API consumer which will introduce corresponding functionality. There are libraries and utilities which are available for widely used code languages, you can check the code of Autosigner, [auto signing utility in C# provided by CoreLedger](https://github.com/CoreLedger-TEOS/teos-autosigner), as an example (ask your CoreLedger manager for the access if you don't have one).

Depending on the use case and the signing software, various security checks may be applied before signing in order to determine the authenticity of the transaction and device owner.

#### 4) Transaction submission to the TEOS Platform

Transaction must be signed and submitted to the TEOS platform for further confirmation or rejecting. Transaction can be submitted to the TEOS API using corresponding endpoint, via third party API or directly to the TxServer in case of direct integration with the technical component responsible for the transactions processing.

#### 5) Transaction writing to the blockchain

The signed transaction is validated and sent to the blockchain by TEOS Platform technical component responsible for transaction processing.

The status of the transaction can be retrieved from TEOS Platform using corresponding functions of the TEOS API or third-party API and will change according to the status model described in [#transaction-states](transaction.md#transaction-states "mention").

{% hint style="info" %}
It is not necessary that the device which creates a transaction (1) and the device that signs a transaction (3) are one and the same device. They can be different devices authorized to use the specific wallet's private keys. Monitoring the transaction status after the submission (5) can be done by any TEOS Platform consumer authorized to retrieve tenant data.
{% endhint %}

{% hint style="success" %}
Check the detailed flow of creating and submitting transactions with TEOS API in [transaction-creation-and-submission](../../overview/dealing-with-blockchain-transactions/transaction-creation-and-submission/ "mention")
{% endhint %}

### Transaction types available in TEOS platform

<table><thead><tr><th width="163.14285714285717">TypeId</th><th>Transaction type</th></tr></thead><tbody><tr><td>1</td><td>Activate asset</td></tr><tr><td>2</td><td>Create sparks</td></tr><tr><td>3</td><td>Destroy sparks</td></tr><tr><td>4</td><td>Transfer sparks</td></tr><tr><td>5</td><td>Create supply</td></tr><tr><td>6</td><td>Delete supply</td></tr><tr><td>7</td><td>Restock supply</td></tr><tr><td>8</td><td>Change exchange rate of a supply</td></tr><tr><td>9</td><td>Extend a supply</td></tr><tr><td>10</td><td>Run trade</td></tr><tr><td>11</td><td>Activate amendments</td></tr><tr><td>12</td><td>Create Controller</td></tr><tr><td>13</td><td>Add White list Address Controller</td></tr><tr><td>14</td><td>Remove Whitelist Address Controller</td></tr><tr><td>15</td><td>Change Asset Controller</td></tr><tr><td>16</td><td>Edit Controller</td></tr><tr><td>17</td><td>Delete Controller</td></tr><tr><td>21</td><td>Transfer Ethers</td></tr><tr><td>22</td><td>Withdraw Ether</td></tr><tr><td>23</td><td>Convert Ether</td></tr><tr><td>35</td><td> Add blacklist Address Controller</td></tr><tr><td>39</td><td>Delete asset link</td></tr><tr><td>43</td><td>Add asset links</td></tr><tr><td>44</td><td>Delete assets link</td></tr><tr><td>45</td><td>Set Whitelist Addresses</td></tr><tr><td>46</td><td>Remove Whitelist Addresses</td></tr><tr><td>47</td><td>Set Blacklist Addresses</td></tr><tr><td>48</td><td>Remove Blacklist Addresses</td></tr></tbody></table>

### Transaction states

<table><thead><tr><th width="189.5">State</th><th>Description</th></tr></thead><tbody><tr><td>Received</td><td>Transaction is created with the state Received, at this moment it is not written to blockchain yet, it has only TxId provided by the TEOS Platform (by the technical component responsible for the transaction processing)</td></tr><tr><td>Submitted</td><td>Transaction is Submitted when it was signed with the private key and submitted to the TEOS Platform via TEOS API or directly to the TxServer (the technical component responsible for the transaction processing)</td></tr><tr><td>Revoked by user</td><td>Transaction can be rejected by its initiator instead of signing then transaction gets state Revoked by user</td></tr><tr><td>Revoked by TxServer</td><td>Transaction can be rejected by the technical component responsible for the transaction processing when submitting or committing due to some reasons. For example, if some business checks failed (signing address doesn't have enough sparks to transfer) or signing address doesn't have enough ETH necessary for writing transaction to blockchain</td></tr><tr><td>Committed</td><td>Transaction is Committed when it passed all checks performed by the technical component responsible for the transaction processing and was successfully written to blockchain according to the blockchain api response</td></tr><tr><td>Revoked by Blockchain</td><td>Transaction can be rejected by blockchain when the technical component responsible for the transaction processing is trying to make a record in the blockchain</td></tr><tr><td>Confirmed</td><td>Transaction is Confirmed when the technical component responsible for the transaction processing has successfully read the transaction from blockchain after some blocks have passed to make sure it was written</td></tr></tbody></table>
