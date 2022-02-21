


##### Describe

- get swap pool info

##### Request URL
- ` http://{ip_address}/getSwapPool  `

##### Request Method
- GET

##### parameter

|parameter|Require|type|Describe|
|:----    |:---|:----- |-----   |
|token0Addr |Yes  |string |token0 address   |
|token1Addr |Yes  |string |token1 address   |
|fee     |Yes  |string | fee    |
|poolId |no  |string |swap pool contract address    |

##### Return Example 

``` 
  {
    "poolId": "tlxxxxxxxxxxxxxxxxxxxx",
	"sqrtPrice": "10",
	"liquidity": "5000",
	"token0s"："1000",
	"token1s": "100000"
	"token0Addr": "tlxxxxxxxxxxxxx0xx",
	"token1Addr": "tlxxxxxxxxxxxxx1xx",
	"fee": "0.01",
	"tickSpacing": "200",
    "isExist"：false,
	"tickRate"："0.02",
	"tick": 900,
  }
```

######Return Example Describe

|parameter|type|Describe|
|:-----  |:-----|-----                           |
|poolId |string   |swap pool contract address  |
|sqrtPrice |string   |swap pool contract price info  |
|liquidity |string   |swap pool contract liquidity info  |
|token0s |string   |swapPool contract token0 quantity  |
|token1s |string   |swapPool contract token1 quantity  |
|token0Addr |string |token0 address   |
|token1Addr |string |token1 address   |
|fee        |string | fee    |
|tickSpacing        |string | minimum tick spacing    |
|isExist |bool   |isExist  |
|tickRate |string   |tick change rate  |
|tick |int   |currently scale value  |

##### Note

- More error return code, please see "error code describe" in home page



