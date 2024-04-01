import 'react'
import './App.css'
import { useWindowSize } from './useWindowSize';
import { MOBILE_LIMIT_WIDTH } from './constants';

import { PageMobile } from './pages/page.mobile';

function App() {
  const size = useWindowSize();


  if (size?.width <= MOBILE_LIMIT_WIDTH) {
    return <PageMobile />
  }


  return <PageMobile />
}

export default App
