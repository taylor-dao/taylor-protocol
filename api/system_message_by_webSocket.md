    
##### Description

- notice and system message push by webSocket 

##### Request URL
- ` http://{ip_address}/message_webSocket/{uuid}   `
  
##### Request Method
- GET 

##### Parameters

|name|required|type|description|
|:----    |:---|:----- |-----   |
|client_id    |N|string |client id   |

##### Response #####

```
  {
	"t": 1,	//system message
	"c":[ {
	     "title": "title"，
		 "created_at": "2021-01-02 03:03:03"，
		 "msg": "<html>content</html>",
		 "id":10,
		 "title_en":"english title",
         "msg_en":"english msg",
		 "timestamp": 1630984131//timestamp
	}]
  }
  or
  {
	"t": 2,	//transfer message
	"c":[ {
	"id": 10,
"tx_id":"asfafasfaf",
"block_num":10,
"from_addr":"from address",
"to_addr":"to address",
"tokens":"contract address",
"amount":"amount of transfer",
"fee":"fee",
"timestamp":1630984131//timestamp,
"coin":"name of coin，btc/eth/ltc/trx",
"type":1 // 1-IN，2-OUT
"tx_type":1,//1. Ordinary transfer，2. Token transfer，3. swap transaction，4. cross area transfer ，5. cross chain transfer
"bandwidth":122,//bandwidth
	}]
  }
```
##### Description of response

|name|type|description|
|:-----  |:-----|-----                           |


