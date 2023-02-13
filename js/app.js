
const randomNumberArr = []

let utentNumber = []

while( randomNumberArr.length < 5 ){

    const randomNumber = Math.floor(Math.random() * (100 - 1) + 1);

    if(!randomNumberArr.includes(randomNumber)){

        randomNumberArr.push(randomNumber)
    }
}

window.alert('I numeri da ricordare sono:' + ' ' + randomNumberArr)

setTimeout(numberVerifier, 3000)

function numberVerifier(){

    while(utentNumber.length < 5){

        const requestNumbers = prompt("Scrivi i numeri che hai visto prima, se li ricordi")

        utentNumber.push(parseInt(requestNumbers))
    }

    areTheyEqual(randomNumberArr, utentNumber)
}

function areTheyEqual (pcNumber, rememberedNumbers){

    console.log(equalNumber, differentNumber)

    for ( let i = 0; i < 5; i++){

        if(pcNumber[i] === rememberedNumbers[i]){
            
            equalNumber.push(rememberedNumbers[i])
        }else {
            differentNumber.push(rememberedNumbers[i])
        }
        
    }

    console.log("Hai indovinato i seguenti numeri:" + ' ' + equalNumber)

    console.log("Hai dimenticato invece:" + ' ' + differentNumber)
}

