'use client'
import React from 'react'
import { useContext } from 'react'
import DataContext from '@context/DataContext'
import Context from '@context/UnitsContext'
import Image from 'next/image'

const CurrentMainCard = () => {

  const context = useContext(DataContext);
  const unitContext = useContext(Context);

  const {
    currentData,
    loading,
    error,
  } = context.data

  console.log('====================================');
  console.log(currentData);
  console.log('====================================');

  return (
    <div className='bg-cloudy bg-cover bg-center h-44 w-11/12 mt-6 rounded-2xl p-6 relative'>
      <div className='absolute bg-gradient-to-r from-gray-950 via-slate-950 via-10% opacity-50 inset-0 rounded-2xl p-6 z-10'></div>
      <div className='flex justify-between absolute z-10 w-10/12'>
        <div className='flex flex-col justify-between h-32'>
          <div>
            <h1 className='text-4xl font-bold text-white'>{currentData?.current.temp_c}{(unitContext.unit === 'C') ? ' C°' : ' F°'}</h1>
            <h3 className='text-base font-bold text-white'>{currentData?.current.condition.text}</h3>
          </div>
          <div>
            <p className='text-white'>{currentData?.location.localtime.split(' ')[ 0 ]}</p>
            <p className='text-white'>{currentData?.location.localtime.split(' ')[ 1 ]}</p>
          </div>
        </div>
        <div className='self-end'>
          {currentData && <Image src={'https:' + currentData?.current.condition.icon} alt='weather icon' width={85} height={85} />}
        </div>
      </div>
    </div>
  )
}

export default CurrentMainCard