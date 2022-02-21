    
##### Description

- My flow profit

##### Request URL
- ` http://{ip_address}/flow_profit`
  
##### Request Method
- GET 

##### Parameters

|name|required|type|description|
|:----    |:---|:----- |-----   |
|address |Y  |string |taylor address   |

##### Response 

``` 
  {
    "code": 0,
	"msg": "success",
    "data": {
      "flow_usdt_profit": "37263.67",
      "already_take_profit": "20000",
      "not_take_profit": "17263.67",
    }
  }
```

##### Description of response 

|name|type|description|
|:-----  |:-----|-----                           |
|flow_usdt_profit |string   |my flow profit（USDT equivalent）  |
|already_take_profit |string   |take profit already  |
|not_take_profit |string   | take profit later  |




