##### Brief description
- Broadcast Transactions

##### Request URL
- ` http://xxx/broadcastTransaction `
  
##### Request Method
- POST 

##### Parameters

|parameter name|must|type|description|
|:---- |:---|:----- |----- |
|txID |yes |string |txId of the broadcast transaction|
|raw_data |yes |string |transaction json|
|signature |is |string |a list of transaction signatures, using multiple signatures when there are multiple elements|


##### Return Example 

``` 
   {
    "code": 200,//normal 200; exception other
    "msg" : "",//Exception with message output
  }
```

##### Return parameter description 

|parameter name|type|description|
|:----- |:-----|-----      


##### Remarks 

- For more return error codes, please see the error code description on the home page

Translated with www.DeepL.com/Translator (free version)