import React from 'react';
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
];

  const styles = {
    container: {
      position: 'relative',
      top: -100
    },
    heading: {
      position: 'absolute',
      left: 190,
      top: 205,
      fontSize: 35,
      fontWeight: 600
    },
    subtitle: {
      position: 'absolute',
      left: 190,
      top: 268,
      fontSize: 20
    },
    grouping: {
      position: 'absolute',
      left: 190,
      top: 330
    },
    horizontalLine: {
      position: 'absolute',
      left: 189,
      width: 1116,
      height: 1
    },
    lineDark: {
      backgroundColor: 'rgba(0,0,0,0.8)',
      top: 316,
    },
    inputGroup: {
      position: 'relative',
      left: 265
    },
    idGroup: {
      top: 339
    },
    emailGroup: {
      top: 403
    },
    titleGroup: {
      top: 467
    },
    contentGroup: {
      top: 684
    },
    labelid: {
      fontSize: 17,
      color: 'rgba(0,0,0,0.5)'
    },
    labelemail: {
      fontSize: 17,
      color: 'rgba(0,0,0,0.5)'
    },
    labeltitle: {
      fontSize: 17,
      color: 'rgba(0,0,0,0.5)'
    },
    labeltext: {
      position: 'absolute',
      fontSize: 17,
      color: 'rgba(0,0,0,0.5)'
    },
    input: {
      border: '1px solid rgba(0,0,0,0.3)',
      backgroundColor: 'transparent',
      position: 'absolute',
      left: '160px'
    },
    shortInput: {
      width: 211,
      height: 36
    },
    longInput: {
      width: 559,
      height: 36
    },
    textarea: {
      width: 866,
      height: 325
    },
    submitButton: {
      position: 'absolute',
      left: 662,
      top: 903,
      width: 170,
      height: 38
    }
  };

function VoiceOfCustomer() {
  
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate("/VoiceOfCustomer");
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
          
        <div style={styles.container}>
          <h1 style={styles.heading}>고객의 소리</h1>
          <p style={styles.subtitle}>코키티에게 의견이나 칭찬을 남겨주세요.</p>

          <div style={{ ...styles.horizontalLine, ...styles.lineDark }}></div>

          <div style={styles.grouping}>
          <div style={styles.idGroup}>
            <label htmlFor="userId" style={styles.labelid}>아이디</label>
            <input 
              type="text" 
              id="userId" 
              style={{ ...styles.input, ...styles.shortInput }} 
              placeholder="아이디를 입력하세요." 
            />
          </div>
          <hr/>
          <div style={styles.emailGroup}>
            <label htmlFor="userEmail" style={styles.labelemail}>이메일</label>
            <input 
              type="email" 
              id="userEmail" 
              style={{ ...styles.input, ...styles.shortInput }} 
              placeholder="이메일을 입력하세요." 
            />
          </div>
          <hr/>
          <div style={styles.titleGroup}>
            <label htmlFor="title" style={styles.labeltitle}>제목</label>
            <input 
              type="text" 
              id="title" 
              style={{ ...styles.input, ...styles.longInput }} 
              placeholder="제목을 입력하세요." 
            />
          </div>
          <hr/>
          <div style={styles.contentGroup}>
            <label htmlFor="content" style={styles.labeltext}>내용</label>
            <textarea 
              id="content" 
              style={{ ...styles.input, ...styles.textarea }} 
              placeholder="내용을 입력하세요."
            ></textarea>
          </div>
        </div>
        <button style={styles.submitButton} className="btn btn-dark">등록</button>

        </div>

        </div>
    );
  }
  
  export default VoiceOfCustomer;