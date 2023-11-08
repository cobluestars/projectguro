import { useState } from "react";
import "../pages/Form.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = () => {
	const [userId, setUserId] = useState("");
	const [userPw, setUserPw] = useState("");
	const [userPwCheck, setUserPwCheck] = useState("");
	const [userName, setUserName] = useState("");
	const [phone02, setPhone02] = useState("");
	const [phone03, setPhone03] = useState("");
	const [email01, setEmail01] = useState("");
	const [email02, setEmail02] = useState("");
	const [locale, setLocale] = useState("");
	const [isAllChecked, setIsAllChecked] = useState(false);
	const [agree1, setAgree1] = useState(false);
	const [agree2, setAgree2] = useState(false);
	const [agree3, setAgree3] = useState(false);
	const [agree4, setAgree4] = useState(false);
	const [validId, setValidId] = useState(false);
	const [validPw, setValidPw] = useState(false);
	const navigate = useNavigate();

	const onChangeUserId = (e) => {
        const userIdRegex = /^[a-z]+[a-z0-9]{4,12}$/g;
        if ((!e.target.value || (userIdRegex.test(e.target.value)))) {
         setValidId(false);
      } else {
         setValidId(true);
      }
        setUserId(e.target.value);
    };

	const onChangeUserPw = (e) => {
        const userPwRegex = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
        if ((!e.target.value || (userPwRegex.test(e.target.value)))) {
		setValidPw(false);
      } else {
		setValidPw(true);
      }
	  setUserPw(e.target.value);
    };
	
	const onJoin = (event) => {
		event.preventDefault();
		if (
			userId === "" ||
			userPw === "" ||
			userPwCheck === "" ||
			userName === "" ||
			phone02 === "" ||
			phone03 === "" ||
			email01 === "" ||
			email02 === "" ||
			locale === ""
		) {
			alert("회원가입은 빈칸이 없게 모두 입력해주세요!!");
		} else if (
			isAllChecked === false ||
			agree1 === false ||
			agree2 === false ||
			agree3 === false ||
			agree4 === false
		) {
			alert("비어있는 동의란을 확인해주세요!!");
		} else if (userPw !== userPwCheck) {
			alert("비밀번호가 일치하지 않아요.");
		} else {
			axios
				.post("http://localhost:8080/kokee/join", {
					locale: locale,
					userId: userId,
					userPw: userPw,
					userPwCheck: userPwCheck,
					userName: userName,
					phone02: phone02,
					phone03: phone03,
					email01: email01,
					email02: email02,
				})
				.then((res) => {
					console.log(res);
					if (res.data === "success") {
						alert("회원가입을 환영합니다. 메인페이지로 이동합니다.")
						navigate("/");
					}
				})
				.catch((err) => {
					if (err.response.data === "failed") {
						alert(`입력하신 아이디와 이메일은 이미 가입된 회원 입니다.\n다른 내용으로 가입해주세요.`)
					} else {
						alert("알수 없는 에러가 발생했습니다. 관리자에게 문의하세요.")
					}
				});
		}
	};

	function allSelect() {
		if (isAllChecked) {
			setAgree1(false);
			setAgree2(false);
			setAgree3(false);
			setAgree4(false);
		} else {
			setAgree1(true);
			setAgree2(true);
			setAgree3(true);
			setAgree4(true);
		}
	}

	return (
		<>
			<div className="joinForm">
				<h2>회원가입</h2>
				<form id="frm">
					<table>
						<tr className="bs-1">
							<td className="frm_title ps-10" width="180px">
								<span className="after">지점선택</span>
							</td>
							<td>
									<div className="dflex me">
										<input
											onChange={(e) => {
												setLocale(e.target.value);
											}}
											type="radio"
											name="locale"
											className="ck1 dblock"
											value="guro"
										/>
										<label>
											구로지점
										</label>
									</div>
							</td>
						</tr>
						<tr>
							<td colSpan="2">
								<span className="frm_h3">기본정보</span>
								<span className="right before">
                           필수입력사항
                        </span>
							</td>
						</tr>
						<tr>
							<td className="frm_title ps-10" width="180px">
								<span className="after">아이디</span>
							</td>
							<td>
                        <input
                           type="text"
                           name="userId"
                           onChange={onChangeUserId}
                           value={userId}
                        />
                        <br />
                        {validId && <span style={{color: "red", fontSize: "13px"}}>
                           아이디는 특수 문자를 제외하고, 영문과 숫자를 이용한 4~16자만 가능합니다.
                           </span>}
                     </td>
						</tr>
						<tr>
							<td className="frm_title ps-10" width="180px">
								<span className="after">비밀번호</span>
							</td>
							<td>
								<input
									type="password"
									name="userPw"
									onChange={onChangeUserPw}
									value={userPw}
								/>
                        	<br />
                        	{validPw && <span style={{color: "red", fontSize: "13px"}}>
								비밀번호는 특수 문자를 제외하고,  영문과 숫자를 이용한 8~16자만 가능합니다. 
                           		</span>}
							</td>
						</tr>
						<tr>
							<td className="frm_title ps-10" width="180px">
								비밀번호 확인
							</td>
							<td>
								<input
									type="password"
									name="userPwCheck"
									onChange={(e) => {
										setUserPwCheck(e.target.value);
									}}
									value={userPwCheck}
								/>
							</td>
						</tr>
						<tr>
							<td className="frm_title ps-10" width="180px">
								<span className="after">이름</span>
							</td>
							<td>
								<input
									type="text"
									name="userName"
									onChange={(e) => {
										setUserName(e.target.value);
									}}
									value={userName}
								/>
							</td>
						</tr>
						<tr>
							<td className="frm_title ps-10">
								<span className="after">휴대전화</span>
							</td>
							<td>
								<div className="line_01">
									<select name="phone01">
										<option value="010">010</option>
									</select>
									<input
										type="number"
										name="phone02"
										onChange={(e) => {
											setPhone02(e.target.value);
										}}
										value={phone02}
									/>
									<input
										type="number"
										name="phone03"
										onChange={(e) => {
											setPhone03(e.target.value);
										}}
										value={phone03}
									/>
								</div>
							</td>
						</tr>
						<tr>
							<td className="frm_title ps-10">
								<span className="after">이메일</span>
							</td>
							<td>
								<input
									type="text"
									name="email1"
									onChange={(e) => {
										setEmail01(e.target.value);
									}}
									value={email01}
								/>
								@
								<input
									type="text"
									name="email2"
									onChange={(e) => {
										setEmail02(e.target.value);
									}}
									value={email02}
								/>
							</td>
						</tr>
						<tr>
							<td colSpan="2">
								<span className="frm_h3">전체동의</span>
							</td>
						</tr>
						<tr>
							<td colSpan="2">
								<div className="bg-gray">
									<input
										type="checkbox"
										onClick={allSelect}
										onChange={(e) =>
											setIsAllChecked(!isAllChecked)
										}
										checked={isAllChecked}
									/>
									<label>
										이용약관 및 개인정보수집 및 이용,
										쇼핑정보 수신(선택에 모두 동의합니다.)
									</label>
								</div>
							</td>
						</tr>
						<tr>
							<td colSpan="2">
								<div className="frm_agree">
									<div>
										<label>[필수] 이용약관 동의</label>
										<textarea
											rows="8"
											readOnly
											style={{ width: "100%" }}
										>
                                 제1조(목적) 이 약관은 (주)코키티
                                 회사(전자거래 사업자)가 운영하는
                                 (주)코키티 사이버 몰(이하 "몰"이라
                                 한다)에서 제공하는 인터넷 관련
                                 서비스(이하 "서비스"라 한다)를
                                 이용함에 있어 사이버몰과 이용자의
                                 권리·의무 및 책임사항을 규정함을
                                 목적으로 합니다. ※ 「PC통신등을
                                 이용하는 전자거래에 대해서도 그
                                 성질에 반하지 않는 한 이 약관을
                                 준용합니다」 제2조(정의) ① "몰"이란
                                 (주)코키티 회사가 재화 또는 용역을
                                 이용자에게 제공하기 위하여 컴퓨터 등
                                 정보통신설비를 이용하여 재화 또는
                                 용역을 거래할 수 있도록 설정한
                                 가상의 영업장을 말하며, 아울러
                                 사이버몰을 운영하는 사업자의
                                 의미로도 사용합니다. ② "이용자"란
                                 "몰"에 접속하여 이 약관에 따라
                                 "몰"이 제공하는 서비스를 받는 회원
                                 및 비회원을 말합니다. ③ '회원’이라
                                 함은 "몰"에 개인정보를 제공하여
                                 회원등록을 한 자로서, "몰"의 정보를
                                 지속적으로 제공받으며, "몰"이
                                 제공하는 서비스를 계속적으로 이용할
                                 수 있는 자를 말합니다. ④
                                 '비회원’이라 함은 회원에 가입하지
                                 않고 "몰"이 제공하는 서비스를
                                 이용하는 자를 말합니다.
                                 제3조(약관등의 명시와 설명 및 개정)
                                 ① "몰"은 이 약관의 내용과 상호 및
                                 대표자 성명, 영업소 소재지
                                 주소(소비자의 불만을 처리할 수 있는
                                 곳의 주소를 포함),
                                 전화번호·모사전송번호·전자우편주소,
                                 사업자등록번호, 통신판매업신고번호,
                                 개인정보관리책임자등을 이용자가 쉽게
                                 알 수 있도록 "몰"의 초기
                                 서비스화면(전면)에 게시합니다. 다만,
                                 약관의 내용은 이용자가 연결화면을
                                 통하여 볼 수 있도록 할 수 있습니다.
                                 ② "몰"은 이용자가 약관에 동의하기에
                                 앞서 약관에 정하여져 있는 내용 중
                                 청약철회·배송책임·환불조건 등과 같은
                                 중요한 내용을 이용자가 이해할 수
                                 있도록 별도의 연결화면 또는 팝업화면
                                 등을 제공하여 이용자의 확인을
                                 구하여야 합니다. ③ "몰"은
                                 전자상거래등에서의소비자보호에관한법률,
                                 약관의규제에관한법률,
                                 전자거래기본법, 전자서명법,
                                 정보통신망이용촉진등에관한법률,
                                 방문판매등에관한법률, 소비자보호법
                                 등 관련법을 위배하지 않는 범위에서
                                 이 약관을 개정할 수 있습니다. ④
                                 "몰"이 약관을 개정할 경우에는
                                 적용일자 및 개정사유를 명시하여
                                 현행약관과 함께 몰의 초기화면에 그
                                 적용일자 7일이전부터 적용일자
                                 전일까지 공지합니다. 다만,
                                 이용자에게 불리하게 약관내용을
                                 변경하는 경우에는 최소한 30일 이상의
                                 사전 유예기간을 두고 공지합니다. 이
                                 경우 "몰“은 개정전 내용과 개정후
                                 내용을 명확하게 비교하여 이용자가
                                 알기 쉽도록 표시합니다. ⑤ "몰"이
                                 약관을 개정할 경우에는 그 개정약관은
                                 그 적용일자 이후에 체결되는 계약에만
                                 적용되고 그 이전에 이미 체결된
                                 계약에 대해서는 개정전의 약관조항이
                                 그대로 적용됩니다. 다만 이미 계약을
                                 체결한 이용자가 개정약관 조항의
                                 적용을 받기를 원하는 뜻을 제3항에
                                 의한 개정약관의 공지기간내에 "몰"에
                                 송신하여 "몰"의 동의를 받은 경우에는
                                 개정약관 조항이 적용됩니다. ⑥ 이
                                 약관에서 정하지 아니한 사항과 이
                                 약관의 해석에 관하여는
                                 전자상거래등에서의 소비자보호에 관한
                                 법률, 약관의 규제 등에 관한 법률,
                                 공정거래위원회가 정하는 전자상거래
                                 등에서의 소비자보호지침 및 관계법령
                                 또는 상관례에 따릅니다.
                              </textarea>
										<div className="dflex">
                                 <span>
                                    이용약관에 동의하십니까?
                                 </span>
											<input
												onChange={(e) =>
													setAgree1(!agree1)
												}
												checked={agree1}
												type="checkbox"
											/>
											<span>동의함</span>
										</div>
									</div>
									<div>
										<label>
											[필수] 개인정보 수입 및 이용 동의
										</label>
										<textarea
											rows="8"
											readOnly
											style={{ width: "100%" }}
										>
                                 1. 총칙 (주)코키티는 이용자들의
                                 개인정보보호를 매우 중요시하며,
                                 이용자가 회사의 서비스를 이용함과
                                 동시에 온라인상에서 회사에 제공한
                                 개인정보가 보호 받을 수 있도록
                                 최선을 다하고 있습니다. 이에
                                 (주)코키티는 통신비밀보호법,
                                 전기통신사업법, 정보통신망 이용촉진
                                 및 정보보호 등에 관한 법률 등
                                 정보통신서비스제공자가 준수하여야 할
                                 관련 법규상의 개인정보보호 규정 및
                                 정보통신부가 제정한
                                 개인정보보호지침을 준수하고
                                 있습니다. (주)코키티는 개인정보
                                 취급방침을 통하여 이용자들이
                                 제공하는 개인정보가 어떠한 용도와
                                 방식으로 이용되고 있으며
                                 개인정보보호를 위해 어떠한 조치가
                                 취해지고 있는지 알려 드립니다.
                                 (주)코키티의 개인정보 취급방침은
                                 정부의 법률 및 지침 변경이나
                                 (주)코키티의 내부 방침 변경 등으로
                                 인하여 수시로 변경될 수 있고, 이에
                                 따른 개인정보 취급방침의 지속적인
                                 개선을 위하여 필요한 절차를 정하고
                                 있습니다. 그리고 개인정보 취급방침을
                                 개정하는 경우나 개인정보 취급방침
                                 변경될 경우 쇼핑몰의 첫 페이지의
                                 개인정보취급방침을 통해 고지하고
                                 있습니다. 이용자들께서는 사이트 방문
                                 시 수시로 확인하시기 바랍니다. 2.
                                 개인정보 수집에 대한 동의
                                 (주)코키티은 귀하께서 (주)코키티의
                                 개인정보보호방침 또는 이용약관의
                                 내용에 대해 「동의합니다」버튼 또는
                                 「동의하지 않습니다」버튼을 클릭할
                                 수 있는 절차를 마련하여,
                                 「동의합니다」버튼을 클릭하면
                                 개인정보 수집에 대해 동의한 것으로
                                 봅니다.
                              </textarea>
										<div className="dflex">
                                 <span>
                                    이용약관에 동의하십니까?
                                 </span>
											<input
												onChange={(e) =>
													setAgree2(!agree2)
												}
												checked={agree2}
												type="checkbox"
											/>
											<span>동의함</span>
										</div>
									</div>
								</div>
							</td>
						</tr>
						<tr>
							<td colSpan="2">
								<div className="frm_agree3">
									<div>
										<label>
											[선택] 개인정보 처리 위탁 동의
										</label>
										<textarea
											rows="8"
											readOnly
											style={{ width: "100%" }}
										>
                                 제1조(목적) 이 약관은 주식회사
                                 제로파이터즈(전자상거래 사업자)가
                                 운영하는 코키티 사이버 몰(이하 “몰”
                                 이라 한다)에서 제공하는 인터넷 관련
                                 서비스(이하 “서비스”라 한다)를
                                 이용함에 있어 사이버 몰과 이용자의
                                 권리, 의무 및 책임사항을 규정함을
                                 목적으로 합니다.※「PC통신, 무선 등을
                                 이용하는 전자상거래에 대해서도 그
                                 성질에 반하지 않는 한 이 약관을
                                 준용합니다.」
                              </textarea>
										<div className="dflex">
                                 <span>
                                    개인정보 처리 위탁에
                                    동의하십니까?
                                 </span>
											<input
												onChange={(e) =>
													setAgree3(!agree3)
												}
												checked={agree3}
												type="checkbox"
											/>
											<span>동의함</span>
										</div>
									</div>
								</div>
							</td>
						</tr>
						<tr>
							<td colSpan="2">
								<div className="frm_agree3">
									<div>
										<label>[선택] 쇼핑정보 수신동의</label>
										<textarea
											rows="8"
											readOnly
											style={{ width: "100%" }}
										>
                                 할인쿠폰 및 혜택, 이벤트, 신상품
                                 소식 등 쇼핑몰에서 제공하는 유익한
                                 쇼핑정보를 SMS나 이메일로 받아보실
                                 수 있습니다. 단, 주문/거래 정보 및
                                 주요 정책과 관련된 내용은 수신동의
                                 여부와 관계없이 발송됩니다. 선택
                                 약관에 동의하지 않으셔도 회원가입은
                                 가능하며, 회원가입 후 회원정보수정
                                 페이지에서 언제든지 수신여부를
                                 변경하실 수 있습니다.
                              </textarea>
										<div className="dflex">
                                 <span>
                                    SMS 수신을 동의하십니까?
                                 </span>
											<input
												onChange={(e) =>
													setAgree4(!agree4)
												}
												checked={agree4}
												type="checkbox"
											/>
											<span>동의함</span>
										</div>
									</div>
								</div>
							</td>
						</tr>
						<tr className="be-0">
							<td colSpan="2">
								<div className="dflex2">
									<button
										className="cursor"
										type="button"
										onClick={onJoin}
									>
										회원가입
									</button>
								</div>
							</td>
						</tr>
					</table>
				</form>
			</div>
		</>
	);
};

export default Form;