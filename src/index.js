import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

import { FavoritesContextProvider } from "./store/favorite-context";
//ReactDOM.render(<App />,document.getElementById('root'))
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FavoritesContextProvider>
      <BrowserRouter>
    <App />
  </BrowserRouter>
  </FavoritesContextProvider>

);
