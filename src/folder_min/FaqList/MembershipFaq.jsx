import React, { useState } from "react";
import { Link } from "react-router-dom";

const body = {
  margin: "0 auto",
  width: 1200,
  height: "900px"
}

const FAQS = [
  {
    topic: "회원",
    questions: [
      {
        question: "[회원] 실명확인 오류 시 어떻게 하나요?",
        answer: "실명확인 오류 시, 입력하신 정보가 정확한지 확인해주세요. \n문제가 지속될 경우, 고객센터로 연락 주시면 도와드리겠습니다."
      },
      {
        question: "[회원] 회원가입이 안 되는 경우는 어떻게 하죠?",
        answer: "회원가입 중 문제가 발생할 경우, 먼저 사용 중인 브라우저를 재시작해보세요. \n만약 문제가 계속될 경우, 고객센터로 연락주세요."
      },
      {
        question: "[회원] 회원정보는 어떻게 변경하나요?",
        answer: "로그인 후 'MY PAGE - 회원 정보' 메뉴에서 원하는 정보를 변경할 수 있습니다."
      },
      {
        question: "[회원] 회원 ID와 비밀번호를 잊어버렸어요.",
        answer: "로그인 페이지에서 '아이디·비밀번호 찾기' 링크를 통해 재설정을 진행해주세요.\n본인 인증 절차를 거친 후, 아이디와 비밀번호를 재설정할 수 있습니다."
      },
      {
        question: "[회원] 회원탈퇴는 어떻게 하며, 탈퇴 시 개인정보는 어떻게 되나요?",
        answer: "로그인 후 'MY PAGE - 회원정보 - 회원탈퇴' 메뉴에서 탈퇴를 진행할 수 있습니다.\n탈퇴 시 모든 개인정보는 즉시 삭제되며, 복구가 불가능합니다."
      },
      {
        question: "[회원] 로그인/로그아웃이 안 됩니다.",
        answer: "먼저 사용 중인 브라우저의 캐시와 쿠키를 삭제해보시기 바랍니다. \n문제가 계속될 경우, 고객센터로 연락 주세요."
      }
    ]
  }
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


function MembershipFaq() {
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
                            <br />
                            <p>

                            {/* 줄바꿈 \n 적용 */}
                            {item.answer.split('\n').map((line, index) => (
                                <span key={index}>
                                    {line}
                                    <br />
                                </span>
                            ))}

                              <br />
                              [고객센터 문의] 02-0000-0001
                              <br />
                              [고객센터 운영시간] 월~금 AM 9:00 ~ PM 6:00
                              (토,일,공휴일 휴무)
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

export default MembershipFaq;