import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { getRestaurantById } from '../services/Api'
import logo from '../../src/logo.svg'

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
      <pre>{JSON.stringify(restaurant, null, 2)}</pre>
      <h1>{restaurant.title}</h1>
      <p>{restaurant.description}</p>
    </div>
  )
}

export default Restaurant
