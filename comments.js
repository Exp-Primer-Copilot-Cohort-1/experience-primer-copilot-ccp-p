// Create web server
// Start server: node comments.js
// Test with: curl -d "user=Scott&comment=This is a comment" http://localhost:3000/comments
// Test with: curl http://localhost:3000/comments

// Load the http module to create an http server.
var http = require('http');
var url = require('url');
var qs = require('querystring');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
    //console.log(request);
    var body = '';
    // Get the data as utf8 strings.
    // If an encoding is not set, Buffer objects will be received.
    request.on('data', function (chunk) {
        body += chunk;
    });
    // The whole response has been received. Print out the result.
    request.on('end', function () {
        var post = qs.parse(body);
        var user = post.user;
        var comment = post.comment;
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("User: " + user + "\n");
        response.end("Comment: " + comment);
    });
});

// Listen on port 3000, IP defaults to