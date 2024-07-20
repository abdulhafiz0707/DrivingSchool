import React from 'react'

// Images
import ServiceCar from '../../assets/image/Service_3.png'
import Arrow from '../../assets/svg/Arrow.svg'
import Service_3 from '../../assets/svg/Service_3.svg'
import './Service_3.scss'

function Service_1() {
	return (
		<div className='Service_3'>
			<div className='Service-container_3'>
				<img src={ServiceCar} alt='' />
				<div className='Service-texts_3'>
					<h2>Обучение вождению на мотоцикле</h2>
					<img className='Service_3_img' src={Service_3} alt='' />
					<span>16 500 ₽*</span>
					<div>
						<img src={Arrow} alt='' />
						<p>Длительность обучения 3 месяца</p>
						<img src={Arrow} alt='' />
						<p>Беспроцентная рассрочка!</p>
						<img src={Arrow} alt='' />
						<p>Идеально сбалансированная цена</p>
						<img src={Arrow} alt='' />
						<p>Опытные и вежливые инструкторы</p>
						<img src={Arrow} alt='' />
						<p>В стоимость входят все расходы по обучению</p>
						<img src={Arrow} alt='' />
						<p>Гибкая система графиков обучения</p>
					</div>
					<button>Записаться</button>
				</div>
			</div>
		</div>
	)
}

export default Service_1
