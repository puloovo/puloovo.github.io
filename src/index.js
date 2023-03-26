import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./sass/style.css";
import "./sass/NavBar.css";
import "./sass/create.css";
import "./sass/ForumDis.css";
import "./sass/ForumStyle.css";
import "./sass/ForumGamerDis.css";
import "./sass/Post.css";
import "./sass/QA.css";
import "./sass/shopping.css";
import "./sass/Tiptap.css";
import "./sass/joyCssPlay.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
