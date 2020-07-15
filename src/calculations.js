import Interface from './interface'

export default (() => {
  function calculate(currentCalculator) {
    const resultArray = Interface.getCalculatorInputValues();
    return myFunctions[currentCalculator](resultArray)
  }

  // Return calculated array values
  const myFunctions = {
    A: (input) => {
      return input[0] * input[1] * input[2];
    },
    B: (input) => {
      return input[0] - input[1] - input[2];
    },
    C: (input) => {
      return input[0] + input[1] + input[2];
    }
  }

  return {
    calculate,
  }
})();