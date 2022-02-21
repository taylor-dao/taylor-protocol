    
##### Description

-  flow mining

##### Request URL
- ` http://{ip_address}/app_api/blockreward/flow_mining`
  
##### Request Method
- GET 

##### Parameters

|name|required|type|description|
|:----    |:---|:----- |-----   |
|address |Y  |string | taylor address  |
|mining_type |Y  |string |"flow" represent flow mining,"dao" represent dao mining   |
|page |Y  |string |page   |
|size |Y  |string |size   |

##### Response  

```
{
	"code": 0,
	"msg": "Success",
	"data": {
		"mining_numb": "225",
		"yester_day_numb": "0",
		"is_bind":true,
		"href":"https://www.baidu.com/",
		"list": [
			{
				"tx_hash": "b4be93721f1d7a8b6a8a7fe7cc793a5e067654d61d963d0fd2853c832b660dff",
				"time": "2021-08-26 13:49:42",
				"type": "1",
				"earnings": "0.25"
			},
			...
		]
	}
}

```

##### Description of response 

|name|type|description|
|:-----  |:-----|-----                           |
|mining_numb |string   |mining number |
|yester_day_numb |string   |mining number yesterday |
|is_bind |bool | does it bind parent's address|
|href |string   |link of href |
|record |string   |record of profit |
|txHash |string   |transaction Hash |
|time |string   |time |
|type |string   |1 represent flow mining，2 represent DAO mining |
|earnings |string   |sum of profit yesterday|





