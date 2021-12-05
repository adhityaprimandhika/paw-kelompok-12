import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import AdsCarousel from "./components/Onboarding/AdsCarousel";

import Form from "./components/Onboarding/Form";
import Cart from "./components/cart/index";
import Order from "./Order";

import "./App.css";

export default function App() {
  return (
    <Router>
      <Container className="container">
        <div className="adsPromotionSection">
          <AdsCarousel />
          {/* <Banner className="banner">adsad</Banner> */}
        </div>
        <div className="takeOrderSection">
          <Form />
        </div>
      </Container>

      <Routes>
        <Route path="/" element={App}></Route>
        <Route path="/Order" element={Order}></Route>
        <Route path="/Cart" element={Cart}></Route>
      </Routes>
    </Router>
  );
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  .adsPromotionSection {
    width: 45%;
    height: 100%;
  }
  .takeOrderSection {
    width: 65%;
    height: 100%;
  }
`;
const Banner = styled.div`
  top: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  height: 5rem;
  width: 100%;
`;

// some Icons
