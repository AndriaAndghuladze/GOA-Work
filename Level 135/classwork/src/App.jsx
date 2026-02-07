import { useState } from 'react'
import { produce, pantryItems } from './list'
import ItemList from './ItemList'

export default function App() {

  const [cart, setCart] = useState([])

  const addItem = (item) => {
    setCart(prevCart => [...prevCart, item])
  }

  const removeItem = (removeIndex) => {
    setCart(prevCart =>
      prevCart.filter((_, index) => index !== removeIndex)
    )
  }

  return (
    <div>
      <h1>Grocery Cart</h1>

      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index} onClick={() => removeItem(index)}>
            {item}
          </li>
        ))}
      </ul>

      <h2>Produce</h2>
      <ItemList items={produce} onItemClick={addItem} />

      <h2>Pantry Items</h2>
      <ItemList items={pantryItems} onItemClick={addItem} />

    </div>
  )
}
