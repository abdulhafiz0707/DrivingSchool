import React from 'react';
import Banner from '../Banner/Banner';
import Driving from '../Driving/Driving';
import Map from '../Map/Map';
import Benefits from '../Benefits/Benefits';
import Service_1 from '../Service_1/Service_1';
import Consultation from "../Сonsultation/Сonsultation";
import Service_2 from '../Service_2/Service_2';
import Consultation_2 from "../Сonsultation_2/Сonsultation_2";
import Service_3 from '../Service_3/Service_3';
import Service_4 from "../Service_4/Service_4";
import Rectangle from "../Rectangle/Rectangle";
import Review from '../Review/Review';
import Media from "../Media/Media";
import Info from "../Info/Info";
import InfoVidio from "../InfoVidio/InfoVidio";
import Abuot from '../About/Abuot';
import Modal from '../Modal/Modal';
import "./Home.scss";

function Home() {
  return (
		<div>
			
			<Banner />
			<Driving />
			<Map />
			<Benefits />
			<Service_1 />
			<Consultation />
			<Service_2 />
			<Consultation_2 />
			<Service_3 />
			<Consultation />
			<Service_4 />
			<Rectangle />
			<Review />
			<Media />
			<Info />
			<InfoVidio />
			<Benefits />
			<Abuot />
			<Modal />
		</div>
	)
}

export default Home
