
##### Brief description
- Check if authorization is granted

##### Request URL
- ` http://xxx/isAuthorize `

##### Request Method
- GET

##### Parameters

|parameter name|must|type|description|
|:---- |:---|:----- |----- |
|addr |yes |string |mastercoin address|

##### Return Example

```
 {
    "code": 200,//normal 200; exception other
    "msg" : "",//exception has message output
    "data" : {
        "isBool": true/false,//whether to authorize
    }
  }
  
```

##### Return parameter description

|parameter name|type|description|
|:----- |:-----|----- |
|isBool |bool |transaction h is authorized or not |

##### Remarks

- For more return error codes, please see the error code description on the home page