const IMG_URL = 'https://strapi.myidea.fr'

function RestaurantInfos (props) {
  const { restaurant } = props
  return (
    <div>
      <img className='card-img' src={`${IMG_URL}${restaurant.photos[0].url}`} alt='logo-restau' />
      <h1>{restaurant.title}</h1>
      <p>{restaurant.description}</p>
    </div>
  )
}

export default RestaurantInfos
