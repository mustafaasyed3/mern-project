import React from 'react'
import { Route } from 'react-router-dom';
import Project from './Project';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='navbar'>
        <section>
            <Link to='/Project'>Projects</Link>
            <Link to='/'>Dashboard</Link>
        </section>
    </nav>
  )
}

