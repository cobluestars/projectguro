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
    position: 'relative'
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
    top: 268,
  }
};

function Waytocome() {
  
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate("/Waytocome");
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
          <h1 style={styles.heading}>오시는 길</h1>
          <div style={{ ...styles.horizontalLine, ...styles.lineDark }}></div>
          <img style={styles.grouping} src="/assets/오시는길.png" alt="waytocome" />

        </div>

        </div>
    );
  }
  
  export default Waytocome;