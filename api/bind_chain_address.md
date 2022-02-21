
##### Describe #####

- bind chain address

##### Request URL
- ` http://{ip_address}/bindChain `

##### Request Method
- POST

##### parameter  Body

|parameter|Require|type|Describe|
|:----    |:---|:----- |-----   |
|from |Yes  |string  |sender address；Taylor chain address|
|chainType |Yes  |string  |btc、eth、ltc、tron...|
|address |Yes  |string  |cross chain address|
|authorizeAddr |否  |string  |authorized address |
|gasLimit |Yes  |string  |gas quantitylimit|
|gasPrice |Yes  |string  |gas price|

##### Return Example #####

```
  {
    "txID": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331",//transaction hash
    "rawData": "0x9646252be9520f6e71339a8df9c55e4d7619deeb018d2a3f2d21fc165dde5eb5"
  }
```

######Return Example Describe #####

|parameter|type|Describe|
|:-----  |:-----|-----      
|txID |string   |transaction hash  |
|rawData |string   |rawData；transaction json  |

##### Note #####

- More error return code, please see "error code describe" in home page