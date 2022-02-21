    
##### Describe

- according transaction hash

##### Request URL
- ` http://{ip_address}/getTransactionReceipt `
  
##### Request Method
- POST 

##### parameter

|parameter|Require|type|Describe|
|:----    |:---|:----- |-----   |
|txHash |Yes  |string  |transaction hash|

##### Return Example 
：
``` 
  {
     transactionHash: '0xb903239f8543d04b5dc1ba6579132b143087c68db1b2168786408fcbce568238',
     transactionIndex:  '0x1', // 1
     blockNumber: '0xb', // 11
     blockHash: '0xc6ef2fc5426d6ad6fd9e2a26abeab0aa2411b7ab17f30a99d3cb96aed1d1055b',
     cumulativeGasUsed: '0x33bc', // 13244
     gasUsed: '0x4dc', // 1244
     contractAddress: '0xb60e8dd61c5d32be8058bb8eb970870f07233155', // or null, if none was created
     logs: [{
         // logs as returned by getFilterLogs, etc.
     }, ...],
     status: '0x1'，
	 "rawData":"0x603880600c6000396000f300603880600c6000396000f3603880600c6000396000f360",
	"signature":"5548580c6000396000f3603880600c6000396000f360",
  }
```

######Return Example Describe

|parameter|type|Describe|
|:-----  |:-----|-----                           |
|transactionHash |string   |transaction hash  |
|transactionIndex |string   |transaction position in the block, display null when not package yet  |
|blockHash |string   |block hash, display null when not package yet  |
|blockNumber |string   |block height, display null when not package yet |
|from |string   |sender address  |
|to |string   |receiver address  |
|value |string   |transfer quantity  |
|contractAddress |string   |contact address , if no address then null  |
|logs |string   |log info  |
|cumulativeGasUsed |string   |block used gas quantity  |
|gasLimit |string   |gas limit quantity  |
|gasUsed |string   |gas quantity  |
|gasPrice |string   |gas price  |
|method |string   |trade method: common, bind, imgTransfer, imgChainTransfer  |
|status |string   |1=success; 0=fail  |
|rawData |string   |16 hex: signature(decrypt it to get more info)  |
|signature |string   |transaction signature  |

##### Note 

- More error return code, please see "error code describe" in home page