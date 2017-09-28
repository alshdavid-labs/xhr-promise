# XHR Promise Wrapper

## Usage

```
xhr("https://api.yourthing.com/login", {
	method: "POST",
  headers: {
  	authorization: "I2WFQJJI594EBMZ3U9E4YH1JT24G54",
    api_key: "fff5b812-04a0-40d9-9e43-79298a990c46"
  },
  body: {
    identifier : "String",
    password : "String" 
  }
})
.then(json => console.log(json))
.catch(json => console.log(json))
```
