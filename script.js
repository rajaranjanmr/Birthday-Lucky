const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber =document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");
checkNumberButton.addEventListener("click",checkBirthDateIsLucky);
function calculateSum(dob){
    dob= dob.replaceAll("-","");//replace - with ""
    let sum = 0;
    for(var i=0;i<dob.length;i++){
        sum += Number(dob.charAt(i));

    }
    return sum;
}
function compareValues(sum,luckyNumber){
      if(sum%luckyNumber === 0)
      {
        outputBox.value = "Your birthday is lucky";
      }else
      {
          outputBox.value="Your birthday is not lucky"
      }

}

function checkBirthDateIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    compareValues(sum,luckyNumber.value);
}

