const fs = require('fs');
//HTTP headers let the client and the server pass additional information with an HTTP request or response
const requestHandler = (req, res) => 
{
    const uri = req.url;
    const method = req.method;
    if (uri === '/')
    {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head> <title> message </title> </head>');
        res.write('<body>');
        res.write('<form action="/message" method="POST"><input type="text" name="message"> <button type="submit">Send</button></form>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    }
    else if (uri === '/message' && method === 'POST')
    {
        const body = [];
//we're defining a function to be executed for every incoming data piece.
        req.on('data', (chunck) => {
            body.push(chunck);
            console.log(chunck);
        });
//chunk. Now we need to register another event listener and that is the end listener, this will be fired once it's done parsing the incoming requests data or the incoming requests in general
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('./message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                res.end();
            });
        });
    }
}

// module.exports = {
//     handler: requestHandler,
//     text : "hellooooo",
// };

module.exports = requestHandler;