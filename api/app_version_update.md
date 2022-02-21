
##### Description #####

- app version update

##### Request URL
- ` http://{ip_address}/version_update`

##### Request Method
- GET

##### Parameters

|name|required|type|description|
|:----    |:---|:----- |-----   |
|version_number |Yes   |string  |1.1.1 (Version number)|
|version_value |Yes   |string  |1 (Version value)|
|device | Yes   |string  |Android（Android  IOS）(device)|
|uuid |No   |string  |1 (user uuid)|

##### Response #####

```
  {
    "code": 0,
	"msg": "success",
    "data":
		{
			"version_number":"1.1.2", //version number
			"version_value":"1", //version value
			"is_update":"0", //update forced?（ 0:no, 1:optional, 2:must）
			"update_address":"http://xxxx", //update address (update_address equal 1 or 2 has the value; update_address equal 0 is empty)
			"update_tip": "update tip", //update tip (is_update equal 1 or 2 has the value; is_update equal 0 is empty)
		}
  }
```