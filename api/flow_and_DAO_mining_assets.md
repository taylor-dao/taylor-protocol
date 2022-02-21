
    
##### 

-  flow mining assets and DAO mining assets

##### Request URL
- ` http://{ip_address}/app_api/blockreward/mining_assets`
  
##### Request Method
- GET 

##### Parameters

|name|required|type|description|
|:----    |:---|:----- |-----   |
|address |Y  |string   |Miner's detailed address      |
|type |Y  |string   |type of asset（"flow" represent  assets of flow mining, "dao" represent assets of DAO mining）      |
##### Response 

```
{
	"code": 0,
	"msg": "Success",
	"data": [
		{
			"symbol": "BTC",
			"numb": "259095.85",
			"assets_price": "12954792782.01"
		}
	]
}
```


##### Description of response 

|name|type|description|
|:-----  |:-----|-----                           |
|symbol |string   |symbol of currency
|numb |string   |number
|assets_price |string   |price of assets





