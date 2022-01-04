import React, { useState, useEffect } from 'react'
import { getRestaurants } from '../services/Api'
import logo from '../../src/logo.svg'
import RestaurantList from '../components/RestaurantList'

function Restaurants () {
  const [restaurants, setRestaurants] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      const data = await getRestaurants()
      setRestaurants(data)
      setLoading(false)
    }
    getData()
  }, [])

  if (loading) {
    return (
      <div>
        <img src={logo} className='App-logo' alt='logo' />
      </div>
    )
  }

  return (
    <div>
      <h1>RESTAURANTS</h1>
      <RestaurantList restaurants={restaurants} />
    </div>
  )
}

export default Restaurants
