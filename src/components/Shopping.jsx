import React, { Component } from "react";
import NavBar from "./nav";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components 套件
import "swiper/css"; // Import Swiper styles
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper"; // import required modules

class shopping extends Component {
  state = {
    data: [{}],
  };

  async componentDidMount() {
    var result = await axios.get("http://localhost:4000/forum/shopping");
    this.state.data = result.data;
    this.setState({ data: result.data });
    console.log(this.state.data);
  }

  //遊戲類別
  searchgame = async (e) => {
    const fliterData = { search: e };
    document.getElementsByClassName("ShoppingTitle")[0].innerHTML = e;
    let result = await axios.post(
      "http://localhost:4000/forum/searchgame",
      new Array(fliterData)
    );
    this.setState({ data: result.data });
    console.log(this.state.data);
  };

  //周邊類別
  searchmerch = async (e) => {
    const fliterData = { search: e };
    console.log(e);
    document.getElementsByClassName("ShoppingTitle")[0].innerHTML = e;
    let result = await axios.post(
      "http://localhost:4000/forum/searchmerch",
      new Array(fliterData)
    );
    this.setState({ data: result.data });
    console.log(this.state.data);
  };

  //全部遊戲
  ALLgame = async () => {
    let result = await axios.get("http://localhost:4000/forum/shopping");
    this.state.data = result.data;
    this.setState({ data: result.data });
    document.getElementsByClassName("ShoppingTitle")[0].innerHTML = "全部";
  };

  //全部周邊商品
  ALLmerch = async () => {
    let result = await axios.get("http://localhost:4000/forum/merch");
    this.state.data = result.data;
    this.setState({ data: result.data });
    document.getElementsByClassName("ShoppingTitle")[0].innerHTML = "全部";
  };

  //切換遊戲、周邊
  merch = async () => {
    document.querySelector(".shopgame").style.display = "none";
    document.querySelector(".shopmerch").style.display = "block";
    var result = await axios.get("http://localhost:4000/forum/merch");
    this.state.data = result.data;
    this.setState({ data: result.data });
  };
  game = async () => {
    document.querySelector(".shopmerch").style.display = "none";
    document.querySelector(".shopgame").style.display = "block";
    var result = await axios.get("http://localhost:4000/forum/shopping");
    this.state.data = result.data;
    this.setState({ data: result.data });
  };

  render() {
    return (
      <div>
        <NavBar />
        <div className="container forumBGC">
          <div className="ShoppingPage">
            <div
              id="carouselExampleFade"
              class="carousel slide carousel-fade "
              data-bs-ride="carousel"
            >
              <div class="carousel-inner shoptop">
                <div class="carousel-item active">
                  <img
                    src="https://cdn.discordapp.com/attachments/1029313785917349900/1055008264506581002/gameId01_j.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://cdn.discordapp.com/attachments/1029313785917349900/1054962800058974258/4.png"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://cdn.discordapp.com/attachments/1029313785917349900/1054962800373538867/1.png"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>

            <div className="container ">
              <div className="py-2  ">
                <Swiper
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  breakpoints={{
                    499: {
                      slidesPerView: "1",
                    },
                    999: {
                      slidesPerView: "3",
                    },
                  }}
                  coverflowEffect={{
                    depth: 100,
                    slideShadows: false,
                  }}
                  initialSlide={1}
                  modules={[EffectCoverflow]}
                  className="col-11"
                >
                  {this.state.data.map((val) => {
                    return (
                      <SwiperSlide>
                        <div className="">
                          <img
                            src={val.peripheralPhotoGroup || val.gamePhoto}
                            className=""
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>

            <h1 className="ShoppingTitle m-2">全部</h1>
            <div className="shoppingBar2 ">
              <ul className="row justify-content-center">
                <li onClick={this.game} className="col col-md-3 ">
                  遊 戲
                </li>
                <li onClick={this.merch} className="col col-md-3 ">
                  周 邊 商 品
                </li>
              </ul>
            </div>

            <div className="shoppingBar1 shopgame ">
              <ul className="row">
                <li className="col-3 col-md" onClick={this.ALLgame}>
                  全部
                </li>
                <li
                  className="col-3 col-md"
                  onClick={(event) => {
                    this.searchgame(event.target.innerText);
                  }}
                >
                  多人
                </li>
                <li
                  className="col-3 col-md"
                  onClick={(event) => {
                    this.searchgame(event.target.innerText);
                  }}
                >
                  休閒
                </li>
                <li
                  className="col-3 col-md"
                  onClick={(event) => {
                    this.searchgame(event.target.innerText);
                  }}
                >
                  冒險
                </li>
                <li
                  className="col-3 col-md"
                  onClick={(event) => {
                    this.searchgame(event.target.innerText);
                  }}
                >
                  動作
                </li>
                <li
                  className="col-3 col-md"
                  onClick={(event) => {
                    this.searchgame(event.target.innerText);
                  }}
                >
                  射擊
                </li>
                <li
                  className="col-3 col-md"
                  onClick={(event) => {
                    this.searchgame(event.target.innerText);
                  }}
                >
                  策略
                </li>
                <li
                  className="col-3 col-md"
                  onClick={(event) => {
                    this.searchgame(event.target.innerText);
                  }}
                >
                  益智
                </li>
              </ul>
            </div>

            <div className="shoppingBar1 shopmerch ">
              <ul className="row">
                <li className="col-3 col-md" onClick={this.ALLmerch}>
                  全部
                </li>
                <li
                  className="col-3 col-md"
                  onClick={(event) => {
                    this.searchmerch(event.target.innerText);
                  }}
                >
                  鍵盤
                </li>
                <li
                  className="col-3 col-md"
                  onClick={(event) => {
                    this.searchmerch(event.target.innerText);
                  }}
                >
                  滑鼠
                </li>
                <li
                  className="col-3 col-md"
                  onClick={(event) => {
                    this.searchmerch(event.target.innerText);
                  }}
                >
                  耳機
                </li>
              </ul>
            </div>

            <div className="merchPage d-flex row mx-5">
              {this.state.data.map((item, index) => (
                <div className="col-md-3 col-12 py-2 " key={index}>
                  <div className="shoppingCard">
                    <div className="shoppingCardPic">
                      <a
                        href={
                          item.gameId
                            ? `http://localhost:3000/GameInfo/${item.gameId}`
                            : `http://localhost:3000/PeripheralInfo/${item.peripheralId}`
                        }
                      >
                        <img
                          style={{ height: "200px" }}
                          className="w-100"
                          src={
                            item.peripheralPhotoGroup || item.gamePhoto || ""
                          }
                          alt=""
                        />
                      </a>
                    </div>
                    <a href="#">
                      <h1>{item.peripheralName || item.gameName || ""}</h1>
                    </a>
                    <h2>{item.peripheraldate || item.gameIssueDate || ""}</h2>
                    <div className="gametag">
                      <ul>
                        <li>{item.peripheralClass || item.gameClass || ""}</li>
                      </ul>
                    </div>
                    <div className="gamePrice ">
                      <h1 className="col-12">
                        {item.gamePrice ? `NT$ ${item.gamePrice}` : "免費下載"}
                      </h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default shopping;
