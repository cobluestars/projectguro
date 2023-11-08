import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const noticebd = {
	position: "relative",
	top: "10%",
};

const noticetitle = {
	fontSize: "20px",
}

const noticesubtitle = {
	margintop: 50,
	fontSize: "45px",
	fontWeight: 600,
	color: "#103b31",
};

const notices = [
	{
		no: 8,
		title: "4월 베스트 리뷰 이벤트 당첨자 발표",
		writer: "담당자",
		date: "2023-05-10",
		text:
			"🎉축하드립니다!🎉\n\n4월 베스트 리뷰 이벤트의 당첨자는 'sweetcookie123'님의 '코키티의 신제품 '클라우드'에 관한 고찰' 리뷰입니다.👏👏\n🎁상품은 다음 주 월요일에 발송됩니다.🎁",
	},
	{
		no: 7,
		title: "팝업스토어 인스타그램 이벤트 발표",
		writer: "담당자",
		date: "2023-05-03",
		text:
			"인스타그램 팔로워 이벤트에 참여해주셔서 감사합니다! \n🎉당첨자는 'choco_latte'님입니다.🎉\n 이메일을 통해 상세 내용을 안내드리겠습니다.",
	},
	{
		no: 6,
		title: "코키티 X 현대백화점 팝업스토어 안내",
		writer: "담당자",
		date: "2023-04-25",
		text:
			"🎉코키티 X 현대백화점 팝업스토어 오픈! 🎉\n\n안녕하세요, 코키티 팬 여러분! 💕\n우리가 기다리고 기다리던 코키티의 현대백화점 팝업스토어가 드디어 문을 엽니다! 🛍✨\n\n📅 일정: 2023년 5월 15일 ~ 5월 31일\n📍 위치: 현대백화점 1층 중앙로비\n\n🍪 팝업스토어 한정 메뉴!\n1️⃣ 코키티 오리지널 밀크티 🥛+🍪\n2️⃣ 초코칩 카라멜 티 🍫\n3️⃣ 그린티 레몬 쿠키 프라페 🍃+🍋\n\n🎁 특별 프로모션!\n\n처음 100명에게는 한정판 코키티 텀블러 무료 증정! 🥤✨\n팝업스토어에서 20,000원 이상 구매 시, 코키티 마스코트 스티커 팩 증정! 🎁\n팝업스토어는 현대백화점 내에서만 진행되며, 기간 내에 한정된 수량으로 판매되니 서두르세요! 🏃‍♀️💨\n\n📸 인스타그램에 #코키티X현대백화점 해시태그로 사진을 올리면 추첨을 통해 10분께 놀라운 선물이! 🎁📷\n\n기대하셔도 좋아요! 함께 특별한 티타임을 즐기러 오세요! ☕💖\n코키티 드림. 🌸",
	},
	{
		no: 5,
		title: "3월 베스트 리뷰 이벤트 당첨자 발표",
		writer: "담당자",
		date: "2023-04-10",
		text:
			"🎉축하드립니다!🎉\n\n3월 베스트 리뷰 이벤트의 당첨자는 'milktea_lover'님의 '이 가격에 이 퀄리티? 대박!' 리뷰입니다.👏👏\n🎁상품은 다음 주 월요일에 발송됩니다.🎁",
	},
	{
		no: 4,
		title: "2월 베스트 리뷰 이벤트 당첨자 발표",
		writer: "담당자",
		date: "2023-03-10",
		text:
			"🎉축하드립니다!🎉\n\n2월의 베스트 리뷰는 'green_tea_fanatic'님의 '코키티의 녹차라떼가 다른 곳과 차별화된 이유!' 리뷰입니다.👏👏\n🎁상품 발송은 3일 내로 이루어질 예정입니다.🎁",
	},
	{
		no: 3,
		title: "코키티 신메뉴의 이름을 지어주세요",
		writer: "담당자",
		date: "2023-03-03",
		text:
			"🌺 코키티 신메뉴 네이밍 이벤트! 🌺\n\n안녕하세요, 코키티 팸 여러분! 🍵✨\n새롭게 선보일 'Rose Garden Tea'의 시그니처 신메뉴가 공개되었습니다! 🌹🐉\n이번에는 Dragon Fruit & Rose flavor의 환상적인 조합을 만나볼 수 있어요! 💖\n\n이 특별한 맛에 어울리는 이름을 여러분의 창의력으로 지어주세요! 💡✍️\n\n📝 이벤트 참여 방법:\n 1️⃣ 코키티 인스타그램 혹은 페이스북에 로그인합니다.\n 2️⃣ #코키티_신메뉴네이밍 해시태그와 함께 여러분이 생각하는 이름을 댓글로 남겨주세요!\n 3️⃣ 추첨을 통해 선정된 이름을 사용하게 되며, 당첨자에게는 특별한 선물을 드립니다! 🎁\n\n📅 이벤트 기간: 2023년 3월 5일 ~ 3월 15일\n🎉 당첨자 발표: 2023년 3월 20일\n\n💡 네이밍 팁:\n\nRose 🌹와 Dragon Fruit 🐉의 특별함을 담아주세요!\n감성적이면서도 기억에 남는 이름을 추천해주세요!\n놀라운 상품과 함께 여러분의 아이디어가 코키티 메뉴에 이름으로 남게 됩니다! ✨\n모든 분들의 참여를 기다립니다! 🎉\n\n코키티 드림. 🍪❤️🍵",
	},
	{
		no: 2,
		title: "단종 메뉴 안내",
		writer: "담당자",
		date: "2023-02-25",
		text:
			"📋안내드립니다.📋\n한정 메뉴 '벵쇼'는 재고 소진을 기해 단종될 예정입니다.😪\n벵쇼를 맛볼 마지막 기회를 놓치지 마시고, 매장을 방문해주세요!🍷",
	},
	{
		no: 1,
		title: "1월 베스트 리뷰 이벤트 당첨자 발표",
		writer: "담당자",
		date: "2023-02-10",
		text:
			"🎉축하드립니다!🎉\n\n1월의 베스트 리뷰 당첨자는 'winterberry'님의 '코키티와 함께하는 따뜻한 겨울' 리뷰입니다.👏👏\n🎁상품 발송은 3일 내로 이루어질 예정입니다.🎁",
	},
];

const noticeNoStyle = {
	width: 150,
	textAlign: "center",
};

const noticeTitleStyle = {
	width: 600,
	textAlign: "center",
};

const noticeHeaderStyle = {
	textAlign: "center",
	margin: "20px 0",
};

const noticeListStyle = {
	display: "flex",
	flexDirection: "column",
	padding: "0 30px",
};

const searchContainerStyle = {
	display: "flex",
	width: 500,
	margin: "10px auto",
	alignItems: "center",
	justifyContent: "center",
	gap: "10px",
};

const page = {
	position: "relative",
	left: "44%",
	margin: "10px auto",
};

const notice_detail = {
	position: "relative",
};

const buttonStyle = {
	padding: "10px 15px",
	borderRadius: "4px",
	border: "1px solid grey",
	cursor: "pointer",
	backgroundColor: "white",
	color: "grey",
};

const pagebuttonStyle = {
	marginTop: "10px",
	padding: "10px 15px",
	borderRadius: "4px",
	border: "1px solid white",
	cursor: "pointer",
	backgroundColor: "white",
	color: "grey",
};

const inputStyle = {
	padding: "10px",
	borderRadius: "4px",
	border: "1px solid #ced4da",
	width: "80%",
};

const NoticeBoard = () => {
	const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
	const [resultNotice, setResultNotice] = useState([]);
	const navigate = useNavigate();

	const noticesPerPage = 8; // 한 페이지에 표시될 공지의 개수

	const indexOfLastNotice = currentPage * noticesPerPage; // 현재 페이지의 마지막 공지의 인덱스
	const indexOfFirstNotice = indexOfLastNotice - noticesPerPage; // 현재 페이지의 첫 번째 공지의 인덱스
	const currentNotices = notices.slice(indexOfFirstNotice, indexOfLastNotice); // 현재 페이지에 표시될 공지 리스트

	useEffect(() => {
		async function getNoticeList() {
			try {
				const result = await axios.get(
					"http://localhost:8080/kokee/notice/list"
				);
				setResultNotice(result.data);
			} catch (error) {
				alert("네트워크 에러가 있어요");
			}
		}
		getNoticeList();
	}, []);

	const renderBlankRows = () => {
		const blankRows = [];
		for (let i = currentNotices.length; i < noticesPerPage; i++) {
			blankRows.push(
				<tr key={"blank-" + i}>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
				</tr>
			);
		}
		return blankRows;
	};

	const [selectedNotice, setSelectedNotice] = React.useState(null);

	const handleNoticeClick = (index) => {
		if (selectedNotice === index) {
			setSelectedNotice(null);
		} else {
			setSelectedNotice(index);
		}
	};

	function checkAdmin() {
		if (localStorage.getItem("email") === "admin@admin.com") {
			navigate("/noticeboardwrite");
		} else {
			alert("관리자만 가능합니다.");
		}
	}

	return (
		<div className="inner">
			<div style={noticebd}>
				<div style={noticeHeaderStyle}>
					<p className="subtitle" style={noticesubtitle}>
						공지사항
					</p>
					<p className="title" style={noticetitle}>
						코키티에서 고객에게 전하는
					</p>
				</div>
				<div style={noticeListStyle}>
					<table className="table">
						<thead>
							<tr>
								<td style={noticeNoStyle}>no</td>
								<td style={noticeTitleStyle}>title</td>
								<td>writer</td>
								<td>date</td>
							</tr>
						</thead>
						<tbody>
							{resultNotice.length > 0 ? (
								resultNotice.map((notice, index) => {
									return (
										<>
											<tr
												key={index}
												onClick={() =>
													handleNoticeClick(index)
												}
											>
												<td
													scope="row"
													className="notice-no"
													style={noticeNoStyle}
												>
													{resultNotice.length -
														index}
												</td>
												<td
													className="notice-title"
													style={noticeTitleStyle}
												>
													{notice.title}
													<hr />
												</td>
												<td className="notice-writer">
													{notice.email ===
														"admin@admin.com" &&
														"관리자"}
													<hr />
												</td>
												<td className="notice-date">
													{moment(notice.date).format(
														"YYYY-MM-DD HH:mm"
													)}
												</td>
											</tr>
											<tr>
												<td className="notice-no" />
												<td colSpan="3">
													{selectedNotice ===
														index && (
														<NoticeDetail
															notice={notice}
														/>
													)}
												</td>
											</tr>
										</>
									);
								})
							) : (
								<span>공지사항이 없습니다.</span>
							)}
							{/* 비교 */}
							{/* 비교 */}
							{/* 비교 */}
							{/* {currentNotices.map((notice, index) => (
								<>
									<tr
										key={index}
										onClick={() => handleNoticeClick(index)}
									>
										<td
											scope="row"
											className="notice-no"
											style={noticeNoStyle}
										>
											{notice.no}
										</td>
										<td
											className="notice-title"
											style={noticeTitleStyle}
										>
											{notice.title}
											<hr />
										</td>
										<td className="notice-writer">
											{notice.writer}
											<hr />
										</td>
										<td className="notice-date">
											{notice.date}
										</td>
									</tr>
									<tr>
										<td className="notice-no" />
										<td colSpan="3">
											{selectedNotice === index && (
												<NoticeDetail notice={notice}/>
											)}
										</td>
									</tr>
								</>
							))} */}
						</tbody>
					</table>
					{renderBlankRows()}
				</div>
			</div>

			<div style={searchContainerStyle}>
				{/* <input type="text" style={inputStyle} placeholder="Search..." />
          <button style={buttonStyle}>Search</button> */}
				<button onClick={checkAdmin} style={buttonStyle}>
					Write
				</button>
			</div>

			<div style={page}>
				<button
					style={pagebuttonStyle}
					onClick={() => setCurrentPage(1)}
				>
					&laquo;
				</button>
				<button
					style={pagebuttonStyle}
					onClick={() => setCurrentPage(1)}
				>
					1
				</button>
				<button
					style={pagebuttonStyle}
					onClick={() =>
						setCurrentPage(
							Math.ceil(notices.length / noticesPerPage)
						)
					}
				>
					&raquo;
				</button>
			</div>
		</div>
	);
};

const NoticeDetail = ({ notice }) => {
	const navigate = useNavigate();

	async function deleteNotice() {
		if (localStorage.getItem("email") === "admin@admin.com") {
			try {
				await axios.delete(
					`http://localhost:8080/kokee/notice/delete/${notice.id}`
				);
				navigate("/");
			} catch (error) {
				alert("네트워크 에러가 있어요");
			}
		} else {
			alert("관리자만 가능합니다.");
		}
	}

	function updateNotice() {
		if (localStorage.getItem("email") === "admin@admin.com") {
			navigate("/noticeboardmodify", {
				state: notice,
			});
		} else {
			alert("관리자만 가능합니다.");
		}
	}

	const isAdmin = localStorage.getItem("email") === "admin@admin.com";

	return (
		<tr>
			<td colSpan="4">
				<div style={notice_detail}>
					{/*<h5>{notice.title}</h5>*/}
					<br />

					<p>
						{notice.text.split("\n").map((line, index) => (
							<span key={index}>
								{line}
								<br />
							</span>
						))}
					</p>

					<br />
				</div>
			</td>
			<td>
			{isAdmin && (
				<>
					<button
						type="button"
						onClick={updateNotice}
						style={{
							marginRight: "5px",
							marginTop: "15px",
							padding: "10px 15px",
							borderRadius: "4px",
							border: "1px solid grey",
							cursor: "pointer",
							backgroundColor: "white",
							color: "grey",
						}}
					>
						수정
					</button>
					<button
						style={{
							marginRight: "5px",
							marginTop: "15px",
							padding: "10px 15px",
							borderRadius: "4px",
							border: "1px solid grey",
							cursor: "pointer",
							backgroundColor: "white",
							color: "grey",
						}}
						onClick={deleteNotice}
					>
						삭제
					</button>
				</>
			)}
			</td>
		</tr>
	);
};

export default NoticeBoard;
