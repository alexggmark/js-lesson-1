import Render from './render'

const selectors = {
  calculatorRadio: 'calculator',
  calculateButton: 'calculate',
  input1: '[js-input="1"]',
  input2: '[js-input="2"]',
  input3: '[js-input="3"]',
}

export default (() => {
  let inputStore = [];

  const nodeSelectors = {
    calculatorRadio: document.getElementsByName(selectors.calculatorRadio),
    calculateButton: document.querySelector(`#${selectors.calculateButton}`)
  }

  function resetInputStore() {
    inputStore = [];
  }

  function updateCalculatorSelection(value) {
    inputValuesToStore();
    console.log(`Inputs`)
    console.log(inputStore);
    Render.renderInputs(value, inputStore);
  }

  function inputValuesToStore() {
    const input1 = document.querySelector(selectors.input1).value;
    const input2 = document.querySelector(selectors.input2).value;
    const input3 = document.querySelector(selectors.input3).value;

    inputStore.push(input1, input2, input3);
  }

  function setEventListeners() {
    nodeSelectors.calculatorRadio.forEach((radio) => {
      radio.addEventListener('click', (element) => {
        let radioValue = element.target.value;
        updateCalculatorSelection(radioValue)
      })
    })

    nodeSelectors.calculateButton.addEventListener('click', () => {
      Render.calculateCurrent()
    })
  }

  function getCalculatorInputValues() {
    const input1 = document.querySelector(selectors.input1).value;
    const input2 = document.querySelector(selectors.input2).value;
    const input3 = document.querySelector(selectors.input3).value;

    return [Number(input1), Number(input2), Number(input3)];
  }

  function init() {
    setEventListeners();
  }

  return {
    init,
    getCalculatorInputValues,
    resetInputStore,
  }
})();