import React from 'react'

// Images
import Review_review from '../../assets/svg/Review_review.svg'
import Review_content from '../../assets/image/Review_content.png'
import kvhc from '../../assets/svg/kvhc.svg'
import './Review.scss'

function Review() {
	return (
		<div className='Review'>
			{/* Background Image */}
			{/* <div className='Review_review'>
				<img src={Review_review} alt='Review background' />
			</div> */}

			{/* Container for the Review Section */}
			<div className='Review-container'>
				{/* Texts Section */}
				<div className='Review-container-texts'>
					<h1>Отзывы наших учеников</h1>
					<p>
						Нас выбрали более 6 000 учеников <br />
						Листай сообщения, которые присылают наши выпускники 👉🏻
					</p>
				</div>

				{/* Review Content */}
				<div className='Review-content'>
					<div className='Review-content-img'>
						{/* Image and Name of the Reviewer */}
						<div className='Review-content-texts'>
							<img
								className='Review_content'
								src={Review_content}
								alt='Reviewer'
							/>
							<p>Тимоханова Анастасия</p>
						</div>

						{/* Review Text with Icons */}
						<div className='Review-content-texts_2'>
							<img className='“1' src={kvhc} alt='Quote icon' />
							<p>
								Здравствуйте, хочу поблагодарить Вашу автошколу за полученные
								знания и навыки. В особенности выражаю большую благодарность
								Баринову Олегу Павловичу за умение доступно донести информацию,
								научить и освоить навыки вождения. Хороших Вам учеников. И, да,
								сдать с первого раза легко, главное, не переживать и верить в
								себя!😌
							</p>
							<img className='“2' src={kvhc} alt='Quote icon' />
							<br />
							<p className='text'><b>#</b>явыбираюдрайвингскул</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Review
