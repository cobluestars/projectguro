import React, { useState } from "react";
import { Link } from "react-router-dom";

const body = {
  margin: "0 auto",
  width: 1200,
  height: "850px"
}

const FAQS = [
  {
    topic: "딜리버리",
    questions: [
      {
        question: "[코키티 딜리버리] 코키티 매장과 동일한 메뉴를 판매하나요?",
        answer: "네, 코키티 딜리버리에서는 매장과 동일한 메뉴를 판매하고 있습니다."
      },
      {
        question: "[코키티 딜리버리] 서비스 이용 가능한 지역은 어디인가요?",
        answer: "코키티 딜리버리는 배달 앱과 연계되어 배달 서비스가 진행됩니다. 자세한 사항은 이용하시는 배달 앱을 참고해주세요."
      },
      {
        question: "[코키티 딜리버리] 이용가능한 결제수단은 어떻게 되나요?",
        answer: "카드와 현금, 카카오페이, 무통장입금 이용 가능합니다."
      },
      {
        question: "[코키티 딜리버리] 배달 최소금액과 배달비는 어떻게 되나요?",
        answer: "자세한 사항은 코키티 딜리버리 문의센터로 문의 주시기 바랍니다."
      },
      {
        question: "[코키티 딜리버리] 배달 주소지를 잘못 입력했어요.",
        answer: "코키티 딜리버리 문의센터로 문의 주시기 바랍니다."
      },
    ],
  },
];

const borderBoxStyle = {
  width: "1120px",
  height: "93px",
  margin: "0 auto",
  position: "relative",
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


function DeliveryFaq() {
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
                faq.questions.map((item, questionIndex) => {
                  const index = faqIndex * faq.questions.length + questionIndex;
                  return (
                    <React.Fragment key={index}>
                      <tr style={tableDataStyle} onClick={() => handleQuestionClick(index)}>
                        <td style={{ width: "150px", textAlign: "center" }}>{faq.topic}</td>
                        <td style={{ textAlign: "center" }}>{item.question}</td>
                      </tr>
                      {selectedQuestionIndex === index && (
                        <tr>
                          <td style={{ width: "150px" }}></td>
                          <td style={{ textAlign: "center" }}>
                            <p>
                              <br />
                              {item.answer}
                              <br />
                              <br />
                              [코키티 딜리버리 문의] 02-0000-0008
                              <br />
                              [코키티 딜리버리 고객센터 운영시간] 24시간 연중무휴
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

export default DeliveryFaq;
