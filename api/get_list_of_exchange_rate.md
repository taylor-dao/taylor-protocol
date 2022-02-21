
##### Description #####

- get list of exchange rate

##### Request URL
- ` http://{ip_address}/exchange`

##### Request Method
- GET

##### Parameters

|name|required|type|description|
|:----    |:---|:----- |-----   |
|currency_symbol   |Y|string |currency symbol（default USD）|

##### Response #####

```
  {
  "code": 0,
  "msg": "success"
  "data":
		{
			"list":[
				{
					"coin_pair":"CNY/USD",//pair of Currency price
					"exchange_price":"30000",//number of USD
				},
				{
					"coin_pair":"EUR/USD",
					"exchange_price":"1800",
				},
				{
					"coin_pair":"HKD/USD",
					"exchange_price":"1800",
				},
				{
					"coin_pair":"RUB/USD",
					"exchange_price":"1800",
				},
				{
					"coin_pair":"USD/USD",
					"exchange_price":"1",
				},
			]
			"total":"5",//totals of pair
		}
  }
```


