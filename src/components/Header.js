import React from 'react'
import './styles/Header.css'

export default function Header() {
  return (
      <nav className='navigation'>
        <ul>
            <li className='active'><a href='#'>Home</a></li>
            <li><a href='#'>Selection</a></li>
            <li><a href='#'>News</a></li>
            <li><a href='#'>About</a></li>
        </ul>
      </nav>
  )
}

