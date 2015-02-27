var asynchron = require("../lib/asynchron.js");


function loadPenguin(nickName, callBack){
   //callBack(undefined, nickName);
   callBack(new Error("No penguin available"));
}

function loadPenguinFamily(father, mother, callBack){
    callBack(undefined, 'In harvest.family we got those cute penguin children objects');
}

var father = loadPenguin.async('MrPenguin');
var mother = loadPenguin.async('MrsPenguin');

var family = loadPenguinFamily.async(father, mother);

(function (family){
    console.log(family);
}).wait(family, function(err){
    console.log("We can pass or handle errors here!");
    });


/*
(function (err){
    console.log("Failure ", err);
}).fail(family);


(function (err){
    console.log("Timeout Failure", err);
}).timeout(100,family);
    */