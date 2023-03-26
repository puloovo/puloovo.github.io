import React, { Component } from "react";
import NavBar from "./nav";
import axios from "axios";
import Tiptap from "./Tiptap";
import Uploads from "./upload";
import authHeader from "./authHeader";
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
class Create extends Component {
  state = {
    articleTitle: [{}],
    data: [{}],
  };

  async componentDidMount() {
    var result = await axios.get(`http://localhost:4000/member/memberinfo`, {
      headers: authHeader(),
    });
    this.state.data = result.data;
    this.setState({});
  }

  OKBTN = async () => {
    const today = new Date();
    const yy = today.getFullYear();
    const mm = today.getMonth() + 1;
    const dd = today.getDate();
    const h = today.getHours();
    const m = today.getMinutes();
    var CommentTime = yy + "-" + mm + "-" + dd + "-" + h + ":" + m;

    var dataToSever = {
      articleTitle: document.getElementsByClassName("articleTitle")[0].value,
      articleText: document.getElementsByClassName("ProseMirror")[0].innerHTML,
      articleType: document.getElementsByClassName("articleType")[0].value,
      postdate: CommentTime,
      DiscNum: this.props.router.params.articleId,
      uid: this.state.data[0].uid,
    };
    await axios.post(
      "http://localhost:4000/forum/create",
      new Array(dataToSever)
    );
    window.location = `/forum/dis${dataToSever.DiscNum}`;
    // console.log(`/forum/dis/${dataToSever.DiscNum}`)
  };

  render() {
    return (
      <div>
        <NavBar />
        <div className="container create_edit forumBGC">
          <div className="row mx-3">
            <input
              className="articleTitle col-8 col-md-10 my-1"
              type="text"
              placeholder="輸入標題"
            />
            <select className="articleType col-4 col-md-2 my-1">
              <option value="創作圖文">創作圖文</option>
              <option value="問題討論">問題討論</option>
              <option value="心得分享">心得分享</option>
              <option value="泡茶閒聊">泡茶閒聊</option>
            </select>
            <Tiptap />
            <input
              onClick={this.OKBTN}
              type="button"
              value={"確定"}
              className={"btn  bg-success text-white mr-1"}
            />
            <a
              href={`/forum/dis${this.props.router.params.articleId}`}
              className="btn  bg-danger text-white"
            >
              取消
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Create);
