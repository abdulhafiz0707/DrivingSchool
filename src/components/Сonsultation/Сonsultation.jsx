import React from 'react'

// Images 
import whatsapp from "../../assets/svg/whatsapp.svg"
import './Сonsultation.scss'

function Сonsultation() {
  return (
		<div className='Сonsultation'>
			<div className='Сonsultation-container'>
				<img src={whatsapp} alt='' />
				<p>Получить консультацию в whatsapp</p>
			</div>
		</div>
	)
}

export default Сonsultation
