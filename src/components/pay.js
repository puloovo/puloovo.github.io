import React, { useState, useEffect } from "react";
import axios from "axios";
import Product2 from "./product2";
import authHeader from "./authHeader";
import formser from "./formser";
import swal from "sweetalert";
import { useParams } from "react-router-dom";
const Pay = () => {
  const id = useParams();
  const [row, setrow] = useState([]);
  const [total, setTotal] = useState(1);
  const [data, setdata] = useState();

  const asyncFn = async () => {
    let rows = await axios.get(`http://localhost:4000/member/pay${id.id}`, {
      headers: authHeader(),
    });
    let result = await axios.get("http://localhost:4000/member/memberinfo", {
      headers: authHeader(),
    });
    setrow(rows.data);
    setdata(result.data[0]);
  };
  useEffect(() => {
    asyncFn();
  }, []);

  const send = async () => {
    let obj = { uid: data.uid, gameId: id.id };

    let result = await axios.post(`http://localhost:4000/member/gameadd`, obj);

    if (result) {
      let flag = await swal("送出成功", "", "success", {
        buttons: "確定",
      });
      if (flag) {
        window.location = "/memberinfo";
      }
    }
  };
  return (
    <div
      style={{ marginTop: "80PX", marginBottom: "80px" }}
      className="container text-light"
    >
      <div className="row">
        <div className="col-12  cartStyle p-4  ">
          <h1>訂單明細</h1>
          <div className="row p-2 m-0 cartTop text-center rounded-top">
            <div className="col-12  col-lg-4">品名</div>
            <div className="col-2 d-none d-lg-block"></div>
            <div className="col-2 d-none d-lg-block">單價</div>
            <div className="col-2 d-none d-lg-block">數量</div>
            <div className="col-1 d-none d-lg-block">小計</div>
            <div className="col-1 d-none d-lg-block"></div>
          </div>
          <div className=" p-3  ">
            {row.map((val, i) => {
              return (
                <Product2
                  key={i}
                  index={i}
                  price={val.gamePrice || ""}
                  name={val.gameName || ""}
                  photo={val.gamePhoto || ""}
                  peripheralId={val.gameId || ""}
                />
              );
            })}
            <h4 className="text-end p-4">
              總計:
              <span className="fs-1 ">{row[0] ? row[0].gamePrice : ""}</span>
            </h4>
          </div>
          <div className="row p-lg-5 p-3 m-0 mt-3 border">
            <div className="col-12 col-lg-6">
              <form id="form1">
                <h3 className="mb-4">收件人資訊</h3>
                <div className="row">
                  <div className="col-12 mb-3 d-flex align-items-center justify-content-between ">
                    <span>姓名:</span>
                    <input
                      type="text"
                      name="orderName"
                      className="form-control w-75 ms-4 "
                    />
                  </div>
                  <div className="col-12  mb-3  d-flex align-items-center justify-content-between ">
                    <span>手機:</span>
                    <input
                      type="text"
                      name="orderPhone"
                      className="form-control w-75 ms-4"
                    />
                  </div>
                </div>
                <div className="row ">
                  <div className="col-12  mb-3  d-flex align-items-center justify-content-between ">
                    <span>地址:</span>
                    <input
                      type="text"
                      name="orderAddress"
                      className="form-control w-75 ms-4"
                    />
                  </div>
                  <div className="col-12  mb-3  d-flex align-items-center justify-content-between ">
                    <span>Email:</span>
                    <input
                      type="text"
                      name="email"
                      className="form-control w-75 ms-4"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="col-12 col-lg-6 mt-4 mt-lg-0">
              <div></div>
            </div>
          </div>
          <div className="text-center mt-5">
            <button className="btn btn-success" onClick={send}>
              送出訂單
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;
