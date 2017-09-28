# XHR Promise Wrapper


NOTE
--
For older browsers you need a promise polyfill. [Try Bluebird](http://bluebirdjs.com/docs/getting-started.html)

This is for JSON based RESTFul APIs only. It will automatically parse your response and payload into JSON for transport.

Statuses between 200 and 299 are `resolved` (`.then()`)<br>Statuses that are not between 200 and 299 are `rejected` (`.catch()`)

Usage
--
```js
httpJSON("https://api.yourthing.com/login", {
    method: "POST",
    headers: {
        authorization: "I2WFQJJI594EBMZ3U9E4YH1JT24G54"
    },
    body: {
        identifier : "String",
        password : "String" 
    }
})
.then(json => console.log(json))
.catch(json => console.log(json))
```
