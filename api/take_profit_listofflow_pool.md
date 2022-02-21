    
##### Description

- take profit list of flow pool

##### Request URL
- ` http://{ip_address}/flow_pool_take_profit_list  `
  
##### Request Method
- GET 

##### Parameters

|name|required|type|description|
|:----    |:---|:----- |-----   |
|address |Y  |string |taylor address   |
|page |Y  |int |page （default 1）   |
|size |Y  |int |size （default > 0）   |

##### Response

``` 
 {
    "code": 0,
    "msg": "Success",
    "data": {
        "list": [
            {
                "pair": "eth/usdt",
                "from_coin": "eth",
                "to_coin": "usdt",
                "from_coin_token": "token0_addr",
                "to_coin_token": "token1_addr",
                "take_coin0": "eth",
                "take_coin1": "usdt",
                "take_fee0": "88",
                "take_fee1": "99",
                "time": "2021",
                "status": "Success",
                "tx_hash": "tx_id",
                "flow_order_hash": "88"
            }
        ],
        "total": 0,
        "page": 1,
        "size": 20
    }
}
```

##### Description of response

|name|type|description|
|:-----  |:-----|-----                           |
|pair |string   |trading pair  |
|from_coin |string   |symbol of coin sold  |
|to_coin |string   |symbol of coin obtained  |
|from_coin_token |string   |contract address of coin sold （if taylor ,default 1）  |
|to_coin_token |string   |contract address of coin obtained（if taylor ,default 1） |
|take_coin0 |string   |coin 0  |
|take_coin1 |string   |coin 1 |
|take_fee0 |string   |coin 0 profit amount |
|take_fee1 |string   |coin 1 profit amount   |
|time |string   |UTC-HK time format  |
|status |string   |status  |
|tx_hash |string   | transaction hash  |
|flow_order_hash |string   |hash of flow order  |

