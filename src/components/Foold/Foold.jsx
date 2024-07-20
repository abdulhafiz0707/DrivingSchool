import React from 'react'
import Application from '../Application/Application'
import Consultation from '../Сonsultation/Сonsultation'
import ApplicationTwo from '../ApplicationTwo/ApplicationTwo'


function Foold() {
  return (
		<div>
			<Application />
			<Consultation />
			<div style={{ height: '160px' }}></div>
			<ApplicationTwo />
		</div>
	)
}

export default Foold
