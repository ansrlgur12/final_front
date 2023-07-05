import React from "react";
import Header from "../../main/header";
import ReviewCards from "./section/reviewCards";
import BlogSearch from "../../util/SearchComponent";



const Community = () => {
  return (
    <>
      <Header />
      <ReviewCards />
      <BlogSearch/>
    </>
  );
};

export default Community;