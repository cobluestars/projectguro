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
    fontWeight: 500
  },
  subtitle2: {
    position: "absolute",
    top: 296,
    fontSize: 16,
  },
  grouping: {
    position: "absolute",
    top: 330,
  },
  horizontalLine: {
    position: "absolute",
    width: 1000,
    height: 1,
  },
  lineDark: {
    backgroundColor: "rgba(0,0,0,0.8)",
    top: 325,
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
  boardButton: {
    position: "relative",
    margin: "0 49%",
    top: 625,
    width: 160,
    height: 38,
  },
};

function VoiceOfCustomer() {

  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

	const isAdmin = localStorage.getItem("email") === "admin@admin.com";

  function moveBoard() {
    if (localStorage.getItem("email") === "admin@admin.com") {
      navigate("/VoiceOfCustomerBoard")
    } else {
      alert("관리자만 접근 가능합니다.")
    }
  }

  async function addBoard() {
    try {
      await axios.post("http://localhost:8080/kokee/feed_back/add", {
        subject: subject,
        content: content,
        email: localStorage.getItem("email")
      })
      navigate("/")
    } catch (error) {
      alert("네트워크에 오류가 있어요.");
    }
  }

  return (
    <div style={body} >

      <section className="sec_body_voc">
        <div style={styles.container}>
          <h1 style={styles.heading}>고객의 소리</h1>
          <p style={styles.subtitle}>코키티에게 의견이나 칭찬을 남겨주세요.</p>
          <p style={styles.subtitle2}>(작성해주신 내역 및 답변은 이메일로 받으실 수 있습니다.)</p>

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
          <button style={styles.submitButton} onClick={addBoard}>
            등록
          </button>
          {isAdmin && (
          <button style={styles.boardButton} onClick={moveBoard}>목록
          {/* <Link to="/VoiceOfCustomerBoard">목록</Link> */}
          </button>
          )}
        </div>
      </section>
    </div>
  );
}

export default VoiceOfCustomer;
