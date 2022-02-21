
##### Describe

- addition position

##### Request URL
- ` http://{ip_address}/addFlow  `

##### Request Method
- POST

##### parameter

|parameter|Require|type|Describe|
|:----    |:---|:----- |-----   |
|from |Yes  |string  |Taylor address|
|token0Addr |Yes  |string |token0 address   |
|token1Addr |Yes  |string |token1 address   |
|token0s |Yes  |string  |token0s quantity|
|token1s |Yes  |string  |token1s quantity|
|fee     |Yes  |string | fee    |
|sqrtPrice |Yes  |string  |Yes|
|minTick |Yes  |int  |minimum price integer|
|maxTick |Yes  |int  |maximum price integer|
|liquidity |Yes  |string  |liquidity - L|
|deadLine |Yes  |long  |how long to wait of transaction|
|gasLimit |Yes  |string  |gas quantitylimit|
|gasPrice |Yes  |string  |gas price|
|priceSlippage |Yes  |string  |price slippage|
|nftTokenId |Yes  |int  |position nft token id|


##### Return Example

```
  {
    "txID": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331",//transaction hash
    "raw_data": "0x9646252be9520f6e71339a8df9c55e4d7619deeb018d2a3f2d21fc165dde5eb5"
  }
```

######Return Example Describe

|parameter|type|Describe|
|:-----  |:-----|-----      |
|txID |string   |transaction hash  |
|rawData |string   |rawData；transaction json  |

##### Note

- More error return code, please see "error code describe" in home page