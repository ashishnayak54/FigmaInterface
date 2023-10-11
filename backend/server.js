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

const command = "style-dictionary build";

function runCommand(path, command) {
    exec(command, { cwd: path }, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${error}`);
            return;
        }
        console.log(`Output: ${stdout}`);
    });
}

app.use(jsonParser);
app.use(bodyParser.text({ type: 'text/plain' }));

app.post('/variables', (req, res) => {
    // req.body holds the object which is sent from front end
    // fs.writeFileSync is used to override the file if already present else it will create new file
    fs.writeFileSync('../frontend/interface/src/json/variables.json', JSON.stringify(req.body));
    runCommand(path, command);
})

app.post('/button', (req, res) => {
    if (req.is('application/json')) {
        // Handle JSON data
        fs.writeFileSync('../frontend/interface/src/json/button.json', JSON.stringify(req.body));
    } else if (req.is('text/plain')) {
        // Handle text data
        fs.writeFileSync('../frontend/interface/src/scss/_button-custom.scss', req.body);
    } else {
        res.status(400).send('Unsupported Content-Type');
    }
})

app.post('/links', (req, res) => {
    if (req.is('application/json')) {
        // Handle JSON data
        fs.writeFileSync('../frontend/interface/src/json/links.json', JSON.stringify(req.body));
    } else if (req.is('text/plain')) {
        // Handle text data
        fs.writeFileSync('../frontend/interface/src/scss/_links.scss', req.body);
    } else {
        res.status(400).send('Unsupported Content-Type');
    }
})

app.post('/form', (req, res) => {
    if (req.is('application/json')) {
        // Handle JSON data
        fs.writeFileSync('../frontend/interface/src/json/form-elements.json', JSON.stringify(req.body));
    } else if (req.is('text/plain')) {
        // Handle text data
        fs.writeFileSync('../frontend/interface/src/scss/_form.scss', req.body);
    } else {
        res.status(400).send('Unsupported Content-Type');
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})