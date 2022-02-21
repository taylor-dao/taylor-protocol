

##### Describe

- get market price of currently pool ticker

##### Request URL
- ` http://{ip_address}/pool_ticker `

##### Request Method
- GET

##### parameter

|parameter|Require|type|Describe|
|:----    |:---|:----- |-----   |
|access_key|Yes  |string |access_key|
|pair_code  |否  |string |coin pair info   |
|sign      |Yes  |string |base64(HmacSHA256(data + access_secret)) |

##### Return Example

```
  {
    "code": 200,//200-success；other abnormal
	"msg": "",//abnormal message
    "data": {
      "list": [
	  	{
			"pair_code": "BTC/USDT",//swap transaction info
			"trade_price": "50000",//latest transaction price
		}
	  ],
    }
  }
```

######Return Example Describe

|parameter|type|Describe|
|:-----  |:-----|-----                           |
|pairCode |string   |swap transaction info  |
|tradePrice |string   |latest transaction price  |

##### Note

- More error return code, please see "error code describe" in home page




