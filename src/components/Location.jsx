import React, { useState } from 'react'
import styled from '@emotion/styled'
import '../App.css'
const Location = ({ temp, condition, city, country, getWeather }) => {
  const [query, setQuery] = useState('')
  const [inputMode, setInputMode] = useState(false)

  if (inputMode) {
    return (
      <Container>
        <FormElement
          onSubmit={(e) => {
            e.preventDefault()
            getWeather(query)
          }}
        >
          <InputField
            required
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
            }}
          />
          <SearchButton type='submit'>Search</SearchButton>
          <CancelButton onClick={() => setInputMode(false)}>X</CancelButton>
        </FormElement>
      </Container>
    )
  }
  return (
    <Container>
      {<City onClick={() => setInputMode(true)}>{city}</City>}
      <Country>{country}</Country>
    </Container>
  )
}

export default Location

const Container = styled.div`
  text-align: center;
`

const FormElement = styled.form`
  display: 'flex';
  position: 'relative';
`

const InputField = styled.input``

const SearchButton = styled.button``
const CancelButton = styled.span`
  position: 'absolute';
`

const City = styled.h1`
  font-family: 'Fira Sans', sans-serif;
  font-size: 1.6rem;
  cursor: pointer;
  position: relative;
  &:hover {
    top: -2px;
  }
`

const Country = styled.h3`
  font-family: 'Fira Sans', sans-serif;
  font-size: 1.1rem;
`
