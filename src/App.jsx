import "./App.css";
import Header from "./components/Header";
import OurFirm from "./components/OurFirm";
import Offer from "./components/Offer";
import FeatureOne from "./components/FeatureOne";
import FeatureTwo from "./components/FeatureTwo";
import OurServices from "./components/OurServices";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header></Header>
      <OurFirm></OurFirm>
      <Offer></Offer>
      <FeatureOne></FeatureOne>
      <FeatureTwo></FeatureTwo>
      <OurServices></OurServices>
      <Cta></Cta>
      <Footer></Footer>
    </>
  );
}

export default App;
