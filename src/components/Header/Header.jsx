import React, { useState } from 'react'
import { Link } from 'react-router-dom' 
import logo from '../../assets/svg/logo.svg'
import burger from '../../assets/svg/Burger.svg'
import './Header.scss'
import BurgerMenu from '../BurgerMenu/BurgerMenu'

function Header() {
	const [popup, setPopup] = useState(false)
	function hundleClick() {
		setPopup(!popup)
	}
	return (
		<>
			<header>
				<div className='header-container'>
					<Link to='/' className='header__logo'>
						<img src={logo} alt='Логотип компании' />{' '}
					</Link>
					<div className='header__contact'>
						<div className='phone'>+7 994 0000 266</div>
					</div>
					<div className='header__nav'>
						{' '}
						<Link className='header__link' to='/price'>
							Категория B
						</Link>
						<Link className='header__link' to=''>
							Цена
						</Link>{' '}
						<Link className='header__link' to='/contact'>
							Контакты
						</Link>{' '}
						<Link className='header__link' to='/enroll'>
							Записаться
						</Link>{' '}
						<Link className='header__link' to='/documents'>
							Документы
						</Link>{' '}
					</div>
					<div className='header__license'>
						<Link className='header__License' to='/license'>
							Лицензия
						</Link>
					</div>
					<div className='burger'>
						<img onClick={() => hundleClick()} src={burger} alt='' />
					</div>
				</div>
			</header>
			{popup && <BurgerMenu hundleClick={hundleClick} popup={popup} />}
		</>
	)
}

export default Header
