
##### Description

- list of  Participant of  flow pool liquidity

##### Request URL
- ` http://{ip_address}/flow_pool_liquidity_actor `

##### Request Method
- GET

##### Parameters

|name|required|type|description|
|:----    |:---|:----- |-----   |
|pool_token |Y  |string | contract address of flow pool  |
|page |Y  |int |page （default 1）   |
|size |Y  |int |size （default 20）   |

##### Response

```
  {
    "code": 0,
	"msg": "success",
    "data": {
      "list": [
        {
		  "address": "tlxxxxxxx",
          "from_coin": "DH",
          "to_coin": "USDT",
          "from_coin_token": "1" ,
          "to_coin_token": "tlxxxxxxxx2",
          "from_coin_num": "200.00",
          "to_coin_num": "19.94",
          "time": "23 min ago",
          }
        ],
        "total": 100,
        "page": 1,
        "size": 10
    }
  }
```

##### Description of response

|name|type|description|
|:-----  |:-----|-----                           |
|address |string   |address of Participant  |
|from_coin |string   |from currency symbol  |
|to_coin |string   |to currency symbol  |
|from_coin_token |string   |from currency contract address（if taylor, default 1）  |
|to_coin_token |string   |to currency contract address （if taylor, default 1） |
|from_coin_num |string   |number of from currency  |
|to_coin_num |string   |number of to currency  |
|time |string   |UTC-HK time format  |