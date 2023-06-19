'use client'
import axios from 'axios'
import React, { useState } from 'react'
import DataContext from '@context/DataContext'
import { useContext } from 'react'

const useFetchData = () => {
  const [ inputFetchValue, setInputFetchValue ] = useState('')

  // const [ currentData, setCurrentData ] = useState(null)
  // const [ forecastData, setForecastData ] = useState(null)
  // const [ astronomyData, setAstronomyData ] = useState(null)
  // const [ sportData, setSportData ] = useState(null)

  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState(false)

  const { setData, data } = useContext(DataContext);

  const date = new Date();
  date.setDate(date.getDate() + 3)
  const formattedTodayDate = (date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());

  const CURRENT_URL = 'http://api.weatherapi.com/v1/current.json'
  const FORECAST_URL = 'http://api.weatherapi.com/v1/forecast.json'
  const ASTRONOMY_URL = 'http://api.weatherapi.com/v1/astronomy.json'
  const SPORT_URL = 'http://api.weatherapi.com/v1/sports.json'

  const currentParams = {
    key: process.env.API_KEY,
    q: inputFetchValue,
    aqi: 'no',
  }
  const forecastParams = {
    key: process.env.API_KEY,
    q: inputFetchValue,
    days: 3,
    aqi: 'no',
    alerts: 'no'
  }
  const astronomyParams = {
    key: process.env.API_KEY,
    q: inputFetchValue,
    dt: formattedTodayDate,
  }
  const sportParams = {
    key: process.env.API_KEY,
    q: inputFetchValue,
  }

  const fetchAllData = async () => {
    const currentResponse = await axios.get(CURRENT_URL, { params: currentParams });
    const forecastResponse = await axios.get(FORECAST_URL, { params: forecastParams });
    const astronomyResponse = await axios.get(ASTRONOMY_URL, { params: astronomyParams });
    const sportResponse = await axios.get(SPORT_URL, { params: sportParams });
    setData({
      ...data,
      currentData: currentResponse.data,
      forecastData: forecastResponse.data,
      astronomyData: astronomyResponse.data,
      sportData: sportResponse.data,
    })
  }

  function fetchData() {
    if (inputFetchValue) {
      try {
        fetchAllData()
      } catch {
        setData({
          ...data,
          error: true
        })
      } finally {
        () => {
          setData({
            ...data,
            loading: false
          })
        }
      }
    }
  }

  return (
    {
      // currentData,
      // forecastData,
      // astronomyData,
      // sportData,
      // inputFetchValue,
      loading,
      error,
      setInputFetchValue,
      fetchData
    }
  )
}

export default useFetchData