import React, { useState, useRef, useEffect } from 'react'

// Images
import Fire from '../../assets/image/fire.png'
import fire from '../../assets/svg/Fire.svg'
import mouse from '../../assets/svg/mouse.svg'
import BannerHaval from '../../assets/image/BannerHaval.png'
import './Banner.scss'
import Modal from '../Modal/Modal'

function Banner() {
	const [popup, setPopup] = useState()
	const outRef = useRef(null)
	const aRef = useRef(null)

	useEffect(() => {
		function clickHandler(event) {
			if (
				(outRef.current && !outRef.current.contains(event.target)) ||
				(aRef.current && !aRef.current.contains(event.target))
			) {
				setPopup(false)
				console.log('ok')
			}
		}
		document.addEventListener('mousedown', clickHandler)
		return () => {
			document.removeEventListener('mousedown', clickHandler)
		}
	}, [outRef, aRef])

	return (
		<div className='Banner-container'>
			<div className='Banner'>
				<div className='Banner-contents'>
					<p>
						Мы выпустили <i>9000+</i> водителей. Ты следующий!
					</p>
					<div className='img-fire'>
						<img src={Fire} alt='Fire' />
					</div>
				</div>
			</div>

			<div className='Banner-xl'>
				<div className='Banner-xl-texts'>
					<p>
						<img src={fire} alt='Fire icon' />
						Профессионально обучаем вождению
					</p>
					<p>
						<img src={fire} alt='Fire icon' />
						Удобный график занятий
					</p>
					<p>
						<img src={fire} alt='Fire icon' />
						Адекватные цены
					</p>
					<p>
						<img src={fire} alt='Fire icon' />
						Филиалы в удобной части города
					</p>

					<div className='banner-btns'>
						<div className='banner-button'>
							<button ref={aRef} onClick={() => setPopup(!popup)}>
								Начать обучение
							</button>
						</div>
						{popup && <div ref={outRef}>
							<Modal/>
							</div>}
						<div className='mouse'>
							<img src={mouse} alt='Mouse icon' />
							<p>Подробнее</p>
						</div>
					</div>
				</div>

				<div className='banner-car'>
					<img src={BannerHaval} alt='Car' />
				</div>
			</div>
		</div>
	)
}

export default Banner
