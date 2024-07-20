import React from 'react'

// Images

import ServiceCar from '../../assets/image/Service_2.png'
import Arrow from '../../assets/svg/ArrowLeft.svg'
import laptop from "../../assets/image/Service_4_laptop.png"
import './Service_4.scss'

function Service_4() {
	return (
		<div className='Service_4'>
			<div className='Service-container_4'>
				<div className='Service-texts_4'>
					<h1>
						Онлайн обучение <i>Кому подойдет:</i>
					</h1>
					<div>
						<img src={Arrow} alt='' />
						<p>У кого нет времени на дорогу до лекций</p>
						<img src={Arrow} alt='' />
						<p>Вы находитесь в другом городе</p>
						<img src={Arrow} alt='' />
						<p>Есть ноутбук, планшет или телефон</p>
						<img src={Arrow} alt='' />
						<p>Вы сможете освоить онлайн теоретическую часть целиком</p>
						<img src={Arrow} alt='' />
						<p>Вы хотите водить автомобиль</p>
						<img src={Arrow} alt='' />
						<p>Что здесь объяснять, все понятно Жми на эту кнопку</p>
					</div>

					<div className='Service_4_button'>
						<button>Записаться</button>
						<button className='consultation'>Получить конусльтацию</button>
					</div>
				</div>
				<div className='laptop'>
					<img src={laptop} alt='' />
				</div>
			</div>
		</div>
	)
}

export default Service_4
