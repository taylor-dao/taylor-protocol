
##### Description #####

- WebSocket push list of exchange rate

##### Request URL
- ` http://{ip_address}/currency_exchange_list_wSocket`

##### Request Method
- GET

##### Parameters

|name|required|type|description|
|:----    |:---|:----- |-----   |
|currency    |Y|string |（CNY, EUR, HKD, RUB, USD）    |

##### Response #####

```
  {
  "code": 0,
  "msg": "success"
  "data":
		{
			list:[
				{
					"currency_symbol":"BTC"	//currency symbol
					"price":"4000",	//exchange rate
					"currency":"EUR",	//Banknote symbol
				},
				{
					"currency_symbol":"LTC"	
					"price":"4000",	
					"currency":"EUR",
				},
				{
					"currency_symbol":"TRX"	
					"price":"4000",	
					"currency":"EUR",	
				},
			]
		}
  }
```

##### Description of response #####

|name|type|description|
|:-----  |:-----|-----
|list |string   |exchange rate list of currency |

