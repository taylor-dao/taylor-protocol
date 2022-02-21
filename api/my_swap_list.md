    
##### Description

- my swap list

##### Request URL
- ` http://{ip_address}/swap_list `
  
##### Request Method
- GET 

##### Parameters

|name|required|type|description|
|:----    |:---|:----- |-----   |
|address |Yes  |string |taylor address  |
|page |Yes  |int |page （default is 1）   |
|size |Yes  |int |size （default is 20）   |

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
          "time": "06/18 16:36:28",
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
|from_coin |string   |currency symbol sold  |
|to_coin |string   |currency symbol obtained   |
|from_coin_token |string   |address of contract of currecy symbol sold（if taylor, default 1）  |
|to_coin_token |string   |address of contract of currecy symbol  obtained（if taylor, default 1） |
|from_coin_num |string   |number of  currency symbol  sold   |
|to_coin_num |string   |number currency symbol sold   |
|time |string   |UTC-HK time format  |
|status |string   |status  |
|tx_hash |string   |transanction hash  |





