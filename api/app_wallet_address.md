
##### Description #####

- wallet address

##### Request URL
- ` http://{ip_address}/app_wallet`

##### Request Method
- POST

##### Parameters

```
     {
	      "uuid": "1", //user uuid 
		  "list": [
		        {
		        "chain_type": "btc", //type of blockchain，btc/eth/ltc/tron
				"addr": "tlxxxxxxx", //wallet address
				"tokens": "1,2,3",  //contract address(Comma separated)
				},
				{
		        "chain_type": "ltc",
				"addr": "tlxxxxxxx",
				"tokens": "1,2,3",
				},
		  ]
	}
```

##### Response #####

```
  {
    "code": 0,
	"msg": "success",
  }
```

##### Description of response #####

|name|type|description|
|:-----  |:-----|-----                           |





