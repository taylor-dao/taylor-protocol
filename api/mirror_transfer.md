
##### Describe

- mirror transfer，gettransaction hash;
- when the transfer come from main partition to the other partition, should be use main partition private key

##### Request URL
- ` http://{ip_address}/imgTransfer `

##### Request Method
- POST

##### parameter

|parameter|Require|type|Describe|
|:----    |:---|:----- |-----   |
|from |Yes  |string  |which address to create transaction, when type=in: Taylor address, type=out: partition address|
|type |Yes  |string  |in: main partition transfer to other partition; out: partition transfer to main partition|
|value |Yes  |string  |transfer amount|
|toAddress |Yes  |string  |receiver address. type=in: partition address, type=out: Taylor address|
|contractAddress |Yes  |string  |Taylor contract address|
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