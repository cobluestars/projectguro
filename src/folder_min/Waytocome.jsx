import React, { useEffect } from 'react';
import "../folder_min/Waytocome.css"

const { kakao } = window;

const Waytocome = () => {

    useEffect(() => {
        const container = document.getElementById('myMap');
		const options = {
			center: new kakao.maps.LatLng(37.48484602448165, 126.89662588840247),
			level: 3
		};
        const map = new kakao.maps.Map(container, options);
		const marker = new kakao.maps.Marker({
			  position: map.getCenter() 
		});
		marker.setMap(map);
    }, []);

    return (
		<div className="map">
			<div className="inner">
				<div className="text_h1">
					<h1>매장 찾기</h1>
					</div>
						<div className="introduction">
						<p>
						가까운 {" "}
						<span className="txte_wap">코키티 매장</span>을 찾아보세요.
						</p>
						<p>매장 위치와 주소를 확인하실 수 있습니다.</p>
						</div>
					<div id='myMap' style={{width: '100%', height: '500px', margin:"80px 0"}}>
				</div>
			</div>
		</div>
    );
}

export default Waytocome; 
