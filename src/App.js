import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Faq from './Component/Faq';
import VoiceOfCustomer from './Component/VoiceOfCustomer'
import NoticeBoard from './Component/NoticeBoard'
import Waytocome from './Component/Waytocome'

import EventPromotionFaq from './Component/FaqList/EventPromotionFaq';
import MembershipFaq from './Component/FaqList/MembershipFaq'
import PaymentRefundFaq from './Component/FaqList/PaymentRefundFaq';
import StoreFaq from './Component/FaqList/StoreFaq';
import DeliveryFaq from './Component/FaqList/DeliveryFaq';
import OthersFaq from './Component/FaqList/OthersFaq'

const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
			<Routes>
				<Route index path="/" element={<Faq />}></Route>
				<Route path="/faq" element={<Faq />}></Route>
				<Route path="/VoiceOfCustomer" element={<VoiceOfCustomer />}></Route>
				<Route path="/NoticeBoard" element={<NoticeBoard />}></Route>
				<Route path="/Waytocome" element={<Waytocome />}></Route>
				
				<Route path="/EventPromotionFaq" element={<EventPromotionFaq />}></Route>
				<Route path="/MembershipFaq" element={<MembershipFaq />}></Route>
				<Route path="/PaymentRefundFaq" element={<PaymentRefundFaq />}></Route>
				<Route path="/StoreFaq" element={<StoreFaq />}></Route>
				<Route path="/DeliveryFaq" element={<DeliveryFaq />}></Route>
				<Route path="/OthersFaq" element={<OthersFaq />}></Route>
			</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
