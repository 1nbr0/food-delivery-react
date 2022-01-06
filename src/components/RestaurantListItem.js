import { Link } from 'react-router-dom'
import './styles/RestaurantListItemStyle.css'

function RestaurantListItem (props) {
  const { restaurant } = props
  return (
    <div className='card'>
      <Link to={`/restaurant/${restaurant._id}`} style={{ textDecoration: 'none', color: 'black' }}>
        <img className='card-img' src={`${process.env.REACT_APP_API_URL}${restaurant.photos[0].url}`} />
        <h1>{restaurant.title}</h1>
        <p>{restaurant.description}</p>
      </Link>
    </div>
  )
}

export default RestaurantListItem
