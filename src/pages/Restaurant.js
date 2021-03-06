import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { getRestaurantById } from '../services/Api'
import logo from '../../src/logo.svg'
import RestaurantInfos from '../components/RestaurantInfos'
import PlatList from '../components/PlatList'

function Restaurant () {
  const [restaurant, setRestaurant] = useState(null)
  const [loading, setLoading] = useState(false)
  const params = useParams()

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      const data = await getRestaurantById(params.id)
      setRestaurant(data)
      setLoading(false)
    }
    getData()
  }, [params.id])

  if (loading) {
    return (
      <div>
        <img src={logo} className='App-logo' alt='logo' />
      </div>
    )
  }

  return (
    restaurant && (
      <div>
        <div>
          <RestaurantInfos restaurant={restaurant} />
        </div>
        <div>
          <PlatList plats={restaurant.plats} />
        </div>
      </div>
    )
  )
}

export default Restaurant
