import { Link } from "react-router-dom";
const Footer = () =>{
	return(
		<>
		<section className="sec_footer">
			<div className="inner">
				<div className="footer">
					<ul>
					<li>
						<Link to="/">개인정보처리방침</Link>
					</li>
					<li>
						<Link to="/">이용약관</Link>
					</li>
					</ul>
				</div>
			</div>
		</section>
		<section className="sec_foot_wrap">
			<div className="inner">
				<div className="foot_wrap">
					<div className="foot_logo">
						<img src="./img/logo.webp" alt="KOKEE TEA" className="logo" width="80px" height="80px"></img>
					</div>
					<ul className="foot_copy">
						<li><span>(주)KOKEE TEA</span><span>대표 : 김정준</span><span>서울특별시 구로구 디지털로 300 지밸리비즈플라자 11층</span></li>
						<li><span>사업자등록번호 123-45-678901</span><span>TEL 02) 1234-5678 / FAX 02) 1234-5678</span><span>이메일 rugo123@cafe100.com</span></li>
						<li><span className="this-year">&copy; kokee tea Coffee Company. All Rights Reserved.</span></li>	
					</ul>
				</div>
			</div>
		</section>
		</>
	);
}

export default Footer;