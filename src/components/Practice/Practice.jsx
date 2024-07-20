import React from 'react'

// Images
import TheoryLocation from '../../assets/svg/TheoryLocation.svg'
import './Practice.scss'

function Practice() {
	return (
		<div className='Practice'>
			<div className='Practice-images'></div>

			<div className='Practice_container'>
				<div className='Practice_title'>
					<p className='titile'>
						Практические занятия проходят на базе самого большого яхт-клуба на
						Дальнем Востоке — <i>«Семь футов».</i>
					</p>
				</div>

				<p>
					6 часов тренировок на воде на катере или парусной яхте — время
					подбирается индивдуально. На тренировках отрабатываем маневры, которые
					надо будет выполнить самостоятельно на экзамене в ГИМС.
				</p>
				<div className='Practice_titles'>
					<img src={TheoryLocation} alt='' />
					<h4>Эгершельд</h4>
				</div>
				<p>ул. Лейтенанта Шмидта, 17А. (Эгершельдоставляем)</p>
				<button>Узнать стоимость</button>
			</div>
		</div>
	)
}

export default Practice
