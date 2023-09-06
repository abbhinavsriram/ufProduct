import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Featuresitems from '../components/Features/Featuresitems';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
const Fellowship = () => {
	return (
		<div className="body_wrapper">
			<CustomNavbar
				slogo="sticky_logo"
				mClass="menu_four"
				nClass="w_menu ml-auto mr-auto"
			/>
			<Breadcrumb
				breadcrumbClass="breadcrumb_area"
				imgName="breadcrumb/banner_bg.png"
				Ptitle="Our Process"
				Pdescription="The Fellowship Program Broken Down"
			/>
			<section className="process_area bg_color sec_pad">
				<div className="container">
					<div className="features_info">
						<img
							className="dot_img"
							src={require('../img/home4/divider.png')}
							alt=""
						/>
						<Featuresitems
							rowClass="row flex-row-reverse"
							aClass="pr_70 pl_70"
							fimage="process_1.png"
							iImg="icon01.png"
							ftitle="Apply and Interview"
							descriptions="The first step to kickstart your journey in the UF Product Space Fellowship Program is to apply and interview. Our application process is designed to select candidates who are not only academically strong but also possess the curiosity and drive needed to excel in the program."
						/>
						<Featuresitems
							rowClass="row"
							aClass="pl_100"
							fimage="process_2.png"
							iImg="icon02.png"
							ftitle="Attend Fellowship Sessions"
							descriptions="Once selected, fellows embark on a transformative experience by attending fellowship sessions. These sessions cover a wide range of topics, from product strategy and design thinking to market analysis and project management. Our dedicated mentors and industry experts lead these sessions, providing valuable insights and practical knowledge to help you become a well-rounded product manager."
						/>
						<Featuresitems
							rowClass="row flex-row-reverse"
							aClass="pr_70 pl_70"
							fimage="process_3.png"
							iImg="icon3.png"
							ftitle="Work on a Client Project"
							descriptions="One of the highlights of the Fellowship Program is the opportunity to work on a client project. As a fellow, you will collaborate with industry partners, applying the skills you've learned, to solve real-world challenges. This hands-on experience not only enhances your problem-solving abilities but also allows you to build a portfolio that showcases your expertise to future employers."
						/>
						<Featuresitems
							rowClass="row"
							aClass="pl_100"
							fimage="process_4.png"
							iImg="icon_04.png"
							ftitle="Become a Fellowship Lead"
							descriptions="As you progress in the program, you have the chance to take on leadership roles by becoming a Fellowship Lead. This role involves mentoring and guiding junior fellows, facilitating sessions, and contributing to the program's growth. It's an excellent opportunity to further develop your leadership and communication skills while giving back to the UF Product Space community."
						/>
						<Featuresitems
							rowClass="row flex-row-reverse"
							aClass="pr_70 pl_70"
							fimage="process_5.png"
							iImg="icon_05.png"
							ftitle="Join the Executive Board"
							descriptions="For those looking to make a lasting impact on the Product Space community, joining the Executive Board is the ultimate goal. As a board member, you'll play a pivotal role in shaping the program's future, organizing events, and collaborating with industry partners. This leadership position provides an unparalleled learning experience and also opens doors to valuable connections & opportunities in the product management field."
						/>
						<div className="dot middle_dot">
							<span className="dot1"></span>
							<span className="dot2"></span>
						</div>
					</div>
				</div>
			</section>
			<FooterTwo FooterData={FooterData} />
		</div>
	);
};
export default Fellowship;
