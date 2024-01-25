const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

let customCode = "";
let customUrl = "";
let customBody = "";
let customStyle = "";
let customTitle = "Inject-Title"

app.post("/api/inject-code", (req, res) => {
  customCode = req.body.customCode;
  res.sendStatus(200);
});

app.post("/api/inject-url", (req, res) => {
  customUrl = req.body.customUrl;
  res.sendStatus(200);
});

app.post("/api/inject-body", (req, res) => {
  customBody = req.body.customBody;
  res.sendStatus(200);
});

app.post("/api/inject-style", (req, res) => {
  customStyle = req.body.customStyle;
  res.sendStatus(200);
});

app.post("/api/inject-title", (req, res) => {
  customTitle = req.body.customTitle;
  res.sendStatus(200);
});

app.get("/", (req, res) => {
  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${customTitle}</title>
    <style>
    ${customStyle}   
    </style>
    ${customCode}
  </head>
  <body>
    ${customBody} <!--add '{$customUrl}' in the customBody-->
  </body>
  </html>  
  `;
  res.send(html);
});

app.listen(port, () => {
  console.log(`Server is running`);
});
