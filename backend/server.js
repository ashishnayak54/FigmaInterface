const express = require('express')
const fs = require('fs');

const app = express()
const bodyParser = require("body-parser");
const sass = require('sass');
const { response } = require("express");
var jsonParser = bodyParser.json();
const port = 6001

//to avoid xmlhttprequest at blocked by cors
const cors = require("cors");
app.use(cors());

const { exec } = require('child_process');

const path = '../backend';

const command1 = "git pull origin main";

const command2 = "style-dictionary build";

function runCommand(path, command) {
    exec(command, { cwd: path }, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${error}`);
            return;
        }
        console.log(`Output: ${stdout}`);
    });
}

app.post('/abcd',jsonParser, (req, res) => {
    // req.body holds the object which is sent from front end
    // fs.writeFileSync is used to override the file
    fs.writeFileSync('../frontend/interface/src/json/variables.json', JSON.stringify(req.body));
    runCommand(path, command2);
})

app.post('/btn', bodyParser.text(), (req, res) => {
    // req.body holds the object which is sent from front end
    // fs.writeFileSync is used to override the file
    fs.writeFileSync('../frontend/interface/src/scss/_button-custom.scss', req.body);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})