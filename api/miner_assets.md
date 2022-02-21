    
##### Description

-  miner assets

##### Request URL
- ` http://{ip_address}/app_api/blockreward/miner_assets`
  
##### Request Method
- GET 

##### Parameters

|name|required|type|description|
|:----    |:---|:----- |-----   |
|address |Y  |string   |taylor address      |

##### Response

```
{
	"code": 0,
	"msg": "Success",
	"data": [
		{
			"symbol": "BTC",
			"numb": "259095.85564020852",
			"hash": "39719007001.8211269791155814098128",
			"usdt": "12954792782.010426",
			"usd": "12954792782.010426"
		},
		{
			"symbol": "TL",
			"numb": "10",
			"hash": "10000",
			"usdt": "1000",
			"usd": "1000"
		}
	]
}
```


##### Description of response

|name|type|description|
|:-----  |:-----|-----                           |
|symbol |string   |symbol currency
|numb |string   |number
|hash |string   |Hashrate
|usdt |string   |price of USDT
|usd |string   |price of USD





