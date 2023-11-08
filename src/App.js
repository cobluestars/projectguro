import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import ProductList from "./components/Product_set/list";
import DetailPage from "./components/Product_set/detailPage";
import Basket from "./components/basketPage/basket";
import Buy from "./components/buy/buy";
import FranchiseInquiryPage from "./components/FranchiseInquiryPage";
import HomePage from "./folder_noyuri/pages/HomePage";
import ListPage from "./folder_noyuri/pages/ListPage";
import Form from "./folder_noyuri/pages/Form";
import Editprofile from "./folder_kim/Editprofile";
import Mypage from "./folder_kim/Mypage";
import OrderList from "./folder_kim/OrderList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Faq from "./folder_min/Faq";
import VoiceOfCustomer from "./folder_min/VoiceOfCustomer";
import VoiceOfCustomerBoard from "./folder_min/VoiceOfCustomerBoard";

import NoticeBoard from "./folder_min/NoticeBoard";
import EventPromotionFaq from "./folder_min/FaqList/EventPromotionFaq";
import MembershipFaq from "./folder_min/FaqList/MembershipFaq";
import PaymentRefundFaq from "./folder_min/FaqList/PaymentRefundFaq";
import StoreFaq from "./folder_min/FaqList/StoreFaq";
import DeliveryFaq from "./folder_min/FaqList/DeliveryFaq";
import OthersFaq from "./folder_min/FaqList/OthersFaq";
import Waytocome from "./folder_min/Waytocome";

import NoticeBoardWrite from "./folder_min/NoticeBoardWrite";
import NoticeBoardModify from "./folder_min/NoticeBoardModify";
import { useState } from "react";

function App() {
  const [isLogined, setIsLogined] = useState(false);

  return (
    <BrowserRouter>
      <Header
        isLogined={isLogined}
        setIsLogined={setIsLogined}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/ListPage" element={<ListPage />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/waytocome" element={<Waytocome />} />
        <Route
          path="/FranchiseInquiryPage"
          element={<FranchiseInquiryPage />}
        />
        <Route path="/mypage" element={<Mypage isLogined={isLogined} />} />
        <Route path="/Editprofile" element={<Editprofile />} />
        <Route path="/orderList" element={<OrderList />} />
        <Route path="/Basket" element={<Basket />} />
        <Route
          path="/detailPage"
          element={<DetailPage isLogined={isLogined} />}
        />
        <Route path="/buy" element={<Buy />} />
        <Route path="/NoticeBoard" element={<NoticeBoard />} />
        <Route path="/NoticeBoardWrite" element={<NoticeBoardWrite />} />
        <Route path="/NoticeBoardModify" element={<NoticeBoardModify />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/VoiceOfCustomer" element={<VoiceOfCustomer />} />
        <Route
          path="/VoiceOfCustomerBoard"
          element={<VoiceOfCustomerBoard />}
        />
        <Route path="/EventPromotionFaq" element={<EventPromotionFaq />} />
        <Route path="/MembershipFaq" element={<MembershipFaq />} />
        <Route path="/PaymentRefundFaq" element={<PaymentRefundFaq />} />
        <Route path="/StoreFaq" element={<StoreFaq />} />
        <Route path="/DeliveryFaq" element={<DeliveryFaq />} />
        <Route path="/OthersFaq" element={<OthersFaq />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
