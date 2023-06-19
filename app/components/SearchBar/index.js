import React from 'react'
import Busqueda from '@svgs/Busqueda'
import useFetchData from '../../hooks/useFetchData'

const SearchBar = () => {
  const [ inputValue, setInputValue ] = React.useState('')

  const {
    setInputFetchValue,
    fetchData,
    currentData
  } = useFetchData()

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setInputFetchValue(inputValue)
    fetchData()
  }

  return (
    <form className='flex justify-center w-full h-8 relative' onSubmit={handleSubmit}>
      <div className='w-full flex max-w-3xl relative'>
        <div className='absolute left-3 top-1'>
          <Busqueda />
        </div>
        <input type='search' value={inputValue} onChange={handleChange} placeholder='Gomez Palacio Durango' className='w-full rounded-l-md focus-visible:outline-none text-black pr-4 pl-11 overflow-ellipsis' />
        <button className='w-auto px-6 rounded-r-md bg-secondary-blue'>Search</button>
      </div>
    </form>
  )
}

export default SearchBar