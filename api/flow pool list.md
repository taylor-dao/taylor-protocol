


##### Describe

- flow pool list

##### Request URL
- ` http://{ip_address}/flow_pool_list`

##### Request Method
- GET

##### parameter

|parameter|Require|type|Describe|
|:----    |:---|:----- |-----   |
|access_key|Yes  |string |access_key|
|coin |no  |string |coin symbol   |
|page |Yes  |int |pages (default = 1)   |
|size |Yes  |int |number (default = 20   |
|sign      |Yes  |string |base64(HmacSHA256(data + access_secret)) |

##### Return Example

```
  {
    "code": 0,
	"msg": "success",
    "data": {
      "list": [
        {
          "pair": "DH/USDT",
          "token0_symbol": "DH",
          "token1_symbol": "USDT",
          "token0_addr": "1" ,
          "token1_addr": "tlxxxxxxxx2",
          "token0s": "200.00",
          "token1s": "19.94",
		  "pool_token": "tlxxxxxxxxxxxx",
          "pool_fee_rate": "0.001",
		  "lock_value": "124555",
		  "profit_rate": "0.25",
		  "day_trade_value": "0.5465",
		  "day_trade_fee_value": "",
		  "sqrt_price": "121.4",
          }
        ],
        "total": 100,
        "page": 1,
        "size": 10
    }
  }
```

######Return Example Describe

|parameter|type|Describe|
|:-----  |:-----|-----                           |
|pair |string   |transaction pair  |
|token0_symbol |string   |token0 coin symbol  |
|token1_symbol |string   |token1 coin symbol  |
|token0_addr |string   |token0 contract address  |
|token1_addr |string   |token1 contract address  |
|token0s |string   |token0 quantity  |
|token1s |string   |token1 quantity  |
|pool_token |string   |pool token address  |
|pool_fee_rate |string   |rate of pool fee |
|lock_value |string   |lock value of total pool |
|profit_rate |string | rate of revenue   |
|day_trade_value |string   |past 24 Hours transaction volume |
|day_trade_fee_value |string   |past 24 Hours transaction fee |
|sqrt_price |string | currently price of pool|



##### Note

- More error return code, please see "error code describe" in home page



