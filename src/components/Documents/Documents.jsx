import React from 'react'

// Images 
import DocumentsSvg from "../../assets/svg/Documents_.svg"
import "./Documents.scss"

function Documents() {
  return (
		<div className='Documents'>
			<div className='title'>Документы</div>
			<div className='container_documents'>
				<div className='documents_contents'>
					<div>
						<p>Лицензия на право ведения образовательной деятельности</p>
						<img src={DocumentsSvg} alt='' />
					</div>
					<div>
						<p>Устав организации</p>
						<img src={DocumentsSvg} alt='' />
					</div>
					<div>
						<p>Информационная карта организации</p>
						<img src={DocumentsSvg} alt='' />
					</div>
					<div>
						<p>
							Учебный план образовательной программы профессионального обучения
							водителей транспортных средств категории A
						</p>
						<img src={DocumentsSvg} alt='' />
					</div>
					<div>
						<p>
							Учебный план образовательной программы профессионального обучения
							водителей транспортных средств категории B
						</p>
						<img src={DocumentsSvg} alt='' />
					</div>
				</div>
				<div className='documents_contents_two'>
					<div>
						<p>Маршруты для практического обучения</p>
						<img src={DocumentsSvg} alt='' />
					</div>
					<div>
						<p>
							Образец договора об оказании платных образовательных услуг для
							совершеннолетнего обучающегося
						</p>
						<img src={DocumentsSvg} alt='' />
					</div>
					<div>
						<p>
							Образец договора об оказании платных образовательных услуг для
							несовершеннолетнего обучающегося
						</p>
						<img src={DocumentsSvg} alt='' />
					</div>
					<div>
						<p>Образец бланка Свидетельства</p>
						<img src={DocumentsSvg} alt='' />
					</div>
					<div>
						<p>Образец Справки об обучении</p>
						<img src={DocumentsSvg} alt='' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Documents
