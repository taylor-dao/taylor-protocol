
##### Describe

- recommend compute swap-tokens

##### Request URL
- ` http://{ip_address}/swapPoolRecommend     `

##### Request Method
- GET

##### parameter

|parameter|Require|type|Describe|
|:----    |:---|:----- |-----   |
|payTokenAddr |Yes  |string  |coin of payment address|
|recTokenAddr |Yes  |string  |coin of receive address|
|allRate |Yes  |string  |rate of slippage|
|payTokens |No     |string  |quantity of token to pay|
|recTokens |No     |string  |quantity of token to receive|

##### Return Example

```
  {
    "tokens": "322",//another tokens quantity
	"price": "1.05",//1 token1 = n token0 (n value)
	"priceRate": "-0.005",//estimated price change after the transaction 
	"minOrMaxtokens": "150",//maximum or minimum token
	"feeCharge": "5",//fee
	"poolId": "tlxxxxxxxxxxx", //pool id
	"feeRate": "0.01", //fee
	"status": "0",
  }
```

######Return Example Describe

|parameter|type|Describe|
|:-----  |:-----|-----      |
|tokens |string   |another tokens quantity  |
|price |string   |price:1 token1 = n token0  |
|priceRate |string   |estimated price change after the transaction  |
|minOrMaxtokens |string   |maximum or minimum token  |
|feeCharge |string   |fee  |
|poolId | string  | pool id |
|feeRate | string | fee  |
|status | string | status 0: normal, 1: no pool, 2:liquidity not enough, 3:affect the exchange rate |

##### Note

- More error return code, please see "error code describe" in home page