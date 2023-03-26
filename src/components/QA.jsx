import React, { Component } from "react";
import NavBar from "./nav";

class shopping extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <div className="container forumBGC">
          <div className="qaPage ">
            <p>Q & A</p>
            <h1>常見問題 & 購買須知</h1>

            <div className="QAinfoPage">
              <div className="QAinfo  mt-5">
                <div className="QAinfoTitle mr-5  col-md-2">
                  <h3>常見問題</h3>
                </div>

                <div className="QAinfoQuestion container ">
                  <div className="Question row pt-3">
                    <div className="QuestionPic col-4 col-md-1">
                      <img src="../img/qa.png" alt="" />
                    </div>
                    <ul className="col-8  col-md-11">
                      <li>Ｑ：購物流程說明</li>
                      <li>
                        加入會員購物：註冊帳號～輸入Email信箱完成註冊～選擇商品加入購物車～前往結帳填寫收件資訊～完成結帳
                      </li>
                    </ul>
                  </div>
                  <div className="Question row mt-4 pt-3">
                    <div className="QuestionPic col-4 col-md-1">
                      <img src="../img/qa.png" alt="" />
                    </div>
                    <ul className="col-8 col-md-11">
                      <li>Ｑ：目前提供哪些付款</li>
                      <li>目前只提供貨到付款</li>
                    </ul>
                  </div>
                  <div className="Question row mt-4 pt-3">
                    <div className="QuestionPic col-4 col-md-1">
                      <img src="../img/qa.png" alt="" />
                    </div>
                    <ul className="col-8 col-md-11">
                      <li>Ｑ：如何查詢訂單狀況</li>
                      <li>
                        請您『登入會員』後至『訂單明細』查詢該訂單處理狀況
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="QAinfo mt-5">
                <div className="QAinfoTitle mr-5 col-md-2">
                  <h3>購買須知</h3>
                </div>
                <div className="QAinfoQuestion container ">
                  <div className="Question row pt-3">
                    <div className="QuestionPic col-md-1">
                      <img src="../img/qa.png" alt="" />
                    </div>
                    <ul className="col-md-11 ">
                      <li>Ｑ：什麼情況無法辨理退換貨 </li>
                      <li>超過7天退貨期限</li>
                      <li>基於安全及衛生考量，一次性商品等，恕不接受退換貨</li>
                      <li>商品已使用，或因人為因素造成損害，恕不接受退換貨</li>
                    </ul>
                  </div>
                  <div className="Question row mt-4 pt-3">
                    <div className="QuestionPic col-md-1">
                      <img src="../img/qa.png" alt="" />
                    </div>
                    <ul className="col-md-11">
                      <li>Ｑ：退換貨須知 </li>
                      <li>
                        每件商品僅提供一次退換貨機會，若於7天內須退換貨商品，請自行負擔寄送運費，為避免爭議發生，收到商品後請確實驗收商品，確認無誤後再使用
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default shopping;
