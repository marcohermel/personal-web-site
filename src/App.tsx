import 'react'
import './App.css'
import { useWindowSize } from './useWindowSize';
import { MOBILE_LIMIT_WIDTH } from './constants';

function App() {
  const size = useWindowSize();


  if (size?.width <= MOBILE_LIMIT_WIDTH) {
    return <h1 className="text-3xl font-bold text-secondary ">test mobile</h1>
  }


  return (<h1 className="text-3xl font-bold text-secondary"> test desktop </h1>)
}

export default App
