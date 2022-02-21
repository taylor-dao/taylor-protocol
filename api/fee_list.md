##### Description

- fee list

##### Request URL
- ` http://{ip_address}/app_api/fee_list`

##### Request Method
- GET

##### Parameters

|name|required|type|description|
|:----    |:---|:----- |-----   |
|token0_addr |Y  |string |token0 address   |
|token1_addr |Y  |string |token1 address   |


##### Response

```
 {
    "code": 0,
    "msg": "Success",
    "data": {
        "list": [
            {
                "fee": "0.00003",
				"text": "",
				"status": "1",
				"ratio": "0.25"
            }
        ],
    }
}
```

##### Description of response

|name|type|description|
|:-----  |:-----|-----                           |
|fee |string   |fee  |
|text |string   |introduction  |
|status |string   |status（is_create 1：No 2：Yes）  |
|ratio |string   |ratio  |


