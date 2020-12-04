import React, { useEffect } from 'react'
import StyledBody from './styled-body'
import { fetchWeather } from './api'

export default function App() {
  useEffect(() => {
    const data = async () => {
      const res = await fetchWeather('jakarta')
      console.log('dapetnya ini ===>', res)
    }
    data()
  }, [])

  return (
    <StyledBody>
      <p>My App</p>
    </StyledBody>
  )
}
