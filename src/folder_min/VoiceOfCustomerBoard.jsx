import { Link, Navigate, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const noticebd = {
  position: "relative",
  top: "10%",
};

const noticetitle = {
  fontSize: "30px",
  fontWeight: 600,
};

const noticesubtitle = {
  fontSize: "20px",
};

const notices = [
  {
    no: 8,
    title: "벵쇼 재출시해 주세요. 현기증 난단 말이에요.",
    writer: "kokeetea1",
    date: "2023-05-10",
    text: "재출시하세요.",
  },
  {
    no: 7,
    title: "벵쇼 재출시해 주세요. 현기증 난단 말이에요.",
    writer: "kokeetea1",
    date: "2023-05-10",
    text: "재출시하세요.",
  },
  {
    no: 6,
    title: "벵쇼 재출시해 주세요. 현기증 난단 말이에요.",
    writer: "kokeetea1",
    date: "2023-05-10",
    text: "재출시하세요.",
  },
  {
    no: 5,
    title: "벵쇼 재출시해 주세요. 현기증 난단 말이에요.",
    writer: "kokeetea1",
    date: "2023-05-10",
    text: "재출시하세요 제발",
  },
  {
    no: 4,
    title: "벵쇼 재출시해 주세요. 현기증 난단 말이에요.",
    writer: "kokeetea1",
    date: "2023-05-10",
    text: "재출시하세요.",
  },
  {
    no: 3,
    title: "벵쇼 재출시해 주세요. 현기증 난단 말이에요.",
    writer: "kokeetea1",
    date: "2023-05-10",
    text: "재출시하세요.",
  },
  {
    no: 2,
    title: "벵쇼 재출시해 주세요. 현기증 난단 말이에요.",
    writer: "kokeetea1",
    date: "2023-05-10",
    text: "재출시하세요.",
  },
  {
    no: 1,
    title: "팝업스토어 한정판 코키티 마스코트 인형",
    writer: "kokeetea2",
    date: "2023-05-03",
    text: "다시 구할수 없나요?",
  },
];

const noticeNoStyle = {
  textAlign: "center",
  width: 100
};

const noticeTitleStyle = {
  width: "500px",
  textAlign: "center"
};

const noticeHeaderStyle = {
  textAlign: "center",
  margin: "20px 0",
};

const noticeListStyle = {
  display: "flex",
  flexDirection: "column",
  padding: "0 30px",
};

const searchContainerStyle = {
  display: 'flex',
  width: 500,
  margin: '10px auto',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
};

const page = {
  position: "relative",
  left: "44%",
  margin: '10px auto',
};

const notice_detail = {
  position: "relative",
};

const buttonStyle = {
  padding: "10px 15px",
  borderRadius: "4px",
  border: "1px solid grey",
  cursor: "pointer",
  backgroundColor: "white",
  color: "grey",
};

const pagebuttonStyle = {
  marginTop: "10px",
  padding: "10px 15px",
  borderRadius: "4px",
  border: "1px solid white",
  cursor: "pointer",
  backgroundColor: "white",
  color: "grey",
};

const inputStyle = {
  padding: "10px",
  borderRadius: "4px",
  border: "1px solid #ced4da",
  width: "80%",
};

const VoiceOfCustomerBoard = () => {

  const [resultData, setResultData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);  // 현재 페이지
  const noticesPerPage = 8;  // 한 페이지에 표시될 공지의 개수
  const indexOfLastNotice = currentPage * noticesPerPage;  // 현재 페이지의 마지막 공지의 인덱스
  const indexOfFirstNotice = indexOfLastNotice - noticesPerPage;  // 현재 페이지의 첫 번째 공지의 인덱스
  const currentNotices = notices.slice(indexOfFirstNotice, indexOfLastNotice);  // 현재 페이지에 표시될 공지 리스트
  
  const renderBlankRows = () => {
    const blankRows = [];
    for (let i = currentNotices.length; i < noticesPerPage; i++) {
      blankRows.push(
        <tr key={'blank-' + i}>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
      );
    }
    return blankRows;
  };

  const [selectedNotice, setSelectedNotice] = React.useState(null);

  const handleNoticeClick = (index) => {
    if (selectedNotice === index) {
      setSelectedNotice(null);
    } else {
      setSelectedNotice(index);
    }
  };

  useEffect(() => {
    async function getBoard() {
      try {
        const result = await axios.get("http://localhost:8080/kokee/feed_back/list")
        console.log(result.data);
        setResultData(result.data);
      } catch (error) {
        alert("네트워크 오류가 있어요.")
      }
    }
    getBoard();
  }, [])

  return (
    <div>
      <div style={noticebd}>
        <div style={noticeHeaderStyle}>
          <p className="title" style={noticetitle}>
            고객의 소리 리스트
          </p>
          <p className="subtitle" style={noticesubtitle}>
            관리자 전용 페이지입니다.
          </p>
        </div>
        <div style={noticeListStyle}>
          <table className="table">
            <thead>
                <tr>
                  <td style={noticeNoStyle}>
                    no
                  </td>
                  <td style={noticeTitleStyle}>
                    title
                  </td>
                  <td>writer</td>
                  <td>date</td>
                </tr>
            </thead>
            <tbody>
              {resultData.length > 0 ? resultData.map((notice, index) => (
                <>
                  <tr
                    key={index}
                    onClick={() => handleNoticeClick(index)}
                  >
                    <th scope="row" className="notice-no" style={noticeNoStyle}>
                      {resultData.length-index}
                    </th>
                    <td className="notice-title" style={noticeTitleStyle}>
                      {notice.title}
                    </td>
                    <td className="notice-writer">{notice.email}</td>
                    <td className="notice-date">{moment(notice.date).format("YYYY-MM-DD HH:mm")}</td>
                  </tr>
                  {selectedNotice === index && 
                    <tr>
                      <td className="notice-no"></td>
                      <td colSpan="2">
                        <hr />
                        <NoticeDetail notice={notice} resultData={resultData} setResultData={setResultData}/>
                        <hr />
                      </td>
                      <td></td>
                      <td></td>
                    </tr>
                  }
                </>
              )) : "등록된 문의가 없습니다"}
              {/* 비교 */}
              {/* {currentNotices.map((notice, index) => (
                <>
                  <tr
                    key={index}
                    onClick={() => handleNoticeClick(index)}
                  >
                    <th scope="row" className="notice-no" style={noticeNoStyle}>
                      {notice.no}
                    </th>
                    <td className="notice-title" style={noticeTitleStyle}>
                      {notice.title}
                    </td>
                    <td className="notice-writer">{notice.writer}</td>
                    <td className="notice-date">{notice.date}</td>
                  </tr>
                  {selectedNotice === index && 
                    <tr>
                      <td className="notice-no"></td>
                      <td colSpan="2">
                        <hr />
                        <NoticeDetail notice={notice} />
                        <hr />
                      </td>
                      <td></td>
                      <td></td>
                    </tr>
                  }
                </>
              ))} */}
            </tbody>
          </table>
          {renderBlankRows()}
        </div>
      </div>
  
      {/* <div style={searchContainerStyle}>
          <input type="text" style={inputStyle} placeholder="Search..." />
          <button style={buttonStyle}>Search</button>
      </div> */}

      <div style={page}>
        <button style={pagebuttonStyle} onClick={() => setCurrentPage(1)}>&laquo;</button>
        <button style={pagebuttonStyle} onClick={() => setCurrentPage(1)}>1</button>
        <button style={pagebuttonStyle} onClick={() => setCurrentPage(Math.ceil(notices.length / noticesPerPage))}>&raquo;</button>
      </div>
    </div>
    
  );
};

const NoticeDetail = ({ notice, resultData, setResultData }) => {
  const navigate = useNavigate();

  async function deleteBoard(id) {
    try {
      await axios.delete(`http://localhost:8080/kokee/feed_back/delete/${id}`)
      navigate("/VoiceOfCustomer");
    } catch (error) {
      alert("네트워크에 오류가 있습니다.")
    }
  }

  return (
    <tr>
      <td colSpan="4">
        <div style={notice_detail}>
          {/*<h5>{notice.title}</h5>*/}
          <br />
          <p>{notice.text}</p>
          <br />
          </div>
       </td>
       <td>
          <button
             type="button"
             className="btn btn-dark"
             style={{ marginRight: "5px", marginTop: "15px" }}
             onClick={() => {deleteBoard(notice.id)}}   
          >
            삭제
          </button>
       </td>
    </tr>
  );
};

export default VoiceOfCustomerBoard;
