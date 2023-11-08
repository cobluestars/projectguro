import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./basket.scoped.css";
import axios from "axios";
import JsonData from "./basketproducts.json";
import moment from "moment";
import { FiX } from "react-icons/fi";

function Basket({ isLogined }) {
  const navigate = useNavigate();
  const [basket, setBasket] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // 장바구니에 아이템 추가
  useEffect(() => {
    axios
      .get(`http://localhost:8080/kokee/carts/${localStorage.getItem("email")}`)
      .then((response) => {
        let tempObject = {};
        let tempArray = [];
        JsonData.map((item) => {
          response.data.map((item2) => {
            if (item.name === item2.productName) {
              tempObject = {
                ...item2,
                image: item.image,
              };
              tempArray.push(tempObject);
            }
          });
        });
        setBasket(tempArray);
        let temp = 0;
        tempArray.map((item) => {
          temp += item.price;
        });
        setTotalPrice(temp);
      })
      .catch((error) => {
        console.error("Error fetching carts:", error);
      });
  }, [totalPrice, basket]);

  // 장바구니에 담은 음료의 수량 조절
  const editcount = async (name, mount, price, id) => {
    let newcount = prompt("수량을 입력하세요");
    let perprice,
      newprice = 0;
    if (newcount) {
      if (newcount >= 1) {
        newcount = parseInt(newcount);
        perprice = price / mount;
        newprice = perprice * newcount;
        const result = await axios.put(
          `http://localhost:8080/kokee/carts/update/${localStorage.getItem(
            "email"
          )}`,
          {
            id: id,
            productName: name,
            updateMount: newcount,
            updatePrice: newprice,
          }
        );
        console.log(result);
      } else {
        alert("수량은 1개 이상이어야 합니다.");
      }
    } else {
      alert("수량을 입력해주세요");
    }
  };

  // 결제하기로 이동
  const topurchase = () => {
    navigate("/buy", {
      state: { basket },
    });
  };

  // 장바구니 비우기
  const clearbasket = async () => {
    try {
      await axios.delete(
        `http://localhost:8080/kokee/carts/delete/${localStorage.getItem(
          "email"
        )}`
      );
      setBasket([]);
    } catch (error) {
      alert("네트워크 에러입니다.");
    }
  };

  // 장바구니 삭제
  async function deleteProduct(id) {
    try {
      console.log("삭제삭제");
      await axios.delete(`http://localhost:8080/kokee/carts/delete_one/${id}`);
    } catch (error) {
      alert("네트워크 에러입니다.");
    }
  }

  return (
    <>
      <div className="inner">
        <div>
          <div className="title-cart">
            <h2>장바구니</h2>
          </div>
          <div className="cart-container">
            <table>
              <thead>
                <tr className="">
                  <th className="table_basket goleft" colSpan={2}>
                    <span>상품정보</span>
                  </th>
                  <th className="table_basket">담은시간</th>
                  <th className="table_basket">수량</th>
                  <th className="table_basket">주문금액</th>
                  <th className="table_basket table_basket_right">삭제</th>
                </tr>
              </thead>
              <tbody>
                {basket &&
                  basket.map((item, index) => (
                    <tr className="basket_row" key={index}>
                      <td className="table_basket goleft table_smol ">
                        <img
                          src={item.image}
                          height={90}
                          style={{
                            marginLeft: "50px",
                          }}
                          alt="이미지"
                        />
                      </td>
                      <td className="table_basket goleft">
                        <div>
                          <b>{item.productName}</b>
                          <p>size - Regular</p>
                        </div>
                      </td>
                      <td className="table_basket goleft">
                        <div>
                          <b>
                            {moment(item.date).format("YYYY-MM-DD HH:mm:ss")}
                          </b>
                        </div>
                      </td>
                      <td className="table_basket">
                        <p>{item.mount}</p>
                        <div>
                          <button
                            className="btn-btn-control"
                            onClick={() =>
                              editcount(
                                item.productName,
                                item.mount,
                                item.price,
                                item.id
                              )
                            }
                          >
                            수정
                          </button>
                        </div>
                      </td>
                      <td className="table_basket table_basket_right">
                        {item.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        원
                      </td>
                      <td className="table_basket">
                        <div
                          className="basketDelete"
                          onClick={() => deleteProduct(item.id)}
                        >
                          <FiX />
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          <div className="button-control">
            <div className="d-flex">
              <button
                type="button"
                className="btn-btn-control ms-2"
                onClick={clearbasket}
              >
                장바구니 비우기
              </button>
            </div>

            <div className="pay-container">
              <table>
                <tbody>
                  <tr>
                    <td className="table_bottom" colSpan="2">
                      총 주문상품 {basket.length}개
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2" className="pay-cell table_bottom">
                      <span className="pay_sum_sum">
                        {totalPrice &&
                          totalPrice
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        원
                      </span>
                      <p>총 주문금액</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button
              type="button"
              className="btn-btn-control-pay"
              onClick={topurchase}
            >
              결제하기
            </button>
          </div>
        </div>
        <div className="testBox" />
      </div>{" "}
    </>
  );
}

export default Basket;
