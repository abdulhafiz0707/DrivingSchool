import React from 'react'
import { Outlet } from 'react-router-dom'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Maps from '../Maps/Maps'


function Layout() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
			<Maps />
		</>
	)
}

export default Layout
