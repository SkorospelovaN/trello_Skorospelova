import React, { useEffect, useState } from 'react'
import './Auth.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AUTH_ROUTE, MAIN_ROUTE } from '../utils/consts'
import { useDispatch, useSelector } from 'react-redux'
import { loginThunk } from '../redux/authSlice'
import { regThunk } from '../redux/regSlice'

const Auth = () => {
    const location = useLocation()
    const isAuth = location.pathname === AUTH_ROUTE

    const [login,setLogin] = useState('')
    const [fio,setFio] = useState('')
    const [password,setPassword] = useState('')
    const [phone,setPhone] = useState('')

    const authState = useSelector((state) => state.auth)
    const regState = useSelector((state) => state.reg)
    const dispatch = useDispatch()

    const nav = useNavigate()

        useEffect(() => {
        
        }, [authState])

        useEffect(() => {
        if (regState.message) {
            nav(MAIN_ROUTE)
        }
    }, [regState])

    const handleSubmit = event => {
        event.preventDefault();
    }

  return (
    <>
    <div className='around'>
        <form className='auth' onSubmit={handleSubmit}>
            <h1>{isAuth ? 'Регистрация' : 'Вход'}</h1>
            <input type='text' placeholder='Введите логин...' value={login} onChange={e => setLogin(e.target.value)}/>
            {isAuth ? <input type='text' placeholder='Введите ФИО...' value={fio} onChange={e => setFio(e.target.value)}/> : <></>}
            {isAuth ? <input type='tel' placeholder='Введите номер телефона...' value={phone} onChange={e => setPhone(e.target.value)}/> : <></>}
            <input type='password' placeholder='Введите пароль...' value={password} onChange={e => setPassword(e.target.value)}/>
            <div><p>{isAuth ? 'Уже есть аккаунт?' : 'Впервые у нас?'}</p>{isAuth ? <Link to={MAIN_ROUTE}>Войдите</Link> : <Link to={AUTH_ROUTE}>Зарегистрируйтесь</Link>}</div>
            {isAuth ? 
                <button className='auth-button' type='submit' 
                onClick={() => {dispatch(regThunk({
                    login: login,
                    fio: fio,
                    phone: phone,
                    password: password}))}}>Зарегистрироваться</button>
            :
                <button className='auth-button' type='submit' 
                onClick={() => {dispatch(loginThunk({
                    login: login,
                    password: password}))}}>Войти</button>
            }
        </form>
    </div>
    </>
  )
}

export default Auth