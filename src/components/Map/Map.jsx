import React from 'react'

// Images
import map from '../../assets/svg/map.svg'
import './Map.scss'

function Map() {
	return (
		<div className='Map'>
			<div className='Map-container'>
				<div>
					<img src={map} alt='' />
					<h1>Спортивная</h1>
					<p>ул. Спортивная 4</p>
					<button>Выбрать</button>
				</div>

				<div>
					<img src={map} alt='' />
					<h1>Эгершельд</h1>
					<p>ул. Верхнепортовая 38 (Феско-Холл)</p>
					<button>Выбрать</button>
				</div>

				<div>
					<img src={map} alt='' />
					<h1>Центр</h1>
					<p>ул. Алеутская 28</p>
					<button>Выбрать</button>
				</div>

				<div>
					<img src={map} alt='' />
					<h1>Столетие</h1>
					<p>ул. Проспект 100-летия Владивостоку 20</p>
					<button>Выбрать</button>
				</div>
			</div>
		</div>
	)
}

export default Map
