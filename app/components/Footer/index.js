import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='bg-secondary-blue flex justify-center absolute bottom-0 w-full pt-1 h-auto'>
      <div className='flex flex-col w-full items-center justify-center max-w-3xl'>
        <Image src='/../public/mimarca2.png' width={120} height={30} alt='Mi marca' priority='true' />
        <ul className='flex justify-around w-full px-4 py-2'>
          <li className='text-blue-light text-sm'>
            <a target='_blank' href='https://www.linkedin.com/in/ivangonzalezr/'>LinkedIn</a>
          </li>
          <li className='text-blue-light text-sm'>
            <a target='_blank' href='https://github.com/IvanGonzalezR'>GitHub</a>
          </li>
          <li className='text-blue-light text-sm'>
            <a target='_blank' href='#'>Portfolio</a>
          </li>
        </ul>
        {/* separador html */}
        <hr className='w-8/12 border-blue-light my-4' />
        <p className='text-blue-light text-sm mb-4'>© 2023 IGWeather. Todos los derechos reservados.</p>
      </div>
    </div>
  )
}

export default Footer