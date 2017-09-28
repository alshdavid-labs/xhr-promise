function REST(url, options) {
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
