import { Button } from 'react-bootstrap'
import { actionTypes, useCart } from '../contexts/CartContext'

function PlatListItem (props) {
  const { plat } = props
  const { dispatch } = useCart()
  return (
    <div className='card'>
      <div className='card-plat-img'>
        <img className='plat-img' src={plat.photos[0] ? `${process.env.REACT_APP_API_URL}${plat.photos[0].url}` : 'https://www.zanollifours.fr/wp-content/uploads/2016/04/default-placeholder.png'} />
      </div>
      <h1>{plat.nom}</h1>
      <p>{plat.description}</p>
      <h4>{plat.price.toFixed(2)} €</h4>
      <Button onClick={() => dispatch({ type: actionTypes.ADD_TO_CART, item: plat })}>Ajouter au panier</Button>
    </div>
  )
}

export default PlatListItem
