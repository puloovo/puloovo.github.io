import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap";
import Nav from "./components/nav";
import Main from "./components/main.js";
import Register from "./components/register";
import MemberInfo from "./components/memberInfo";
import Cart from "./components/cart";
import Index from "./components/Index";
import Create from "./components/Create";
import Tiptap from "./components/Tiptap";
import Upload from "./components/upload";
import ForumDis from "./components/forumDis";
import ForumGameDis from "./components/forumGameDis";
import Post from "./components/Post";
import Edit from "./components/Edit";
import Shopping from "./components/Shopping";
import QA from "./components/QA";
import Pay from "./components/pay";

import MyHome from "./components/myHome";
import PeripheralInfo from "./components/PeripheralInfo";
import GameInfo from "./components/GameInfo";
import LiveStream from "./components/LiveStream";
import LiveShow from "./components/LiveShow";
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/memberinfo/*" element={<MemberInfo />}></Route>
          <Route path="/forum/" element={<Index />} />
          <Route path="/forum/dis:DiscNum" element={<ForumDis />} />
          <Route path="/forum/gamedis" element={<ForumGameDis />} />
          <Route path="/forum/post:articleId" element={<Post />} />
          <Route path="/forum/create:articleId" element={<Create />} />
          <Route path="/logoin" element={<Main />} />
          <Route path="/edit/:articleId" element={<Edit />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/QA" element={<QA />} />
          <Route path="/myHome" element={<MyHome />} exact />
          {/* 周邊商品詳細說明頁路由 */}
          <Route
            path="/PeripheralInfo/:peripheralId"
            element={<PeripheralInfo />}
            exact
          />
          {/* 遊戲詳細說明頁路由 */}

          <Route path="/GameInfo/:gameId" element={<GameInfo />} exact />
          {/* 實況頁路由 */}
          <Route path="/LiveStream" element={<LiveStream />} exact />
          <Route path="/pay/:id" element={<Pay />} exact />
          <Route path="/live" element={<LiveStream />} exact />
          <Route path="/show" element={<LiveShow />} exact />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
