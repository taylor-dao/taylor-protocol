
##### Describe

- check it is authorized

##### Request URL
- ` http://{ip_address}/isAuthorize `

##### Request Method
- GET

##### parameter

|parameter|Require|type|Describe|
|:----    |:---|:----- |-----   |
|addr |Yes  |string  |Taylor/image address|
|contractAddr|Yes  |string  |contract address|

##### Return Example

```
  {
    "isBool": true/false,//is authorized
  }
```

######Return Example Describe

|parameter|type|Describe|
|:-----  |:-----|----- |
|isBool |bool   |check the transaction is authorized  |

##### Note

- More error return code, please see "error code describe" in home page