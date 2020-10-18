import React from 'react'
import '../../App.css'
import styled from '@emotion/styled'
import Location from '../Location'
import WeatherIcon from './WeatherIcon'
import Condition from './Condition'
import { motion } from 'framer-motion'

const WeatherCard = ({ temp, condition, icon, city, country, getWeather }) => {
  let highColor = 0
  let lowColor = 0
  let bg = null
  if (temp > 20) {
    highColor = (1 - (temp - 12) / 28) * 255
    lowColor = highColor - 150
    bg = `linear-gradient(to top,rgb(255, ${highColor}, 0),rgb(255, ${Math.abs(
      lowColor
    )}, 0))`
  } else if (temp <= 20) {
    highColor = (1 - (temp + 20) / 32) * 255
    lowColor = highColor - 150
    bg = `linear-gradient(to top,rgb(0, ${highColor}, 255),rgb(0, ${Math.abs(
      lowColor
    )}, 255))`
  }

  const Card = styled.div`
    margin: 10px auto;
    background: ${bg};
    width: 200px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  `
  return (
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
      <Card>
        <Location getWeather={getWeather} city={city} country={country} />
        <WeatherIcon condition={condition} icon={icon} />
        <Condition temp={temp} condition={condition} />
      </Card>
    </motion.div>
  )
}

export default WeatherCard
