import Link from 'next/link'
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
const Haeder = () => {
  return ( 
    <header className='header'>

       <h1 className="logo">The Suit Gallery</h1>

      <nav>
        <Link href="/">Home</Link>

        <Link href="/about">About</Link>

        <Link href="/suits">Suits</Link>

        <Link href="/contact">Contact</Link>
        <FaShoppingCart style={{color: 'white', fontSize: '20px'}}/>
        
        </nav>
    </header>
  )
}

export default Haeder
