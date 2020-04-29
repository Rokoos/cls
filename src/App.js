import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/styles.scss";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route path="/" component={Main} />
        <Route path="/project/:id" component={Modal} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
