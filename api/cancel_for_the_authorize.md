
##### Describe

- cancel for the authorize

##### Request URL
- ` http://{ip_address}/cancelAuthorize `

##### Request Method
- POST

##### parameter

|parameter|Require|type|Describe|
|:----    |:---|:----- |-----   |
|addr |Yes  |string  |authorized address|
|authorizedAddr |Yes  |string  |authorized address|
|type | Yes | string | 1-authorize for cross partition，2-authorize for cross chain|
|chainType | Yes |string | type of chain |
|gasLimit |Yes  |string  |gas quantitylimit|
|gasPrice |Yes  |string  |gas price|

##### Return Example

```
  {
    "txID": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331",//transaction hash
    "rawData": "0x9646252be9520f6e71339a8df9c55e4d7619deeb018d2a3f2d21fc165dde5eb5"
  }
```

######Return Example Describe

|parameter|type|Describe|
|:-----  |:-----|----- |
|txID |string   |transaction hash  |
|rawData |string   |rawData；transaction json  |

##### Note

- More error return code, please see "error code describe" in home page