import React from 'react'

// Images 
import Info1 from "../../assets/image/Info1.png"
import Rocket from '../../assets/svg/Rocket.svg'
import "./Info.scss"

function Info() {
  return (
		<div className='Info'>
			<div className='Info-container'>
				
				<img src={Info1} alt='' />
				<div className='Info-texts'>
				<h1>
					Первый в России тренажер автосимулятор с режимом виртуальной
					реальности
				</h1>
        <div>
					<p>
						<img src={Rocket} alt='' />
						Помогает победить страх дороги
					</p>

        </div>
        <div>
					<p>
						<img src={Rocket} alt='' />
						Развивает когнитивные функции мозга
					</p>

        </div>
        <div>
					<p>
						<img src={Rocket} alt='' />
						Тренирует водительские навыки
					</p>

        </div>
					<button>Попробовать</button>
				</div>
			</div>
		</div>
	)
}

export default Info
