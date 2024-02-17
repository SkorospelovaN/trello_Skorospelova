import React, { useState } from 'react'
import './WorkSpace.css'

const WorkSpace = () => {

    const [isTeam, setIsTeam] = useState(false)

    const teamOn = () => setIsTeam(!isTeam)

  return (
    <>
    <div className='around'>
    {!isTeam ? 
    <div className='workspace'>
        <h1>Мои команды</h1>
        <div className='work-teams'>
            <div className='work-team'>
                <p onClick={teamOn}>Название команды</p>
                <div className='task'>
                    <p>Задача</p>
                    <div className='circle' />
                </div>
            </div>
            <div className='work-team'>
                <p>Название команды</p>
                <div className='task'>
                    <p>Задача</p>
                    <div className='circle' />
                </div>
            </div>
            <div className='work-team'>
                <p>Название команды</p>
                <div className='task'>
                    <p>Задача</p>
                    <div className='circle' />
                </div>
                <div className='task'>
                    <p>Задача</p>
                    <div className='circle' />
                </div>
            </div>
            </div>
        </div>
    :
    <div className='workspace'>
        <div className='head-group'>
            <h1>Название команды</h1>
            <button>+</button>
        </div>
        <div className='work-teams-group'>
            <div className='work-team'>
                <p>Название группы задач</p>
                <div className='task'>
                    <p>Задача</p>
                    <p className='date-p'>До (дата)</p>
                    <div className='circle' />
                </div>
            </div>
            <div className='work-team'>
                <p>Название группы задач</p>
                <div className='task'>
                    <p>Задача</p>
                    <p className='date-p'>До (дата)</p>
                    <div className='circle' />
                </div>
                <div className='task'>
                    <p>Задача</p>
                    <p className='date-p'>До (дата)</p>
                    <div className='circle' />
                </div>
                <button className='add-task'>+</button>
            </div>
         </div>
    </div>
    }
    </div>
    </>
  )
}

export default WorkSpace