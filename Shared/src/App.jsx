import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Product_Item from './component/Product_Item/Product_Item'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Product_Item></Product_Item>
    </>
  )
}

export default App
