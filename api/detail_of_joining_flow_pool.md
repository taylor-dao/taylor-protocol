
##### Description

-  detail of joining flow pool

##### Request URL
- ` http://{ip_address}/join_pool_detail`

##### Request Method
- GET

##### Parameters

|name|required|type|description|
|:----    |:---|:----- |-----   |
|pool_token |Y  |string |token address of flow pool   |

##### Response

```
  {
    "code": 0,
	"msg": "success",
    "data": {
     	  "pair": "DH/USDT",
          "from_coin": "DH",
          "to_coin": "USDT",
          "from_coin_token": "tlxxxxxxxx0" ,
          "to_coin_token": "tlxxxxxxxx1",
          "from_coin_num": "200.00",
          "to_coin_num": "19.94",
		  "pool_token": "tlxxxxxxxxxxxx",
          "pool_fee_rate": "0.001",
		  "from_rate": "250000",
		  "to_rate": "0.4",
		  "profit_rate":"0.25",
		  "sqrt_price": "",
		  "status": "1",
    }
  }
```

##### Description of response

|name|type|description|
|:-----  |:-----|-----                           |
|pair |string   |trading pair  |
|from_coin |string   |symbol of token0  |
|to_coin |string   |symbolof token1  |
|from_coin_token |string   |token0 contract address  |
|to_coin_token |string   |token1 contract address   |
|from_coin_num |string   |token0 number  |
|to_coin_num |string   |token1 number  |
|pool_token |string   |token address of pool  |
|pool_fee_rate |string   |fee rate of pool |
|from_rate |string   |from currency rate |
|to_rate |string   |to currency rate |
|profit_rate |string | profit rate |
|sqrt_price |string   |now price  |
|status |string   |1：Within range  |





