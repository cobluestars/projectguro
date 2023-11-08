import { Link, useNavigate, useLocation } from "react-router-dom";
import Sidebar from "./SideBar/Sidebar";
import "./detailPage.css";
import { useState, useEffect } from "react";
import axios from "axios";

function DetailPage({ isLogined }) {
  const navigate = useNavigate();
  const [carts, setCarts] = useState([]);
  const [count, setCount] = useState(1);
  const [basket, setBasket] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const dataParam = queryParams.get("data");
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (dataParam) {
      try {
        setData(JSON.parse(dataParam));
        setLoaded(true);
      } catch (error) {
        console.error("Error parsing data from URL:", error);
      }
    }
  }, []);

  //상품 수량 조절
  function changeCount(n) {
    if (count + n >= 1) {
      setCount(count + n);
    }
  }

  //장바구니 페이지로 이동하는 코드, 로그인이 되어있지 않으면 네트워크 에러 발생
  async function pay() {
    if (isLogined) {
      const cart = {
        product_name: data.name,
        mount: count,
        price: data.price * count,
        email: localStorage.getItem("email"),
      };
      try {
        await axios.post("http://localhost:8080/kokee/carts", cart);
        navigate("/basket");
      } catch (error) {
        alert("네트워크 에러 발생");
      }
    } else {
      alert("로그인이 필요한 메뉴 입니다.");
      navigate("/");
    }
  }

  const handleCategoryClick = (category) => {
    navigate(-1);
  };

  return (
    <div className="inner">
      <div className="detail-page">
        <Sidebar onCategoryClick={handleCategoryClick} />
        <div className="product-detail">
          <div className="detail-img">
            <div className="d-img">
              <img src={data.image} alt="product" />
            </div>
          </div>

          <div className="detail-info">
            <div className="detail-drink">
              <p className="d-name">{data.name}</p>
              <span className="d-price">
                {loaded &&
                  data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                <span className="d-price-fix">원</span>
              </span>
            </div>

            <div className="d-line" />

            <div className="d-amount">
              <img
                className="minus"
                src="/img/remove.png"
                alt="minus"
                onClick={() => changeCount(-1)}
              />

              <div className="detail_count">
                <span>{count}</span>
              </div>
              <img
                className="plus"
                src="/img/add.png"
                alt="plus"
                onClick={() => changeCount(1)}
              />
            </div>

            <div className="d-line" />

            <div className="d-sum">
              <div>
                <span className="d-sum-price">총 상품 금액</span>
              </div>
            </div>

            <div className="total-info">
              <span className="total">
                총 수량 <span className="t-count">{count}개 </span>
              </span>
              <span className="t-price">
                {loaded &&
                  (data.price * count)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                <span className="t-price-fix">원</span>
              </span>
            </div>

            <div className="d-btn">
              <button className="d-btn-btn" onClick={pay}>
                장바구니
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="testBox" />
    </div>
  );
}
export default DetailPage;
