    
##### Describe

- search info according transaction hash

##### Request URL
- ` http://{ip_address}/getTransactionByHash `
  
##### Request Method
- POST 

##### parameter

|parameter|Require|type|Describe|
|:----    |:---|:----- |-----   |
|txHash |Yes  |string  |transaction hash|

##### Return Example 

``` 
  {
    "hash":"0xc6ef2fc5426d6ad6fd9e2a26abeab0aa2411b7ab17f30a99d3cb96aed1d1055b",
    "blockHash": "0xbeab0aa2411b7ab17f30a99d3cb9c6ef2fc5426d6ad6fd9e2a26a6aed1d1055b",
    "blockNumber": "0x15df", // 5599
    "transactionIndex":  "0x1", // 1
    "from":"0x407d73d8a49eeb85d32cf465507dd71d507100c1",
    "to":"0x85h43d8a49eeb85d32cf465507dd71d507100c1",
    "value":"0x7f110", // 520464
    "gas": "0x7f110", // 520464
    "gasPrice":"0x09184e72a000",
	"method":"common",
    "rawData":"0x603880600c6000396000f300603880600c6000396000f3603880600c6000396000f360",
	"signature":"87442245400603880600c6000396000f3603880600c6000396000f360",
  }
```

######Return Example Describe

|parameter|type|Describe|
|:-----  |:-----|-----                           |
|hash |string   |transaction hash  |
|blockHash |string   |block hash, display null when not package yet  |
|blockNumber |string   |block height, display null when not package yet |
|transactionIndex |string   |transaction position in the block, display null when not package yet  |
|from |string   |sender address  |
|to |string   |receiver address  |
|value |string   |transfer quantity  |
|gasLimit |string   |gas limit quantity  |
|gasUsed |string   |gas quantity  |
|gasPrice |string   |gas price  |
|method |string   |trade method: common, bind, imgTransfer, imgChainTransfer  |
|rawData |string   |16 hex: signature(decrypt it to get more info)  |
|signature |string   |transaction signature  |


##### Note 

- More error return code, please see "error code describe" in home page