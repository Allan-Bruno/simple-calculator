export const createApp = () => {
  const display = document.getElementById('display');
  const equalbtn = document.getElementById('equal');
  const buttons = document.getElementById('btn');
  let operation = '';

  return {
    init() {
      this.handleAddDigitButtons();
      this.handleResetButton();
      this.handleResultButton();
    },

    handleAddDigitButtons() {
      buttons.addEventListener('click', (e) => {
        const target = e.target;

        if (target.tagName === 'BUTTON') {
          operation += target.innerHTML;
          this.displayOperation();
        }
      });
    },

    handleResetButton() {
      const resetbtn = document.getElementById('reset');

      resetbtn.addEventListener('click', (e) => {
        operation = '';
        this.displayOperation();
      });
    },

    handleResultButton() {
      equalbtn.addEventListener('click', (e) => {
        this.evaluateOperation();
        this.displayOperation();
      });
    },

    evaluateOperation() {
      operation = eval(operation);
    },

    displayOperation() {
      display.innerHTML = operation || 0;
    }
  };
};
