
##### Description #####

- picture list

##### Request URL
- ` http://{ip_address}/picture_app_list`

##### Request Method
- GET

##### Parameters

|name|required|type|description|
|:----    |:---|:----- |-----   |
|type_id |Y  |string | 1：browser banner 2：mining |

##### Response #####

```
  {
    "code": 0,
    "message": "Success",
	"data": {
		"list": [
		{
		  "pic_url": "www.xxx", //address of picture
		  "link_url": "", //link url
		  }
		],
    }
  }
```