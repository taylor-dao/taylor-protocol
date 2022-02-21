

    
##### Describe

- get currently fee

##### Request URL
- ` http://{ip_address}/getGasPrice `
  
##### Request Method
- GET 

##### parameter

|parameter|Require|type|Describe|
|:----    |:---|:----- |-----   |

##### Return Example 

``` 
   {
    "code": 200,//200-success；200-success
    "msg" : "",//abnormal have some infoexport
    "data" : {
      "quantity" : "0.00000001", // unit: Taylor
		// gas limit(bandwidth=gasLimit）
		"createTransaction":300,
		"triggerSmartContract":300,
		"bindChain":300,
		"imgTransfer":300,
		"imgChainTransfer":300,
		"bindDirectAddress":300,
		"createContract":300,
		"takeMiningFin":300,
		"createFlowPool":300,
		"addFlowPool":300,
		"takeFlowPool":300,
		"sendSwap":300,
		"takeFlowPoolProfit":300,
		"addPosition": 300,
		"authorize":300 
    }
  }

```

######Return Example Describe 

|parameter|type|Describe|
|:-----  |:-----|-----                           |
|quantity |long   |integer, unit: wei  |

##### Note 

- More error return code, please see "error code describe" in home page



