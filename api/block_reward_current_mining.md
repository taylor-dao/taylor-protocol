
    
##### Description

-the detail about current flow mining of all users

##### Request URL
- ` http://{ip_address}/app_api/blockreward/now_mining`
  
##### Request Method
- GET 

##### Parameters

|name|required|type|description|
|:----    |:---|:----- |-----   |
|address |Y  |string | taylor address  |

##### Response 

```
{
	"code": 0,
	"msg": "success",
	"data": [
		{
			"token0_id": "drc20|tlAYJ4Qng6Dj1mjZHXfEsMBEtfzg5bJoYXz",
			"token1_id": "drc20|tl3gVV6FjdreZCYXFkrFQFCz9uc1ggko8d6",
			"fee": "0.0005",
			"status": "1",
			"token0": "0",
			"token1": "259095.85564020852",
			"flow_hash": "39719007001.8211269791155814098128",
			"yesterday_numb": "0.25",
			"nft_token_id": "1"
		},
		{
			"token0_id": "DH",
			"token1_id": "drc20|tl3gVV6FjdreZCYXFkrFQFCz9uc1ggko8d6",
			"fee": "0.0005",
			"status": "1",
			"token0": "100",
			"token1": "10",
			"flow_hash": "1000",
			"yesterday_numb": "100",
			"nft_token_id": "1"
		}
	]
}
```

##### Description of response

|name|type|description|
|:-----  |:-----|-----                           |
|token0_addr |string   |token0Id  |
|token1_addr |string   |token1Id  |
|fee |string   |fee  |
|status |string   |status（1 is mining） |
|token0 |string   |number of token0  |
|token1 |string   |number of token1 |
|flow_hash |string   |flow Hashrate  |
|yesterday_numb |string   |mining profit yesterday |
|nft_token_id |string   |nft_token_id  |







