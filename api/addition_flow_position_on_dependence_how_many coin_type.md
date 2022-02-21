
##### Describe

- addition flow position on dependence how many coin type

##### Request URL
- ` http://{ip_address}/add_flow_position_num`
##### Request Method
- POST

##### parameter

|parameter|Require|type|Describe|
|:----    |:---|:----- |-----   |
|access_key |Yes  |string  |access_key|
|data |Yes  |string |data = base64(raw_data)  raw_data = `{"ids":[1213033014997553152], "ts":1578230772}`|
|sign |Yes  |string |base64(HmacSHA256(data+access_secret)) // generate signature|
|max_price |Yes  |string |max price |
|min_price |Yes  |string |minimum price |
|pool_id |Yes  |string |flow pool id   |
|token0s |No    |string  |token0 quantity|
|token1s |No    |string  |token1 quantity|


##### Return Example

```
  {
    "code": 200,//200-success，other abnormal
	"msg": "",//abnormal have some info
    "data": {
	    "txID": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331",//transaction hash
		"is_bool": "true",
		"map_data": {
		     "from": "tlxxxxx",
			 "token0_addr": "tlxxxxx",
			 "token1_addr": "tlxxxxx",
			 "token0_symbol": "BTC",
			 "token1_symbol": "TL",
			 "fee": "0.01",
			 "sqrt_price": "75",
			 "min_price": "50",
			 "max_price": "100",
			 "min_tick": 10000,
			 "max_tick": 20000,
			 "token0s": "100",
			 "token1s": "2000",
			 "liquidity": "2000",
			 "price_slippage": "0.01",
		}
    }
  }
```
##### Note

- More error return code, please see "error code describe" in home page



