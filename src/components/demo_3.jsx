import React, { Component } from 'react';
import Webcam from "react-webcam";
// import { ReactMediaRecorder } from "react-media-recorder";
// import 'index.ts';


class Demo_3 extends Component {
    state = {}

    WebcamComponent = () => <Webcam />;

    // const RecordView = () => (
    //     <div>
    //       <ReactMediaRecorder
    //         video
    //         render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
    //           <div>
    //             <p>{status}</p>
    //             <button onClick={startRecording}>Start Recording</button>
    //             <button onClick={stopRecording}>Stop Recording</button>
    //             <video src={mediaBlobUrl} controls autoPlay loop />
    //           </div>
    //         )}
    //       />
    //     </div>
    //   );

    
    render() {
        return (
            <React.Fragment>
                {/* <iframe src="http://127.0.0.1:5500/ServerR_%E5%89%8D/public/test22.html"></iframe> */}

                {/* <ReactMediaRecorder /> */}
                <div>
                    <Webcam
                        audio={false}
                        // height = { 450 } 
                        screenshotFormat="image/jpeg"
                        width={700}
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default Demo_3;