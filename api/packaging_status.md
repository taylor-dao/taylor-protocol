##### Description #####

- get packaging status

##### Request URL
- ` http://{ip_address}/packaging_status`

##### Request Method
- POST

##### Parameters

```
     {
		  "list": [
		        {
		        "tx_hash": "0xce07d1fb01f81680781d1d02182f76403c5cc5215d68e85c7502048007200010",
				},
				{
		         "tx_hash": "0xce07d1fb01f81680781d1d02182f76403c5cc5215d68e85c7502048007200010",
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
	     list:[
		    {
			 "tx_hash": "0xce07d1fb01f81680781d1d02182f76403c5cc5215d68e85c7502048007200010",
			 "exec_status": 1,
			 "status": 1,
			}
		 ]
	}
  }
```

##### Description of response #####

|name|type|description|
|:-----  |:-----|-----                           |
|tx_hash | string | hash/txId |
|exec_status| int | status  1. wait，2. execution，3. finish pending |
|status| int | status  1 (success) or 0 (fail) |
