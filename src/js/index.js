const express = require('express')
const app = express()
const port = 3000
const {generateColour} = require("./ColorGen");
const {getColorNameFromRgb} = require("./ColorToUse");

app.get('/', (req, res) => res.send("Hello World"))

app.get('/colour', (req, res) => {
    const colour = generateColour()
    const twoClosest = getColorNameFromRgb(colour.r, colour.g, colour.b)
    res.send({generatedColour:colour, twoClosest}); 
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
