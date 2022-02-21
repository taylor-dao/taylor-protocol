    
##### Description

-  block info and my asset about Liquidity mining  （webSocket push）

##### Request URL
- ` ws://{ip_address}/app_api/blockreward/flow_mining_ws`
  
##### Request Method
- GET 

##### parameters

|name|required|type|description|
|:----    |:---|:----- |-----   |
|address |Yes  |string |dh address   |

##### Response 

```
{
	"block_info": {
		"block_height": 3653,
		"mining_numb": "3653.000000000000000000"
	},
	"asset": {
		"flow_asset": "12954792782.010426000000000000",
		"flow_hash": "39719007001.821126979115581410"
	}
}

```
###### Response
|name|type|description|
|:----    |:---|:----- |-----   |
|msg_type |string |block_info is  about block's information，asset is about my asset  |
|blockHeight |int |height of block |
|miningNumb |string |mining number |

|name|type|description|
|:----    |:---|:----- |-----   |
|msg_type |string |block_info is about block's information,asset is about my asset |
|flow_asset |string |Liquidity asset |
|flow_hash |string |current Hashrate |





