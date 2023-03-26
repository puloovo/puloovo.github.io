import React, { Component } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import newsPhoto from './joyImage/demo600x400_01.jpg';


class LiveStream extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <h1>liveStream liveStream</h1>
                    <h1>liveStream liveStream</h1>
                    <h1>liveStream liveStream</h1>
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
                            slideShadows: false,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="homeEnterCardBody">
                                <img src={newsPhoto} alt="" />
                                <span>2022-10-20</span>
                                <h5 style={{ textAlign: "left" }}>文章標題文章標題文章標題文章標題</h5>
                                <a href="/" className="btn btn-sm btn-success">閱讀更多</a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="homeEnterCardBody">
                                <img src={newsPhoto} alt="" />
                                <span>2022-10-20</span>
                                <h5 style={{ textAlign: "left" }}>文章標題文章標題文章標題文章標題</h5>
                                <a href="/" className="btn btn-sm btn-success">閱讀更多</a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="homeEnterCardBody">
                                <img src={newsPhoto} alt="" />
                                <span>2022-10-20</span>
                                <h5 style={{ textAlign: "left" }}>文章標題文章標題文章標題文章標題</h5>
                                <a href="/" className="btn btn-sm btn-success">閱讀更多</a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="homeEnterCardBody">
                                <img src={newsPhoto} alt="" />
                                <span>2022-10-20</span>
                                <h5 style={{ textAlign: "left" }}>文章標題文章標題文章標題文章標題</h5>
                                <a href="/" className="btn btn-sm btn-success">閱讀更多</a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="homeEnterCardBody">
                                <img src={newsPhoto} alt="" />
                                <span>2022-10-20</span>
                                <h5 style={{ textAlign: "left" }}>文章標題文章標題文章標題文章標題</h5>
                                <a href="/" className="btn btn-sm btn-success">閱讀更多</a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="homeEnterCardBody">
                                <img src={newsPhoto} alt="" />
                                <span>2022-10-20</span>
                                <h5 style={{ textAlign: "left" }}>文章標題文章標題文章標題文章標題</h5>
                                <a href="/" className="btn btn-sm btn-success">閱讀更多</a>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

            </ React.Fragment >

        );
    }
}

export default LiveStream;