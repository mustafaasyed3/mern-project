import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return(
        <section className='Dashboard-Section'>
        <h1>Dashboard</h1>
        <p>Welcome to the Dashboard this is a test for navigation in React</p>
        <p>Please Click on the button or the button on the navbar to access the main app</p>
        <Link to="/Project" className="button">
          View Projects
        </Link>
      </section>
    )
}

export default Dashboard;