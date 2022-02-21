##### Description

- detail of flow pool

##### Request URL
- ` http://{ip_address}/flow_pool_detail  `

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
          "from_coin_token": "1" ,
          "to_coin_token": "tlxxxxxxxx2",
          "from_coin_num": "200.00",
          "to_coin_num": "19.94",
		  "pool_token": "tlxxxxxxxxxxxx",
          "pool_fee_rate": "0.001",
		  "from_rate": "250000",
		  "to_rate": "0.001",
		  "lock_value": "50000",
		  "day_trade_value": "30000",
		  "day_trade_fee_value": "30.2",
		  "profit_rate":"0.25",
		  "status": "1",
    }
  }
```

##### Description of response

|name|type|description|
|:-----  |:-----|-----                           |
|pair |string   |trading pair  |
|from_coin |string   |symbol of coin sold  |
|to_coin |string   |symbol of coin obtained  |
|from_coin_token |string   |contract address of coin sold（if taylor ,default 1）  |
|to_coin_token |string   |contract address of coin obtained （if taylor ,default 1） |
|from_coin_num |string   |number of coin sold  |
|to_coin_num |string   |number of coin obtained  |
|pool_token |string   |token address of pool  |
|pool_fee_rate |string   |fee rate of pool |
|from_rate |string   |from coin rate |
|to_rate |string   |to coin rate |
|lock_value |string   |lock value of flow pool（Converted to USDT） |
|day_trade_value |string   |Totals of flow pool transaction in 24 hours  |
|day_trade_fee_value |string   |fee of flow pool transaction in 24 hours |
|profit_rate |string | rate of profit |
|status |string   |status (1: Within range  2：Out of range  3：stop) |




