<script>
function Function() {
  let operator = prompt('Enter operator ( either +, -, * or / ): ');
  const number1 = prompt('Enter first number: ');
  const number2 =prompt('Enter second number: ');
  let result;
  if (operator == '+') {
      result = number1 + number2
  }
  else if (operator == '-') {
      result = number1 - number2
  }
  else if (operator == '*') {
      result = number1 * number2
  }
  else {
      result = number1 / number2
  }
  console.log(`${number1} ${operator} ${number2} = ${result}`);
}
document.getElementById("demo").innerHTML =Function();

</script>
