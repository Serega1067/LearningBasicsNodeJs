const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

const home = "/";
const about = "/about";
const pathToFile = path.join(__dirname, "counter.json");

app.use((req, res, next) => {
    console.log("Поступил запрос", req.method, req.url);
    next();
});

app.get("/", function (req, res) {
    const numberOfViews = JSON.parse(
        fs.readFileSync(
            pathToFile,
            "utf-8"
        )
    );
    numberOfViews.homeViews += 1;
    fs.writeFileSync(
        pathToFile,
        JSON.stringify(
            numberOfViews,
            null,
            2
        )
    );
    res.send(
        `<h1>Корневая страница</h1>
        <p>Просмотров: ${numberOfViews.homeViews}</p>
        <a href=${about}>Ссылка на страницу /about</a>`
    );
});

app.get("/about", function (req, res) {
    const numberOfViews = JSON.parse(
        fs.readFileSync(
            pathToFile,
            "utf-8"
        )
    );
    numberOfViews.aboutViews += 1;
    fs.writeFileSync(
        pathToFile,
        JSON.stringify(
            numberOfViews,
            null,
            2
        )
    );
    res.send(
        `<h1> Страница about</h1>
        <p>Просмотров: ${numberOfViews.aboutViews}</p>
        <a href=${home}>Ссылка на страницу /</a>`
    );
});

app.use(function (req, res, next) {
    res.status(404).send("Ошибка");
});

app.listen(3000, function () {
    console.log("Слушает порт 3000");
});