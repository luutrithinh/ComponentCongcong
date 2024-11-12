import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Pagination from './component/pagination/pagination'
import Product_Item from './component/Product_Item/Product_Item'
import MenuHam from './component/MenuHamburger/MenuHam'
import Counter from './component/counter/counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MenuHam> </MenuHam>
    </>
  )
}

export default App
