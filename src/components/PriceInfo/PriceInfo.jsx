import React from 'react'

// Images 
import GimsPrice from '../../assets/svg/GimsPrice.svg'
import Arrow from '../../assets/svg/ArrowLeft.svg'
import "./PriceInfo.scss"

function PriceInfo() {
  return (
		<div>
			<div className='Price'>
				<div className='Price_container'>
					<h1>
						Государственное удостоверение на право управления маломерным судном:
					</h1>
					<div>
						<img src={Arrow} alt='' />
						<p>гидроцикл</p>
					</div>
					<div>
						<img src={Arrow} alt='' />
						<p>катер</p>
					</div>
					<div>
						<img src={Arrow} alt='' />
						<p>парусная яхта</p>
					</div>
					<div>
						<img src={Arrow} alt='' />
						<p>другие маломерные суда</p>
					</div>
					<p>
						Удостоверение ГИМС действует на всей территории Российской Федерации
						и позволяет управлять маломерными судами длиною до 20 метров, без
						ограничения по мощности двигателя, с количеством людей на борту до
						12 человек.
					</p>
					<button>Записаться на курс</button>
				</div>
				<div className='Price_images'>
					<img src={GimsPrice} alt='' />
				</div>
			</div>
		</div>
	)
}

export default PriceInfo
