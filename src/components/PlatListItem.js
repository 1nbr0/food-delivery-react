
function PlatListItem (props) {
  const { plat } = props
  return (
    <div className='card'>
      <div className='card-plat-img'>
        <img className='plat-img' src={plat.photos[0] ? `${process.env.REACT_APP_API_URL}${plat.photos[0].url}` : 'https://www.zanollifours.fr/wp-content/uploads/2016/04/default-placeholder.png'} />
      </div>
      <h1>{plat.nom}</h1>
      <p>{plat.description}</p>
      <h4>{plat.price.toFixed(2)} €</h4>
    </div>
  )
}

export default PlatListItem
