import express from 'express';
import { readText } from './img.js'

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


(function(){
  readText('https://tesseract.projectnaptha.com/img/eng_bw.png')
})()


