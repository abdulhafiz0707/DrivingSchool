import React from 'react'

// Images 
import Rectangle1 from "../../assets/image/Rectangle_1.png"
import Rectangle2 from "../../assets/image/Rectangle_2.png"
import Rectangle3 from "../../assets/image/Rectangle_3.png"
import Rectangle4 from "../../assets/image/Rectangle_4.png"
import Rectangle_cursor from "../../assets/svg/Rectangle_cursor.svg"
import pause from '../../assets/svg/pause.svg'
import "./Rectangle.scss"

function Rectangle() {
  return (
		<div className='Rectangle'>
			<div className="background">

			<div>
				<h1>Что о нас говорят обучающиеся?</h1>
				<p>Мы опросили десятки наших учеников и узнали, почему они считают</p>
				<p className='p'>автошколу ДРАЙВИНГСКУЛ лучшей!</p>
			</div>
			<div className='Rectangle-container'>
				<img src={Rectangle1} alt='' />
				<img src={Rectangle2} alt='' />
				<img src={Rectangle3} alt='' />
				<img src={Rectangle4} alt='' />
			</div>
			<div className='Rectangle_cursor'>
				<img src={Rectangle_cursor} alt='' />
			</div>
			<div className='pause_images'>
				<div className='pause'>
					<a href='https://youtube.com/shorts/27cIfx6D6HM?si=Oz7U0b1Zi6onNUAQ'>
						<img src={pause} alt='' />
					</a>
				</div>
				<div className='pause'>
					<a href='https://youtube.com/shorts/w8Tn1TYCCW0?si=qDCNCy4HSpehVV81'>
						<img src={pause} alt='' />
					</a>
				</div>
				<div className='pause'>
					<a href='https://youtube.com/shorts/cFUjMQ_VE6U?si=ZZco_1hpuP_M7qtw'>
						<img src={pause} alt='' />
					</a>
				</div>
				<div className='pause'>
					<a href='https://youtube.com/shorts/6qsN9RUHPE8?si=b8psiMPZYG5Nw08z'>
						<img src={pause} alt='' />
					</a>
				</div>
			</div>
			</div>
		</div>
	)
}

export default Rectangle