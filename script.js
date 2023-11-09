document.addEventListener("DOMContentLoaded", function() {
  const input = document.getElementById('inputBOX');
  const buttons = document.querySelectorAll('button');
  let expression = '';

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const buttonText = this.innerHTML;

      if (buttonText === 'AC') {
        expression = '';
        input.value = '';
      } else if (buttonText === 'DEL') {
        expression = expression.slice(0, -1);
        input.value = expression;
      } else if (buttonText === '=') {
        try {
          const result = eval(expression);
          input.value = result;
          expression = result.toString();
        } catch (error) {
          input.value = 'Error';
          expression = '';
        }
      } else {
        expression += buttonText;
        input.value = expression;
      }
    });
  });
});
