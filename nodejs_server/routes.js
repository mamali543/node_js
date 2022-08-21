const fs = require('fs');

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

        req.on('data', (chunck) => {
            body.push(chunck);
            console.log(chunck);
        });
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