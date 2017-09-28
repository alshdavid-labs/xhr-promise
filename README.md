# XHR Promise Wrapper


NOTE
--
For older browsers you need a promise polyfill. [https://www.npmjs.com/package/promise-polyfill](https://www.npmjs.com/package/promise-polyfill)

This is for JSON based RESTFull APIs only and will automatically parse your response and payload into JSON for transport.

Statuses between 200 and 299 are `resolved` (`.then()`)
Statuses that are not between 200 and 299 are `rejected` (`.catch()`)

Usage
--
```js
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