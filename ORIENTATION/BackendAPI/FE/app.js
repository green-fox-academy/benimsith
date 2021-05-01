const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(express.static('assets'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
});

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
});

//GET

app.get('/doubling', (req, res) => {
    let input = req.query.input;
    let result;
    if(input!==undefined){
        result ={
            'received': parseInt(input),
            'result': parseInt(input*2),
        };
   } else{
       result = {
           'error': 'Please provide an input!',
       };
   };
   res.send((result));
});

app.get('/greeter', (req, res) => {
    let name = req.query.name;
    let title = req.query.title;
    let result;
    if(name!==undefined && title!==undefined){
        result ={
            welcome_message : `Oh, hi there ${name}, my dear ${title}!`,
        };
    }else if(name === undefined && title === undefined){
        result ={
            error: 'Please provide a name and a title!',
            status: 400,
        };
    }else if(title === undefined){
        result ={
            error: 'Please provide a title!',
            status: 400,
        };
    }else if( name === undefined){
        result ={
            error: 'Please provide a name!',
            status: 400,
        };
    };
    res.send(JSON.stringify(result));
});

app.get('/appenda/:obj', (req, res) => {
    let obj = req.params.obj;
    let result;
    if(obj!==undefined){
        result = {
            appended : obj + 'a',
        };
    }else{
        result = {
            error: 'Please provide an input!',
        };
    };
    res.send(result);
});

app.post('/dountil/:action', (req, res,)=>{
    let action = req.params.action;
    let until = req.body.until;
    let result;

    if(action === 'sum'){
        result ={
            until : until,
            result : sum(until),
        };
    }else if(action === 'factor'){
        result ={
            until : until,
            result : factor(until),
        };
    }else if(action === undefined){
        result ={
            error: 'Please provide a number!',
        };
    };
    res.send(result);
});

function sum(number){
    let sum = 0;
    for(let i =0; i <= number;  i++){
        sum += i;
    }
    return sum;
};

function factor(number){
    let factorial = 1;
    for(let i=2; i <= number;  i++){
        factorial *= i;
    }
    return factorial;
};





