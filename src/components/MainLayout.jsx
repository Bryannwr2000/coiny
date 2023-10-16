import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { Footer, Homepage, Cryptocurrencies, News, CryptoDetails } from "./";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import AppBar from "./AppBar";

import "../App.css";

const MainLayout = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location]);

  return (
    <>
      <Alert
        severity="warning"
        style={{ position: "fixed", bottom: 0, width: "100%", zIndex: "10" }}
      >
        UI Revamping in Progress: Explore Our New Look Soon.
      </Alert>
      <AppBar />
      <Container>
        <Container maxWidth="lg" className="site-layout-content">
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route
                exact
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              />
              <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route exact path="/news" element={<News />} />
            </Routes>
          </div>
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default MainLayout;
