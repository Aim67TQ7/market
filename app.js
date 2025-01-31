// app.js
const express = require('express');
const bodyParser = require('body-parser');
const puppeteer = require('puppeteer');
const marked = require('marked');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

