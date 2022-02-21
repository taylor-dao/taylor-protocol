    
##### Describe

- search contract info

##### Request URL
- ` http://{ip_address}/getContract `
  
##### Request Method
- POST 

##### parameter

|parameter|Require|type|Describe|
|:----    |:---|:----- |-----   |
|contractAddress |Yes  |string  |contract address|


##### Return Example 

``` 
  {
    "ownerAddress":"",//contract creator
	"abi":"",//abi信息（json）
	"bytecode":"",//contract binary
	"name":"",//contract name
	"symbol":"",/contract symbol
	"decimals":"",//contract decimal
	"totalSupply":"",//contract quantity
  }
```

######Return Example Describe 

|parameter|type|Describe|
|:-----  |:-----|-----      
|ownerAddress |string  |creator|
|abi |string  |smart contract ABI (json)|
|bytecode |string  |binary of contract, HEX format|
|name |string  |contract name|
|symbol |string  |contract symbol|
|decimals |string  |contract decimal|
|totalSupply |string  |contract quantity|

##### Note 

- More error return code, please see "error code describe" in home page