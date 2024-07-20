import React from 'react'

// Images 
import Benefits1 from "../../assets/svg/Benefits1.svg"
import Benefits2 from "../../assets/svg/Benefits2.svg"
import Benefits3 from "../../assets/svg/Benefits3.svg"
import Benefits4 from "../../assets/svg/Benefits4.svg"
import Benefits5 from "../../assets/svg/Benefits5.svg"
import Benefits6 from "../../assets/svg/Benefits6.svg"

import "./Benefits.scss"

function Benefits() {
  return (
		<div className='Benefits'>
			<div>
				<img src={Benefits1} alt='' />
				<p>Приятные цены</p>
				<img src={Benefits2} alt='' />
				<p>Гибкий график</p>
				<img src={Benefits3} alt='' />
				<p>Скидки студентам</p>
				<img src={Benefits4} alt='' />
				<p>Высокая сдаваемость</p>
				<img src={Benefits5} alt='' />
				<p>Беспроцентная рассрочка</p>
				<img src={Benefits6} alt='' />
				<p>Уникальный VR авто-тренажёр</p>
			</div>
		</div>
	)
}

export default Benefits
