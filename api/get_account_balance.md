
##### Describe

- get account balance

##### Request URL
- ` http://{ip_address}/get_balance `

##### Request Method
- GET

##### parameter

|parameter|Require|type|Describe|
|:----    |:---|:----- |-----   |
|access_key|Yes  |string |access_key|
|token |no|string  |contract address|
|sign      |Yes  |string |base64(HmacSHA256(data + access_secret)) |

##### Return Example

```
   {
    "code": 200,//200-success；200-success
    "msg" : "",//abnormal have some infoexport
    "data" : {
       "balance" : "0.00230412",// main coin balance
	   "bandwidth": "2000" // bandwidth points
	   "list": {
	       "symbol": "BTC", //symbol
		   "balance": "1000",//balance
		   "contract_addr": "", //contract address
	   }
    }
  }

```

######Return Example Describe

|parameter|type|Describe|
|:-----  |:-----|-----                           |
|balance |string   |main coin balance  |
|bandwidth |string   |bandwidth points  |
|symbol |string   |symbol  |
|balance |string   |balance  |
|contract_addr |string   |contract address  |

##### Note

- More error return code, please see "error code describe" in home page