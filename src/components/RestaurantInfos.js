import RestaurantAdresse from '../components/RestaurantAdresse'
import './styles/RestaurantInfosStyle.css'

function RestaurantInfos (props) {
  const { restaurant } = props
  console.log(restaurant.plats[0])
  return (
    <div className='background-info' style={{ backgroundImage: `url(${process.env.REACT_APP_API_URL}${restaurant.plats[0].photos[0].url})` }}>
      <div className='info'>
        <img className='img-info' src={`${process.env.REACT_APP_API_URL}${restaurant.photos[0].url}`} alt='logo-restau' />
        <div className='info-text'>
          <h1>{restaurant.title}</h1>
          <p>{restaurant.description}</p>
        </div>
      </div>
      <div className='info-adress'>
        <RestaurantAdresse adresse={restaurant.adresse} />
      </div>
    </div>
  )
}

export default RestaurantInfos
