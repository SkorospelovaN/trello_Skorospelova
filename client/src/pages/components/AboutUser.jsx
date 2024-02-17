import React, { useState } from 'react'
import './AboutUser.css'
import edit from '../../assets/edit.svg'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../redux/authSlice'

const AboutUser = () => {
    const [isEdit, setIsEdit] = useState(false)

    const editOn = () => setIsEdit(!isEdit)

    const dispatch = useDispatch()

    const token = useSelector((state) => state.auth.token)
    const login = useSelector((state) => state.auth.login)
    const fio = useSelector((state) => state.auth.fio)
    const phone = useSelector((state) => state.auth.phone)

  return (
    <>
    <div className='user'>
        <div className='about-user'>
            <h1>Мои данные</h1>
            <img src={edit} onClick={editOn}/>
        </div>
        {!isEdit ? <p>{login}</p> : <input type='text' value={login} />}
        {!isEdit ? <p>{fio}</p> : <input type='text' value={fio} />}
        {!isEdit ? <p>{phone}</p> : <input type='text' value={phone} />}
        {!isEdit ? 
            <button className='delete' type='submit' onClick={() => {
                dispatch(logOut())
            }}>Выйти</button>
            :
            <div className='buttons'>
                <button className='save'>Сохранить</button>
                <button className='delete' type='submit' onClick={() => {
                dispatch(logOut())
            }}>Выйти</button>
            </div>
        }
        
    </div>
    </>
  )
}

export default AboutUser