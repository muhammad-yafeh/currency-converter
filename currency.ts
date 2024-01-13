//usd 277 euro 304 dinar 903
import inquirer from "inquirer"
let input=await inquirer.prompt([
    {name:"currencyA",
      type:"list",
      choices:["pkr","usd","euro",
         "kuwaitiDinar","yuan"],
        message:"choose currency to be converted"},
         {name:"currencyB",
        type:"list",
        choices:["pkr","usd","euro",
        "kuwaitiDinar","yuan"],
       message:"choose currency to be converted in"},
       {name:"amount",
       type:"number",
    message:"enter amount"}
])
const{currencyA,currencyB,amount}=input;

if((currencyA!="pkr"&&["usd","euro","kuwaitiDinar","yuan"].includes(currencyB))||
   (currencyB!="pkr"&&["usd","euro","kuwaitiDinar","yuan"].includes(currencyA)
)){console.log("only pkr interconversions supported")}
if(currencyA=="pkr"){
    if(currencyB=="usd"){
        console.log(amount/277)
    }
}
if(currencyA=="pkr"){
    if(currencyB=="euro"){
        console.log(amount/304)
    }
}
if(currencyA=="pkr"){
    if(currencyB=="kuwaitiDinar"){
        console.log(amount/903)
    }
}
if(currencyA=="pkr"){
    if(currencyB=="yuan"){
        console.log(amount/38)
    }
}
if(currencyA=="usd"){
    if(currencyB=="pkr"){
        console.log(amount*277)
    }
}
if(currencyA=="euro"){
    if(currencyB=="pkr"){
        console.log(amount*304)
    }
}
if(currencyA=="kuwaitiDinar"){
    if(currencyB=="pkr"){
        console.log(amount*903)
    }
}
if(currencyA=="yuan"){
    if(currencyB=="pkr"){
        console.log(amount*38)
    }
}

