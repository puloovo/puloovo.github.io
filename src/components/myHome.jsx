import React, { Component } from "react";
import Axios from "axios"; // 串連 NodeJS

// 近期活動
// import hotGamePhoto_1 from './joyImage/hotGamePhoto_2.jpg';     // 強打遊戲縮圖
// import hotGamePhoto_2 from './joyImage/hotGamePhoto_1.jpg';     // 強打遊戲縮圖
// import hotGameVideo from './joyVideo/homeHotGame.mp4';                   // 強打遊戲影片
// import LiveHost_1 from './joyImage/background/LiveStreamShow_01.png';     // 統神
// import LiveHost_2 from './joyImage/background/LiveStreamShow_02.png';     // 貝莉莓
// import LiveStreamBG from './joyImage/background/LiveStreamShow_03.png';     // 實況日曆圖

// 最新消息縮圖 / JS效果
// import newsPhoto from './joyImage/demo600x400_01.jpg';   // 最新消息縮圖
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components 套件
import "swiper/css"; // Import Swiper styles
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper"; // import required modules

// 進入各頁面的 background / icon 縮圖
// import enterGameInfo from './joyImage/icon_game.png';           // 周邊遊戲 icon
// import enterLiveSteam from './joyImage/icon_liveSteam.png';                 // 論壇 icon
// import enterForum from './joyImage/icon_forum.png';                 // 論壇 icon

// // 合作夥伴bar
// import partnerBG from './joyImage/background/LoginBG_01.png';
// import logo_01 from './joyImage/logo_01.png';
// import logo_02 from './joyImage/logo_02.png';
// import logo_03 from './joyImage/logo_03.png';
// import logo_04 from './joyImage/logo_04.png';
// import logo_05 from './joyImage/logo_05.png';

class MyHome extends Component {
  state = {
    data: [{}],
  };

  componentDidMount = async () => {
    var result = await Axios.get("http://localhost:4000/homeNEWS");
    this.state.data = result.data;
    this.setState({});
    console.log(result);
  };

  render() {
    return (
      <React.Fragment>
        <div className="container text-light">
          <div className="row">
            {/* 大標：：近期活動 Amusement */}
            {/* <h1 style={{ backgroundColor: "darkgray" }}>近期活動 Amusement</h1> */}
            {/* <h3>強打遊戲</h3> */}
            {/* 強打遊戲縮圖及連結 */}
            <div className="hotGameCardArea">
              {/* 強打遊戲宣傳影片 */}
              <div className="hotGame_Main">
                <video
                  src="../joyVideo/homeHotGame.mp4"
                  autoPlay
                  loop
                  muted
                ></video>
              </div>
              <div className="d-flex flex-wrap hotGameCard">
                <div className="col-6 col-sm-3 hotGameCard">
                  <img
                    src="../joyImage/hotGamePhoto2.jpg"
                    style={{ width: "100%" }}
                    alt=""
                  />
                </div>
                <div className="col-6 col-sm-3">
                  <a href="/GameInfo">
                    FIFA 23 超級球星
                    <br />
                    <br />
                    <span style={{ color: "gray" }}>立即購買</span>
                  </a>
                </div>
                <div className="col-6 col-sm-3">
                  <a href="/GameInfo">
                    Gotham Knights
                    <br />
                    高譚騎士
                    <br />
                    <br />
                    <span style={{ color: "gray" }}>立即購買</span>
                  </a>
                </div>
                <div className="col-6 col-sm-3 hotGameCard">
                  <img
                    src="../joyImage/hotGamePhoto1.jpg"
                    style={{ width: "100%" }}
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* 大標：：進入各頁面入口 Enter */}
            <h1 className="p-3" style={{ textAlign: "center" }}>
              快速入口 Enter
            </h1>
            <div className="homeEnterCardArea p-3">
              <div className="d-flex flex-wrap">
                <div className="col-4 homeEnterCard">
                  <a href="http://localhost:3000/shopping">
                    <img src="../joyImage/icon_game.png" alt="" />
                    <h4>找周邊/遊戲</h4>
                  </a>
                </div>
                <div className="col-4 homeEnterCard">
                  <a href="http://localhost:3000/live">
                    <img src="../joyImage/icon_liveSteam.png" alt="" />
                    <h4>看實況</h4>
                  </a>
                </div>
                <div className="col-4 homeEnterCard">
                  <a href="http://localhost:3000/forum">
                    <img src="../joyImage/icon_forum.png" alt="" />
                    <h4>論壇</h4>
                  </a>
                </div>
              </div>
            </div>
            {/* 視差滾動樣式 */}
            <div className="parallax">
              <div className="homebg1"></div>
              <div className="homebg2"></div>
              <div className="homebg3"></div>
              <div className="homebg4"></div>
            </div>
            {/* 大標：：實況活動 Live Stream */}
            <div className="col-12">
              <div className="col-12 homeLiveStreamArea">
                <h1 className="p-3" style={{ textAlign: "center" }}>
                  實況活動 Live Stream
                </h1>
                <img
                  src="../joyImage/background/LiveStreamShow_03.png"
                  alt=""
                  className="homeLiveStream"
                />
                <img
                  src="../joyImage/background/LiveStreamShow_01.png"
                  alt=""
                  className="homeLiveHost_1"
                />
                <img
                  src="../joyImage/background/LiveStreamShow_02.png"
                  alt=""
                  className="homeLiveHost_2"
                />
              </div>
              {/* 精選實況影片 */}
              <h4 className="p-3" style={{ textAlign: "center" }}>
                _ _ _ _ _ _ _ _ 精選實況影片 _ _ _ _ _ _ _ _
              </h4>
              <div className="d-flex flex-wrap">
                <div className="col-4 liveCase">
                  <a href="/LiveStream">
                    <img
                      src="https://cdn.discordapp.com/attachments/1054405459672571928/1054464941299605564/liveHost02_1.png"
                      alt="實況影片縮圖"
                    />
                    <span className="liveVideoTitle">【貝莉莓】</span>
                  </a>
                </div>
                <div className="col-4 liveCase">
                  <a href="/LiveStream">
                    <img
                      src="https://cdn.discordapp.com/attachments/1054405459672571928/1054464941635141743/liveHost02_2.png"
                      alt="實況影片縮圖"
                    />
                    <span className="liveVideoTitle">【貝莉莓】</span>
                  </a>
                </div>
                <div className="col-4 liveCase">
                  <a href="/LiveStream">
                    <img
                      src="https://cdn.discordapp.com/attachments/1054405459672571928/1054464942033604709/liveHost02_3.png"
                      alt="實況影片縮圖"
                    />
                    <span className="liveVideoTitle">【貝莉莓】</span>
                  </a>
                </div>
                <div className="col-4 liveCase">
                  <a href="/LiveStream">
                    <img
                      src="https://cdn.discordapp.com/attachments/1054405459672571928/1054465021008150528/liveHost01_1.png"
                      alt="實況影片縮圖"
                    />
                    <span className="liveVideoTitle">
                      【統神】亞洲退費王，精華八分鐘 就退了五款遊戲
                    </span>
                  </a>
                </div>
                <div className="col-4 liveCase">
                  <a href="/LiveStream">
                    <img
                      src="https://cdn.discordapp.com/attachments/1054405459672571928/1054465021410820148/liveHost01_2.png"
                      alt="實況影片縮圖"
                    />
                    <span className="liveVideoTitle">
                      【統神】亞洲退費王，精華八分鐘 就退了五款遊戲
                    </span>
                  </a>
                </div>
                <div className="col-4 liveCase">
                  <a href="/LiveStream">
                    <img
                      src="https://cdn.discordapp.com/attachments/1054405459672571928/1054465021826048050/liveHost01_3.png"
                      alt="實況影片縮圖"
                    />
                    <span className="liveVideoTitle">
                      【統神】亞洲退費王，精華八分鐘 就退了五款遊戲
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* 大標：：最新消息 NEWS */}
          <h1 className="p-3" style={{ textAlign: "center" }}>
            最新消息 NEWS
          </h1>
          <div className="col-12 homeNewsCardArea">
            <div className="d-flex flex-wrap p-3">
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"3"}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
              >
                {this.state.data.map((dataItem, index) => (
                  <SwiperSlide key={index}>
                    <div className="homeNewsCard">
                      <img src={dataItem.articleImg} alt="" />
                      <span>{dataItem.postdate}</span>
                      <h5 style={{ textAlign: "left", padding: "10px" }}>
                        {dataItem.articleTitle}
                      </h5>
                      <a href="/" className="btn btn-sm btn-success">
                        閱讀更多
                      </a>
                    </div>
                  </SwiperSlide>
                ))}
                {/* <SwiperSlide>
                  <div className="homeNewsCard">
                    <img
                      src="https://cdn.discordapp.com/attachments/1054405459672571928/1054465021826048050/liveHost01_3.png"
                      alt=""
                    />
                    <span>2022-10-20</span>
                    <h5 style={{ textAlign: "left", padding: "10px" }}>
                      文章標題文章標題文章標題文章標題
                    </h5>
                    <a href="/" className="btn btn-sm btn-success">
                      閱讀更多
                    </a>
                  </div>
                </SwiperSlide> */}
              </Swiper>
            </div>
          </div>
          {/* 大標：：合作夥伴 Partners */}
          <div
            className="col-12"
            style={{
              height: "400px",
              alignItems: "center",
              background: `url("../joyImage/background/LoginBG_01.png")`,
              backgroundPosition: "top",
            }}
          >
            <h1 style={{ textAlign: "center" }}>合作夥伴 Partners</h1>
            <br />
            <br />
            <br />
            <br />
            <marquee>
              <img src="../joyImage/logo1.png" alt="合作夥伴" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img src="../joyImage/logo2.png" alt="合作夥伴" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img src="../joyImage/logo3.png" alt="合作夥伴" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img src="../joyImage/logo4.png" alt="合作夥伴" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img src="../joyImage/logo5.png" alt="合作夥伴" />
            </marquee>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MyHome;
