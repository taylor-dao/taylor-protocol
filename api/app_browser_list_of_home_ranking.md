
##### Description #####

- app Browser list of home ranking 

##### Request URL
- ` http://{ip_address}/browser_app_list`

##### Request Method
- GET

##### Parameters

|name|required|type|description|
|:----    |:---|:----- |-----   |

##### Response #####

```
  {
    "code": 0,
    "message": "Success",
	"data": {
		"miner_num_list": [
		{
		  "rank": "1", //rank
		  "address": "", //address
		  "value": "", //value
		  }
		],
		"flow_hash_list": [
		{
		  "rank": "1", 
		  "address": "",
		  "value": "", 
		  }
		],
		"ext_hash_list": [
		{
		  "rank": "1", 
		  "address": "", 
		  "value": "", 
		  }
		],
    }
  }
```

##### Description of response #####

|name|type|description|
|:-----  |:-----|-----                           |


