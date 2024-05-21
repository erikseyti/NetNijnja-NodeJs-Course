const http = require('http');
const fs = require('fs');
const { error } = require('console');
const _ = require("lodash");

const server = http.createServer((req, res) => {
    /* console.log('request made'); */
    // console.log(req.url, req.method)

    const num = _.random(0,20);
    console.log(num)

    const greet = _.once(() => {
        console.log('hello')
    });

    greet()
    greet()

    // set header content type
    /* res.setHeader('Content-Type', 'text/plain'); */ // para indicar ao servidor que a resposta se trata de apenas texto
    /* res.write('hello, ninjas'); */

    // forma manual de mandar dados em formato de html para o cliente
/*     res.setHeader('Content-Type', 'text/html');
    res.write("<head><link rel='styleseet' href='#'</head>");
    res.write('<p style="color: red; background-color: black">Hello, Ninjas </p>');
    res.write('<p>Hello, again, ninjas!</p>');
    res.end(); */

    let path = './views/';
    let status = 200
    switch(req.url) {
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about')
            res.end();
            break;
        default:
            path += '404.html';
            status = 404
            break;        
    }

    // forma de mandar dados em um arquivo em formato de "view"
    fs.readFile(path, (error, data) => {
        if (error) {
            console.log(error);
            res.end();
        }
        else {
            // se for mandar varios arquivos para o servidor deve ser feito dessa forma
            // do contrario pode apenas mandar 1 unico valor como parametro do metodo end()
/*             res.write(data);
            res.end(); */

            // forma simples e 'economica'
            res.statusCode = status;
            res.end(data)
        }
    });

});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
})