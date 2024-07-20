import React from 'react'

// Images 
import Driving2 from "../../assets/image/Driving2.png"
import Driving3 from "../../assets/image/Driving3.png"

import "./Driving.scss"
function Driving() {
  return (
		<div className='driving'>
				<img className='Driving3' src={Driving3} alt='' />
			<div className='driving-images'>
				<img src={Driving2} alt='' />
			</div>

			<div className='driving-texts'>
				<div className='texts'>
					<h1>Учись рядом с работой или домом</h1>
					<p>Четыре ученых класс в разных частях города!</p>
					<h2>
						Выбирай удобный для тебя и записывайся на обучение с Драйвингскул
					</h2>
				</div>
			</div>
					<button>Оставь заявку</button>
		</div>
	)
}

export default Driving
