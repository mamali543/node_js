const fs = require('fs');

const routesHandler = (req, res) => {
    console.log(req.url);

    if (req.url === '/')
    {
        res.setHeader('Content-type', 'text/html');
        res.write('<html><head><title> assignement </title></head><body><h1>Hello some dummy text</h1><form action="/create-user" method="POST"><input type="text"  name="username"><button type="submit">Send</button></form></body></html>');
        res.end();
    }
    else if (req.url === '/users')
    {
        // res.setHeader('Content-type', 'text/html');
        res.write('<html><head>assignement</head><body><h1>list:</h1><ul><li>User1</li><li>User2</li><li>User3</li></ul><form action="/" method="POST"><input type="text"  name="goback"><button type="submit">Send</button></form></body></html>');
        res.end();
    }
    else if (req.url === '/create-user' && req.method === 'POST')
    {
        const body = [];
        req.on('data', (chunck) => {
            body.push(chunck);
        })
        req.on('end', () => {
            const parsedData = Buffer.concat(body).toString();
            const username = parsedData.split('=')[1];
            console.log(username);

            fs.writeFile('./newfile', username, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/users');
                res.end();
            });
        })
    }
};

module.exports = routesHandler;