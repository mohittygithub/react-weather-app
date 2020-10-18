import React, { useState, useEffect } from 'react'
import WeatherCard from './WeatherCard/WeatherCard'
import PulseLoader from 'react-spinners/PulseLoader'

const WeatherEngine = ({ location }) => {
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [weather, setWeather] = useState({
    country: null,
    city: null,
    temp: null,
    condition: null,
    icon: null,
  })

  const getWeather = async (q) => {
    setLoading(true)
    setQuery('')
    try {
      const apiResponse = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=95f89d99f31c41c3b46115044201710&q=${q}`
      )
      const responseJson = await apiResponse.json()
      setWeather({
        country: responseJson.location.country,
        city: responseJson.location.name,
        temp: responseJson.current.temp_c,
        condition: responseJson.current.condition.text,
        icon: responseJson.current.condition.icon,
      })
    } catch (error) {
      setError(true)
    }
    setLoading(false)
  }
  useEffect(() => {
    getWeather(location)
  }, [location])

  if (error) {
    return (
      <div>
        Some error has been occured.
        <br />
        <button onClick={() => setError(false)}>Reset</button>
      </div>
    )
  }

  if (loading) {
    return (
      <div
        style={{
          color: 'black',
          display: 'flex',
          width: '200px',
          height: '240px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <PulseLoader />
      </div>
    )
  }
  return (
    <WeatherCard
      temp={weather.temp}
      condition={weather.condition}
      city={weather.city}
      country={weather.country}
      icon={weather.icon}
      getWeather={getWeather}
    />
  )
}
export default WeatherEngine
