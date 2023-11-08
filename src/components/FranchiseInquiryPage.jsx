import { useNavigate } from "react-router-dom";
import "./FranchiseInquiryPage.css";

function FranchiseInquiryPage() {

  const navigate = useNavigate();

  function toInquiry() {
    alert("연락주셔서 감사합니다. 곧 연락드릴께요!")
    navigate("/");
  }

  return (
    <div className="outer">
      <div className="inner">
        <div className="titleFranchise">
          <h1>가맹 문의</h1>
        </div>
        <div className="introduction">
          <p>
            코키티 가맹 문의는{" "}
            <span className="emailContact">'1:1 맞춤 상담'</span>으로 진행됩니다.
          </p>
          <p>가맹 상담부터 오픈, 사후 관리까지 토탈 서비스를 지원합니다.</p>
        </div>
      </div>
      <div className="formFranchise">
        <form>
          <div className="form-group">
            <label htmlFor="name" className="f-label">
              이름
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="이름을 입력해주세요."
              className="f-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact" className="f-label">
              연락처
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              required
              placeholder="연락처를 입력해주세요."
              className="f-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="location" className="f-label">
              희망 지역
            </label>
            <input
              type="text"
              id="location"
              name="location"
              required
              placeholder="희망 지역을 입력해주세요."
              className="f-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="f-label">
              문의 내용
            </label>
            <input
              type="text"
              id="message"
              name="message"
              required
              placeholder="문의 내용을 입력해주세요."
              className="fc-input"
            />
          </div>

          <div className="submitbtn">
            <button onClick={toInquiry} type="submit">문의하기</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FranchiseInquiryPage;
