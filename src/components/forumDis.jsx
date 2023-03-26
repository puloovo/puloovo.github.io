import React, { Component } from "react";
import NavBar from "./nav";
import axios from "axios";
import moment from "moment";
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
class forumDis extends Component {
  state = {
    data: [{}],
  };

  async componentDidMount() {
    var result = await axios.get(
      `http://localhost:4000/forum/dis/${this.props.router.params.DiscNum}`
    );
    this.state.data = result.data;
    console.log(result.data);
    this.setState({});
    for (var i = 0; i < this.state.data.length; i++) {
      // 獲取日期
      var localTime = moment(this.state.data[i].postdate).format("YYYY-MM-DD");
      var proposedDate = localTime + "T00:00:00.000Z";
      var isValidDate = moment(proposedDate).isValid();

      //獲取時間
      var momentDate = moment(proposedDate);
      var hour = momentDate.hours();
      var minutes = momentDate.minutes();
      console.log(localTime);
      this.state.data[i].postdate = localTime;
    }
  }

  ALL = async () => {
    var result = await axios.get("http://localhost:4000/forum/shopping");
    this.state.data = result.data;
    this.setState({ data: result.data });
  };

  search = async (e) => {
    const fliterData = { search: e };
    document.getElementsByClassName("ShoppingTitle")[0].innerHTML = e;
    let result = await axios.post(
      "http://localhost:4000/forum/search",
      new Array(fliterData)
    );
    this.setState({ data: result.data });
    console.log(this.state.data);
  };
  render() {
    return (
      <div>
        <NavBar />

        <div className="ForumDisforumBGC container">
          <a href={`/forum/create${this.state.data[0].DiscNum}`}>
            <button className="text-white bg-success PostBTN col-3 col-md-1">
              發文
            </button>
          </a>

          <div className="row">
            <div className="forumgameDisPIC ">
              <img src={this.state.data[0].DiscPic} />
            </div>

            <div className="ForumDisforumbar">
              <ul className="row">
                <li className="col-11 col-md" onClick={this.ALL}>
                  全部主題
                </li>
                <li
                  className="col-11 col-md"
                  onClick={(event) => {
                    this.search(event.target.innerText);
                  }}
                >
                  問題討論
                </li>
                <li
                  className="col-11 col-md"
                  onClick={(event) => {
                    this.search(event.target.innerText);
                  }}
                >
                  創作閒聊
                </li>
                <li
                  className="col-11 col-md"
                  onClick={(event) => {
                    this.search(event.target.innerText);
                  }}
                >
                  心得攻略
                </li>
                <li
                  className="col-11 col-md"
                  onClick={(event) => {
                    this.search(event.target.innerText);
                  }}
                >
                  揪團招生
                </li>
              </ul>
            </div>

            {/* ====判斷是否置頂(boolean) */}
            <div className="container">
              {this.state.data.map(function (item, index) {
                if (item.Pin == 1) {
                  return (
                    console.log(item),
                    (
                      <div
                        className="ForumDisForumSection "
                        key={item.articleId}
                      >
                        <div className=" PostTop row">
                          <div className="col-4 col-md-2">
                            <div className="Topicon ">
                              <h1>置頂</h1>
                            </div>
                          </div>
                          <div className="ForumPostLength col-4 col-md-8">
                            <a href={`/forum/post${item.articleId}`}>
                              <h2>{`【${item.articleType}】${item.articleTitle}`}</h2>
                            </a>
                          </div>
                          <div className="UserInfo col-4 col-md-2">
                            <p>{item.nickname}</p>
                            <p>{item.postdate}</p>
                          </div>
                        </div>
                      </div>
                    )
                  );
                }
              })}

              {this.state.data.map(function (item, index) {
                if (item.Pin == 0) {
                  return (
                    <div className="ForumDisForumSection" key={item.articleId}>
                      <div className="ForumDisForumPost">
                        <div className=" col-4 col-md-2"></div>
                        <div className="ForumPostLength col-4 col-md-8">
                          <a href={`/forum/post${item.articleId}`}>
                            <h2>{`【${item.articleType}】${item.articleTitle}`}</h2>
                          </a>
                        </div>
                        <div className="UserInfo col-4 col-md-2">
                          <p>{item.nickname}</p>
                          <p>{item.postdate}</p>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>

            {/* <div className="forumPage container">
                            <span className="page-prev">&lt;</span>
                            <span className="page-current">1</span>
                            <a href="#">2</a>
                            <a href="#">3</a>
                            <a href="#">4</a>
                            <a href="#">5</a>
                            <a href="#">6</a>
                            <a href="#">7</a>
                            <a href="#">8</a>
                            <a href="#">9</a>
                            ……
                            <a href="#">199</a>
                            <a href="#">200</a>
                            <a href="#">&gt;</a>
                        </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(forumDis);
