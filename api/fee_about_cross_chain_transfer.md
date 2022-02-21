
    
##### Description

- the fee about cross chain transfer

##### Request URL
- ` http://{ip_address}/chain_transfer_fee `
  
##### Request Method
- GET 

##### Parameters

|name|required|type|description|
|:----    |:---|:----- |-----   |
|coin_id |Y  |string |coin id  |

##### Response 

``` 
  {
    "code": 0,
	"msg": "success",
    "data": {
	"min":"12.00",// Minimal fees
	"max":"15.00",//Maximum fees
	"coin_id":"asfereasr"// coin id
    }
  }
```




