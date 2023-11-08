import axios from "axios";
import "./Editprofile.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Editprofile() {
  const [userId, setUserId] = useState("");
  const [nowPassword, setNowPassword] = useState("");
  const [newPassword1, setNewPassword1] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
  const [realName, setRealName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [stringToPass, setStringToPass] = useState(true);
  const navigate = useNavigate();

  const phoneInput = (value) => {
    const formattedValue = value
      .replace(/[^0-9]/g, "")
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/, "$1-$2-$3")
      .replace(/(\-{1,2})$/, "");
    setUserPhone(formattedValue);
  };

  useEffect(() => {
    async function getMember() {
      try {
        const result = await axios.get(
          `http://localhost:8080/kokee/get_member/${localStorage.getItem(
            "email"
          )}`
        );
        console.log(result);
        setUserId(result.data.username);
        setUserEmail(result.data.email);
        setNowPassword(result.data.password);
        setRealName(result.data.realName);
        setUserPhone(result.data.phoneNumber);
        setIsChecked(true);
      } catch (error) {
        alert("네트워크 오류가 있어요.");
      }
    }
    getMember();
  }, []);

  async function clickUpd() {
    if (newPassword1 !== newPassword2) {
      alert("현재 비밀번호와 새로운 비밀번호가 일치하지 않습니다.");
    } else if (newPassword1 === "" || newPassword2 === "") {
      alert("비밀번호란은 비어 있으면 안됩니다.");
    } else {
      try {
        await axios.put("http://localhost:8080/kokee/update_member", {
          password: newPassword1,
          realname: realName,
          phone: userPhone,
          email: userEmail,
        });
        alert("수정 완료!");
        navigate("/");
      } catch (error) {
        alert("네트워크 오류가 있어요.");
      }
    }
  }

  async function clickDel() {
    if (
      window.confirm(
        "탈퇴하시면, 모든 정보(회원정보, 장바구니, 주문내역 등)가 사라집니다.\n탈퇴하시겠습니까?"
      )
    ) {
      await axios.delete(
        `http://localhost:8080/kokee/delete_member/${localStorage.getItem(
          "email"
        )}`
      );
      localStorage.clear();
      alert("탈퇴가 완료되었습니다.");
      navigate("/");
      window.location.reload();
    } else {
      alert("취소합니다.");
    }
  }

  function strToPw() {
    setStringToPass(!stringToPass);
  }

  return (
    <>
      {isChecked && (
        <>
          <hr />
          <h2 className="personal-info">개인 정보 수정</h2>
          <div className="inner">
            {/* 개인 정보 수정 테이블 */}
            <div className="basicTable">
              <form className="basicForm">
                <div className="basicInfo">
                  <span id="title">기본 정보</span>
                  <span className="dangerStar">*는 필수 입력 정보입니다.</span>
                </div>
                <table className="mainTable">
                  <thead />
                  <tbody>
                    <tr>
                      <td id="head">
                        아이디
                        <span className="dangerStar" />
                      </td>
                      <td>
                        <span>{userId} (변경불가)</span>
                      </td>
                    </tr>
                    <tr>
                      <td id="head">
                        이메일
                        <span className="dangerStar" />
                      </td>
                      <td>
                        <span>{userEmail} (변경불가)</span>
                      </td>
                    </tr>
                    <tr>
                      <td id="head">
                        현재 비밀번호
                        <span className="dangerStar">*</span>
                      </td>
                      <td>
                        {stringToPass ? (
                          <input
                            className="bodyInput"
                            type="password"
                            value={nowPassword}
                          />
                        ) : (
                          <input
                            className="bodyInput"
                            type="text"
                            value={nowPassword}
                          />
                        )}
                        <span style={{ cursor: "pointer" }} onClick={strToPw}>
                          [확인]
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td id="head">
                        새 비밀번호
                        <span className="dangerStar">*</span>
                      </td>
                      <td>
                        <input
                          className="bodyInput"
                          type="password"
                          onChange={(e) => setNewPassword1(e.target.value)}
                          value={newPassword1}
                        />
                        <span id="eng">
                          (영문 대소문자/숫자/특수문자 중 2가지 이상 조합,
                          10~16자)
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td id="head">
                        새 비밀번호 확인
                        <span className="dangerStar">*</span>
                      </td>
                      <td>
                        <input
                          className="bodyInput"
                          type="password"
                          onChange={(e) => setNewPassword2(e.target.value)}
                          value={newPassword2}
                        />
                        <span id="eng">
                          (영문 대소문자/숫자/특수문자 중 2가지 이상 조합,
                          10~16자)
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td id="head">
                        이름
                        <span className="dangerStar">*</span>
                      </td>
                      <td>
                        <input
                          className="bodyInput"
                          type="text"
                          value={realName}
                          onChange={(e) => setRealName(e.target.value)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td id="head">
                        휴대전화
                        <span className="dangerStar">*</span>
                      </td>
                      <td>
                        <input
                          maxlength="13"
                          className="bodyInput"
                          type="text"
                          value={userPhone}
                          onChange={(e) => phoneInput(e.target.value)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td id="head">
                        SNS 수신 여부
                        <span className="dangerStar">*</span>
                      </td>
                      <td>
                        <div className="radioAll">
                          <input
                            id="check1"
                            type="radio"
                            name="sns"
                            checked={true}
                          />
                          <label htmlFor="check1" className="radio">
                            수신함
                          </label>{" "}
                          <input id="check2" type="radio" name="sns" />
                          <label htmlFor="check2" className="radio">
                            수신안함
                          </label>
                        </div>
                        <span className="dangerStar">
                          카페에서 제공되는 이벤트 소식을 SMS로 받을 수
                          있습니다.
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td id="head">
                        이메일 수신 여부
                        <span className="dangerStar">*</span>
                      </td>
                      <td>
                        <div className="radioAll">
                          <input
                            id="emailCheck1"
                            type="radio"
                            name="email"
                            checked={true}
                          />
                          <label htmlFor="emailCheck1" className="radio">
                            수신함
                          </label>{" "}
                          <input id="emailCheck2" type="radio" name="email" />
                          <label htmlFor="emailCheck2" className="radio">
                            수신안함
                          </label>
                        </div>
                        <span className="dangerStar">
                          카페에서 제공되는 이벤트 소식을 이메일로 받을 수
                          있습니다.
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="custom-container">
                  <div className="custom-center">
                    <button
                      onClick={clickUpd}
                      type="button"
                      className="custom-button1"
                    >
                      수정
                    </button>
                    <Link
                      to={"/"}
                      type="button"
                      className="cancel custom-button2"
                    >
                      취소
                    </Link>
                    <button
                      onClick={clickDel}
                      type="button"
                      className="custom-outline-button"
                    >
                      회원 탈퇴
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="test" />
        </>
      )}
    </>
  );
}

export default Editprofile;
