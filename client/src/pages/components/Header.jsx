import React from 'react'
import './Header.css'
import { useLocation } from 'react-router-dom'
import { AUTH_ROUTE, MAIN_ROUTE, PROFILE_ROUTE } from '../../utils/consts'

const Header = () => {
    const location = useLocation()
    const isAuth = location.pathname === MAIN_ROUTE
    const isLogin = location.pathname === AUTH_ROUTE
    const isProfile = location.pathname === PROFILE_ROUTE

  return (
    <p className='header'>
        {isAuth ? 'Авторизация' : isLogin ? 'Авторизация' : isProfile ? 'Профиль' : 'Рабочее пространство'}
    </p>
  )
}

export default Header