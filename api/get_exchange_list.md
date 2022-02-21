
##### Description #####

- get exchange list 

##### Request URL
- ` http://{ip_address}/exchange_rate`

##### Request Method
- GET

##### Parameters

|name|required|type|description|
|:----    |:---|:----- |-----   |
| | | | | |

##### Response #####

```
  {
  "code": 0,
  "msg": "success"
  "data":
		{
			"list":[
				{
					"name":"CNY",//name
					"symbol":"￥",//symbol
					"exchange_rate":"6.4788",//USD/CNY
				},
				{
					"name":"USD",//name
					"symbol":"$",//symbol
					"exchange_rate":"1",//USD/USD
				}
			]
			"total":"5",//totals
		}
  }
```
##### Description of response

|name|type|description|
|:-----  |:-----|----- |
|result|string|coin data|