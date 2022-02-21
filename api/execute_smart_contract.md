    
##### Describe

- execute smart contract；to execute smart contract; function type must be view or pure

##### Request URL
- ` http://{ip_address}/triggerConstantContract `
  
##### Request Method
- POST 

##### parameter

|parameter|Require|type|Describe|
|:----    |:---|:----- |-----   |
|ownerAddress |Yes  |string  |who trigger the contract|
|contractAddress |Yes  |string  |contract address|
|functionSelector |Yes  |string  |trigger method : balanceOf(address)|

##### Return Example 

``` 
  {
    "result":"10.23"//contract quantity: 10 hex
  }
```

######Return Example Describe 

|parameter|type|Describe|
|:-----  |:-----|-----      
|result |string   |contract quantity: 10 hex  |

##### Note 

- More error return code, please see "error code describe" in home page