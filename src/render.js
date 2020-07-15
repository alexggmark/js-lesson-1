import {
  calculatorA,
  calculatorB,
  calculatorC
} from './templates';
import Calculations from './calculations';
import Interface from './interface';
import _interface from './interface';

const selectors = {
  app: '#app',
  output: '#output'
}

export default ((inputs) => {
  const nodeSelectors = {
    app: document.querySelector(selectors.app),
    output: document.querySelector(selectors.output)
  }

  let currentCalculator = null;

  function calculateCurrent() {
    if (!currentCalculator) { return; }

    const result = Calculations.calculate(currentCalculator);
    renderOutput(result);
  }

  function renderInputs(data, store) {
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
    loadInputs(calcImport, store);
  }

  function renderOutput(result) {
    nodeSelectors.output.innerHTML = result;
  }

  function loadInputs(input, store) {
    nodeSelectors.app.innerHTML = input;

    if (!store) {
      return;
    }

    nodeSelectors.app.querySelectorAll('input').forEach((input, index) => {
      input.value = store[index];
    })

    Interface.resetInputStore();
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