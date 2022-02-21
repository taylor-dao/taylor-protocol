
##### Describe

- cross chain transfer from mirror，gettransaction hash;
- using image address's private key to sign
##### Request URL
- ` http://{ip_address}/imgChainTransfer `

##### Request Method
- POST

##### parameter

|parameter|Require|type|Describe|
|:----    |:---|:----- |-----   |
|from |Yes  |string  |from image address (or you can call partition address)|
|type |Yes  |string  |in(image receive assets); out(withdraw from image)|
|value |Yes  |string  |transfer amount|
|contractAddress |Yes  |string  |image address's Taylor contract address|
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