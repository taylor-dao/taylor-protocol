
##### Description

- my flow order list

##### Request URL
- ` http://{ip_address}/flow_order_list `

##### Request Method
- GET

##### Parameters

|name|required|type|description|
|:----    |:---|:----- |-----   |
|address |Y  |string |taylor address   |
|pair_symbol| N | string | pair symbol|
|status| N | string | status （1: Within range 2：out of range 3：stop）|
|page |Y  |int |page （default 1）   |
|size |Y  |int |size （default 20）   |

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
        "total": 100,
        "page": 1,
        "size": 10
    }
  }
```

##### Description of response

|name|type|description|
|:-----  |:-----|-----                           |
|pair |string   |trading pair |
|from_coin |string   |from coin  |
|to_coin |string   |to coin  |
|from_coin_token |string   |from coin contract address |
|to_coin_token |string   |to coin contract address |
|from_coin_num |string   |from coin amount |
|to_coin_num |string   |to coin amount  |
|time |string   |UTC-HK time format (timestamp) |
|status |string   |status (1: Within range 2：out of range 3：stop) |
|nft_token_id |int   |NFT-token-id  |
|min_price |string   |min price  |
|max_price |string   |max price  |
|pool_token |string   |token address of pool  |
|pool_fee_rate |string   |fee rate of pool |




