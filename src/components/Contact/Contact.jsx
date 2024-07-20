import React from 'react'

// Images 
import Wcontact from '../../assets/svg/Wcontact.svg'
import Whatsap from '../../assets/svg/Whatsap.svg'
import Telegramm from '../../assets/svg/Telegramm.svg'
import Telephone from '../../assets/svg/Telephone.svg'
import location from '../../assets/svg/location.svg'
import Convert from '../../assets/svg/Convert.svg'
import "./Contact.scss"

function Contact() {
  return (
		<div className='Contact'>
			<div className='Contact_title'>
				<h1>Свяжитесь с нами прямо сейчас!</h1>
				<div>
					<p>Мы в <i>социальных сетях</i></p>
					<a href=''>
						<img src={Wcontact} alt='' />
					</a>
					<a href=''>
						<img src={Whatsap} alt='' />
					</a>
					<a href=''>
						<img src={Telegramm} alt='' />
					</a>
          
				</div>
			</div>

			<div className='Contact_svag'>

				<h1>Контакты</h1>

        <div className="Brokk">

				<div>
					<img src={Telephone} alt='' />
					<p>+7 (831) 423-76-76</p>
				</div>
				<div>
					<img src={location} alt='' />
					<p>ул. Верхнепортовая 38 (Феско-Холл)</p>
				</div>
				<div>
					<img src={Convert} alt='' />
					<p>drivingschoolvl@mail.ru</p>
				</div>
        </div>
			</div>
		</div>
	)
}

export default Contact
