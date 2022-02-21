

##### Description

-  homepage's api

##### Request URL
- ` http://{ip_address}/home_page_interface`

##### Request Method
- GET

##### Parameters

|name|required|type|description|
|:----    |:---|:----- |-----   |

##### Response

```
  {
    "code": 0,
	"msg": "success",
    "data": {
     	  "official_website_addr": "http://xxx",
          "white_paper_addr": "http://xxx",
		  "hot_search_addr": "",
		  "banner_list": {
		         "img_addr": "",
				 "img_link_addr": "",
		  }
    }
  }
```

##### description of Response

|name|type|description|
|:-----  |:-----|-----                           |
|official_website_addr |string   |official website  |
|from_coin |string   | the address of whitepaper  |
|hot_search_addr |string   |hot address  |
|img_addr |string   |address of image  |
|img_link_addr |string   | the link of image's redirect  |