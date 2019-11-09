const colorList = require('./colors.json');

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


module.exports = {
    getColorNameFromRgb
}