import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const body = {
  height: "100vh",
  margin: "0 auto",
}

const styles = {
  container: {
    top: "-10vh",
    width: 1000,
    margin: "0 auto"
  },
  heading: {
    position: "absolute",
    top: 205,
    fontSize: 35,
    fontWeight: 600,
  },
  subtitle: {
    position: "absolute",
    top: 268,
    fontSize: 20,
  },
  grouping: {
    position: "absolute",
    top: 330,
  },
  horizontalLine: {
    position: "absolute",
    width: 1116,
    height: 1,
  },
  lineDark: {
    backgroundColor: "rgba(0,0,0,0.8)",
    top: 316,
  },

  inputGroup: {
    position: "relative",
    display: "flex",        // flexbox 레이아웃 사용
    alignItems: "center",
  },

  labeltitle: {
    fontSize: 17,
    width: 40,
    color: "rgba(0,0,0,0.5)",
    marginRight: 10,      // label과 input 사이의 간격
  },

  labeltext: {
    fontSize: 17,
    width: 40,
    color: "rgba(0,0,0,0.5)",
    marginRight: 10,      // label과 textarea 사이의 간격
  },

  input: {
    border: "1px solid rgba(0,0,0,0.3)",
    backgroundColor: "transparent",
    fontWeight: 700,
    verticalAlign: "top",
  },

  titleGroup: {
    top: 467,
  },
  contentGroup: {
    top: 684,
  },
  // shortInput: {
  //   width: 211,
  //   height: 36,
  // },
  longInput: {
    width: 559,
    height: 36,
    fontSize: 17
  },
  textarea: {
    width: 866,
    height: 325,
    fontSize: 17
  },
  submitButton: {
    position: "relative",
    margin: "0 31%",
    top: 663,
    width: 160,
    height: 38,
  },
  cancelButton: {
    position: "relative",
    margin: "0 49%",
    top: 625,
    width: 160,
    height: 38,
  },
};

function NoticeBoardWrite() {

  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  async function addNotice() {
    try {
      await axios.post("http://localhost:8080/kokee/notice/add", {
        subject: subject,
        content: content,
        email: localStorage.getItem("email")
      })
      navigate(-1);
    } catch (error) {
      console.log(error)
    }  
  }

  return (
    <div style={body} >

      {/* {TEXT_ITEMS.map((item, index) => (
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
        })} */}

      <section className="sec_body_voc">
        <div style={styles.container}>
        <h1 style={styles.heading}>공지사항 등록</h1>
        <p style={styles.subtitle}>관리자 전용 페이지입니다. 공지사항을 등록할 수 있습니다.</p>

          <div style={{ ...styles.horizontalLine, ...styles.lineDark }}></div>

          <div style={styles.grouping}>
            <br />
            <div style={styles.titleGroup}>
              <label htmlFor="title" style={styles.labeltitle}>
                제목
              </label>
              <input
                type="text"
                id="title"
                style={{ ...styles.input, ...styles.longInput }}
                placeholder="제목을 입력하세요."
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
              />
          </div>
            <br />
            <hr/>
            <br />
          <div style={styles.contentGroup}>
              <label htmlFor="content" style={styles.labeltext}>
                내용
              </label>
              <textarea
                id="content"
                style={{ ...styles.input, ...styles.textarea }}
                placeholder="내용을 입력하세요."
                onChange={(e) => setContent(e.target.value)}
                value={content}
              ></textarea>
            </div>
          </div>
          <button onClick={addNotice} style={styles.submitButton}>
            등록
          </button>
          <button 
            onClick={() => navigate(-1)}
            style={styles.cancelButton}>취소
          </button>
        </div>
      </section>
    </div>
  );
}

export default NoticeBoardWrite;