import React from 'react';
import SeoTitle from '../Title/SeoTitle';
import Fade from 'react-reveal/Fade';

const Service = () => {
	return (
		<React.Fragment>
			<section className="seo_service_area sec_pad">
				<div className="container">
					<SeoTitle
						Title="Our focus areas"
						// TitleP="We focus on different aspects of product "
					/>
					<div className="row seo_service_info">
						<Fade bottom duration={500}>
							<div className="col-lg-4 col-md-6">
								<div className="seo_service_item">
									<img src={require('../../img/seo/icon1.png')} alt="" />
									<h4>Product Management</h4>
									<p>
										Oversees the development, strategy, and successful launch of
										products, while ensuring they meet customer needs, business
										goals, and market demand.
									</p>
								</div>
							</div>
						</Fade>
						<Fade bottom duration={700}>
							<div className="col-lg-4 col-md-6">
								<div className="seo_service_item">
									<img src={require('../../img/seo/icon2.png')} alt="" />
									<h4>Product Design</h4>
									<p>
										The process of creating functional and aesthetically
										pleasing products that meet user needs, solve problems, and
										deliver a positive user experience.
									</p>
								</div>
							</div>
						</Fade>
						<Fade bottom duration={1000}>
							<div className="col-lg-4 col-md-6">
								<div className="seo_service_item">
									<img src={require('../../img/seo/icon5.png')} alt="" />
									<h4>Product Marketing</h4>
									<p>
										Encompasses the strategic planning, execution, and promotion
										of products, aiming to generate customer interest, drive
										sales, and create brand awareness.
									</p>
								</div>
							</div>
						</Fade>
						{/* <div className="col-lg-12 text-center mt_40">
							<a href=".#" className="seo_btn seo_btn_one btn_hover">
								All Features
							</a>
						</div> */}
					</div>
				</div>
			</section>
			<section className="seo_features_one sec_pad">
				<div className="container">
					<div className="row flex-row-reverse">
						<div className="col-lg-6">
							<div className="seo_features_img">
								<div className="round_circle"></div>
								<div className="round_circle two"></div>
								<img src={require('../../img/seo/features_img.png')} alt="" />
							</div>
						</div>
						<div className="col-lg-6">
							<Fade bottom cascade>
								<div className="seo_features_content">
									<h2>Get tips & tricks on how to skyrocket your sales.</h2>
									<p>
										Faff about only a quid blower I don't want no agro bleeding
										chimney pot burke tosser cras nice one boot fanny.!
									</p>
									<div className="media seo_features_item">
										<div className="icon">
											<img src={require('../../img/seo/icon4.png')} alt="" />
										</div>
										<div className="media-body">
											<h3>Reporting & Analysis</h3>
											<p>
												Naff are you taking the piss say blow off faff about
												wellies richard.
											</p>
										</div>
									</div>
									<div className="media seo_features_item">
										<div className="icon two">
											<img src={require('../../img/seo/icon3.png')} alt="" />
										</div>
										<div className="media-body">
											<h3>Reporting & Analysis</h3>
											<p>
												Naff are you taking the piss say blow off faff about
												wellies richard.
											</p>
										</div>
									</div>
								</div>
							</Fade>
						</div>
					</div>
				</div>
			</section>
			<section className="seo_features_one sec_pad">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="seo_features_img seo_features_img_two">
								<div className="round_circle"></div>
								<div className="round_circle two"></div>
								<img
									src={require('../../img/seo/features_img_two.png')}
									alt=""
								/>
							</div>
						</div>
						<div className="col-lg-6 d-flex align-items-center">
							<Fade bottom cascade>
								<div className="seo_features_content">
									<h2 className="wow fadeInUp">
										Get tips & tricks on how to skyrocket your sales.
									</h2>
									<h6 className="wow fadeInUp">
										What a plonker bamboozled so I said say what a load of
										rubbish owt to do with me haggle.
									</h6>
									<p className="wow fadeInUp">
										Cheeky bugger gosh codswallop chap bamboozled blatant
										cracking goal brown bread, pear shaped cor blimey guvnor
										easy peasy lemon squeezy hotpot spiffing good time, chancer
										a spend a penny spiffing I don't want no agro tinkety tonk
										old fruit.
									</p>
									<a
										href=".#"
										className="seo_btn seo_btn_one btn_hover wow fadeInUp"
									>
										Learn More
									</a>
								</div>
							</Fade>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Service;
