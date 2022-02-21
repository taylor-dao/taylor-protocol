
##### Describe

- build one swap

##### Request URL
- ` http://{ip_address}/build_one_swap `
##### Request Method
- POST

##### parameter

|parameter|Require|type|Describe|
|:----    |:---|:----- |-----   |
|access_key |Yes  |string  |access_key|
|data |Yes  |string |data = base64(raw_data)  raw_data = `{"ids":[1213033014997553152], "ts":1578230772}`|
|sign |Yes  |string |base64(HmacSHA256(data+access_secret)) // generate signature|
|pool_id |Yes  |string |flow pool id |
|target_price |Yes  |string |reduce the current price to target_price |


##### Return Example

```
  {
    "code": 200,//200-success，other abnormal
	"msg": "",//abnormal have some info
    "data": {
	  "list":[//could be contain different pool trade
	  	{
		   "tx_id": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331",//transaction hash
		   "is_bool": "true",
		   "map_data": {
		         "from":"tlxxxxxx",
				 "pool_id":"tlxxxxx",
				 "pay_token_addr": "tlxxxxx",
				 "rec_token_addr": "tlxxxxx",
				 "pay_token_symbol": "BTC",
				 "rec_token_symbol": "TL",
				 "pay_tokens": "10",
				 "rec_tokens": "10",
				 "fee_rate": "0.01",
				 "all_rate": "0.01",
				 "trade_type": 1,
		   }
		}
	  ]
    }
  }
```

######Return Example Describe

|parameter|type|Describe|
|:-----               |:-----   |-----   |
|tx_id                |string   |transaction hash  |
|is_bool              |string   |is success  |
|from                 |string   |Taylor address|
|pool_id              |string   |SWAP pool contract address|
|pay_token_addr       |string   |contract address of coin to pay|
|rec_token_addr       |string   |contract address of coin to receive|
|pay_token_symbol     |string   |symbol of coin to pay|
|rec_token_symbol     |string   |symbol of coin to receive|
|pay_tokens           |string   |how many coin to pay|
|rec_tokens           |string   |how many coin to receive|
|fee_rate             |string   |rate of fee|
|all_rate             |string   |transaction acceptable rate of slippage|
|trade_type           |int      |1-specific payToken quantity; 2-specific recToken quantity|

##### Note

- More error return code, please see "error code describe" in home page



