import React from 'react'
import ApplicationTitle from '../../assets/svg/ApplicationTitle.svg'

import './ApplicationThree.scss'

function ApplicationThree() {
	return (
		<div className='ApplicationThree'>
			<div className='ApplicationThree_Conatainer'>
				<div className='ApplicationThree_Conatainer_title'>
					<h1>Форма записи в автошколу</h1>
					<img src={ApplicationTitle} alt='' />
				</div>
				<div className='WoxxiThree'>
					<div className='CircleThree'>1</div>
					<div className='LineThree'></div>
					<div className='CircleThree2'>2</div>
					<div className='LineThree2'></div>
				</div>

				<div class='custom-select'>
					<div class='popupselect'>Выберите филиал</div>
					<ul class='options-list'>
						<li data-value='1'>Спортивная</li>
						<li data-value='2'>Центр</li>
						<li data-value='3'>Эгершельд</li>
						<li data-value='4'>Столетие</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default ApplicationThree
