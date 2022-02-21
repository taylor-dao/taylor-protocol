
    
##### Description

- Overview of the whole network

##### Request URL
- ` ws://{ip_address}/app_api/blockreward/overview_ws`
  
##### Request Method
- GET 

##### Parameters

|name|required|type|description|
|:----    |:---|:----- |-----   |

##### Response 

```
{
	"public_info": {
		"height": "3653",
		"award": "1",
		"time": "4",
		"total_circulation": "16850000",
		"history_mining_numb": "3653",
		"tx_count": "20004"
	},
	"hash_info": {
		"all_flow_hash": "79438014003.64",
		"flow_award": "0.5",
		"flow_mining_numb": "2",
		"all_dao_hash": "23831404201.09",
		"dao_award": "0.5",
		"dao_mining_numb": "2",
		"unit": "G"
	},
	"dh_info": {
		"price": "0.1",
		"market_price": "0",
		"total_tx": "0",
		"arr_tx": [{
			"dateTime": "2021-08-25 07:20:00",
			"tx_total": "0"
		}, {
			"dateTime": "2021-08-25 03:20:00",
			"tx_total": "0"
		}, {
			"dateTime": "2021-08-24 23:20:00",
			"tx_total": "0"
		}, {
			"dateTime": "2021-08-24 19:20:00",
			"tx_total": "0"
		}, {
			"dateTime": "2021-08-24 15:20:00",
			"tx_total": "0"
		}, {
			"dateTime": "2021-08-24 11:20:00",
			"tx_total": "0"
		}]
	}
}

```
##### Description of response（information about block） 

|name|type|description|
|:-----  |:-----|-----                           |
|public_info |string |block information
|height |string |height of block
|award |string |block reward
|time |string |block time
|total_circulation |string |total supply
|history_mining_numb |string |circulating supply
|tx_count |string |count of transaction

##### Description of response（Hashrate） 

|name|type|description|
|:-----  |:-----|-----                           |
|hash_info |string |Hashrate information
|all_flow_hash |string |Liquidity Hashrate
|flow_award |string |Liquidity mining rewards
|flow_mining_numb |string |Liquidity mining total
|all_dao_hash |string |DAO Hashrate
|dao_award |string |DAO mining rewards
|dao_mining_numb |string |DAO mining total

##### Description of response（taylor） 

|name|type|description|
|:-----  |:-----|-----                           |
|dh_info |string |taylor information
|price |string |price
|market_price |string |market price
|total_tx |string |the count of transaction in 24 hours
|all_tx |array |the count of all transactions（4 hours as 1 interval，6 intervals per day）
|dateTime |string |datetime of transaction
|tx_total |string |the count of transaction in 4 hours








