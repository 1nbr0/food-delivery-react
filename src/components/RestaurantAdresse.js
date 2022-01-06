import './styles/RestaurantInfosStyle.css'

function RestaurantAdresse (props) {
  const { adresse } = props
  return (
    <div>
      <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.0775095303575!2d-1.5572141845712977!3d47.21506567916068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805efc27772eee1%3A0x9c8c30f7d7ff2ad0!2sCoq%20Monsieur!5e0!3m2!1sfr!2sfr!4v1641376697791!5m2!1sfr!2sfr' width='350' height='300' style={{ border: 0 }} allowfullscreen='' loading='lazy' className='maps' />
      <div className='info-adress-text'>
        <h3><a target='_blank' href='https://g.page/coqmonsieur?share' rel='noreferrer' className='adress'>{`${adresse.adresse}, ${adresse.code_postal}`}</a> | {adresse.pays}</h3>
        <h4><a href={`tel: ${adresse.phone}`} className='phone'>{adresse.phone}</a></h4>
      </div>
    </div>
  )
}

export default RestaurantAdresse
