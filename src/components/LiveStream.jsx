import React, { Component } from "react";
// import Axios from 'axios';                              // 串連 NodeJS
// import LiveShow from "./demo_3";                        // 視訊鏡頭
import NavBar from "./nav"; // 導欄列

// 實況日曆圖

class LiveStream extends Component {
  state = {
    // data: [{}]
  };

  // componentDidMount = async () => {
  //     var result = await Axios.get("http://localhost:8000/");
  //     this.state.data = result.data;
  //     this.setState({})
  //     console.log(result);
  // }

  streamclick = () => {
    // alert("2022-12-10")
    window.location = "/show";
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div
          className="container text-light"
          style={{ position: "relative", top: "65px" }}
        >
          <div className="row">
            <div
              className="d-flex flex-wrap"
              style={{ backgroundColor: "rgba(88, 88, 88, 0.3)" }}
            >
              <div className="col-12 col-lg-8 p-2 liveOnShow">
                <video
                  src="../joyVideo/beach.mp4"
                  autoPlay
                  muted
                  controls
                  width="100%"
                ></video>
                <h3 className="p-2">【統神】花豬 🌼 🐷 #統神 #2022-11-28</h3>
                <span>
                  　▲ 每週五下午5：00開台，喜歡統神的粉絲請鎖定。
                  <br />
                  　▲ 歡樂聖誕月，統神加碼12/23~12/25開台。
                  <br />
                  　▲ 以上影片由統神大戲院授權。
                  <br />
                </span>
              </div>
              <div className="col-12 col-lg-4 p-2 liveScrollbar">
                <h5 className="p-2" style={{ textAlign: "center" }}>
                  播放列表
                </h5>
                <div
                  className="d-flex flex-wrap p-2 liveOnShowCard"
                  onClick={this.streamclick}
                >
                  <div className="col-5 liveOnShowItem">
                    <img
                      src="https://cdn.discordapp.com/attachments/1054405459672571928/1054996181329121353/liveShow.png"
                      alt=""
                    />
                  </div>
                  <div className="col-7 p-2">
                    <h5 className="p-2">🔴直播中</h5>
                  </div>
                </div>
                <div className="d-flex flex-wrap p-2 liveOnShowCard">
                  <div className="col-5 liveOnShowItem">
                    <img
                      src="https://cdn.discordapp.com/attachments/1054405459672571928/1054465021410820148/liveHost01_2.png"
                      alt="實況影片縮圖"
                    />
                  </div>
                  <div className="col-7 p-2">
                    <span className="liveOnTitle">
                      【統神】花豬 🌼 🐷 #統神
                    </span>
                  </div>
                </div>
                <div className="d-flex flex-wrap p-2 liveOnShowCard">
                  <div className="col-5 liveOnShowItem">
                    <img
                      src="https://cdn.discordapp.com/attachments/1054405459672571928/1054465021008150528/liveHost01_1.png"
                      alt="實況影片縮圖"
                    />
                  </div>
                  <div className="col-7 p-2">
                    <span className="liveOnTitle">
                      【統神】蒙多五連殺，幸福來的太快 ❤ 英雄聯盟
                    </span>
                  </div>
                </div>
                <div className="d-flex flex-wrap p-2 liveOnShowCard">
                  <div className="col-5 liveOnShowItem">
                    <img
                      src="https://cdn.discordapp.com/attachments/1054405459672571928/1054465021826048050/liveHost01_3.png"
                      alt="實況影片縮圖"
                    />
                  </div>
                  <div className="col-7 p-2">
                    <span className="liveOnTitle">
                      【統神】不演了！隊友犽宿超沒用被搞到牙起來，靠自己單線救全隊，統神鱷魚Carry廢物犽宿
                    </span>
                  </div>
                </div>
                <div className="d-flex flex-wrap p-2 liveOnShowCard">
                  <div className="col-5 liveOnShowItem">
                    <img
                      src="https://cdn.discordapp.com/attachments/1054405459672571928/1054465022346149980/liveHost01_4.png"
                      alt="實況影片縮圖"
                    />
                  </div>
                  <div className="col-7 p-2">
                    <span className="liveOnTitle">
                      【統神】錯！退出遊戲。表情包富翁 #晨晨大戲院
                    </span>
                  </div>
                </div>
                <div className="d-flex flex-wrap p-2 liveOnShowCard">
                  <div className="col-5 liveOnShowItem">
                    <img
                      src="https://cdn.discordapp.com/attachments/1054405459672571928/1054465022685880350/liveHost01_5.png"
                      alt="實況影片縮圖"
                    />
                  </div>
                  <div className="col-7 p-2">
                    <span className="liveOnTitle">
                      【統神】豬心大悅 2022版 🤪😏 英雄聯盟
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="col-12 homeLiveStreamArea">
            <h2 style={{ textAlign: "center" }}>十 二 月 實 況 活 動</h2>
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
          <hr />
          <div className="p-3 liveVideoGroup">
            <h2>更多實況影片</h2>
            <h4 style={{ textAlign: "left" }}>❤❤ 貝 莉 莓 ❤❤</h4>
            <div className="d-flex flex-wrap">
              <div className="col-4 liveCase">
                <img
                  src="https://cdn.discordapp.com/attachments/1054405459672571928/1054464942369153044/liveHost02_4.png"
                  alt="實況影片縮圖"
                />
                <span className="liveVideoTitle">
                  【貝莉莓】沒錯！在圖奇就是跪著要飯，所以我要去當IG網美了！
                </span>
              </div>
              <div className="col-4 liveCase">
                <img
                  src="https://cdn.discordapp.com/attachments/1054405459672571928/1054464942746632252/liveHost02_5.png"
                  alt="實況影片縮圖"
                />
                <span className="liveVideoTitle">
                  【貝莉莓】APEX都復盤過了，電波歌劇院怎麼能不復盤！
                </span>
              </div>
              <div className="col-4 liveCase">
                <img
                  src="https://cdn.discordapp.com/attachments/1054405459672571928/1054464943132512336/liveHost02_6.png"
                  alt="實況影片縮圖"
                />
                <span className="liveVideoTitle">
                  【貝莉莓】從銅四開始，到底會花多久時間上白金呢？？
                </span>
              </div>
              <div className="col-4 liveCase">
                <img
                  src="https://cdn.discordapp.com/attachments/1054405459672571928/1054464941299605564/liveHost02_1.png"
                  alt="實況影片縮圖"
                />
                <span className="liveVideoTitle">
                  【貝莉莓】學測數學只有6級分的我，到底要怎麼打贏對面 😅 2048
                  Heroes
                </span>
              </div>
              <div className="col-4 liveCase">
                <img
                  src="https://cdn.discordapp.com/attachments/1054405459672571928/1054464941635141743/liveHost02_2.png"
                  alt="實況影片縮圖"
                />
                <span className="liveVideoTitle">
                  【貝莉莓】各位！新的DLC真的很好玩 🌈 動物森友會
                </span>
              </div>
              <div className="col-4 liveCase">
                <img
                  src="https://cdn.discordapp.com/attachments/1054405459672571928/1054464942033604709/liveHost02_3.png"
                  alt="實況影片縮圖"
                />
                <span className="liveVideoTitle">
                  【貝莉莓】不只劇情用心，就連抽卡動畫都做得很棒！
                </span>
              </div>
            </div>
            <br />
            <h4 style={{ textAlign: "left" }}>❂❂ 統 神 ❂❂</h4>
            <div className="d-flex flex-wrap">
              <div className="col-4 liveCase">
                <img
                  src="https://cdn.discordapp.com/attachments/1054405459672571928/1054465022346149980/liveHost01_4.png"
                  alt="實況影片縮圖"
                />
                <span className="liveVideoTitle">
                  【統神】錯！退出遊戲。表情包富翁 #晨晨大戲院
                </span>
              </div>
              <div className="col-4 liveCase">
                <img
                  src="https://cdn.discordapp.com/attachments/1054405459672571928/1054465022685880350/liveHost01_5.png"
                  alt="實況影片縮圖"
                />
                <span className="liveVideoTitle">
                  【統神】豬心大悅 2022版 🤪😏 英雄聯盟
                </span>
              </div>
              <div className="col-4 liveCase">
                <img
                  src="https://cdn.discordapp.com/attachments/1054405459672571928/1054465023054970991/liveHost01_6.png"
                  alt="實況影片縮圖"
                />
                <span className="liveVideoTitle">
                  【統神】豬皮舞一跳，原本有機會開秀的飛斯馬上S去...
                </span>
              </div>
              <div className="col-4 liveCase">
                <img
                  src="https://cdn.discordapp.com/attachments/1054405459672571928/1054465021008150528/liveHost01_1.png"
                  alt="實況影片縮圖"
                />
                <span className="liveVideoTitle">
                  【統神】蒙多五連殺，幸福來的太快 ❤ 英雄聯盟
                </span>
              </div>
              <div className="col-4 liveCase">
                <img
                  src="https://cdn.discordapp.com/attachments/1054405459672571928/1054465021410820148/liveHost01_2.png"
                  alt="實況影片縮圖"
                />
                <span className="liveVideoTitle">【統神】花豬 🌼 🐷 #統神</span>
              </div>
              <div className="col-4 liveCase">
                <img
                  src="https://cdn.discordapp.com/attachments/1054405459672571928/1054465021826048050/liveHost01_3.png"
                  alt="實況影片縮圖"
                />
                <span className="liveVideoTitle">
                  【統神】不演了！隊友犽宿超沒用被搞到牙起來，靠自己單線救全隊，統神鱷魚Carry廢物犽宿
                </span>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LiveStream;
