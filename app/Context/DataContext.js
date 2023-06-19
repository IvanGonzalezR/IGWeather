'use client'
import { createContext, useState } from 'react'

const DataContext = createContext({});

export function DataContextProvider({ children }) {

  const [ data, setData ] = useState({
    currentData: null,
    forecastData: null,
    astronomyData: null,
    sportData: null,
    loading: false,
    error: false,
  })

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext