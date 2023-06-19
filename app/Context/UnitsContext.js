'use client'
import { createContext, useState } from 'react'

const Context = createContext({});

export function UnitsContextProvider({ children }) {

  const [ unit, setUnit ] = useState('C')

  return (
    <Context.Provider value={{ unit, setUnit }}>
      {children}
    </Context.Provider>
  )
}

export default Context