import React, { Component } from "react";
import Axios from "axios"; // 串連 NodeJS
import Tabs from "./tabs"; // Tab 頁變換效果
import NavBar from "./nav"; // 導欄列
import authHeader from "./authHeader"; // 用於會員登入
import "react-responsive-carousel/lib/styles/carousel.min.css"; // 輪播效果
import { Carousel } from "react-responsive-carousel"; // 輪播效果
import { HiThumbUp } from "react-icons/hi"; // icon 讚
import { useLocation, useNavigate, useParams } from "react-router-dom";
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}
class GameInfo extends Component {
  state = {
    // memberUser: [{}],           // 會員
    data: [{}],
    photoTest: [{}], // 遊戲圖片 + 配圖片的文字
    commentTest: [{}], // 評論區用
    okComment: [{ gameId: "", comment: "" }],
  };

  componentDidMount = async () => {
    // 會員登入
    if (localStorage.getItem("token")) {
      let userResult = await Axios.get(
        "http://localhost:4000/member/memberinfo",
        {
          headers: authHeader(),
        }
      );
      this.state.memberUser = userResult.data;
    }
    // 大部分的資料
    var result = await Axios.get(
      `http://localhost:4000/GameInfo/${this.props.router.params.gameId}`
    );
    this.state.data = result.data;

    // 評論區
    var result_2 = await Axios.get(
      `http://localhost:4000/member/${this.props.router.params.gameId}`
    );
    this.state.commentTest = result_2.data;
    // console.log(this.state.commentTest);

    // 遊戲圖片 + 配圖片的文字
    var result_3 = await Axios.get(
      `http://localhost:4000/GamePic/${this.props.router.params.gameId}`
    );
    this.state.photoTest = result_3.data;
    console.log(this.state.photoTest);
    document.getElementById("photoA").src = this.state.photoTest[0].gamePhoto;
    document.getElementById("photoB").src = this.state.photoTest[1].gamePhoto;
    document.getElementById("photoC").src = this.state.photoTest[2].gamePhoto;
    document.getElementById("photoTextA").innerText =
      this.state.photoTest[0].gameImgText;
    document.getElementById("photoTextB").innerText =
      this.state.photoTest[1].gameImgText;
    document.getElementById("photoTextC").innerText =
      this.state.photoTest[2].gameImgText;
    this.setState({});

    // 年齡分級判斷
    var ageRating = this.state.data.gameClassIfication;
    if (ageRating === 6) {
      document.getElementById("rating").src =
        "../joyImage/gameRating/gameRating06.jpg";
    } else if (ageRating === 12) {
      document.getElementById("rating").src =
        "../joyImage/gameRating/gameRating12.jpg";
    } else if (ageRating === 15) {
      document.getElementById("rating").src =
        "../joyImage/gameRating/gameRating15.jpg";
    } else if (ageRating === 18) {
      document.getElementById("rating").src =
        "../joyImage/gameRating/gameRating18.jpg";
    } else {
      document.getElementById("rating").src =
        "../joyImage/gameRating/gameRatingall.jpg";
    }
  };

  okButtonClick = async () => {
    // alert ("2022-12-06");

    // if (document.getElementById('comment').value !== ""
    // ) {
    console.log(this.state.okComment);
    this.state.okComment[0].comment = document.getElementById("comment").value;
    this.state.okComment[0].gameId = this.state.data.gameId;
    this.state.okComment[0].uid = this.state.memberUser[0].uid;
    this.setState({});
    console.log(this.state.okComment);
    var result = await Axios.post(
      "http://localhost:4000/GameInfoComment",
      this.state.okComment
    );

    //     // window.location = "/GameInfo";
    window.location.reload();
    // } else {
    //     alert("未輸入回覆內容，請確認。")
    // }
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div
          className="container text-light"
          style={{ position: "relative", top: "65px" }}
        >
          {/* 索引條 全部遊戲→遊戲分類→遊戲名稱*/}
          <div className="p-2">
            <a href="/" style={{ color: "white", fontSize: "14px" }}>
              所有 遊戲
            </a>{" "}
            &gt;&nbsp;
            <a href="/" style={{ color: "white", fontSize: "14px" }}>
              {this.state.data.gameClass} 遊戲
            </a>{" "}
            &gt;&nbsp;
            <span style={{ color: "white", fontSize: "14px" }}>
              {this.state.data.gameName}
            </span>
          </div>
          {/* 遊戲封面及輪播區 */}
          {/* 遊戲封面 gamePhotoCover\ */}
          <div className="row">
            <div className="col-12 col-md-9 gamePhotoCoverBox p-2">
              <Carousel autoPlay={true} infiniteLoop={true} thumbWidth={150}>
                <div>
                  <img src={this.state.data.gamePhotoA} alt="輪播圖片" />
                </div>
                <div>
                  <img src={this.state.data.gamePhotoB} alt="輪播圖片" />
                </div>
                <div>
                  <img src={this.state.data.gamePhotoC} alt="輪播圖片" />
                </div>
                <div>
                  <img src={this.state.data.gamePhotoD} alt="輪播圖片" />
                </div>
                <div>
                  <img src={this.state.data.gamePhotoE} alt="圖片說明" />
                </div>
                <div>
                  <img src={this.state.data.gamePhotoF} alt="圖片說明" />
                </div>
              </Carousel>
            </div>
            <div className="col-12 col-md-3 d-flex flex-wrap gameDetail p-2">
              {/* 遊戲和商品購買及分類區 gameBuyCard */}
              <div>
                <table>
                  <tbody>
                    <tr>
                      <th colSpan="2">{this.state.data.gameName}</th>
                    </tr>
                    <tr>
                      <th>遊戲分類</th>
                      <td>{this.state.data.gameClass}</td>
                    </tr>
                    <tr>
                      <th>發行商</th>
                      <td>{this.state.data.gameDeveloper}</td>
                    </tr>
                    <tr>
                      <th>發行日期</th>
                      <td>{this.state.data.gameIssueDate}</td>
                    </tr>
                    <tr>
                      <th>綜合評論</th>
                      <td>
                        <HiThumbUp />
                        &nbsp;&nbsp;{this.state.data.gameGood}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <div className="p-2">
                  <div
                    style={{ width: "80%", height: "80px", overflow: "hidden" }}
                  >
                    <img
                      id="rating"
                      style={{ width: "80px" }}
                      alt="年齡分級"
                    ></img>
                  </div>
                </div>
                <div className="p-2">
                  <h3>NT$ {this.state.data.gamePrice}</h3>
                  <div className="btn btn-success" onClick={this.gameRating}>
                    <a
                      href={`http://localhost:3000/pay/${this.state.data.gameId}`}
                    >
                      <h5>立即購買</h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 遊戲特色及系統規格需求區域 gameInfoA */}
          <div className="row p-2">
            <Tabs>
              {/* tab_1 遊戲描述 gameInfoA_tab1 */}
              <div label="關於遊戲">
                <span>{this.state.data.gameText}</span>
              </div>
              {/* tab_2 系統規格 gameInfoA_tab2 */}
              <div label="系統需求">
                <table className="gameSpec">
                  <tr>
                    <th colSpan="2">最低需求</th>
                    <th colSpan="2">建議需求</th>
                  </tr>
                  <tr>
                    <th>架構</th>
                    <td>{this.state.data.systemLeast}</td>
                    <th>架構</th>
                    <td>{this.state.data.systemNormal}</td>
                  </tr>
                  <tr>
                    <th>作業系統</th>
                    <td>{this.state.data.systemOsLeast}</td>
                    <th>作業系統</th>
                    <td>{this.state.data.systemOsNormal}</td>
                  </tr>
                  <tr>
                    <th>處理器</th>
                    <td>{this.state.data.cpuLeast}</td>
                    <th>處理器</th>
                    <td>{this.state.data.cpuNormal}</td>
                  </tr>
                  <tr>
                    <th>記憶體</th>
                    <td>{this.state.data.ramLeast}</td>
                    <th>記憶體</th>
                    <td>{this.state.data.ramNormal}</td>
                  </tr>
                  <tr>
                    <th>顯示卡</th>
                    <td>{this.state.data.gpuLeast}</td>
                    <th>顯示卡</th>
                    <td>{this.state.data.gpuNormal}</td>
                  </tr>
                </table>
              </div>
            </Tabs>
          </div>
          {/* 遊戲和商品說明的圖片區 */}
          <div className="row gamePhotoGroup">
            <div className="row d-flex flex-wrap gamePhotoGroupB">
              <div className="col-4">
                <h5 id="photoTextA"></h5>
              </div>
              <div className="col-8 ">
                <img id="photoA" alt="遊戲圖片" />
                <br />
              </div>
              <div className="col-8">
                <img id="photoB" alt="遊戲圖片" />
              </div>
              <div className="col-4">
                <h5 id="photoTextB"></h5>
              </div>
              <div className="col-4">
                <h5 id="photoTextC"></h5>
              </div>
              <div className="col-8">
                <img id="photoC" alt="遊戲圖片" />
                <br />
              </div>
            </div>
          </div>
          <hr />
          {/* 會員評論功能 */}
          <h3>評論</h3>
          {this.state.commentTest.map((commentData, index) => {
            return (
              <div className="row d-flex flex-wrap m-2" key={index}>
                <div className="col-3 col-md-2 gameReplyUser">
                  <img src={commentData.memberPhoto} alt="會員大頭貼" />
                  <h6 style={{ padding: "10px" }}>{commentData.nickname}</h6>
                </div>
                <div className="col-9 col-md-10 gameReplyList">
                  <div
                    style={{
                      fontSize: "12px",
                      padding: "10px",
                      textAlign: "right",
                    }}
                  >
                    <span>{index + 1}樓 ｜ </span>
                    <span style={{ color: "lightsalmon" }}>
                      {commentData.commentTime}
                    </span>
                    <br />
                  </div>
                  <span>{commentData.comment}</span>
                </div>
              </div>
            );
          })}
          {/* <div id="commentMessage">
                        <div className="row d-flex flex-wrap m-2" >
                            <div className="col-3 col-md-2 gameReplyUser">
                                <img src={memberPhoto} alt="會員大頭貼" />
                                <h6 style={{ padding: "10px" }}>我是周湯好</h6>
                            </div>
                            <div className="col-9 col-md-10 gameReplyList">
                                <div style={{ fontSize: "12px", padding: "10px", textAlign: "right" }}>
                                    <span>1樓 ｜ </span>
                                    <span style={{ color: "lightsalmon" }}>2022-10-24</span><br />
                                </div>
                                <span>
                                    看到馬上購買下載了，先推一個！希望畫面有改善哈哈哈哈哈
                                </span>
                            </div>
                        </div>
                    </div> */}
          <hr />
          <div>
            <form action="" method="post">
              <input type="hidden" id="commentTime" name="commentTime" />
              <span>我要評論：</span>
              <textarea
                type="text"
                placeholder="在此輸入更多分享內容"
                name="comment"
                id="comment"
                style={{ borderRadius: "10px", width: "100%", height: "200px" }}
              />
              <div className="p-2">
                <input
                  type="button"
                  onClick={() => {
                    this.okButtonClick();
                  }}
                  name="okButtonClick"
                  id="okButtonClick"
                  defaultValue="送　　出"
                  className="btn btn-sm btn-success"
                />
                &nbsp;&nbsp;
                <input
                  type="reset"
                  defaultValue="清除內容"
                  className="btn btn-sm btn-danger"
                  name="clearButton"
                  id="clearButton"
                />
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(GameInfo);
