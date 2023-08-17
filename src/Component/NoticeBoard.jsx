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
  {
    type: 'p',
    props: {
      style: {
        position: 'absolute',
        left: '590px',
        top: '925px',
        fontSize: '17px',
        textAlign: 'left',
      },
    },
  },
];

const noticebd = {
  position: 'relative',
  top: '10%'
}

const noticetitle = {
  fontSize: '30px',
  fontWeight: 600
}

const noticesubtitle = {
  fontSize: '20px'
}

const notices = [
      { no: 1, title: '4월 베스트 리뷰 이벤트 당첨자 발표', writer: '담당자', date: '2023-05-10', views: 354 },
      { no: 2, title: '팝업스토어 인스타그램 이벤트 발표', writer: '담당자', date: '2023-05-03', views: 242 },
      { no: 3, title: '코키티 X 현대백화점 팝업스토어 안내', writer: '담당자', date: '2023-04-25', views: 256 },
      { no: 4, title: '3월 베스트 리뷰 이벤트 당첨자 발표', writer: '담당자', date: '2023-04-10', views: 467 },
      { no: 5, title: '2월 베스트 리뷰 이벤트 당첨자 발표', writer: '담당자', date: '2023-03-10', views: 554 },
      { no: 6, title: '코키티 신메뉴의 이름을 지어주세요', writer: '담당자', date: '2023-03-03', views: 768 },
      { no: 7, title: '단종 메뉴 안내', writer: '담당자', date: '2023-02-25', views: 656 },
      { no: 8, title: '1월 베스트 리뷰 이벤트 당첨자 발표', writer: '담당자', date: '2023-02-10', views: 667 },
  ];

const noticeTitleStyle = {
  width: '500px'
}

const noticeHeaderStyle = {
    textAlign: 'center',
    margin: '20px 0',
};

const noticeListStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 30px',
};

const noticeItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid black',
    padding: '10px 0',
};

const search = {
    width: 400,
    margin: 'auto'
};

const page = {
    position: 'absolute',
    left: '44%'
};

const NoticeBoard = () => {  

  const navigate = useNavigate();

  React.useEffect(() => {
    navigate("/NoticeBoard");
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

    <div style={noticebd}>
    <div style={noticeHeaderStyle}>
          <p className="title" style={noticetitle}>Notice</p>
          <p className="subtitle" style={noticesubtitle}>코키티에서 고객에게 전하는 공지사항</p>
    </div>
    <div style={noticeListStyle}>
        <p className="list-header">No</p>
        {notices.map((notice, index) => (
            // <div style={noticeItemStyle} key={index}>
            //     <p className="notice-no">{notice.no}</p>
            //     <p className="notice-title">{notice.title}</p>
            //     <p className="notice-writer">{notice.writer}</p>
            //     <p className="notice-date">{notice.date}</p>
            //     <p className="notice-views">{notice.views}</p>
            // </div>
            <table class="table">
            <tbody>
              <tr>
                <th scope="row" className="notice-no">{notice.no}</th>
                <td className="notice-title" style={noticeTitleStyle}>{notice.title}</td>
                <td className="notice-writer">{notice.writer}</td>
                <td className="notice-date">{notice.date}</td>
                <td className="notice-views">{notice.views}</td>
              </tr>
            </tbody>
          </table>
        ))}
    </div>

        <div class="input-group mb-3" style={search}>
          <button class="btn btn-outline-secondary" type="button" id="button-addon1">Search</button>
          <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
        </div>

        <nav aria-label="Page navigation example" style={page}>
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      
    </div>
    </div>
  );
}

export default NoticeBoard;