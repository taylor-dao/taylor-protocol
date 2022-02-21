    
##### Describe

- smart contract deploy

##### Request URL
- ` http://{ip_address}/createContract `
  
##### Request Method
- POST 

##### parameter

|parameter|Require|type|Describe|
|:----    |:---|:----- |-----   |
|ownerAddress |Yes  |string  |creator|
|symbol |Yes  |string  |contract symbol|
|name |Yes  |string  |contract name|
|decimals |Yes  |string  |decimal precision|
|totalSupply |Yes  |string  |total Supply: 10 hex integer|
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
|:-----  |:-----|-----      
|txID |string   |transaction hash  |
|rawData |string   |rawData；transaction json format |

##### Note 

- More error return code, please see "error code describe" in home page