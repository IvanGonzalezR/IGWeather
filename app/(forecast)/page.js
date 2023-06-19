'use client'
import Image from 'next/image'
import DataContext from '@context/DataContext'
import { useContext } from 'react'
import CurrentMainCard from '@components/CurrentMainCard'

export default function Home() {

  const context = useContext(DataContext);

  const {
    loading,
    error,
  } = context.data

  return (
    <div className='flex flex-col h-full justify-start max-w-3xl w-full min-h-screen'>
      <div className='flex flex-col justify-center items-center w-full'>
        <CurrentMainCard />
        {loading ? <h1>loading</h1> : null}
        {error ? <h1>error</h1> : null}
      </div>
    </div>
  )
}