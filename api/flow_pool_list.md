
##### Description

- flow pool list

##### Request URL
- ` http://{ip_address}/flow_pool_list`

##### Request Method
- GET

##### Parameters

|name|required|type|description|
|:----    |:---|:----- |-----   |
|page |Y  |int |page  （default 1）   |
|size |Y  |int |size （default 20）   |
|coin |N  |string |symbol of coin   |
|other_pool |N  |string |Other pools   |
|is_recommend| N | string | recommend （default 1）|
|is_fast| N | string | fast flow pools (default 1)|

##### Response

```
  {
    "code": 0,
	"msg": "success",
    "data": {
      "list": [
        {
          "pair": "DH/USDT",
          "from_coin": "DH",
          "to_coin": "USDT",
          "from_coin_token": "1" ,
          "to_coin_token": "tlxxxxxxxx2",
          "from_coin_num": "200.00",
          "to_coin_num": "19.94",
		  "pool_token": "tlxxxxxxxxxxxx",
          "pool_fee_rate": "0.001",
		  "lock_value": "124555",
		  "profit_rate": "0.25",
		  "day_trade_value": "0.5465",
		  "day_trade_fee_value": "",
		  "pair_symbol": "BTC/DH",
		  "sqrt_price":"12.012",
          }
        ],
        "total": 100,
        "page": 1,
        "size": 10
    }
  }
```

##### Description of response

|name|type|description|
|:-----  |:-----|-----                           |
|pair |string   |trading pair  |
|from_coin |string   |symbol of coin sold  |
|to_coin |string   |symbol of coin obtained   |
|from_coin_token |string   | contract address of coin sold （if taylor ,default 1）  |
|to_coin_token |string   |contract address of coin obtained（if taylor ,default 1） |
|from_coin_num |string   |number of coin sold  |
|to_coin_num |string   |number of coin obtained  |
|pool_token |string   |token address of pool  |
|pool_fee_rate |string   |fee rate of pool |
|lock_value |string   |lock value of flow pool |
|profit_rate |string | rate of profit   |
|day_trade_value |string   |Totals of of flow pool transaction  in 24 hours|
|day_trade_fee_value |string   | fee of flow pool transaction  in 24 hours |
|pair_symbol |string | pair of symbol|
|sqrt_price |string | current price|

