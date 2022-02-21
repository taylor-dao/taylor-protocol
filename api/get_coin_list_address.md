
##### Describe

- get coin list address

##### Request URL
- ` http://{ip_address}/get_contract `

##### Request Method
- GET

##### parameter

|parameter|Require|type|Describe|
|:----    |:---|:----- |-----   |
|access_key|Yes  |string |access_key|
|sign      |Yes  |string |base64(HmacSHA256(data + access_secret)) |

##### Return Example

```
  {
    "code": 200,//200-success；other abnormal
	"msg": "",//abnormal message
    "data": {
      "list": [
	  	{
			"symbol": "BTC",//coin symbol
			"addr": "tlxxxxxx",//coin address
		}
	  ],

    }
  }
```

######Return Example Describe

|parameter|type|Describe|
|:-----  |:-----|-----                           |
|symbol |string   |coin symbol  |
|addr   |string   |coin address  |

##### Note

- More error return code, please see "error code describe" in home page




