import React from 'react'

// Images 
import InfoVidio1 from "../../assets/image/InfoVidio.png"
import Youtube from "../../assets/svg/LogoYoutube.svg"
import './InfoVidio.scss'

function InfoVidio() {
  return (
		<div className='InfoVidio'>
			<div className='InfoVidio-Container'>
				<div className='InfoVidio-images'>
					<a href='https://youtu.be/cHuzaEThBZk?si=AAcxriAzedvYDE2W'>
						<img src={InfoVidio1} alt='' />
					</a>
				</div>

				<div className='InfoVidio-texts'>
					<h1>Узнайте больше</h1>
					<p>
						В конце 2016 года мы разработали и внедрили в процесс обучения
						тренажер-автосимулятор с режимом виртуальной реальности. Тренажер
						работает на базе VR-очков и специального програмного обеспечения. Вы
						сможете пройти предварительное обучение как на автодроме, так и на
						городе. Важно помнить, что тренажер входит в стоимость и является
						совершенно бесплатным для наших обучающихся. Перед посадкой в
						реальный автомобиль, каждый из Вас сможет справиться со своими
						страхами и испытать свои силы за рулем, на дорогах в виртуальной
						реальности.
					</p>
					<div className='InfoVidio-logs'>
						<h1>Смотреть на</h1>
						<a href='https://youtube.com/@drivingschoolvl?si=mRwKP513_JCVXijr'>
							<img src={Youtube} alt='' />
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default InfoVidio
