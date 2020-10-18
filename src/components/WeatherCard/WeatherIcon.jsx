import React from 'react'
import styled from '@emotion/styled'

const WeatherIcon = ({ city, condition, icon }) => {
  const Icon = styled.img`
    width: 50%;
  `
  return <Icon src={icon} alt='Weather Icon' />
}

export default WeatherIcon
