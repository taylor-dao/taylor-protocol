
##### Description #####

- get uuid

##### Request URL
- ` http://{ip_address}/app_client`

##### Request Method
- GET

##### Parameters

|name|required|type|description|
|:----    |:---|:----- |-----   |
|device |Y  |string |user's device, Android   IOS   |

##### Response #####

```
  {
    "code": 0,
	"msg": "success",
	"data" : {
	    "uuid": "11",
	}
  }
```

##### Description of response #####

|name|type|description|
|:-----  |:-----|-----                           |
