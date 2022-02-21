
##### Describe

- compute swap-tokens

##### Request URL
- ` http://{ip_address}/computeSwapTokens     `

##### Request Method
- GET

##### parameter

|parameter|Require|type|Describe|
|:----    |:---|:----- |-----   |
|poolId |Yes  |string  |swap pool contract address |
|payTokenAddr |Yes  |string  |coin of payment address|
|recTokenAddr |Yes  |string  |coin of receive address|
|payTokens |No     |string  |quantity of token to pay|
|recTokens |No     |string  |quantity of token to receive|
|changeRate |Yes  |string  |rate of slippage|

##### Return Example

```
  {
    "tokens": "322",//another tokens quantity
	"price": "1.05",//1 token1 = n token0 (n value)
	"priceRate": "-0.005",//estimated price change after the transaction 
	"minOrMaxtokens": "150",//maximum or minimum token
  }
```

######Return Example Describe

|parameter|type|Describe|
|:-----  |:-----|-----      |
|tokens |string   |another tokens quantity  |
|price |string   |price:1 token1 = n token0  |
|priceRate |string   |estimated price change after the transaction  |
|minOrMaxtokens |string   |maximum or minimum token  |

##### Note

- More error return code, please see "error code describe" in home page