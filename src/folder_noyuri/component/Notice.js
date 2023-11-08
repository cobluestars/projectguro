import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Notice = () => {
   const [index, setIndex] = useState(0);
  const [noticeList, setNoticeList] = useState([]);
  const [notice, setNotice] = useState(null);
   
   const navigate = useNavigate();

   useEffect(() => {
    async function getNotice() {
      try {
        const result = await axios.get(`http://localhost:8080/kokee/notice/list`);
        setNoticeList(result.data);
        setNotice(result.data[index].title)
      } catch (error) {
        console.log(error);
      }
    }
    getNotice();
   }, []);

  function prevNotice() {
    if (index > 0) {
      setIndex(index - 1)
      setNotice(noticeList[index-1].title)
    }
   }

   function nextNotice() {
    if (index < noticeList.length - 1) {
      setIndex(index + 1);
      setNotice(noticeList[index+1].title)
    }
   }

   return (
      <section className="sec_notice">
         <div className="inner">
            <div className="notice">
               <div className="notice_item notice_item_A">
                  <h3>공지사항</h3>
                  {notice ? (
                     <p>
                        {notice}
                     </p>
                  ) : (
                     <p>등록된 공지사항이 없습니다.</p>
                  )}
               </div>
               <div className="notice_item notice_item_B">
                  <div
                     className="notice_shape notice_prev"
                     onClick={() => prevNotice()}
                  >
                     <i className="fa-solid fa-chevron-left" />
                  </div>
                  <div
                     className="notice_shape notice_next"
                     onClick={() => nextNotice()}
                  >
                     <i className="fa-solid fa-chevron-right" />
                  </div>
                  <div
                     className="notice_plus"
                     onClick={() => navigate("/noticeboard")}
                  >
                     <i className="fa-solid fa-plus" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Notice;