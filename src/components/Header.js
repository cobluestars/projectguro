import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Header = ({ isLogined, setIsLogined }) => {
  const navigate = useNavigate();
  const userEmail = document.querySelector("#user_email");
  const userPass = document.querySelector("#user_pass");
  const [email, setEmail] = useState(""); //이메일 입력란 처음공백
  const [pass, setPass] = useState(""); //이메일 입력란 처음공백
  const [currentItem, setCurrentItem] = useState(null);
  const [headerLogined, setHeaderLogined] = useState(false);
  
  useEffect(() => {
    if (localStorage.getItem("realname")) {
      setHeaderLogined(true);
    }
  }, [])

  async function fn_login() {
    const regExp = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;
    const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

    if (email == "") {
      alert("이메일이 공백입니다.");
      userEmail.focus();
      return;
    }
    if (pass == "") {
      alert("비밀번호가 공백입니다.");
      userPass.focus();
      return;
    }

    if (regExp.test(email)) {
      alert("이메일에 한글을 입력하실 수 없습니다.");
      return;
    }

    if (exptext.test(email)) {
    } else {
      alert("이메일 형식을 맞춰주세요. Ex) exaple@example.com");
      return;
    }

    try {
      const result = await axios.post("http://localhost:8080/kokee/login", {
        email: email,
        password: pass
      })
      console.log(result);
      if (result.status === 200) {
        setIsLogined(!isLogined);
        setHeaderLogined(!headerLogined);
        document.querySelector(".sec_modal").classList.remove("active");
        localStorage.setItem("email", email);
        localStorage.setItem("realname", result.data.name);
        localStorage.setItem("locale", result.data.locale);
        alert(`${localStorage.getItem("realname")}님 환영합니다!`)
        navigate("/");
      } 
    } catch (error) {
      alert("이메일과 비밀번호를 확인해보세요")
    }
  }

  function logoutFunction() {
    alert(`로그아웃 합니다. ${localStorage.getItem("realname")}님 안녕히 가세요.`);
    localStorage.clear();
    setIsLogined(!isLogined);
    navigate("/");
    window.location.reload();
  }

  function fn_open() {
    document.querySelector(".sec_modal").classList.add("active");
  }

  function fn_close() {
    document.querySelector(".sec_modal").classList.remove("active");
  }

  // 메뉴바 효과 삭제 X)
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      document.querySelector(".sec_header_bottom").classList.add("active");
    } else {
      document.querySelector(".sec_header_bottom").classList.remove("active");
    }
  });

  const onMouseHoverHandler = (e) => {
    try {
      if (currentItem.classList.contains("active"))
        currentItem.classList.remove("active");
    } catch (error) {
      console.log(error);
    }

    e.target.parentNode.classList.add("active");
    setCurrentItem(e.target.parentNode);
  };

  const onMouseLeaveHandler = () => {
    try {
      if (currentItem.classList.contains("active"))
        currentItem.classList.remove("active");
    } catch (error) {
      console.log(error);
    }
  };

  const toform = () => {
    fn_close();
    navigate("/form");
  };


  return (
    <>
      <div className="sec_header_top">
        <div className="inner">
          <ul className="header_top">
            {headerLogined ? (
              <li onClick={logoutFunction}>
                <Link to="#">{localStorage.getItem("realname")}님 로그아웃</Link>
              </li>
            ) : (
              <li onClick={fn_open}>
                <Link href="#">로그인</Link>
              </li>
            )}
            <li>
              <Link to="/form">회원가입</Link>
            </li>
            <li>
              <Link to="/mypage">마이페이지</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="sec_header_bottom">
        <div className="inner">
          <div className="header_bottom" onMouseLeave={onMouseLeaveHandler}>
            <h1 className="logo">
              <Link to="/">
                <img src="./img/logo.webp" alt="logo" />
              </Link>
            </h1>
            <ul className="nav">
              <li>
                <Link to="/listpage" onMouseOver={onMouseHoverHandler}>
                  코키티 스토리
                </Link>
                <ul className="submenu">
                  <li>
                    <Link to="/listpage">브랜드</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/productlist" onMouseOver={onMouseHoverHandler}>
                  메뉴소개
                </Link>
                <ul className="submenu">
                  <li>
                    <Link to="./productlist">음료</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/waytocome" onMouseOver={onMouseHoverHandler}>
                  매장안내
                </Link>
                <ul className="submenu">
                  <li>
                    <Link to="./waytocome">매장찾기</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to="/FranchiseInquiryPage"
                  onMouseOver={onMouseHoverHandler}
                >
                  가맹안내
                </Link>
                <ul className="submenu">
                  <li>
                    <Link to="/FranchiseInquiryPage">가맹문의</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/noticeboard" onMouseOver={onMouseHoverHandler}>
                  고객지원
                </Link>
                <ul className="submenu">
                  <li>
                    <Link to="./noticeboard">공지사항</Link>
                  </li>
                  <li>
                    <Link to="./faq">FAQ</Link>
                  </li>
                  <li>
                    <Link to="./VoiceOfCustomer">고객의 소리</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="sec_modal">
        <div className="modal_login">
          <h2>로그인</h2>
          <input
            id="user_email"
            type="email"
            placeholder="이메일"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <input
            id="user_pass"
            type="password"
            placeholder="비밀번호"
            name="password"
            onChange={(e) => {
              setPass(e.target.value);
            }}
            value={pass}
          />
          <label className="checkbox_wrap">
            <input type="checkbox" name="remember" />
            <p>로그인 상태 유지</p>
          </label>
          <button className="login_btn" type="button" onClick={fn_login}>
            로그인
          </button>
          <div className="join">
            <p style={{cursor: "pointer"}} onClick={toform}>회원가입</p>
            <a href="#">아이디 · 비밀번호 찾기</a>
          </div>
          <div className="line_wrap">
            <span className="line" />
            또는
            <span className="line" />
          </div>
          <button className="no_login_btn">비회원 주문 조회</button>
          <div className="modal_close" onClick={fn_close}>
            <i class="fa-regular fa-x" />
          </div>
        </div>
      </div>
      <div>
        <h2 className="find_tit _find_tit findId" />
      </div>
    </>
  );
};

export default Header;
