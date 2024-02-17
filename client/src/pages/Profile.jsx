import React from 'react'
import './Profile.css'
import AboutUser from './components/AboutUser'
import Teams from './components/Teams'

const Profile = () => {
  return (
    <>
    <div className='around'>
        <div className='profile'>
            <AboutUser />
            <Teams />
        </div>
    </div>
    </>
  )
}

export default Profile