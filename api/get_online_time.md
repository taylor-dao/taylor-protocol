
##### Description

- get online time

##### Request URL
- ` http://{ip_address}/get_online_time`

##### Request Method
- GET

##### Parameters

|name|required|type|description|
|:----    |:---|:----- |-----   |

##### Response

```
  {
    "code": 0,
	"msg": "success",
    "data": {
        "online_time": "14568",
        "is_switch": "1",
    }
  }
```

##### description of Response

|name|type|description|
|:-----  |:-----|-----                           |
|online_time |string   |Remaining time  |
|is_switch |string   |is open, 0：close，1：open  |

