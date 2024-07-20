import React from 'react'

import Consultation from '../Сonsultation/Сonsultation'
import PriceSection from '../PriceSection/PriceSection'
import PriceInfo from '../PriceInfo/PriceInfo'
import PriceText from '../PriceText/PriceText'
import Theory from '../Theory/Theory'
import RibbonInfo from '../RibbonInfo/RibbonInfo'
import Practice from '../Practice/Practice'
import Contact from '../Contact/Contact'

function Price() {
	return (
		<div>
			
			<PriceInfo />
			<Consultation />
			<div style={{ height: '75px' }}></div>
			<PriceSection />
			<div style={{ height: '100px' }}></div>
			<PriceText />
			<Theory />
			<RibbonInfo />
			<Practice />
			<Contact />
		</div>
	)
}

export default Price
