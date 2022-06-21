// constant
const number_group = document.querySelectorAll('.number'),
  sign_group = document.querySelectorAll('.sign'),
  clear_button = document.querySelector('.clear'),
  plusMinusDevision_buton = document.querySelector(".plusMinus"),
  procent_button = document.querySelector('.procent'),
  input = document.querySelector('.input')

// dictionary of signs //словарь знаков
const dict_signs = {
  '÷': '/',
  '×': '*',
  '−': '-',
  '+': '+',
  '=': '=',
};

// array for calculation //массив для расчета
let arr_numbers = [],
  // string for numbers //строка для чисел
  str_number = "",
  // string for save first number after calculation //строка для сохранения первого числа после вычисления
  save_number = "",
  // signs (operator of calculation) // признаки (оператор вычисления)
  sign = "",
  // save sign for iteration click equal //сохранить знак для итерации нажать равно
  save_sign = "",
  // state of signs clickable //состояние знаков кликабельно
  sign_state = true,
  // state of equal clicked //состояние равного щелчка
  equal_state = false,
  // переменная для определения состояния: нужно ли нажимать на знак равно два раза или достатично один раз, как правило для первого результата нужно нажимать два раза, после первых двух нажатий достаточно нажимать по одному разу для получения ответа.
  // если переменная = true, то срабатывает функция которая делает вычисления, на основе знака, в место того чтобы нажимать два раза на =, это функция сразу делает вычесления и прысваевает значение переменной str_number
  count_str_number_function = true;

  

// add numbers and save //добавить номера и сохранить
function addNumberToArray() {
  clearInputIfPressAnyButton();
  let number = this.textContent;
  str_number += number;
  input.value = str_number;
  save_number = str_number;
  sign_state = true;
}
// add sign and push to array //добавить знак и нажать на массив
function addSignToArray(sign) {
  save_sign = sign;
  if (sign_state) {
    str_number != "" ? arr_numbers.push(str_number) : null;
    str_number = "";
    arr_numbers.push(sign);
    equal_state = false;
    sign_state = false;
  }
  input.value = '';
}

// events of buttons //события кнопок
number_group.forEach((item) => {
  item.addEventListener('click', addNumberToArray)
})

// sign equal //знак равенства
function equal(len, sign) {
  // console.log('1 ',str_number)
  len < 1 ? arr_numbers = ['0'] : null;
  // console.log("2 ", str_number);
  arr_numbers[len-1] == sign ? arr_numbers.push('0') : null;
  // console.log("3 ", str_number);
  str_number != '' ? arr_numbers.push(str_number) : null;
  // console.log("4 ", str_number);
  console.log('arr numbers = ',arr_numbers);
  // str_number = eval(arr_numbers.join(''));
  str_number = parseFloat(arr_numbers.join(''));
  // console.log("5 ", str_number);
  console.log('str_number = ',str_number,' sign = ',sign,' save number = ',save_number)
  equal_state ? str_number = eval(str_number + sign + save_number) : null;

  if (count_str_number_function == true) {
      str_number = str_numberFunction( parseFloat(str_number),sign,parseFloat(save_number)
      );
      count_str_number_function = false;
  }

  input.value = str_number;
  arr_numbers = [];
  arr_numbers[0] = str_number;
  equal_state = true; 
}
// calculation //расчет
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
}

// events of signs //события знаков
sign_group.forEach((item) => {
  item.addEventListener('click', calc);
});

// clear field and variables //очистить поле и переменные
function clear() {
  input.value = '',
  arr_numbers = [''],
  str_number = '',
  save_number = '',
  save_sign = '',
  sign = ''
  count_str_number_function = true;
}

// clear event //очистить событие
clear_button.addEventListener('click', clear);

// clear input after pressing any button, if button is pressed equals 
// очистить инпут после нажатия любой кнопки, если нажата кнопка равно 
function clearInputIfPressAnyButton () {
  if (equal_state == true) {
      clear()
      equal_state = false;
    }
  }
//
procent_button.addEventListener('click',procentCalc)
// function for button procent
function procentCalc () {
  console.log(save_number)
  save_number = save_number / 100 
  input.value = save_number
  arr_numbers.push(save_number);
  sign_state = true;
}
//function to remove two clicks on the equals sign
//функция для того чтобы убрать два нажатия на знак равно 

function str_numberFunction(num1,sign,num2) {
  let res
  switch (sign) {
    case "*":
       res = num1 * num2
      break;
    case "-":
       res = num1 - num2;
      break;
    case "/":
       res = num1 / num2;
      break;
    case "+":
       res = num1 + num2;
      break;
  }
  return res
}