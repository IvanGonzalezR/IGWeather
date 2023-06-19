'use client'
import React from 'react'
import NavBar from '@components/NavBar'
import SearchBar from '@components/SearchBar'
import Logo from '@svgs/Logo'
import AntSwitch from '@components/Switch'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useContext } from 'react'
import Context from '@context/UnitsContext'

const Header = () => {
  const context = useContext(Context);

  const handleChange = () => {
    context.setUnit((prev) => prev === 'C' ? 'F' : 'C')
  }

  return (
    <header className='w-full bg-primary-blue text-white'>
      <div className='flex items-center justify-between pr-4'>
        <Logo />
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>F°</Typography>
          <AntSwitch onChange={handleChange} defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
          <Typography>C°</Typography>
        </Stack>
      </div>
      <div className='px-4 flex justify-between'>
        <SearchBar />
      </div>
      <div className='py-2'>
        <NavBar />
      </div>
    </header>
  )
}

export default Header