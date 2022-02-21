
##### Describe

- addition flow tick price according to scale

##### Request URL
- ` http://{ip_address}/addFlowTickPrice`

##### Request Method
- GET

##### parameter

|parameter|Require|type|Describe|
|:----    |:---|:----- |-----   |
|fee |Yes  |string  |rate of fee|
|tick |Yes  |int  |tick|
|type |Yes  |int  |1: subtract , 2: addition|

##### Return Example

```
  {
    "price": "0.997",//scale price
	"sqrtPrice": "0.997",//scale price to root sign
	"tick": "0.997",//tick value
  }
```

######Return Example Describe

|parameter|type|Describe|
|:-----  |:-----|-----      |
|price |string   |scale price  |
|sqrtPrice |string   |scale price to root sign  |
|tick |int   |tick value  |

##### Note

- More error return code, please see "error code describe" in home page