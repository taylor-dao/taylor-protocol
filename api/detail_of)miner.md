    
##### Description

-  detail of miner

##### Request URL
- ` http://{ip_address}/app_api/blockreward/miner_detail`
  
##### Request Method
- GET 

##### Parameters

|name|required|type|description|
|:----    |:---|:----- |-----   |
|address |Y  |string   |taylor address      |
|page |Y  |int   |page      |
|size |Y  |int   |size      |

##### Response

```
{
	"code": 0,
	"msg": "Success",
	"data": [
		{
			"addr": "tlNL6kkjYGXNfv3WNZTg6QqpjGSCNUaQ42R",
			"time": "2021-08-26 15:13:52",
			"assets": "20687"
		}
	]
}
```


##### Description of response

|name|type|description|
|:-----  |:-----|-----                           |
|addr |string   |taylor address
|time |string   |timestamp
|assets |string   |Converted assets





