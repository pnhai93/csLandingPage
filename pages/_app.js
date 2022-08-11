
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/NavBar";
import Artboard from '../components/Artboard'
import Footer from "../components/Footer";
import "../styles/globals.css"
import Image from "react-bootstrap/Image";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <div id="ourStory" className="slider" style={{ width: "100%" }}>
        <Image id="sliderImage" style={{ width: "100%" }} className="slider_image" src="/MAIN SLIDER.png"></Image>
      </div>
      <Artboard />
      <Component {...pageProps} />
    </>
  );
  
}

export default MyApp
