import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { auth } from '../../components/Firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

import ModalTitle from '../../assets/svg/ModalTitle.svg'
import Закрыть from '../../assets/svg/Закрыть.svg'
import lightning from '../../assets/svg/lightning.svg'
import './Modal.scss'

function Modal() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const navigate = useNavigate()

	const [isOpen, setIsOpen] = useState(false)
	const handleRegister = async e => {
		e.preventDefault()
		try {
			const userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password
			)

			console.log(userCredential.user)
			setError('')
			setEmail('')
			setPassword('')
			toast.success('Successfully logged in!')
			navigate('/')
		} catch (error) {
			console.log(error.message)
			setError('Извините мы не нашли ваш аккаунт')
			toast.error('Login failed')
		}
	}

	useEffect(() => {
		setIsOpen(true)
	}, [])

	const closePopup = () => {
		setIsOpen(false)
	}
	return (
		<>
			{isOpen && (
				<div className='popup'>
					<form onSubmit='handleRegister'>
						<div className='popup-content'>
							<div className='popup-image'>
								<div className='exit' onClick={closePopup}>
									<img src={Закрыть} alt='' />
								</div>
								<img src={ModalTitle} alt='' />
							</div>
							<div className='inputs'>
								<input
									type='email'
									placeholder='Email'
									value={email}
									name='email'
									onChange={e => setEmail(e.target.value)}
								/>
								<div style={{ height: '20px' }}></div>
								<input
									type='password'
									placeholder='password'
									value={password}
									name='password'
									onChange={e => setPassword(e.target.value)}
								/>
								<div style={{ height: '20px' }}></div>
								<div className='promo-container'>
									<img src={lightning} alt='Молния' />
									<input type='text' placeholder='ВВЕДИТЕ ПРОМОКОД' />
								</div>

								<div className='popup-p'>
									<input type='checkbox' name='' id='' />
									<p>Я соглашаюсь с Политикой конфиденциальности</p>
									{/* <Form.Check type='radio' aria-label='radio 1' /> */}
								</div>

								<div className='popup-webs'>
									<div className='popup-radio'>
										<input type='radio' />
										<p>WhatsApp</p>
									</div>
									<div className='popup-radio'>
										<input type='radio' />
										<p>Telegram</p>
									</div>
									<div className='popup-radio'>
										<input type='radio' />
										<p>
											Позвоните <br /> мне
										</p>
									</div>
								</div>

								<div className='submit-btn'>
									<button type='submit'>Оставить заявку</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			)}
		</>
	)
}

export default Modal
