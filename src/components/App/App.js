import React from "react";
import Header from "../Header";
import Banner from "../Banner";
import Video from "../Video";
import SubBanner from "../SubBanner";
import Info from "../Info";
import Footer from "../Footer";

import { ThemeProvider } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Theme from "../../theme/theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Header />
      <main>
        <Banner />
        <Video />
        <SubBanner />
        <Info />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
