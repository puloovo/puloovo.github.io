import React, { Component } from "react";
import axios from "axios";

class Upload extends Component {
  state = {};

  upload = async () => {
    const PicTolocal = document.getElementById("articleImg").files[0];
    const formData = new FormData();
    formData.append("articleImg", PicTolocal);

    await axios.post("http://localhost:4000/forum/uploads", formData, {
      headers: {
        "Content-Type": false,
      },
    });

    // console.log(document.querySelector('.articleImg').files)
    console.log(formData);
  };
  render() {
    return (
      <div>
        <input type="file" id="articleImg" onChange={this.upload} />
        <input type="submit" value={"上傳"} />
      </div>
    );
  }
}

export default Upload;
