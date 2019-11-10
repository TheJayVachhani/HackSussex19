// const express = require('express')
// const app = express()
// const port = 3000
const colorList = [
    {
        "name": "Aquamarine",
        "r":127,
        "b":255,
        "g":212
    },{
        "name": "Blue",
        "r":0,
        "b":0,
        "g":255
    },{
        "name": "Brown",
        "r":165,
        "b":42,
        "g":42
    },{
        "name": "Cyan",
        "r":0,
        "b":255,
        "g":255
    },{
        "name": "Dark Blue",
        "r":0,
        "b":0,
        "g":139
    },{
        "name": "Dark Red",
        "r":139,
        "b":0,
        "g":0
    },{
        "name": "Gold",
        "r":255,
        "b":105,
        "g":180
    },{
        "name": "Green",
        "r":0,
        "b":128,
        "g":0
    },{
        "name": "Green Yellow",
        "r":173,
        "b":255,
        "g":47
    },{
        "name": "Hot Pink",
        "r":255,
        "b":105,
        "g":180
    },{
        "name": "Indigo",
        "r":75,
        "b":0,
        "g":130
    },{
        "name": "Khaki",
        "r":240,
        "b":230,
        "g":140
    },{
        "name": "Lime",
        "r":0,
        "b":255,
        "g":0
    },{
        "name": "Magenta",
        "r":255,
        "b":0,
        "g":255
    },{
        "name": "Olive",
        "r":128,
        "b":128,
        "g":0
    },{
        "name": "Orange",
        "r":255,
        "b":165,
        "g":0
    },{
        "name": "Peach",
        "r":255,
        "b":218,
        "g":185
    },{
        "name": "Pink",
        "r":255,
        "b":192,
        "g":203
    },{
        "name": "Red",
        "r":255,
        "b":0,
        "g":0
    },{
        "name": "Sky Blue",
        "r":135,
        "b":206,
        "g":235
    },{
        "name": "Tomato",
        "r":255,
        "b":99,
        "g":71
    },{
        "name": "Turquoise",
        "r":64,
        "b":224,
        "g":208
    },{
        "name": "Violet",
        "r":238,
        "b":130,
        "g":238
    },{
        "name": "Yellow",
        "r":255,
        "b":255,
        "g":0
    },{
        "name": "Yellow Green",
        "r":154,
        "b":205,
        "g":50
    }
];

function getColorNameFromRgb(r,g,b){
    function computeMSE( pixR,  pixG,  pixB) {
        return Math.floor(((pixR - r) * (pixR - r) + (pixG - g) * (pixG - g) + (pixB - b)
                * (pixB - b)) / 3);
    }
    function findClosestMatch(colourArray){
        let closestMatch = 0
        let minMSE = Number.MAX_SAFE_INTEGER;
        colourArray.forEach((item,index) =>{ 
            const consideration = computeMSE(item.r, item.g, item.b);
            if (consideration<minMSE) {
                minMSE = consideration;
                closestMatch = index;
            }
         } )
         return {index: closestMatch, object: colourArray[closestMatch]};
    }

    const firstRun = findClosestMatch(colorList);
    const secondArray = JSON.parse(JSON.stringify(colorList))
    secondArray.splice(firstRun.index, 1)
    const secondRun = findClosestMatch(secondArray);
    console.log({color1:firstRun.object, color2:secondRun.object})
    return {color1:firstRun.object, color2:secondRun.object}

}

function firstColour(){
    const first = {color1:firstRun.object}
    return {first}
}
function secondColour()
{
    return {color2:secondRun.object}
}


function generateColour(){
    const redInt = Math.floor(Math.random()*255);
    const blueInt =  Math.floor(Math.random()*255);
    const greenInt =  Math.floor(Math.random()*255);

    const colourArray = [redInt, blueInt, greenInt];
    let flag = false;
    while(!flag){
        colourArray.forEach((item,index) => {
          
            colourArray.forEach((comparison,comparisonIndex)=>{
              
                if(index != comparisonIndex){
                    if(Math.abs(item - comparison) <= 50){
                       
                        const indexs = [index, comparisonIndex];
                        let remainingIndex = 0;
                        for(var i =0; i< 3; ++i){
                           const found = indexs.find(item => item===i)
                           if(!found){
                               remainingIndex = i;
                               break;
                           }
                        }
                        function resetColour(){
                            const newColour = Math.floor((Math.random() * 255)) 
                            
                            return newColour
                        }
                        colourArray[remainingIndex] = resetColour()
                        let  newFlag = false;
                        let newColour = resetColour();
                        while(!newFlag){
                            if(!(0<=colourArray[remainingIndex])){
                                 newColour = resetColour();
                            }
                            if(!(255>=colourArray[remainingIndex])){
                                 newColour = resetColour();
                            }
                            newFlag=true;
                        }
                        let colour = {}
                        const iterater = [index, comparisonIndex, remainingIndex]
                        iterater.forEach(item => {
                            switch(item){
                                case(0):
                                colour.r = colourArray[item];
                                break;
                                case(1):
                                colour.b = colourArray[item];
                                break;
                                case(2):
                                colour.g = colourArray[item];
                                break;
                            }
                        })

                        return colour
                        flag=true;
                    }
                }
            })
        })
        let colour = {};
        colourArray.forEach((item, index) => {
            switch(index){
                case(0):
                colour.r = colourArray[index];
                break;
                case(1):
                colour.b = colourArray[index];
                break;
                case(2):
                colour.g = colourArray[index];
                break;
            }
        })
        return colour
        flag=true;
    }

}


// dynamicallyLoadScript("./src/js/ColorGen.js");
// dynamicallyLoadScript("./src/js/ColorToUse.js");

// app.get('/colour', (req, res) => {
//     var colour = generateColour()
//     var twoClosest = getColorNameFromRgb(colour.r, colour.g, colour.b)
//     res.send({generatedColour:colour, twoClosest}); 
// })


var colour = generateColour();
console.log({colour});
const {color1, color2} = getColorNameFromRgb(colour.r, colour.g, colour.b);
const correctColour= color1;
const incorrectColour =color2;
console.log({color1, color2});

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))

function checkAnswer(){
   //console.log(inputColour.name)
   var buttonValueL = document.getElementById("left-Button").value;
   var buttonValueR = document.getElementById("right-Button").value;
   console.log(correctColour.name);
   console.log(buttonValueR);
   document.getElementById("left-Button").onclick = function(){
    if(buttonValueL ==correctColour.name){
        console.log("same")
        app.get('/colour', (req, res) => {
            var colour = generateColour()
            var twoClosest = getColorNameFromRgb(colour.r, colour.g, colour.b)
            res.send({generatedColour:colour, twoClosest}); 
        })
        //loadGamePage()
    }

   }

   document.getElementById("right-Button").onclick = function(){
    if(buttonValueR == correctColour.name ){
        console.log("same")
        app.get('/colour', (req, res) => {
            var colour = generateColour()
            var twoClosest = getColorNameFromRgb(colour.r, colour.g, colour.b)
            res.send({generatedColour:colour, twoClosest}); 
        })
        
       //loadGamePage()
    }

   }
 
//    console.log(buttonValueL)
//    console.log(buttonValueR)
//    console.log(correctColour.name)
    // if(buttonValueL == correctColour.name ){ //correctColour.name
    //    //inputColour.InnerHTML = inputColour;
    //     //$(".triggerCircle").toggleClass("drawn")
    //     app.get('/colour', (req, res) => {
    //         var colour = generateColour()
    //         var twoClosest = getColorNameFromRgb(colour.r, colour.g, colour.b)
    //         res.send({generatedColour:colour, twoClosest}); 
    //     })
    //     loadGamePage(generateColour());
    // } else {
    //     //$(".triggerCross").toggleClass("drawn")
    //     //print game over
    //     alert("Game Over!");
    //     href = "./index.html" 
    // }
    href = "./index.html" 
};

function startGame(){

    loadGamePage();

    document.getElementById("left-Button").addEventListener("click",function() { 
        checkAnswer(document.getElementById("left-Button").value);
    });

    document.getElementById("right-Button").addEventListener("click",function() { 
        checkAnswer(document.getElementById("left-Button").value);
    });

    document.getElementById("help").addEventListener("click",help);
}

function loadGamePage(){ 
    var leftButton = document.getElementById("left-Button")
    var rightButton = document.getElementById("right-Button") 
    leftButton.textContent = correctColour.name
    rightButton.textContent = incorrectColour.name
    console.log(correctColour.name)
    document.getElementById("body").style.backgroundColor = 'rgb(' + colour.r + ',' + colour.b + ',' + colour.g + ')';
    var int = Math.floor(Math.random() * 2); 
    if(int == 0){
        document.getElementById("left-Button").value = correctColour.name;
        document.getElementById("left-Button").setAttribute("value",correctColour.name)
        document.getElementById("right-Button").value = incorrectColour.name
    } else {
        document.getElementById("left-Button").value = incorrectColour.name
        document.getElementById("right-Button").value = correctColour.name
    }
     
}



function help(){
    alert("Yo click a colour in the corners to pick a colour");
}

startGame();

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