
##### Description

- Get the official contract address

##### Request URL
- ` http://{ip_address}/swap_contract`

##### Request Method
- GET

##### Parameters

|name|required|type|description|
|:----    |:---|:----- |-----   |
|swap_type|Y| string| type of contract （1：liquidity swap transaction  2： Authorization contract of image address）|

##### Response

```
  {
    "code": 0,
	"msg": "success",
	"data" : {
	    "contract_addr": "11",//official contract address
	}
  }
```

##### description of Response

|name|type|description|
|:-----  |:-----|----- |
|contract_addr |string   |official contract address  |

