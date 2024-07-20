import React, { useState } from 'react'

import BurgerClose from "../../assets/svg/BurgerClose.svg"
import logo from "../../assets/svg/logo.svg"
import Wcontacte from '../../assets/svg/Wcontacte.svg'
import whatsappikon from '../../assets/svg/whatsappIkon.svg'
import Telegram from '../../assets/svg/Telegram.svg'
import "./BurgerMenu.scss"

function BurgerMenu({ hundleClick, popup }) {
	const [open, setOpen] = useState(popup)
	function handler() {
		hundleClick()
    setOpen(false)
	}
	return (
		<div className={`burger-container ${popup ? 'open' : 'close'}`}>
			<div className='burger_header'>
				<div>
					<img src={logo} alt='' />
				</div>

				<div className='number'>+7 994 0000 266</div>

				<button className='close' onClick={() => handler()}>
					<img src={BurgerClose} alt='' />
				</button>
			</div>

			<div className='burger_content'>
				<h1>Категория B</h1>
				<p>Цена</p>
				<p>Контакты</p>
				<p>Записаться</p>
				<p>Документы</p>
				<p>Лицензия</p>
				<div className='connection'>
					<p>Доступны звонки, Telegram, WhatsApp</p>
					<div>
						<a href=''>
							<img src={Wcontacte} alt='' />
						</a>
						<a href=''>
							<img src={whatsappikon} alt='' />
						</a>
						<a href=''>
							<img src={Telegram} alt='' />
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BurgerMenu
