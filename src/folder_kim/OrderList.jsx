import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./OrderList.css";
import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { ko } from "date-fns/esm/locale";
import axios from "axios";
import JsonData from "./basketproducts.json";
import moment from "moment";

function OrderList() {
  const [startDate, setStartDate] = useState(null); // 시작 날짜 상태 추가
  const [endDate, setEndDate] = useState(null); // 종료 날짜 상태 추가
  const [info, setInfo] = useState({ startDate: "", endDate: "" }); // info 상태 추가
  const [resultData, setResultData] = useState([]);

  // getFormattedDate 함수 정의
  const getFormattedDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const getFormattedDateTime = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  // 날짜 선택 시 호출되는 이벤트 핸들러
  const handleStartDateChange = (date) => {
    setStartDate(date);
    setInfo({
      ...info,
      startDate: getFormattedDate(date),
    });
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    setInfo({
      ...info,
      endDate: getFormattedDate(date),
    });
  };

  // 버튼을 클릭하여 날짜 범위 설정
  const handleDateRangeClick = (days) => {
    const today = new Date();
    const endDate = new Date(today);
    const startDate = new Date(today);

    if (days === 7) {
      startDate.setDate(today.getDate() - 7);
    } else if (days === 15) {
      startDate.setDate(today.getDate() - 15);
    } else if (days === 30) {
      startDate.setMonth(today.getMonth() - 1);
    } else if (days === 90) {
      startDate.setMonth(today.getMonth() - 3);
    }

    handleStartDateChange(startDate);
    handleEndDateChange(endDate);
  };

  async function findOrders() {
    if (!startDate || !endDate) {
      alert("조회할 날짜를 선택하세요!");
    } else {
      const teststart = getFormattedDateTime(startDate);
      const testend = getFormattedDateTime(endDate);
      try {
        const result = await axios.get(
          `http://localhost:8080/kokee/orders/${localStorage.getItem("email")}?&start=${teststart}&end=${testend}`
        );
        let tempObject = {};
        let tempArray = [];
        JsonData.map((item) => {
          result.data.map((item2) => {
            if (item.name === item2.productName) {
              tempObject = {
                ...item2,
                image: item.image,
              };
              tempArray.push(tempObject);
            }
          });
        });
        setResultData(tempArray);
        console.log(tempArray);
      } catch (error) {
        alert("네트워크 에러가 발생했어요");
      }
    }
  }

  return (
    <>
      <hr />
      <div className="inner">
        {/* 본문 시작 */}
        <h2 className="OrderHistory">주문 내역 조회</h2>
        <div className="readheader">
          <div className="readh2">
            <span className="readDate">조회 기간</span>
            <button
              type="button"
              className="datebtn"
              onClick={() => handleDateRangeClick(0)}
            >
              오늘
            </button>
            <button
              type="button"
              className="datebtn"
              onClick={() => handleDateRangeClick(7)}
            >
              7일
            </button>
            <button
              type="button"
              className="datebtn"
              onClick={() => handleDateRangeClick(15)}
            >
              15일
            </button>
            <button
              type="button"
              className="datebtn"
              onClick={() => handleDateRangeClick(30)}
            >
              1개월
            </button>
            <button
              type="button"
              className="datebtn"
              onClick={() => handleDateRangeClick(90)}
            >
              3개월
            </button>
            <div className="datebox">
              <DatePicker
                locale={ko} // 한글로 변경
                className="dateboxChild"
                selected={startDate}
                onChange={(date) => handleStartDateChange(date)}
                dateFormat="yyyy-MM-dd"
              />
              ~
              <DatePicker
                locale={ko} // 한글로 변경
                className="dateboxChild"
                selected={endDate}
                onChange={(date) => handleEndDateChange(date)}
                dateFormat="yyyy-MM-dd"
              />
            </div>
            <div>
              <button
                type="button"
                className="searchDatebtn"
                onClick={findOrders}
              >
                <span className="searchButtonText">조회</span>
                <MdSearch className="searchDateIcon" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="inner recentOrder">
        <h6 className="recent-orders">최근 주문 내역</h6>
        <table className="productTable">
          <thead className="productHeader">
            <tr>
              <th>지점명</th>
              <th>주문일자</th>
              <th>주문번호</th>
              <th>상품정보</th>
              <th>가격</th>
              <th>수량</th>
            </tr>
          </thead>
          <tbody className="productBody">
            {resultData &&
              resultData.map((order) => (
                <tr key={order.id}>
                  <td>
                    {localStorage.getItem("locale") === "guro"
                      ? "구로점"
                      : "영등포점"}
                  </td>
                  <td>{moment(order.date).format("YYYY-MM-DD HH:mm:ss")}</td>
                  <td>{moment(order.date).format("X")}</td>
                  <td>
                    <div className="productInfo">
                      <img
                        className="productList"
                        src={order.image}
                        alt="..."
                        style={{
                          width: "60px",
                          height: "90px",
                          border: "1px solid #DEE2E6",
                          padding: "5px",
                        }} // 이미지 크기 조정
                      />
                      <div className="productDetail">
                        <br />
                        <h3>{order.productName}</h3>
                      </div>
                    </div>
                  </td>
                  <td>{order.price}</td>
                  <td>{order.mount}</td>
                </tr>
              ))}
          </tbody>
        </table>
        {resultData.length === 0 && (
          <div>
            <span>주문 내역이 없습니다.</span>
          </div>
        )}
      </div>
      <div className="test" />
    </>
  );
}

export default OrderList;
