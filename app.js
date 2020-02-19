(function () {
    const express = require('express');
    const app = express();
    const port = 4000;
    const bodyParser = require('body-parser');

    app.use("/static", express.static(__dirname + '/static'));
    app.use("/", express.static(__dirname + '/static/data.js'));
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/static/index.html');
    });

    app.listen(port, () => {
        console.log('Server started on port : ' + port);
    });

    module.exports = app;
}());