
let number_group = document.querySelectorAll('.number'),
sign_group = document.querySelectorAll('.sign'),
result_button = document.querySelector('.equals'),
clear_button = document.querySelector('.clear'),
plusMinusDevision_buton = document.querySelector(".plusMinus"),
procent_button = document.querySelector('.procent'),
input = document.querySelector('.input')

// variables and arrays for save
let array_numbers_1 = [],
  array_numbers_2 = [],
  sign,
  save_num2,

//variable and for ckecked arrays
count_Array_numbers_2 = false;

// event for buttons
number_group.forEach((item) => {
    item.addEventListener('click',saveNumberInArray)
})
sign_group.forEach((item) => {
    item.addEventListener("click", saveSignInArray); 
}) 
// functions in event 
function saveNumberInArray () {
    if (count_Array_numbers_2 == false) {
        let number = this.textContent;
        array_numbers_1.push(number);
        input.value = array_numbers_1.join("");
        //   console.log(array_numbers_1);
    }
    if (count_Array_numbers_2 == true) {
        let number = this.textContent;
        array_numbers_2.push(number);
        input.value = array_numbers_2.join("");
        // console.log(array_numbers_2);
    }
    
}
function saveSignInArray () {
    sign = this.textContent;
    input.value = sign
    count_Array_numbers_2 = true
}

// result button event and function
result_button.addEventListener('click',calc)
function calc () {
    let num1 = parseFloat(array_numbers_1.join(""));
    let num2 = parseFloat(array_numbers_2.join(""));
    // console.log(sign);
      switch (sign) {
        case "×":
          result = num1 * num2;
          save_num2 = num2;
          break;
        case "–":
          result = num1 - num2;
          save_num2 = num2;
          break;
        case "÷":
          result = num1 / num2;
          save_num2 = num2;
          break;
        case "+":
          result = num1 + num2;
          save_num2 = num2;
          break;
      }
    input.value = result
    console.log(result)
}
