const charactersLowercase = [];
charactersLowercase.push('a','ą','b','c','č','d','e','ę','ė','f','g','h','i','į','y','j','k','l','m','n','o','p','r','s','š','t','u','ų','ū','v','z','ž')
const charactersUppercase = [];
charactersUppercase.push('A','Ą','B','C','Č','D','E','Ę','Ė','F','G','H','I','Į','Y','J','K','L','M','N','O','P','T','S','Š','T','U','Ų','Ū','V','Z','Ž')
const symbols = [];
symbols.push(' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', '-', '.', '/')


let cypher = "Pčkri szvgoingkrš";
let cypherAsArray = cypher.split('');

const cypherIndexes = [];
const uppercaseIndexes = [];

for(var i = 0; i<cypherAsArray.length; i++){
    if(symbols.includes(cypherAsArray[i])){
        symbols.forEach(element =>{
            if(cypherAsArray[i]===element){
                cypherIndexes.push(symbols.indexOf(element)+33)
            }
        })
    }
    else {
        charactersUppercase.forEach(element => {
            if(cypherAsArray[i]===element){
                cypherIndexes.push(charactersUppercase.indexOf(element));
                uppercaseIndexes.push(i);
            }
        })
        charactersLowercase.forEach(element =>{
            if(cypherAsArray[i]===element){
                cypherIndexes.push(charactersLowercase.indexOf(element));
            }
        })
    }
}

const variants = [];

for(var i = 0; i<32; i++){
    let decyphered = []
    cypherIndexes.forEach(element => {
        if(uppercaseIndexes.includes(cypherIndexes.indexOf(element))){
            var realIndex = element+i;
            if(realIndex>=32){
                realIndex=realIndex-32;
            }
            decyphered.push(charactersUppercase[realIndex]);
        }
        else{
            if(element>=33){
                decyphered.push(symbols[element-33]);
            }
            else{
                var realIndex = element+i;
                if(realIndex>=32){
                    realIndex=realIndex-32;
                }
                decyphered.push(charactersLowercase[realIndex]);
            }
        }
    })
    variants.unshift(decyphered.toString().replaceAll(',', ''));
}

variants.forEach(element =>{
    console.log(element + ", n= " + (variants.indexOf(element)+1));
})