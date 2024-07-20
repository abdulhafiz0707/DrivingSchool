import React from 'react'

// Images
import ServiceCar from '../../assets/image/Service_2.png'
import Arrow from '../../assets/svg/ArrowLeft.svg'
import './Service_2.scss'

function Service_2() {
	return (
		<div className='Service_2'>
			<div className='Service-container_2'>
				<div className='Service-texts_2'>
					<h2>Обучение на права ГИМС</h2>
					<h1>ОТ 23 900 ₽</h1>
					<div>
						<img src={Arrow} alt='' />
						<p>Получи права на управление:</p>
						<img src={Arrow} alt='' />
						<p>гидроциклом</p>
						<img src={Arrow} alt='' />
						<p>катером</p>
						<img src={Arrow} alt='' />
						<p>парусной яхтой</p>
						<img src={Arrow} alt='' />
						<p>другими маломерными судами</p>
					</div>
					<button>Подробнее</button>
				</div>
				<img src={ServiceCar} alt='' />
			</div>
		</div>
	)
}

export default Service_2
