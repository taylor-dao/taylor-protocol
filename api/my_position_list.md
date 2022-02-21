
##### Description

- My position list

##### Request URL
- ` http://{ip_address}/position_list`

##### Request Method
- GET

##### Parameters

|name|required|type|description|
|:----    |:---|:----- |-----   |
|address |Y  |string |taylor address   |

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
          "time": "1654658594",
          "status": "success",
		  "nft_token_id": 1,
		  "tx_hash": "0x12xxxxxxxxxxxxxx",
		  "min_price": "20000",
		  "max_price": "30000",
		  "pool_token": "tlxxxxxxxxxxxx",
		  "pool_fee_rate": "0.001",
          }
        ],
         "flow_usdt_profit": "37263.67",
         "already_take_profit": "20000",
         "not_take_profit": "17263.67",
    }
  }
```

##### Description of response

|name|type|description|
|:-----  |:-----|-----                           |
|pair |string   |trading pair  |
|from_coin |string   |from currency symbol  |
|to_coin |string   |to currency symbol  |
|from_coin_token |string   |address from currency symbol |
|to_coin_token |string   | address to currency symbol |
|from_coin_num |string   |number of from coin  |
|to_coin_num |string   |number of to coin  |
|time |string   |UTC-HK time format (timestamp) |
|status |string   |status (1: Within range  2：Out of range  3：stop) |
|nft_token_id |int   |NFT-token-id  |
|min_price |string   |min price  |
|max_price |string   |max price  |
|tx_hash  | string  | hash  |
|pool_token |string   |token address of pool  |
|pool_fee_rate |string   |fee rate of pool |
|flow_usdt_profit |string   |my profit of flow pools（USDT equivalent）  |
|already_take_profit |string   |already take profit  |
|not_take_profit |string   | profit of waiting for taking  |
