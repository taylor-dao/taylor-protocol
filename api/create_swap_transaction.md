
##### Describe

- create SWAP transaction

##### Request URL
- ` http://{ip_address}/sendSwap`

##### Request Method
- POST

##### parameter

|parameter|Require|type|Describe|
|:----    |:---|:----- |-----   |
|from |Yes  |string  |Taylor address|
|poolId |Yes  |string  |SWAP pool contract address|
|payTokenAddr |Yes  |string  |coin address to pay|
|recTokenAddr |Yes  |string  |coin address to receive|
|payTokens |Yes  |string  |how many coin to pay|
|recTokens |Yes  |string  |how many coin to receive|
|feeRate |Yes  |string  |rate of fee|
|allRate |Yes  |string  |transaction acceptable rate of slippage|
|tradeType |Yes  |int  |1-specific payToken quantity; 2-specific recToken quantity|
|deadLine |Yes  |long  |how long to wait of transaction|
|gasLimit |Yes  |string  |gas quantitylimit|
|gasPrice |Yes  |string  |gas price|

##### Return Example

```
  {
    "txID": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331",//transaction hash
    "rawData": "0x9646252be9520f6e71339a8df9c55e4d7619deeb018d2a3f2d21fc165dde5eb5"
  }
```

######Return Example Describe

|parameter|type|Describe|
|:-----  |:-----|-----      |
|txID |string   |transaction hash  |
|rawData |string   |rawData；transaction json  |

##### Note

- More error return code, please see "error code describe" in home page