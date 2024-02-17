import React, { useState } from 'react'
import './Teams.css'
import editTeam from '../../assets/editTeam.svg'
import deleteUser from '../../assets/delete.svg'

const Teams = () => {

  const [isOneTeam, setOneTeam] = useState(false)

  const teamOn = () => setOneTeam(!isOneTeam)

  return (
    <>
    {!isOneTeam ?
    <div className='teams'>
        <h1>Мои команды</h1>
        <div className='teams-in'>
            <p onClick={teamOn}>Название</p>
            <img src={editTeam} />
        </div>
        <div className='teams-in'>
            <p>Название</p>
            <img src={editTeam} />
        </div>
        <form className='add-team'>
            <input type='text' placeholder='Введите название...' />
            <button>+</button>
        </form>
    </div>
    :
    <div className='teams'>
        <h1 onClick={teamOn}>Название команды</h1>
        <form className='add-team'>
            <input type='text' placeholder='Логин пользователя...' />
            <button>+</button>
        </form>
        <div className='teams-in'>
            <p>Пользователь</p>
            <img src={deleteUser} />
        </div>
        <div className='teams-in'>
            <p>Пользователь</p>
            <img src={deleteUser} />
        </div>
    </div>
    }
    </>
  )
}

export default Teams