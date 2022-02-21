    
##### Describe

- extract benefit from flow pool

##### Request URL
- ` http://{ip_address}/takeFlowPoolProfit   `
  
##### Request Method
- POST 

##### parameter

|parameter|Require|type|Describe|
|:----    |:---|:----- |-----   |
|from |Yes  |string  |Taylor address|
|nftId |Yes  |int  |nftId|
|token0Addr |Yes  |string  |token0 currency contract address|
|token1Addr |Yes  |string  |token1 currency contract address|
|token0s |Yes  |string  |token0 withdraw quantity|
|token1s |Yes  |string  |token1 withdraw quantity|
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
|:-----  |:-----|-----      
|txID |string   |transaction hash  |
|rawData |string   |rawData；transaction json  |

##### Note 

- More error return code, please see "error code describe" in home page