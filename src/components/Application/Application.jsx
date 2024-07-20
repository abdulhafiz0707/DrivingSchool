import React from 'react'
import ApplicationTitle from "../../assets/svg/ApplicationTitle.svg"
import './Application.scss'

function Application() {
  return (
		<div className='Application'>
			<div className='Application-content'>
				<h1>Форма записи в автошколу</h1>
				<div>
					<img src={ApplicationTitle} alt='' />
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
						<input type='text' placeholder='Образование' />
						<div style={{ height: '20px' }}></div>
						<input type='text' placeholder='Код подразделения' />
					</div>

					<div className='Application-Inputs2'>
						<input type='text' placeholder='Имя' />
						<div style={{ height: '20px' }}></div>
						<input type='text' placeholder='Дата рождения' />
						<div style={{ height: '20px' }}></div>
						<input type='date' />
						<div style={{ height: '20px' }}></div>
						<input type='text' placeholder='Серия паспорта' />
						<div style={{ height: '20px' }}></div>
						<input type='text' placeholder='Кем и когда выдан' />
						<div style={{ height: '20px' }}></div>
						<input type='text' placeholder='Телефон' />
						<div style={{ height: '20px' }}></div>
						<input type='text' placeholder='Специальность' />
						<div style={{ height: '20px' }}></div>
						<input type='text' placeholder='СНИЛС' />
					</div>
				</div>
				<div className='Application_Category'>
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
				<div className='Application_buttonn'>
					<button>Продолжить</button>
				</div>
			</div>
		</div>
	)
}

export default Application
