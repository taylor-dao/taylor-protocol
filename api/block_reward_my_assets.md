    
##### Description

- my assets

##### Request URL
- ` http://{ip_address}/app_api/blockreward/my_assets`
  
##### Request Method
- GET 

##### Parameters

|name|required|type|description|
|:----    |:---|:----- |-----   |
|address |Y  |string |taylor address |

##### Response 

```
{
	"code": 0,
	"msg": "success",
	"data": {
		"flow_assets": "12954792782.01",
		"flow_hash": "39719007001.82",
		"hash_proportion": "0.5",
		"flow_mining_earnings": "225"
	}
}
```

##### Description of response 

|name|type|description|
|:-----  |:-----|-----                           |
|flow_assets |string   |flow assets  |
|flow_hash |string   |flow  Hashrate  |
|hash_proportion |string   |proportion of Hashrate |
|flow_mining_earnings |string   |profit of flow mining  |




