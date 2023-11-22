const http = require('http');
let countHome = 0; // Правильно ли я сделал
let countAbout = 0;

const server = http.createServer((req, res) => {
    console.log('Запрос получен');


    if (req.url === '/') {
        countHome++;
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        res.end(
            `<h1>Корневая страница</h1>
            <p>Просмотров: ${countHome}</p>
            <a href="/about">Ссылка на страницу /about`
        );
    } else if (req.url === '/about') {
        countAbout++;
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        res.end(
            `<h1>Страница about</h1>
            <p>Просмотров: ${countAbout}</p>
            <a href="/">Ссылка на страницу /`
        );
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        res.end('<h1>Страница не найдена!</h1>');
    }
});

const port = 3000;

server.listen(port, () => {
    console.log(`Сервер зарущен на порту ${port}`);
});