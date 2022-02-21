
##### Describe

- redemption flow transaction

##### Request URL
- ` http://{ip_address}/take_flow_pool`
##### Request Method
- POST

##### parameter

|parameter|Require|type|Describe|
|:----    |:---|:----- |-----   |
|access_key |Yes  |string  |access_key|
|data |Yes  |string |data = base64(raw_data)  raw_data = `{"ids":[1213033014997553152], "ts":1578230772}`|
|sign |Yes  |string |base64(HmacSHA256(data+access_secret)) // generate signature|
|nft_token_id |Yes  |string |nft token id |
|proportion |Yes  |string |rate of redemption from flow pool  |

##### Return Example

```
  {
    "code": 200,//200-success，other abnormal
	"msg": "",//abnormal have some info
    "data": {
	    "tx_id": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331",//transaction hash
		"is_bool": "true",
		"map_data": {
		      "from": "tlxxxxx",
			  "nft_token_id": "tlxxxxx",
			  "liquidity": "184.55",
			  "token0s": "55",
			  "token1s": "65",
		}
    }
  }
```

######Return Example Describe

|parameter|type|Describe|
|:-----       |:-----   |-----     |
|tx_id        |string   |transaction hash  |
|is_bool      |string   |is transaction success  |
|from         |string   |Taylor address|
|nft_token_id |string   |nft Token Id|
|liquidity    |string   |redemption liquidity L|
|token0s      |string   |minimum quantity to receive of token0|
|token1s      |string   |minimum quantity to receive of token1|

##### Note

- More error return code, please see "error code describe" in home page



