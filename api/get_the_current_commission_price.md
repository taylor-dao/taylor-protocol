##### Brief description

- Get the current commission price

##### Request URL
- ` http://xxx/getGasPrice `
  
##### Request Method
- GET 

##### Parameters

|parameter name|must|type|description|
|:---- |:---|:----- |----- |

##### Return Example 

``` 
   {
    "code": 200,//normal 200; exception other
    "msg" : "",//exception has message output
    "data" : {
      "quantity" : "0.00000001", // unit is dh
		// The following fields are the required gasLimit for the corresponding interface (amount of bandwidth = gasLimit)
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

Translated with www.DeepL.com/Translator (free version)

##### Return parameter description 

|Parameter name|Type|Description|
|:-----  |:-----|-----                           |
|quantity |long   |Integer，Current gas price in wei  |

##### Remark 

-For more return error codes, please see the error code description on the homepage



