
##### Description

- trading pair list

##### Request URL
- ` http://{ip_address}/app_api/pair_list`

##### Request Method
- GET

##### Parameters

|name|required|type|description|
|:----    |:---|:----- |-----   |
|addr |Y  |string |taylor address   |


##### Response

```
 {
    "code": 0,
    "msg": "Success",
    "data": {
        "list": [
            {
                "pair_symbol": "DH/BTC",
				"token0_addr": "tlxxxxxxxxxxx",
				"token1_addr": "tlxxxxxxxxxxx",
            }
        ],
    }
}
```

##### Description of response

|name|type|description|
|:-----  |:-----|-----                           |
|pair_symbol |string   |pair symbol  |
|token0_addr |string   |token0 address  |
|token1_addr |string   |token1 address  |



