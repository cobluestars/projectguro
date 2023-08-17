import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// 공통 스타일
const COMMON_TEXT_STYLE = {
  position: 'absolute',
  textAlign: 'left',
  color: '#000',
  fontSize: '15px'
};

const TEXT_ITEMS = [
  { text: '브랜드 코키티', left: '341px', top: '72px' },
  { text: '메뉴 소개', left: '512px', top: '72px' },
  { text: '매장안내', left: '655px', top: '72px' },
  { text: '소식', left: '794px', top: '72px' },
  { text: '가맹안내', left: '905px', top: '72px' },
  { text: '고객지원', left: '1044px', top: '72px' }
];


const SVG_COMPONENT = (
  <svg
    width="1440"
    height="11"
    viewBox="0 0 1440 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ position: 'absolute', left: '-1px', top: '115px' }}
    preserveAspectRatio="xMidYMid meet"
  >
  <line
    x1="0"
    y1="5.5"
    x2="1440"
    y2="5.5"
    stroke="black"
    strokeOpacity="0.29"
  />
  </svg>
);

const ELEMENTS = [
  {
    type: 'img',
    props: {
      src: '/assets/kokeetea_-2022-sm-1.png',
      alt: 'kokeetea image',
      style: {
        width: '75px',
        height: '75px',
        position: 'absolute',
        left: '144px',
        top: '18px',
        objectFit: 'cover',
      },
    },
  },
  {
    type: 'p',
    content: 'FAQ',
    props: {
      style: {
        position: 'absolute',
        left: '165px',
        top: '203px',
        fontSize: '35px',
        fontWeight: 600,
        textAlign: 'left',
        color: '#000',
      },
    },
  },
  {
    type: 'p',
    content: '자주 찾는 도움말',
    props: {
      style: {
        position: 'absolute',
        left: '165px',
        top: '266px',
        fontSize: '20px',
        fontWeight: 300,
        textAlign: 'left',
        color: '#000',
      },
    },
  },
];

const FAQS = [
  {
    topic: "기타",
    questions: [
      "[기타] 대량 구매를 하고 싶어요.",
    ]
  }
];

const searchStyle = {
  position: 'absolute',
  width: '386px',
  left: '886px',
  top: '263px',
  fontSize: '16px',
  fontWeight: '500',
  textAlign: 'center',
  color: 'rgba(0,0,0,0.6)'
};

const borderBoxStyle = {
  width: '1120px',
  height: '93px',
  position: 'absolute',
  left: '164px',
  top: '352px',
  borderRadius: '5px',
  background: 'transparent',
  borderWidth: '1px',
  borderColor: 'black',
  borderStyle: 'solid',
  padding: '30px 30px',  // Padding 추가
  boxSizing: 'border-box'  // Padding으로 인한 크기 증가 방지
};

const FlexContainer2 = ({ children }) => (
  <div style={{
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '60px',
    width: '100%',  // 너비를 100%로 설정하여 부모의 padding을 적용
  }}>
    {children}
  </div>
);

const commonStyle2 = {
  flexGrow: 0,
  flexShrink: 0,
  fontSize: '19px',
  fontWeight: '700',
  textAlign: 'left',
  color: '#000'
};

function OthersFaq() {

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

  const navigate = useNavigate();

  React.useEffect(() => {
    navigate("/OthersFaq");
  }, [navigate]);

  return (
    <div
      style={{
        width: '1440px',
        height: '1024px',
        position: 'relative',
        overflow: 'hidden',
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      }}
    >

      <ul>
				<Link to="/Faq"><li>FAQ</li></Link>
				<Link to="/VoiceOfCustomer"><li>고객의소리</li></Link>
        <Link to="/NoticeBoard"><li>공지사항</li></Link>
        <Link to="/Waytocome"><li>오시는 길</li></Link>
			</ul>

      {TEXT_ITEMS.map((item, index) => (
        <p
          key={index}
          style={{
            ...COMMON_TEXT_STYLE,
            ...item
          }}
        >
          {item.text}
        </p>
      ))}

      {SVG_COMPONENT}
      {ELEMENTS.map((item, index) => {
        const ElementType = item.type;
        return <ElementType key={index} {...item.props}>{item.content}</ElementType>;
      })}

      {FAQS.map((faq, faqIndex) => (
        <div key={faqIndex}>
          {faq.questions.map((question, questionIndex) => (
            <div key={questionIndex}>
              <p
                onClick={() => handleQuestionClick(faqIndex * faq.questions.length + questionIndex)}
                style={{
                  position: 'absolute',
                  left: '179px',
                  top: `${578 + 65 * (faqIndex * faq.questions.length + questionIndex)}px`,
                  fontSize: '17px',
                  textAlign: 'left',
                  color: 'rgba(0,0,0,0.75)',
                }}
              >
                {faq.topic}
              </p>
              <p
                onClick={() => handleQuestionClick(faqIndex * faq.questions.length + questionIndex)}
                style={{
                  position: 'absolute',
                  left: '554px',
                  top: `${578 + 65 * (faqIndex * faq.questions.length + questionIndex)}px`,
                  fontSize: '17px',
                  textAlign: 'left',
                  color: 'rgba(0,0,0,0.75)',
                }}
              >
                {question}
              </p>

              {/* 선택된 FAQ 항목의 상세 내용 표시 */}
              {selectedQuestionIndex === faqIndex * faq.questions.length + questionIndex && (
                <div
                  style={{
                    position: 'absolute',
                    left: '554px',
                    top: `${620 + 65 * (faqIndex * faq.questions.length + questionIndex)}px`,
                    fontSize: '15px',
                    textAlign: 'left',
                    color: 'rgba(0,0,0,0.75)',
                  }}
                >
                  {/* 여기에 상세 내용을 추가 - 추후 DB와 연동할 계획 */}
                  <br/>
                  <p>고객센터로 문의하여 주시기 바랍니다.<br/><br/>
                  [대량구매 문의] 02-0000-0000<br/>
                  [고객센터 운영시간] 월~금 AM 9:00 ~ PM 6:00 (토,일,공휴일 휴무) 
                  </p>
                </div>
              )}

              {/* 구분선 추가 */}
              <div
                className="border-top position-absolute"
                style={{
                  left: '164px',
                  top: `${620 + 65 * (faqIndex * faq.questions.length + questionIndex)}px`,
                  width: '1116px',
                  opacity: 0.7,
                }}
              ></div>
            </div>
          ))}
        </div>
      ))}

      <div className="input-group mb-3" style={searchStyle}>
        <button className="btn btn-outline-secondary" type="button" id="button-addon1">Search</button>
        <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
      </div>
      <div style={borderBoxStyle}>
        <FlexContainer2>
            <Link to="/EventPromotionFaq"><p style={commonStyle2}>이벤트/프로모션</p></Link>
            <p style={commonStyle2}>|</p>
            <Link to="/MembershipFaq"><p style={commonStyle2}>회원</p></Link>
            <p style={commonStyle2}>|</p>
            <Link to="/PaymentRefundFaq"><p style={commonStyle2}>결제/환불</p></Link>
            <p style={commonStyle2}>|</p>
            <Link to="/StoreFaq"><p style={commonStyle2}>매장</p></Link>
            <p style={commonStyle2}>|</p>
            <Link to="/DeliveryFaq"><p style={commonStyle2}>딜리버리</p></Link>
            <p style={commonStyle2}>|</p>
            <Link to="/OthersFaq"><p style={commonStyle2}>기타</p></Link>
          </FlexContainer2>
      </div>

    </div>
  );
}
  
  export default OthersFaq;