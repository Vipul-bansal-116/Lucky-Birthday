var inputBirthday = document.querySelector("#input-birthday");
var inputLuckyNumber = document.querySelector("#input-number");
var btnCheck = document.querySelector("#check-btn");
var outputMessage = document.querySelector("#message")

function check(){
    const Bdate = inputBirthday.value;
    const sum = calculateSum(Bdate);
    if(sum% inputLuckyNumber.value ===0){
        outputMessage.innerText = "Your Birthday is lucky"
    } else {
        outputMessage.innerText = "Your Birthday is not lucky"
    }
}
function calculateSum (Bdate){
Bdate = Bdate.replaceAll("-","");
let sum=0;
for(let i=0;i<Bdate.length;i++){
    sum =sum+ Number(Bdate.charAt(i));
}
return sum;
}
btnCheck.addEventListener("click", check)
