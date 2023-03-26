import React, { Component } from "react";
import Axios from "axios"; // 串連 NodeJS
import NavBar from "./nav"; // 導欄列
import swal from "sweetalert";
import authHeader from "./authHeader"; // 用於會員登入
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
class PeripheralInfo extends Component {
  state = {
    memberUser: [{}], // 會員
    data: [{}],
    newSpec: [{}], // 周邊規格
    photoTest: [{}], // 周邊圖片
    cartTest: [
      {
        peripheralId: "",
        peripheralName: "",
        peripheralQty: "",
        peripheralPrice: "",
        peripheralSpec: "",
        uid: "",
      },
    ],
    pid: "",
    // cartTest: [{}],
  };

  componentDidMount = async () => {
    // 會員登入
    let memberResult = await Axios.get(
      "http://localhost:4000/member/memberinfo",
      {
        headers: authHeader(),
      }
    );
    this.state.memberUser = memberResult.data;
    console.log(this.state.memberUser);

    // 大部分的資料
    var result = await Axios.get(
      `http://localhost:4000/PeripheralInfo/${this.props.router.params.peripheralId}`
    );
    this.state.data = result.data;

    // 周邊規格
    var result_2 = await Axios.get(
      `http://localhost:4000/PeripheralSpec/${this.state.data.peripheralId}`
    );
    this.state.newSpec = result_2.data;
    console.log(this.state.newSpec);

    // 周邊圖片
    var result_3 = await Axios.get(
      `http://localhost:4000/PeripheralPic/${this.state.data.peripheralId}`
    );
    this.state.photoTest = result_3.data;
    // console.log(this.state.photoTest[1].peripheralPhotoGroup);
    document.getElementById("photoA").src =
      this.state.photoTest[0].peripheralPhotoGroup || "";
    document.getElementById("photoB").src =
      this.state.photoTest.length > 1
        ? this.state.photoTest[1].peripheralPhotoGroup
        : "";

    this.setState({});
  };

  cartTestClick = async () => {
    // alert("2022-12-17");
    this.state.cartTest[0].peripheralId = this.state.data.peripheralId; ///// 該周邊編號
    this.state.cartTest[0].peripheralName = this.state.data.peripheralName; ///// 該周邊名稱
    this.state.cartTest[0].pid = this.state.pid; ///// pid
    this.state.cartTest[0].peripheralPhoto =
      this.state.data.peripheralPhotoGroup; ///// 該周邊圖片
    this.state.cartTest[0].count = document.getElementById("newQty").value; ///// 加入數量
    this.state.cartTest[0].mail = this.state.memberUser[0].mail; ///// 會員信箱
    console.log(this.state.memberUser[0].mail);
    var result = await Axios.post(
      "http://localhost:4000/cartListTest",
      this.state.cartTest[0]
    );
    let flag = await swal("加入成功", "", "success", {
      buttons: "確定",
    });
    if (flag) {
      window.location = "http://localhost:3000/cart";
    }
    this.setState({});
  };
  change = (id) => {
    //
    this.setState({ pid: document.querySelector("select").value });
    console.log(this.state.pid);
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div
          className="container text-light"
          style={{ position: "relative", top: "65px" }}
        >
          {/* 索引條 全部商品→周邊分類→周邊名稱*/}
          <div className="p-2">
            <a href="/" style={{ color: "white", fontSize: "14px" }}>
              所有 周邊
            </a>{" "}
            &gt;&nbsp;
            <a href="/" style={{ color: "white", fontSize: "14px" }}>
              類別 {this.state.data.peripheralClass}
            </a>{" "}
            &gt;&nbsp;
            <span style={{ color: "white", fontSize: "14px" }}>
              {this.state.data.peripheralName}
            </span>
          </div>
          {/* 周邊封面區 periPhotoCover\ */}
          <div className="row">
            <div className="col-12 col-md-6 periPhotoCoverBox p-3">
              <img
                src={this.state.data.peripheralPhotoGroup}
                alt="周邊商品封面圖片"
              />
            </div>
            {/* 周邊介紹、規格選擇購買按鈕區 periBuyCard */}
            <div className="col-12 col-md-6 periDetail p-3">
              <h3>{this.state.data.peripheralName}</h3>
              <h6>➤ 品牌【{this.state.data.peripheralBrand}】</h6>
              <h6>➤ {this.state.data.peripheralText}</h6>
              <br />
              <h6>★★ 全館貨到付款 ★★</h6>
              <hr />
              <form action="" method="post">
                <select
                  id="newSpec"
                  name="newSpec"
                  onChange={() => {
                    this.change();
                  }}
                >
                  <option>請選擇商品規格</option>
                  {/* <option>{this.state.newSpec[0].peripheralProduct}{this.state.newSpec[0].peripheralProduct2}</option> */}
                  {/* <option>{this.state.newSpec[1].peripheralProduct}{this.state.newSpec[1].peripheralProduct2}</option> */}
                  {this.state.newSpec.map(
                    (newItem) => (
                      // {dataList && dataList.map(item =>(
                      //     <Option key={item.id} value={item.value}>{item.value}</Option
                      //     ))}
                      <option value={newItem.pid} key={newItem.id}>
                        {newItem.peripheralProduct}
                        {newItem.peripheralProduct2}
                      </option>
                    )
                    // <option>{newItem[0].peripheralProduct}{newItem[0].peripheralProduct2}</option>
                  )}
                </select>{" "}
                &nbsp;&nbsp;&nbsp;｜&nbsp;&nbsp;&nbsp;
                <select id="newQty" name="newQty">
                  <option>請選擇數量</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                </select>
                <h4 id="newPrice">NT$ {this.state.data.peripheralPrice}</h4>
                <div className="btn btn-success" onClick={this.cartTestClick}>
                  加入購物車
                </div>
              </form>
            </div>
          </div>
          {/* 周邊說明的圖片區 */}
          <div className="row periPhotoGroup">
            <h3>本商品詳細介紹</h3>
            <div className="col-md-12 periPhotoGroupA">
              {/* 周邊說明圖片第一張 */}
              <div className="periPhotoA">
                <img id="photoA" src={this.state.photo_1} alt="圖片說明" />
              </div>
              {/* 周邊說明圖片第二張  */}
              <div className="periPhotoA">
                <img id="photoB" src={this.state.photo_2} alt="圖片說明" />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(PeripheralInfo);
