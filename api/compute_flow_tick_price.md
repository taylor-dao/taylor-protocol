
##### Describe

- compute flow tick price 

##### Request URL
- ` http://{ip_address}/computeFlowTickPrice    `

##### Request Method
- GET

##### parameter

|parameter|Require|type|Describe|
|:----    |:---|:----- |-----   |
|feeRate |Yes  |string  |rate of fee|
|minNum |No     |string  |min value|
|maxNum |No     |string  |max value|

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