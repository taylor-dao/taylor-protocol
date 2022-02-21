

##### Describe

- get position info

##### Request URL
- ` http://{ip_address}/getPosition  `  get position info

##### Request Method
- GET

##### parameter

|parameter|Require|type|Describe|
|:----    |:---|:----- |-----   |
|nftTokenId |Yes  |int |PositionId   |

##### Return Example

```
  {
    "poolId": "tlxxxxxxxxxxxxxxxxxxxx",
    "sqrtPrice": "10",
    "liquidity": "5000",
	"pair": "DH/BTC",
	"token0Symbol":"DH",
	"token1Symbol":"BTC",
    "token0s"："1000",
    "token1s": "100000"
	"token0Ratio"："0.5",
    "token1Ratio": "0.5",
    "token0Addr": "tlxxxxxxxxxxxxx0xx",
    "token1Addr": "tlxxxxxxxxxxxxx1xx",
	"currentValue": "500",
    "fee": "0.01",
    "tickSpacing": "200",
	"nftTokenId": 200,
	"ownerAddress": "tlxxxxxxx",
	"minTick": "200",
	"maxTick": "200",
	"minPrice": "200",
	"maxPrice": "200",
	"currPrice": "200",
	"token0Fees": "200",
	"token1Fees": "200",
	"tokenNumFees": "400",
	"status": "1",
  }
```

######Return Example Describe

|parameter|type|Describe|
|:-----  |:-----|-----                           |
|poolId |string   |swap pool contract address  |
|sqrtPrice |string   |swap pool contract price info  |
|liquidity |string   |swap pool contract liquidity info  |
|pair |string  |coin pair symbol |
|token0Symbol |string  |token0coin symbol |
|token1Symbol |string  |token1coin symbol |
|token0s |string   |swapPool contract token0 quantity  |
|token1s |string   |swapPool contract token1 quantity  |
|token0Ratio |string  | rate of token0 |
|token1Ratio |string  | rate of token1 |
|token0Addr |string |token0 address   |
|token1Addr |string |token1 address   |
|currentValue |string |current Value   |
|fee        |string | fee    |
|tickSpacing        |string | minimum tick spacing    |
|nftTokenId |int64   |nftTokenId  |
|ownerAddress |string   |position provider  |
|minTick |string   |low scale of position  |
|maxTick |string   |high scale of position  |
|minPrice |string   |low scale of position  |
|maxPrice |string   |high scale of position  |
|token0Fees |string   |token0 un-withdraw fee  |
|token1Fees |string   |token1 un-withdraw fee  |
|tokenNumFees |string   |token0,token1 total un-withdraw fee  |
|status |string   |status (1: in the range 2: out of range 3: stop |

##### Note

- More error return code, please see "error code describe" in home page



