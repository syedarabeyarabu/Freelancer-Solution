import Banner from "../banner/Banner";
import Partners from "../parnters/Partners";
import SectionEight from "../sectionEight/SectionEight";
import SectionFive from "../sectionFive/SectionFive";
import SectionFour from "../sectionFour/SectionFour";
import SectionFourPartTwo from "../sectionFourPartTwo/SectionFourPartTwo";
import SectionSeven from "../sectionSeven/SectionSeven";
import SectionSix from "../sectionSix/SectionSix";
import SectionThree from "../sectionThree/SectionThree";

const Home = () => {
  return (
    <div>
      <Banner />
      <Partners />
      <SectionThree />
      <SectionFour />
      <SectionFourPartTwo />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
    </div>
  );
};

export default Home;