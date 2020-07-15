import {
  calculatorA,
  calculatorB,
  calculatorC
} from './templates';
import Calculations from './calculations';

const selectors = {
  app: '#app'
}

export default ((inputs) => {
  const nodeSelectors = {
    app: document.querySelector(selectors.app),
  }

  let currentCalculator = null;

  function calculateCurrent() {
    if (!currentCalculator) { return; }

    Calculations.calculate(currentCalculator);
  }

  function renderInputs(data) {
    currentCalculator = data;
    let calcImport;
    switch(data) {
      case 'A':
        calcImport = calculatorA;
        break;
      case 'B':
        calcImport = calculatorB;
        break;
      case 'C':
        calcImport = calculatorC;
        break;
    }
    loadInputs(calcImport);
  }

  function loadInputs(input) {
    console.log(input.toString())
    nodeSelectors.app.innerHTML = input;
  }

  function init() {
    if (typeof inputs !== 'Object') {
      loadInputs(calculatorA);
      return;
    }
  }

  return {
    init,
    renderInputs,
    calculateCurrent,
  }
})()