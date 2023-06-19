import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const NavBar = () => {

  const pathName = usePathname()
  console.log(pathName)

  return (
    <nav>
      <ul className='flex justify-around'>
        <li className={(pathName === '/') ? 'border-b-2 h-full' : 'h-full'}>
          <Link href={'/'} as='/'>Clima</Link>
        </li>
        <li className={(pathName === '/Astronomia') ? 'border-b-2 h-full' : 'h-full'}>
          <Link href={'/Astronomia'} as='/Astronomia'>Astronomía</Link>
        </li>
        <li className={(pathName === '/Deportes') ? 'border-b-2 h-full' : 'h-full'}>
          <Link href={'/Deportes'} as='/Deportes'>Deportes</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar