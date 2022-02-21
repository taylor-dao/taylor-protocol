
    
##### Description

- invite list

##### Request URL
- ` http://{ip_address}/blockreward/invitation_record`
  
##### Request Method
- GET 

##### Parameters

|name|required|type|description|
|:----    |:---|:----- |-----   |
|address |Yes  |string |address   |
|block_height |Yes  |int64 |height of block   |
|page |Yes  |int |page  |
|size |Yes  |int |rows of per page   |

##### Response 

```
[
    {
        "invite_time": 1626154800,
        "status": 1,
        "address": "0x8B8B1E4b2E5E6664Fa4C15d5B9f3C818D282D784"
    }
]
```

##### Descripton of response

|name|type|description|
|:-----  |:-----|-----                           |
|invite_time |int64   |invite time  |
|status |uint8   |0 none of mining，1 is mining  |
|address |string   |address of inivation |








