'use client'
import Image from 'next/image'
import useFetchData from '../hooks/useFetchData'
import DataContext from '@context/DataContext'
import { useContext } from 'react'

export default function Home() {

  const context = useContext(DataContext);

  const {
    currentData,
    forecastData,
    astronomyData,
    sportData,
    loading,
    error,
  } = context.data

  return (
    <div className='flex flex-col justify-center max-w-3xl w-full'>
      <div className='bg-gray-400 h-56 w-full'>
        {loading ? <h1>loading</h1> : null}
        {error ? <h1>error</h1> : null}
        <h1>{JSON.stringify(currentData)}</h1>
      </div>
    </div>
  )
}