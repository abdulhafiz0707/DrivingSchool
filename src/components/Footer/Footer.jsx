import React from 'react'

// Images
import FooterRibbon from '../../assets/svg/FooterRibbon.svg'
import FooterLogo from '../../assets/svg/Footer_Logo.svg'
import footerPhone from '../../assets/svg/footerPhone.svg'
import Wcontacte from '../../assets/svg/Wcontacte.svg'
import whatsappikon from '../../assets/svg/whatsappIkon.svg'
import Telegram from '../../assets/svg/Telegram.svg'
import Map from '../../assets/svg/map.svg'
import './Footer.scss'

function Footer() {
	return (
		<footer>
			<div className='footer-container'>
				{/* An empty img tag does not serve any purpose, consider removing it */}
				<img src='' alt='' />

				{/* Main content area */}
				<div className='footer-content'>
					<div className='footer-content-images'>
						<div>
							<img
								className='FooterRibbon'
								src={FooterRibbon}
								alt='Footer Ribbon'
							/>
							<img className='FooterLogo' src={FooterLogo} alt='Footer Logo' />
						</div>
						<button>
							<img src={footerPhone} alt='Phone Icon' /> +7 994 0000 266
						</button>
					</div>
				</div>

				{/* Address sections */}
				<div className='footer-texts'>
					<div>
						<img src={Map} alt='Map Icon' />
						<span>Спортивная</span>
						<p>ул. Спортивная 4</p>
					</div>
					<div>
						<img src={Map} alt='Map Icon' />
						<span>Эгершельд</span>
						<p>ул. Верхнепортовая 38 (Феско-Холл)</p>
					</div>
					<div>
						<img src={Map} alt='Map Icon' />
						<span>Центр</span>
						<p>ул. Алеутская 28</p>
					</div>
					<div>
						<img src={Map} alt='Map Icon' />
						<span>Столетие</span>
						<p>ул. Проспект 100-летия Владивостоку 20</p>
					</div>
				</div>

				{/* Contact icons */}
				<div className='footer_ikons'>
					<p>Доступны звонки, Telegram, WhatsApp</p>
					<div className='ikons'>
						<div className='ikons_img'>
							<a href=''>
								<img src={Wcontacte} alt='Contact Icon' />
							</a>
						</div>
						<div className='ikons_img'>
							<a href=''>
								<img src={whatsappikon} alt='WhatsApp Icon' />
							</a>
						</div>
						<div className='ikons_img'>
							<a href=''>
								<img src={Telegram} alt='Telegram Icon' />
							</a>
						</div>
					</div>
					<p>Создание сайта MADE IN</p>
				</div>
				<h3>Автошкола "Драйвингскул" ЧОУ ДПО "УМЦ Эгершельд</h3>
			</div>
		</footer>
	)
}

export default Footer
