
    
##### Description

-  description of my DAO

##### Request URL
- ` http://{ip_address}/app_api/blockreward/my_dao`
  
##### Request Method
- GET 

##### Parameters

|name|required|type|description|
|:----    |:---|:----- |-----   |
|address |Yes  |string   |taylor address      |

##### Response 

```
{
	"code": 0,
	"msg": "Success",
	"data": {
		"total_mining_numb": "1",
		"mining_numb": "0",
		"none_mining_numb": "1",
		"dao_mining_earnings": "0",
		"dao_assets": "0",
		"dao_hash": "0",
		"hash_proportion": "0",
		"is_bind":true,
	}
}
```


##### Description of response

|name|type|description|
|:-----  |:-----|-----                           |
|total_mining_numb |string   |totals of mining number  |
|mining_numb |string   |mining number  |
|none_mining_numb |string   |number of people not mined |
|dao_mining_earnings |string   |profit of DAO |
|dao_assets |string   |asset of DAO  |
|dao_hash |string   |DAO Hashrate |
|hash_proportion |string   |Proportion of DAO computing power |
|is_bind |bool |  parent's address binded ? |





