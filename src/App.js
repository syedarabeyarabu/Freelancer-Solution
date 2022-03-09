import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Partners from "./components/parnters/Partners";
import SectionEight from "./components/sectionEight/SectionEight";
import SectionFive from "./components/sectionFive/SectionFive";
import SectionFour from "./components/sectionFour/SectionFour";
import SectionFourPartTwo from "./components/sectionFourPartTwo/SectionFourPartTwo";
import SectionSeven from "./components/sectionSeven/SectionSeven";
import SectionSix from "./components/sectionSix/SectionSix";
import SectionThree from "./components/sectionThree/SectionThree";

function App() {
  return (
    <>
      <Banner />
      <Partners />
      <SectionThree />
      <SectionFour />
      <SectionFourPartTwo />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <Footer />
    </>
  );
}

export default App;
