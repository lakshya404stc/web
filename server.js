// server.js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

let customCode = "";
let customUrl = "";

app.post("/api/inject-code", (req, res) => {
  customCode = req.body.customCode;
  res.sendStatus(200);
});

app.post("/api/inject-url", (req, res) => {
  customUrl = req.body.customUrl;
  res.sendStatus(200);
});

app.get("/", (req, res) => {
  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Injected Code Example</title>
    <style>
    body {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      background-color: #f4f4f4; /* Add a background color for better visibility */
    }
    
    button {
      padding: 10px 20px;
      font-size: 16px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 5px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      cursor: pointer;
      transition: background-color 0.3s, box-shadow 0.3s; /* Add box-shadow to the transition */
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add a subtle box-shadow for depth */
    }
    
    button:hover {
      background-color: #45a049;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Increase box-shadow on hover for a lifted effect */
    }    
    </style>
    ${customCode}
  </head>
  <body>
    <button onclick="handleButtonClick()">Apply For Full Stack Development Internship</button>
  
    <script>
      let clickCount = 0;
      let popup;
  
      function handleButtonClick() {
        clickCount++;
  
        if (clickCount === 1) {
          const popupContent = '<p>This is the popup content. Replace it with your AdSense code or other content.</p>';
          popup = window.open('', 'Popup', 'width=300,height=200');
          popup.document.write(popupContent);
        } else if (clickCount === 2) {
          // Second click: Redirect to www.example.com
          window.location.href = '${customUrl}';
        }
      }
    </script>
  </body>
  </html>  
  `;
  res.send(html);
});

app.listen(port, () => {
  console.log(`Server is running`);
});
