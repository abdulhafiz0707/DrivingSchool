import React from 'react'

// Images 
import iamp from "../../assets/svg/iamp.svg"
import './RibbonInfo.scss'

function RibbonInfo() {
  return (
		<div className='RibbonInfo'>
			<div className='RibbonInfo_container'>
				<h1>УЧЕБНО - МЕТОДИЧЕСКИЙ ЦЕНТР ЭГЕРШЕЛЬД</h1>
				<img src={iamp} alt='' />
			</div>
		</div>
	)
}

export default RibbonInfo
