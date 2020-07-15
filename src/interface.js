import Render from './render'

const selectors = {
  calculatorRadio: 'calculator',
  calculateButton: 'calculate'
}

export default (() => {
  const nodeSelectors = {
    calculatorRadio: document.getElementsByName(selectors.calculatorRadio),
    calculateButton: document.querySelector(`#${selectors.calculateButton}`)
  }

  function updateCalculatorSelection(value) {
    Render.renderInputs(value);
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

  function init() {
    setEventListeners();
  }

  return {
    init,
  }
})();