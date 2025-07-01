const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.buttons button');

let input = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (value === 'C') {
      input = '';
      screen.textContent = '';
    } else if (value === '=') {
      try {
        input = eval(input).toString();
        screen.textContent = input;
      } catch {
        screen.textContent = 'Error';
        input = '';
      }
    } else {
      input += value;
      screen.textContent = input;
    }
  });
});
