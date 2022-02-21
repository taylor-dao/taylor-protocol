    
##### Describe

- get block info according to block hash

##### Request URL
- ` http://{ip_address}/getBlockByHash `
  
##### Request Method
- POST 

##### parameter

|parameter|Require|type|Describe|
|:----    |:---|:----- |-----   |
|hash |Yes  |string  |block hash|

##### Return Example 

``` 
  {
    "number": "0x1b4", // 436
    "hash": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331",
    "parentHash": "0x9646252be9520f6e71339a8df9c55e4d7619deeb018d2a3f2d21fc165dde5eb5",
    "transactionsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
    "stateRoot": "0xd5855eb08b3387c0af375e9cdb6acfc05eb8f519e419b874b6ff2ffda7ed1dff",
    "miner": "0x4e65fda2159562a496f9f3522f89122a3088497a",
    "difficulty": "0x027f07", // 163591
    "totalDifficulty":  "0x027f07", // 163591
    "extraData": "0x0000000000000000000000000000000000000000000000000000000000000000",
    "size":  "0x027f07", // 163591
    "gasLimit": "0x9f759", // 653145
    "gasUsed": "0x9f759", // 653145
    "timestamp": "0x54e34e8e" // 1424182926
    "transactions": [{...},{ ... }] 
  }
```

######Return Example Describe 

|parameter|type|Describe|
|:-----  |:-----|-----      
|number |string   |区块height: 16 hex  |
|hash |string   |block hash  |
|parentHash |string   |parent hash  |
|transactionsRoot |string   |block in the transaction node |
|stateRoot |string   |block final status  |
|receiptsRoot |string   |block in the receipt tree  |
|miner |string   |mining address  |
|difficulty |string   |block difficult  |
|totalDifficulty |string   |total difficult on the chain  |
|extraData |string   |block extra data  |
|size |string   |Number of bytes on block  |
|gasLimit |string   |maximum gas in this block  |
|gasUsed |string   |all the gas in block transaction  |
|timestamp |string   |block timestamp  |
|transactions |string   |transaction object or 32 bytes transaction hash  |

##### Note 

- More error return code, please see "error code describe" in home page