import React from 'react'
import ApplicationTwoo from '../../assets/svg/ApplicationTwo.svg'
import './ApplicationTwo.scss'

function ApplicationTwo() {
	return (
		<div className='ApplicationTwo'>
			<div className='ApplicationTwo-content'>
				<div>
					<img src={ApplicationTwoo} alt='' />
				</div>
				<div className='woxxi'>
					<div className='circle'>1</div>
					<div className='line'></div>
					<div className='circle2'>2</div>
					<div className='line2'></div>
				</div>
				<div className='Application-Inputs_container'>
					<div className='Application-Inputs'>
						<input type='text' placeholder='Фамилия' />
						<div style={{ height: '20px' }}></div>
						<input type='text' placeholder='Отчество' />
						<div style={{ height: '20px' }}></div>
						<input type='text' placeholder='Место рождения' />
						<div style={{ height: '20px' }}></div>
						<input type='text' placeholder='Номер паспорта' />
						<div style={{ height: '20px' }}></div>
						<input type='text' placeholder='Адрес жительства' />
						<div style={{ height: '20px' }}></div>
						<input type='text' placeholder='Код подразделения' />
					</div>

					<div className='Application-Inputs2'>
						<input type='text' placeholder='Имя' />
						<div style={{ height: '20px' }}></div>
						<input type='text' placeholder='Дата рождения' />
						<div style={{ height: '20px' }}></div>
						<input type='text' placeholder='Серия паспорта' />
						<div style={{ height: '20px' }}></div>
						<input type='text' placeholder='Кем и когда выдан' />
						<div style={{ height: '20px' }}></div>
						<input type='text' placeholder='Телефон' />
					</div>
				</div>
				<div className='Application_Category_two '>
					<p>Категория:</p>
					<div>
						<input type='radio' name='' id='' />
						<h1>A</h1>
					</div>
					<div>
						<input type='radio' name='' id='' />
						<h1>B</h1>
					</div>
				</div>
				<div className='ApplicationTwo_buttonn'>
					<button>Продолжить</button>
				</div>
			</div>
		</div>
	)
}

export default ApplicationTwo
