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
