import Banner from "../component/Banner";
import Notice from "../component/Notice";
import Contents from "../component/Contents";
import Totop from "../component/Totop";
import "../../components/App.css";
import { useEffect } from "react";

const HomePage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Banner />
      <Notice />
      <Contents />
      <Totop />
    </>
  );
};

export default HomePage;

