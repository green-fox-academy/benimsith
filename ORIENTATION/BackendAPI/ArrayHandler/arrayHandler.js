const express = require('express');
const path = require('path');
//const bodyParser = require('body-parser');
const app = express();
const PORT = 4000;

app.use(express.json());
app.listen(PORT, ()=>{
    console.log(`App is listening on port: ${PORT}`);
});

function sum (array){
    let sum = 0;
    for(let i=0; i<array.length; i++){
        sum += array[i];
    }
    return sum;
};

function multiply(array){
    let multi = 1;
    for(let i=0; i<array.length; i++){
        multi *= array[i];
    };
    return multi;
}

function doubler (array){
    return array.map(element => element * 2);
};

app.post('/arrays', (req, res) =>{
    let what = req.body.what;
    let numbers = req.body.numbers;
    let result;
    if(what ==='sum'){
        result = {
            result : sum(numbers),
        };
    }else if(what ===multiply){
        result ={
            result : multi(numbers),
        };
    }else if(what === doubler){
        result = {
            result : doubler(numbers),
        };
    }else {
        result ={
            error : 'Please provide what to do with the numbers',
        };
    };
    res.send(result);
});