import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Merge from "./Components/Merge";
import MergePricing from "./Components/MergePricing";
import Dreamspace from "./Components/Dreamspace";
import RealEstate from "./Components/RealEstate";
import Aerospace from "./Components/Aerospace";
import Automotive from "./Components/Automotive";
import SwPricing from "./Components/SwPricing";
import OurStory from "./Components/OurStory";
import NewsRoom from "./Components/NewsRoom";
import ContactUs from "./Components/ContactUs";
import Career from "./Components/Career";
import BlogPage from "./Components/BlogPage";
import NotFound from "./Components/NotFound";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Merge" element={<Merge/>} />
      <Route path="/MergePricing" element={<MergePricing/>} />
      <Route path="/Dreamspace" element={<Dreamspace/>} />
      <Route path="/RealEstate" element={<RealEstate/>} />
      <Route path="/Aerospace" element={<Aerospace/>} />
      <Route path="/Automotive" element={<Automotive/>} />
      <Route path="/SwPricing" element={<SwPricing/>} />
      <Route path="/OurStory" element={<OurStory/>} />
      <Route path="/NewsRoom" element={<NewsRoom/>} />
      <Route path="/ContactUs" element={<ContactUs/>} />
      <Route path="/Career" element={<Career/>} />
      <Route path="/BlogPage" element={<BlogPage/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
