(function () {
'use strict';

const calculation = arg => arg;

function mapState(state) {
  const calculation$$1 = calculation();
  return {
    calculation: calculation$$1
  }
}

function mapStateCulprit(state, ownProps) {
  const calculation = calculation(state);
  return {
    calculation
  }
}

console.log(mapState, mapStateCulprit);

}());
