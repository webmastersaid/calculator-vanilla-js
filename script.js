// constant
const number_group = document.querySelectorAll('.number'),
  sign_group = document.querySelectorAll('.sign'),
  clear_button = document.querySelector('.clear'),
  plusMinusDevision_buton = document.querySelector(".plusMinus"),
  procent_button = document.querySelector('.procent'),
  input = document.querySelector('.input')

// dictionary of signs
const dict_signs = {
  '÷': '/',
  '×': '*',
  '−': '-',
  '+': '+',
  '=': '=',
};

// array for calculation
let arr_numbers = [],
  // string for numbers
  str_number = '',
  // string for save first number after calculation
  save_number = '',
  // signs (operator of calculation)
  sign = '',
  // save sign for iteration click equal
  save_sign = '',
  // state of signs clickable
  sign_state = true,
  // state of equal clicked
  equal_state = false;

// add numbers and save
function addNumberToArray() {
  let number = this.textContent;
  str_number += number;
  input.value = str_number;
  save_number = str_number;
  sign_state = true;
}
// add sign and push to array
function addSignToArray(sign) {
  save_sign = sign;
  if (sign_state) {
    str_number != '' ? arr_numbers.push(str_number) : null;
    str_number = '';
    arr_numbers.push(sign);
    equal_state = false;
    sign_state = false;
  }
  input.value = '';
}

// events of buttons
number_group.forEach((item) => {
  item.addEventListener('click', addNumberToArray)
})

// sign equal
function equal(len, sign) {
  len < 1 ? arr_numbers = ['0'] : null;
  arr_numbers[len-1] == sign ? arr_numbers.push('0') : null;
  str_number != '' ? arr_numbers.push(str_number) : null;
  str_number = eval(arr_numbers.join(''));
  equal_state ? str_number = eval(str_number + sign + save_number) : null;
  input.value = str_number;
  arr_numbers = [];
  arr_numbers[0] = str_number;
  equal_state = true;
}
// calculation
function calc() {
  sign = this.textContent;
  const numbers_len = arr_numbers.length;
  switch (dict_signs[sign]) {
    case "*":
      addSignToArray(dict_signs[sign])
      break;
    case "-":
      addSignToArray(dict_signs[sign])
      break;
    case "/":
      addSignToArray(dict_signs[sign])
      break;
    case "+":
      // arr_numbers.forEach((item, i) => {
      //   str_number += arr_numbers[i];
      //   if (i == 2) {
      //     str_number = eval(str_number);
      //     input.value = str_number;
      //     arr_numbers = [];
      //     arr_numbers[0] = str_number;
      //     return;
      //   }
      // })
      addSignToArray(dict_signs[sign])
      break;
    case "=":
      equal(numbers_len, save_sign)
      break;
  }
  str_number = '';
  console.log(arr_numbers)
}

// events of signs
sign_group.forEach((item) => {
  item.addEventListener('click', calc);
});

// clear field and variables
function clear() {
  input.value = '',
  arr_numbers = [''],
  str_number = '',
  save_number = '',
  save_sign = '',
  sign = ''
}

// clear event
clear_button.addEventListener('click', clear);
