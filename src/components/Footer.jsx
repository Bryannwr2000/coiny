import React from "react";
import Container from "@mui/material/Container";

const Footer = () => {
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem 0",
    boxShadow: "0 0 15px rgba(0,0,0,0.1)",
  };
  return (
    <>
      <Container sx={style} maxWidth="fixed">
        ©2023 Bryan. All Rights Reserved.
      </Container>
    </>
  );
};

export default Footer;
