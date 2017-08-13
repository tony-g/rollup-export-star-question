import { calculation as doCalculation } from './selectors/index'

function mapStateCulprit(state, ownProps) {
  const calculation = doCalculation(state)
  return {
    calculation
  }
}

export default mapStateCulprit