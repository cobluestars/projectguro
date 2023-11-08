import React, { useState } from "react";
import { Link } from "react-router-dom";

const body = {
  margin: "0 auto",
  width: 1200,
  height: "650px"
}

const FAQS = [
  {
    topic: "이벤트/프로모션",
    questions: [
      "[이벤트/프로모션] 베스트 리뷰 이벤트 당첨자는 매월 언제즈음 발표하나요?",
    ],
  },
];

const borderBoxStyle = {
  width: "1120px",
  height: "93px",
  position: "relative",
  margin: "0 auto",
  top: "100px",
  borderRadius: "5px",
  background: "transparent",
  borderWidth: "1px",
  borderColor: "black",
  borderStyle: "solid",
  padding: "30px 30px", // Padding 추가
  boxSizing: "border-box", // Padding으로 인한 크기 증가 방지
};

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

const commonStyle2 = {
  flexGrow: 0,
  flexShrink: 0,
  fontSize: "19px",
  fontWeight: "700",
  textAlign: "left",
  color: "#000",
};

const ContainerCss = {
  position: "relative",
  top: "140px",
};

const inputGroupStyle = {
  display: 'flex',
  alignItems: 'center',
};

const buttonStyle = {
  cursor: 'pointer',
  padding: '0.375rem 0.75rem',
  color: '#212529',
  backgroundColor: '#E9ECEF',
  border: '1px solid #CED4DA',
  borderRadius: '0.25rem',
};

const inputStyle = {
  flex: 1,
  padding: '0.375rem 0.75rem',
  fontSize: '1rem',
  lineHeight: '1.5',
  color: '#495057',
  backgroundColor: '#FFF',
  border: '1px solid #CED4DA',
  borderRadius: '0.25rem',
};

const tableStyle = {
  width: '100%',
  marginBottom: '1rem',
  color: '#212529',
  borderCollapse: 'collapse',
};

const tableHeadStyle = {
  borderBottom: '2px solid #DEE2E6',
};

const tableDataStyle = {
  padding: '0.75rem',
  verticalAlign: 'top',
  borderTop: '1px solid #DEE2E6',
};


function EventPromotionFaq() {
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
    <div style={body}>
      <section className="sec_body">
      {/* <div style={searchStyle}>
        <div style={inputGroupStyle}>
          <button style={buttonStyle} type="button" id="button-addon1">
            Search
          </button>
          <input
            style={inputStyle}
            type="text"
            placeholder=""
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />
        </div>
      </div> */}
      
        <div style={borderBoxStyle}>
          <FlexContainer2>
            <Link to="/EventPromotionFaq">
              <p style={commonStyle2}>이벤트/프로모션</p>
            </Link>
            <p style={commonStyle2}>|</p>
            <Link to="/MembershipFaq">
              <p style={commonStyle2}>회원</p>
            </Link>
            <p style={commonStyle2}>|</p>
            <Link to="/PaymentRefundFaq">
              <p style={commonStyle2}>결제/환불</p>
            </Link>
            <p style={commonStyle2}>|</p>
            <Link to="/StoreFaq">
              <p style={commonStyle2}>매장</p>
            </Link>
            <p style={commonStyle2}>|</p>
            <Link to="/DeliveryFaq">
              <p style={commonStyle2}>딜리버리</p>
            </Link>
            <p style={commonStyle2}>|</p>
            <Link to="/OthersFaq">
              <p style={commonStyle2}>기타</p>
            </Link>
          </FlexContainer2>
          <div className="containerct" style={ContainerCss}>
          <table className="table" style={tableStyle}>
              <thead style={tableHeadStyle}>
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
                        <tr style={tableDataStyle} onClick={() => handleQuestionClick(index)}>
                        <td style={{ width: "150px", textAlign: "center" }}>{faq.topic}</td>
                        <td style={{ textAlign: "center" }}>{question}</td>
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

export default EventPromotionFaq;
