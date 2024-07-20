import React from 'react'
import "./PriceSection.scss"

function PriceSection() {
  return (
		<div className='PriceSection'>
			<div className='PriceSection_image'></div>

			<div className='PriceSection_content'>
				<h1>Где и чем я смогу управлять после курса?</h1>
				<div>
					<h3>Моторное судно:</h3>
					<p>
						до 20 метров со стационарным или подвесным мотором без ограничения
						по мощности.
					</p>
				</div>
				<div>
					<h3>Гидроцикл:</h3>
					<p>скоростное персональное водное транспортное средство.</p>
				</div>
				<div>
					<h3>Парусное судно:</h3>
					<p>
						яхта до 20 метров, которое использует парус и силу ветра для
						движения.
					</p>
				</div>
			</div>
		</div>
	)
}

export default PriceSection
