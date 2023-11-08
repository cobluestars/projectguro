import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Faq.css";

const FAQS = [
  {
    topic: "이벤트/프로모션",
    questions: [
      "[이벤트/프로모션] 베스트 리뷰 이벤트 당첨자는 매월 언제즈음 발표하나요?",
    ],
  },
];

const FlexContainer2 = ({ children }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      gap: "60px",
      width: "100%", // 너비를 100%로 설정하여 부모의 padding을 적용
    }}
  >
    {children}
  </div>
);

function Faq() {
  // 클릭한 FAQ 항목의 인덱스를 관리하는 상태
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);

  // FAQ 항목을 클릭하면 호출되는 함수
  const handleQuestionClick = (index) => {
    // 이미 선택된 FAQ 항목을 다시 클릭하면 선택을 취소
    if (selectedQuestionIndex === index) {
      setSelectedQuestionIndex(null);
    } else {
      setSelectedQuestionIndex(index);
    }
  };

  return (
    <div className="faqBody">
      <section className="sec_body">
      {/* <div className="searchStyle">
        <div className="inputGroupStyle">
          <button className="buttonStyle" type="button" id="button-addon1">
            Search
          </button>
          <input
            className="inputStyle"
            type="text"
            placeholder=""
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />
        </div>
      </div> */}
      
        <div className="borderBoxStyle">
          <FlexContainer2>
            <Link to="/EventPromotionFaq">
              <p className="commonStyle2">이벤트/프로모션</p>
            </Link>
            <p className="commonStyle2">|</p>
            <Link to="/MembershipFaq">
            <p className="commonStyle2">회원</p>
            </Link>
            <p className="commonStyle2">|</p>
            <Link to="/PaymentRefundFaq">
            <p className="commonStyle2">결제/환불</p>
            </Link>
            <p className="commonStyle2">|</p>
            <Link to="/StoreFaq">
            <p className="commonStyle2">매장</p>
            </Link>
            <p className="commonStyle2">|</p>
            <Link to="/DeliveryFaq">
            <p className="commonStyle2">딜리버리</p>
            </Link>
            <p className="commonStyle2">|</p>
            <Link to="/OthersFaq">
            <p className="commonStyle2">기타</p>
            </Link>
          </FlexContainer2>
          <div className="ContainerCss">
          <table className="tableStyle">
              <thead className="tableHeadStyle">
                <tr>
                  <th scope="col" style={{ width: "150px" }}>
                    Topic
                  </th>
                  <th scope="col">Question</th>
                </tr>
              </thead>
              <tbody>
                {FAQS.map((faq, faqIndex) =>
                  faq.questions.map((question, questionIndex) => {
                    const index =
                      faqIndex * faq.questions.length + questionIndex;
                    return (
                      <React.Fragment key={index}>
                        <tr className="tableDataStyle" onClick={() => handleQuestionClick(index)}>
                          <td className="tdtopic" style={{ width: "150px" }}>{faq.topic}</td>
                          <td className="tdquestion">{question}</td>
                        </tr>
                        {selectedQuestionIndex === index && (
                          <tr>
                            <td style={{ width: "150px" }}></td>
                            <td style={{ textAlign: "center" }}>
                              <br />
                              <p>
                                베스트 리뷰 이벤트 당첨자는 매월 10일 ~ 12일 사이에 발표하고 있습니다.
                                <br />
                                자세한 사항은 매월 10일 ~ 12일 사이에 공지사항을 확인해 주시기 바랍니다.
                                <br />
                              </p>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Faq;
