import React from 'react'

// Images 
import theoryFixed from "../../assets/svg/theoryFixed.svg"
import TheoryLocation from '../../assets/svg/TheoryLocation.svg'
import './Theory.scss'

function Theory() {
  return (
		<div className='Theory'>
			<div className='Theory_container'>
				
					<div className='theory_title'>
						<p>
							Теоретические занятия проходят в учебно-методическом центре
							<i>"ЭГЕРШЕЛЬД"</i>
						</p>
					</div>
					<h1>ОТ 23 900 ₽</h1>
					<p>
						Программа зависит от выбранных категорий прав и состоит из 8 лекций
						— все обучение займет около 2 месяцев.
					</p>
					<div className='theory_titles'>
						<img src={TheoryLocation} alt='' />
						<h4>Эгершельд</h4>
					</div>
					<p>ул. Лейтенанта Шмидта, 17А. (Эгершельдоставляем)</p>
					<button>Оставить заявку</button>
				
			</div>
				<div className='Theory-images'>
					<img src={theoryFixed} alt='' />
				</div>
		</div>
	)
}

export default Theory
