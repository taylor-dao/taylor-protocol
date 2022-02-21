    
##### Describe

- compute liquidity token

##### Request URL
- ` http://{ip_address}/computeFlowTokens    `
  
##### Request Method
- GET 

##### parameter

|parameter|Require|type|Describe|
|:----    |:---|:----- |-----   |
|sqrtPrcie |Yes  |string  |pool current price|
|feeRate |Yes  |string  |rate of fee|
|minTicket |Yes  |int  |low price of scale|
|maxTicket |Yes  |int  |high price of scale|
|allowRate |Yes  |string  |rate of price slippage|
|token0 |Yes  |string  |token0 currency contract address|
|token1 |Yes  |string  |token1 currency contract address|
|token0Num |No     |string  |token0 quantity|
|token1Num |No     |string  |token1 quantity|

##### Return Example 

``` 
  {
    "tokens": "322",//another tokens quantity
	"liquidity": "800",//liquidity - L
	"minToken0s": "100",
	"minToken1s": "1000",
  }
```

######Return Example Describe 

|parameter|type|Describe|
|:-----  |:-----|-----      
|tokens |string   |another tokens quantity  |
|liquidity |string   |liquidity - L  |
|minToken0s |string   |minimum to pay of token0  |
|minToken1s |string   |minimum to pay of token1|

##### Note 

- More error return code, please see "error code describe" in home page