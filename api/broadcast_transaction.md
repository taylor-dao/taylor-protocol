##### Describe

- broadcast transaction

##### Request URL
- ` http://{ip_address}/broadcastTransaction `
  
##### Request Method
- POST 

##### parameter

|parameter|Require|type|Describe|
|:----    |:---|:----- |-----   |
|txID |Yes  |string  |broadcast transaction id|
|rawData |Yes  |string  |transaction raw data json|
|signature |Yes  |string  |signature list, if multi element, will be use multi sign|
|scripts |no|string  |script info|

##### Return Example 

``` 
  {
    "result": true
  }
```

######Return Example Describe 

|parameter|type|Describe|
|:-----  |:-----|-----      
|result |string   |broadcast result  |

##### Note 

- More error return code, please see "error code describe" in home page