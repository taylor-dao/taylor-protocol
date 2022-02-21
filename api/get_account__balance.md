
##### Describe

- get account balance

##### Request URL
- ` http://{ip_address}/getBalance `

##### Request Method
- POST

##### parameter

|parameter|Require|type|Describe|
|:----    |:---|:----- |-----   |
|address |Yes  |string  |public key address|

##### Return Example

```
  {
    "quantity" : "0.00230412",// unit: Taylor
	"bandwidth": 2000 // bandwidth
	"bandwidthTotal": 20000, //total bandwidth
  }
```

######Return Example Describe 

|parameter|type|Describe|
|:-----  |:-----|-----                           |
|quantity |long   |integer, unit: wei  |
|bandwidth |int  |unused bandwidth|
|bandwidthTotal |int  |total bandwidth|

##### Note 

- More error return code, please see "error code describe" in home page