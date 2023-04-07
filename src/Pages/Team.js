import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Teams from '../components/Team/Team';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
import Partner from '../components/Partner';

const Team = () => {
	return (
		<div className="body_wrapper">
			<CustomNavbar
				slogo="sticky_logo"
				mClass="menu_four"
				nClass="w_menu ml-auto mr-auto"
			/>
			<Breadcrumb
				breadcrumbClass="breadcrumb_area breadcrumb_area_three"
				imgName="Img-05.jpg"
				Ptitle="Our Team"
				Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"
			/>
			<Teams />
			<Partner pClass="partner_logo_area_five bg_color" />
			<FooterTwo FooterData={FooterData} />
		</div>
	);
};
export default Team;
