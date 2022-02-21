

    
##### Description

-  list of flow pools swap

##### Request URL
- ` http://{ip_address}/flow_pool_swap_list  `
  
##### Request Method
- GET 

##### Parameters

|name|required|type|description|
|:----    |:---|:----- |-----   |
|pool_token |Y  |string | token address of flow    |
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
          "pair": "DH/USDT",
          "from_coin": "DH",
          "to_coin": "USDT",
          "from_coin_token": "1" ,
          "to_coin_token": "tlxxxxxxxx2",
          "from_coin_num": "200.00",
          "to_coin_num": "19.94",
          "time": 16015555555,
          "status": "success",
		  "tx_hash": "0x12xxxxxxxxxxxxxx",
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
|pair |string   |trading pair  |
|from_coin |string   |from coin  |
|to_coin |string   |to coin  |
|from_coin_token |string   |from coin contract address（if taylor, default 1）  |
|to_coin_token |string   |to coin contract address（if taylor,default 1） |
|from_coin_num |string   |from coin amount  |
|to_coin_num |string   |to coin amount  |
|time |long   |timestamp  |
|status |string   |status  |
|tx_hash |string   |transaction hash  |
