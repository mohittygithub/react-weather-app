import React from 'react'
import styled from '@emotion/styled'
import Reel from 'react-reel'

const Condition = ({ temp, condition }) => {
  return (
    <>
      <div style={{ fontSize: '1.5rem' }}>
        {' '}
        <Reel theme={reelCondition} text={`${temp}°C`} />
      </div>

      <State>{condition}</State>
    </>
  )
}

export default Condition

// const Temprature = styled.h1`
//   font-family: 'Fira Sans', sans-serif;
//   font-size: 2rem;
//   font-weight: 200;
// `
const State = styled.h3`
  font-family: 'Merriewather', sans-serif;
  font-size: 1.2rem;
`
const reelCondition = {
  reel: {
    height: '1.07em',
    display: 'flex',
    alignItems: 'flex-end',
    overflowY: 'hidden',
    lineHeight: '0.97em',
    justifyContent: 'center',
  },
  group: {
    transitionDelay: '0',
    transitionTimingFunction: 'ease-in-out',
    transform: 'translate(0,0)',
    height: '1.5em',
  },
  number: {
    height: '1em',
    fontFamily: 'Fira Sans',
  },
}
