import React from 'react'

import './PriceText.scss'

function PriceText() {
  return (
		<div className="Dont">

		<div className='PriceText'>
			<div className='PriceText_content'>
				<div className='PriceText_content2'>
					<h1>Внутренние водные пути (ВВП)</h1>
					<p>
						судоходные реки и озëра, где действуют правила плавания по
						внутренним водным путям
					</p>
				</div>
				<div className='PriceText_content3'>
					<h1>Внутренние пути (ВП)</h1>
					<p>не судоходные реки и озёра</p>
				</div>
				<div className='PriceText_content4'>
					<h1>Морские пути (МП)</h1>
					<p>
						внутренние и территориальные моря. К данной категории также
						относятся водоемы, которые не являются морями, но где действуют
						правила судоходства, как на морских путях.
					</p>
				</div>
			</div>
		</div>
		</div>
	)
}

export default PriceText
