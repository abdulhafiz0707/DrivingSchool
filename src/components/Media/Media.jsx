import React from 'react'

// Images 
import Media_1 from '../../assets/image/Media_1.png'
import Media_2 from '../../assets/image/Media_2.png'
import Media_3 from '../../assets/image/Media_3.png'
import Media_4 from '../../assets/image/Media_4.png'
import Media_5 from '../../assets/image/Media_5.png'
import "./Media.scss"

function Media() {
  return (
		<div className='Media'>
			<div className='Media-container'>
				<p>
					Мы в социальных сетях{' '}
					<a href='https://www.instagram.com/drivingschoolvl/'>
						@drivingschoolvl
					</a>
				</p>
				<p className='Media-container-texts'>
					Подписывайтесь на наши социальные сети, следите за новостями. Там мы
					публикуем фотографии и видео, проводим конкурсы на бесплатное обучение
					и выкладываем отзывы <b>#ДРАЙВИНГСКУЛ</b> 
				</p>
			</div>
			<div className='Media-images'>
				<img src={Media_1} alt='' />
				<img src={Media_2} alt='' />
				<img src={Media_3} alt='' />
				<img src={Media_4} alt='' />
				<img src={Media_5} alt='' />
			</div>
		</div>
	)
}

export default Media
