import Draggable from 'react-draggable'
import { useCart } from '../contexts/CartContext'

function Cart () {
  const { state } = useCart()
  return (
    <Draggable>
      <div className='card' style={{ position: 'absolute', width: 300, height: 500, zIndex: 2, right: 0 }}>
        <h1>Votre commande</h1>
        {
          state.cart.map(item => {
            return (
              <div key={item._id}>
                <h5>{item.nom}</h5>
                <h6>{item.price.toFixed(2)} €</h6>
              </div>
            )
          })
        }
        <h2>TOTAL : {state.total.toFixed(2)} €</h2>
      </div>
    </Draggable>
  )
}

export default Cart
