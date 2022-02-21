
##### Describe

- transaction of redemption liquidity

##### Request URL
- ` http://{ip_address}/takeFlowPool  `

##### Request Method
- POST

##### parameter

|parameter|Require|type|Describe|
|:----    |:---|:----- |-----   |
|from |Yes  |string  |Taylor address|
|nftTokenId |Yes  |string  |nft Token Id|
|liquidity |Yes  |string  |redemption liquidity L|
|token0NumMin |Yes  |string  |minimum quantity to receive of token0|
|token1NumMin |Yes  |string  |minimum quantity to receive of token1|
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