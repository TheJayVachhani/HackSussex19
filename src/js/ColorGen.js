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
                            
                            return   newColour
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

module.exports = {
    generateColour
}