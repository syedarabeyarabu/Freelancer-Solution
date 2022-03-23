import React from "react";
import Courses from "../courses/Courses";
import SectionOne from "../sectionOne/SectionOne";
import SectionTwo from "../sectionTwo/SectionTwo";

const CoursesHome = () => {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <Courses />
      {/* <SectionFour /> */}
      {/* <SectionEight /> */}
    </div>
  );
};

export default CoursesHome;
