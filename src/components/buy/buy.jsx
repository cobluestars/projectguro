import "./buy.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

function Buy() {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [totalprice, setTotalprice] = useState(0);
  const [radio1, setRadio1] = useState(false);
  const [radio2, setRadio2] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setData(location.state.basket);
    setLoaded(true);
  }, [location.state.basket])

  useEffect(() => {
    let temp = 0;
    data.map((item) => {
      temp += item.price;
    });
    setTotalprice(temp);
  }, [data]);

  async function payComplete() {
    console.log(radio1, radio2);
    if (radio1 === false && radio2 === false) {
      alert("결제 수단을 선택해주세요.")
    } else {
      try {
        await axios.post(`http://localhost:8080/kokee/orders/${localStorage.getItem("email")}`, data)
        alert("결제가 완료되었습니다. ")
        navigate("/");
      } catch (error) {
        alert("네트워크 에러가 있어요")
      }
    }
  }

  return (
    <div>
      <div className="pay-box">
        <div className="grid_coffee">
          <p className="bold">주문 상품 정보</p>
          <div className="inside_container">
            {loaded &&
              data.map((value, index) => (
                <div key={index}>
                  <div className="container_2">
                    <div className="grid_1">
                      <img src={value.image} className="img" alt=".."/>
                    </div>
                    <div className="grid_2">
                      <p className="bold">
                        {value.mount > 1
                          ? value.productName + " x" + value.mount
                          : value.productName}
                      </p>
                      <p>
                        {value.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        원
                      </p>
                      <p>
                        {moment(value.date).format("YYYY-MM-DD HH:mm:ss")}
                      </p>
                    </div>
                  </div>
                  {index !== data.length - 1 && <hr />}
                </div>
              ))}
          </div>
        </div>
        <div className="grid_nickname">
          <p className="bold">주문자 이메일</p>
          <div className="inside_container">
            <p>{localStorage.getItem("email")}</p>
          </div>
        </div>
        <div className="grid_price">
          <p className="bold">주문 요약</p>
          <div className="inside_container">
            <span className="bold">총 주문금액</span>
            <span className="pay-price">
              {loaded &&
                totalprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              원
            </span>
          </div>
        </div>
        <div className="grid_method">
          <p className="bold">결제 수단</p>
          <div className="inside_container">
            <form>
              <label>
                <input
                  onChange={(e) => setRadio1(!radio1)}
                  type="radio"
                  name="method"
                  value="card"
                  className="rdbtn"
                />{" "}
                카드결제
              </label>
              <label>
                <input
                  onChange={(e) => setRadio2(!radio2)}
                  type="radio"
                  name="method"
                  value="yee"
                  className="rdbtn"
                />{" "}
                계좌이체
              </label>
            </form>
          </div>
        </div>
        <div className="grid_purchase">
          <button onClick={payComplete}>결제하기</button>
        </div>
      </div>
    </div>
  );
}

export default Buy;
