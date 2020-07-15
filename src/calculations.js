export default (() => {
  function calculate(type) {
    switch(type) {
      case 'A':
        console.log('CALCY A')
        break;
      case 'B':
        console.log('CALCY B')
        break;
      case 'C':
        console.log('CALCY C')
        break;
    }
  }

  return {
    calculate,
  }
})();