

##### Describe

- my liquidity list

##### Request URL
- ` http://{ip_address}/flow_position_list`

##### Request Method
- GET

##### parameter

|parameter|Require|type|Describe|
|:----    |:---|:----- |-----   |
|access_key|Yes  |string |access_key|
|page |Yes  |int |pages (default = 1)   |
|pair_symbol| no | string | coin pair symbol|
|size |Yes  |int |number (default = 20   |
|status| no | string | status ( 1= in the range; 2= out of range; 3= stop|
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

######Return Example Describe

|parameter|type|Describe|
|:-----  |:-----|-----                           |
|pair |string   |transaction pair  |
|from_coin |string   |from_coin symbol  |
|to_coin |string   |to_coin symbol  |
|from_coin_token |string   |from_coin contract address |
|to_coin_token |string   |to_coin contract address |
|from_coin_num |string   |from_coin quantity  |
|to_coin_num |string   |to_coin quantity  |
|time |string   |UTC-HKtime format (timestamp) |
|status |string   |status ( 1= in the range; 2= out of range; 3= stop |
|nft_token_id |int   |NFT token id  |
|min_price |string   |minimum price  |
|max_price |string   |max price  |
|pool_token |string   |pool token address  |
|pool_fee_rate |string   |rate of pool fee |





##### Note

- More error return code, please see "error code describe" in home page



