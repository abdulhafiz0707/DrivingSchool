import React from 'react'

// Images
import ServiceCar from '../../assets/image/Service_1.png'
import Arrow from '../../assets/svg/Arrow.svg'
import './Service_1.scss'

function Service_1() {
	return (
		<div className='Service_1'>
			<div className='Service-container_1'>
				<img src={ServiceCar} alt='' />
				<div className='Service-texts_1'>
					<h2>Обучение вождению на легковом автомобиле</h2>
					<h1>ОТ 36 950 ₽</h1>
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
