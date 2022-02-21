
    
##### Description

-	Invitation record

##### Request URL
- ` http://{ip_address}/app_api/blockreward/invite_record`
  
##### Request Method
- GET 

##### Parameter

|name|required|type|description|
|:----    |:---|:----- |-----   |
|address |Y  |string   |taylor address      |
|page |Y  |int   |page      |
|size |Y  |int   |size      |
|status |N  |int   |0: all，1: mining，2: none of mining   |

##### Response

```
{
	"code": 0,
	"msg": "Success",
	"data": [
		{
			"addr": "tl6RiJkWCinwxWSE52NrRSmtZz9TfUbyJ1N",
			"is_mining": false,
			"invite_time": "2021-08-26 12:18:59"
		},
		...
	]
}
```


##### Description of response 

|name|type|description|
|:-----  |:-----|-----                           |
|addr |string   |taylor address
|is_mining |bool   |is mining
|invite_time |string   |Invitation time





