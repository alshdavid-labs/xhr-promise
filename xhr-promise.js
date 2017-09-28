function httpJSON(url, options) {
    return new Promise(function(response, reject) {
        let xmlHttp = new XMLHttpRequest()
        xmlHttp.onreadystatechange = function() {
            try {
                if (xmlHttp.readyState == 4 && (xmlHttp.status >= 200 && xmlHttp.status <= 299)) {
                    response(JSON.parse(xmlHttp.responseText))
                }
                if (xmlHttp.readyState == 4 && (xmlHttp.status <= 199 || xmlHttp.status >= 300)) {
                    reject(JSON.parse(xmlHttp.responseText))
                }
            } catch (err) {
                if (err.message.indexOf("SyntaxError") != -1) return console.log("Invalid JSON Response")
                console.log(err.message)
            }
        }
        xmlHttp.open(options.method.toUpperCase(), url, true)

        for (header in options.headers) {
            xmlHttp.setRequestHeader(header, options.headers[header])
        }

        try {
        		if (options.body) xmlHttp.setRequestHeader("Content-Type", "application/json")
            xmlHttp.send(JSON.stringify(options.body || {}))
        } catch (err) {
            if (err.message.indexOf("SyntaxError") != -1) return console.log("Invalid JSON Payload")
        }
    })
}


function xhr(url) {

	this.options = {
	  url: url,
  	method: "GET",
  	headers : {},
    body: {},
    type: "application/json"
  }
  
  this.get = function() 		{ this.options.method = "GET"; return this }
	this.post = function() 		{ this.options.method = "POST"; return this }
  this.put = function() 		{ this.options.method = "PUT"; return this }
  this.patch = function() 	{ this.options.method = "PATCH"; return this }
  this.delete = function()  { this.options.method = "DELETE"; return this }
  
  this.headers = function(headers){ this.options.headers = headers; return this }
  this.body = function(body){ this.options.body = body;	return this }
  
  this.json = function(string) { this.options.type = "application/json"; return this }
  this.text = function(string) { this.options.type = "text/plain"; return this }
  
  
  
  this.go = function() {
  	let options = this.options
    return new Promise(function(response, reject) {
    
        let xmlHttp = new XMLHttpRequest()
        xmlHttp.onreadystatechange = function() {
            try {
                if (xmlHttp.readyState == 4 && (xmlHttp.status >= 200 && xmlHttp.status <= 299)) {
                    if (options.type == "application/json") response(JSON.parse(xmlHttp.responseText))
                    if (options.type == "text/plain") response(xmlHttp.responseText)
                }
                if (xmlHttp.readyState == 4 && (xmlHttp.status <= 199 || xmlHttp.status >= 300)) {
                    if (options.type == "application/json") reject(JSON.parse(xmlHttp.responseText))
                    if (options.type == "text/plain") reject(xmlHttp.responseText)
                }
            } catch (err) {
                console.log(err.message+ "\n\nResponse:\n" + xmlHttp.responseText)
            }
        }
        xmlHttp.open(options.method.toUpperCase(), options.url, true)

        for (header in options.headers) {
            xmlHttp.setRequestHeader(header, options.headers[header])
        }

        try {
        		if (options.type == "application/json") {
            	xmlHttp.setRequestHeader("Content-Type", "application/json")
            	xmlHttp.send(JSON.stringify(options.body || {}))
            }
            if (options.type == "text/plain") {
            	xmlHttp.setRequestHeader("Content-Type", "text/plain")
            	xmlHttp.send(options.body || "")
            }
            
        } catch (err) {
            if (err.message.indexOf("SyntaxError") != -1) return console.log("Invalid JSON Payload")
            console.log(err.message)
        }
        
    })
  }
  
  return this
  
}
