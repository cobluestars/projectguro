import { useState } from "react";

const Totop = () =>{

	const [active, setActive] = useState("");

	const onWindowHandler = () =>{
		window.addEventListener('scroll', ()=>{
			if(window.scrollY >= 1300){
				setActive("active");
			}else{
				setActive("");
			}
		});
	}
	
	const omMoveHandler = (move) => {
		move = 0;
		var speed = 3;
		var vh = 0;
		var scrollY = 0;

		var loop = setInterval(()=>{
			var dir = move > window.scrollY ? 1 : -1;
			vh += speed * dir;

			if(dir > 0){
				scrollY = Math.min(move, window.scrollY + vh);
			}else{
				scrollY = Math.max(move, window.scrollY + vh);
			}

			console.log(vh);

			window.scrollTo(0, scrollY);

			if(scrollY >= move && dir > 0){
				clearInterval(loop);
			}else if(scrollY <= move && dir < 0){
				clearInterval(loop);
			}

			
		}, 10);
	}

	onWindowHandler();

	return(
		<div id="to-top" className={active} onClick={omMoveHandler}>
			<div className="topButton"><i className="fa-solid fa-arrow-up-long"></i></div>
		</div>
	);
}

export default Totop;