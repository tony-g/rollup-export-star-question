import { calculation as doCalculation } from './selectors/calculation'

function mapState(state) {
  const calculation = doCalculation()
  return {
    calculation
  }
}

export default mapState