import React from "react";
import web from "../src/Images/img2.png";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {
  return (
    <>
    <Common 
        name='Grow Your Bussines with '
        imgsrc={web} visit="/Services"
        btname="Get Started" />
    </>

  );
}
export default Home;