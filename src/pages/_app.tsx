/* eslint-disable react/prop-types */
import React from "react"
import "../styles/main.sass";
import "../styles/filters.sass";

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default App;
