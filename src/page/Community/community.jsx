import React from "react";
import Header from "../../main/header";
import ReviewCards from "./section/reviewCards";
import SearchComponent from "../../util/SearchComponent";


const Community = () => {
  return (
    <>
      <Header />
      <ReviewCards />
      <SearchComponent />
    </>
  );
};

export default Community;