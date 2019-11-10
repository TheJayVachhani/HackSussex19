const express = require('express')
const app = express()
const port = 3000
const {generateColour} = require("./src/js/ColorGen");
const {getColorNameFromRgb} = require("./src/js/ColorToUse");

app.get('/colour', (req, res) => {
    var colour = generateColour()
    var twoClosest = getColorNameFromRgb(colour.r, colour.g, colour.b)
    res.send({generatedColour:colour, twoClosest}); 
})

colour = generateColour()
correctColour = twoClosest.color1
incorrectColour = twoClosest.color2

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

startGame();

function startGame(){

    loadGamePage();

    document.getElementById("left-Button").addEventListener("click",function() { 
        checkAnswer(document.getElementById("left-Button").value());
    });

    document.getElementById("right-Button").addEventListener("click",function() { 
        checkAnswer(document.getElementById("left-Button").value());
    });

    document.getElementById("help").addEventListener("click",help);
}

function loadGamePage(){
    document.body.style.background = colour
    var int = Math.floor(Math.random() * 2); 
    if(int == 0){
        document.getElementById("left-Button").value = correctColour
        document.getElementById("right-Button").value = incorrectColour
    } else {
        document.getElementById("left-Button").value = incorrectColour
        document.getElementById("right-Button").value = correctColour
    }
     
}

function checkAnswer(inputColour){
    if(inputColour == correctColour.name){
        $(".triggerTick").toggleClass("drawn")
        app.get('/colour', (req, res) => {
            var colour = generateColour()
            var twoClosest = getColorNameFromRgb(colour.r, colour.g, colour.b)
            res.send({generatedColour:colour, twoClosest}); 
        })
        loadGamePage(colour);
    } else {
        $(".triggerCross").toggleClass("drawn")
        //print game over
        alert("Game Over!");
        href = "./index.html" 
    }
}

function help(){
    alert("Yo click a colour in the corners to pick a colour");
}

/*$(document).ready(function(){
var actualColour = ""
var correctColour = "generate correct colour" ;
var incorrectColour = "generate incorrect colour" ;
$("button").click(function(){
    $("left-Button").checkAnswer($("left-Button").value(),correctColour);
    $("right-Button").checkAnswer($("right-Button").value(),correctColour);
    $("help").help();
});
loadGamePage(actualColour,correctColour,incorrectColour);
});*/
