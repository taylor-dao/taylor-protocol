
##### Describe

- query for image address info(binding address; query balance)
- this api has be deprecated

##### Request URL
- ` http://{ip_address}/imgAddressInfo `

##### Request Method
- POST

##### parameter

|parameter|Require|type|Describe|
|:----    |:---|:----- |-----   |
|from |no  (choose one from two)|string  |sender address；Taylor address|
|imgAddress |no  (choose one from two)|string  |image address|
|contractAddress |no|string  |image address's contract address; origin chain|

##### Return Example

```
  {
    "result":
		{
			"ownerAddress":"tlxxxxxxxx",//Taylor address
			"datas":[
				{
					"chainType":"eth",//type of chain
					"imgAddress":"",//image address
					"imgBalance":"",//image address balance
					"imgTokens":[
						{
							"contractAddress":"",//image address's contract address (outer chain);
							"imgTokenbalance":"",//image address balance
						}
					],//token list
				}
			]
		}
  }
```

######Return Example Describe

|parameter|type|Describe|
|:-----  |:-----|-----
|result |string   |Taylor address  |

##### Note

- More error return code, please see "error code describe" in home page