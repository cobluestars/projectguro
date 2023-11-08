import "./Mypage.css";
import { IoDocumentTextOutline } from "react-icons/io5";
import { CgProfile, CgShoppingCart } from "react-icons/cg";
import { RiCustomerService2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Mypage({ isLogined }) {
  console.log(isLogined);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogined) {
      // pass를 의미함
    } else {
      alert("로그인이 필요한 메뉴 입니다.");
      navigate("/");
    }
  }, [isLogined, navigate]);

  return (
    <>
      {/* 헤더자리 */}
      <hr />
      <div className="inner">
        {/* 본문 시작 */}
        <h2 className="mypage">마이 페이지</h2>
        <div className="shortCut">
          <div className="sc" onClick={() => navigate("../orderList")}>
            <div className="customer">
              <p>주문 내역 조회</p>
            </div>
            <div className="icons">
              <IoDocumentTextOutline size={72} />
            </div>
            <div className="context">
              <span>
                주문하신 상품의 주문내역을 <br />
                확인 할 수 있습니다.
              </span>
            </div>
          </div>
          <div className="sc" onClick={() => navigate("../Editprofile")}>
            <div className="customer">
              <p>회원 정보</p>
            </div>
            <div className="icons">
              <CgProfile size={72} />
            </div>
            <div className="context">
              <span>고객님의 개인정보를 관리하는 공간입니다.</span>
            </div>
          </div>
          <div className="sc" onClick={() => navigate("../basket")}>
            <div className="customer">
              <p>장바구니</p>
            </div>
            <div className="icons">
              <CgShoppingCart size={72} />
            </div>
            <div className="context">
              <span>장바구니에 담은 상품의 목록을 보여드립니다.</span>
            </div>
          </div>
          <div className="sc" onClick={() => navigate("../faq")}>
            <div className="customer">
              <p>고객의 소리</p>
            </div>
            <div className="icons">
              <RiCustomerService2Line size={72} />
            </div>
            <div className="context">
              <span>FAQ 페이지로 바로 이동할 수 있습니다.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="test" />
    </>
  );
}

export default Mypage;
