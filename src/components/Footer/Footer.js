import React , {Component} from 'react';
class Footer extends Component {
    render(){
        let FooterData = this.props.FooterData;
        return(
            <footer className="new_footer_area bg_color">
                <div className="new_footer_top">
                    <div className="container">
                    
                        
                    </div>
                    <div className="footer_bg">
                        <div className="footer_bg_one"></div>
                        <div className="footer_bg_two"></div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-5 col-sm-6">
								<p className="mb-0 f_400">{FooterData.copywrite}</p>
							</div>
							<div className="col-lg-4 col-md-3 col-sm-6">
								<div className="f_social_icon_two text-center">
									{FooterData.socialIcon.map((item) => {
										return (
											<a href={item.url} key={item.id}>
												<i className={item.icon}></i>
											</a>
										);
									})}
								</div>
							</div>
                            <div className="col-lg-6 col-sm-5 text-right">
                                {/*<p>Made with <i className="icon_heart"></i> in <a href="/#">DroitThemes</a></p>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;