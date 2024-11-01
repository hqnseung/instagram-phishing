const express = require("express");
const app = express();
const morgan = require('morgan');
const path = require("path");
const bodyParser = require('body-parser');
const ejs = require("ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(`${dataDir}${path.sep}assets`)));

app.engine("html", ejs.renderFile);
app.set("view engine", "html");
const dataDir = path.resolve(`${process.cwd()}${path.sep}`);
const templateDir = path.resolve(`${dataDir}${path.sep}views`);

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
app.use(morgan('combined', { stream: accessLogStream }));

const renderTemplate = (res, req, template, data = {}) => {
    res.render(path.resolve(`${templateDir}${path.sep}${template}`), { ...data });
};

app.use((err, req, res, next) => {
    console.error(err);
    res.send(err);
});

app.get('/', (req, res) => {
    renderTemplate(res, req, "index.ejs");
});

app.listen(3000, () => {
    console.log(`HTTP server started on port 3000`);
});