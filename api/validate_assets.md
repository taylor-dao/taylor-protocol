##### Description #####

- validate assets

##### Request URL
- ` http://{ip_address}/validate_assets`

##### Request Method
- POST

##### Parameters

```
     {
	      "addr": "tl", //taylor address
		  "list": [
		        {
				"token_addr": "tlxxxxxxx", //address
				"tokens": "100",  //values
				},
		  ]
	}
```

##### Response #####

```
  {
    "code": 0,
	"msg": "success",
	"data": {
	    "status":"0",  //status（0: Success  1：assets not enough 2：The entered asset does not match the conditions）
		"min_assets": "1", //min assets
	}
  }
```

##### Description of response #####

|name|type|description|
|:-----  |:-----|-----                           |





