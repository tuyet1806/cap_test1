import React, { useState, useRef, useCallback } from "react";
import Webcam from "react-webcam";
import axios from "axios";
import '../style/Camera.css';
import { FcCamera } from "react-icons/fc";
import { FcRedo } from "react-icons/fc";
import { FcOk } from "react-icons/fc";


const videoConstraints = {
    facingMode: 'user'
};

const Camera = () => {
    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);
    const [submit, setSubmit] = useState(false);

    //현재 webcam 이미지의 base64 인코딩 문자열 반환
    const onCapture = useCallback(()=> {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
        setSubmit(true);
    },[webcamRef]);


    //axios를 사용하여 이미지파일 서버 전송
    async function onUpload () {
        const img = new FormData();
        img.append("image",imgSrc);
        await axios.post( '/upload.do',img,{

            //url:"http://localhost:8000/Capture",
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    }

    //재촬영 
    const onRetake = () => {
        setImgSrc(null);
        setSubmit(false);
    };

    return (
        <div className="Wrapper1">
            
            {imgSrc ? (
                <img src={imgSrc} alt="webcam" />
            ):(
                <Webcam className="webcamstyle"
                    audio={false}
                    height={1280}
                    width={600}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                 />

                 

            )}
            <div>
              {imgSrc ? (
                <FcRedo className="redostyle" onClick={onRetake}>재촬영</FcRedo>
              ) : (
                <FcCamera className="capturestyle"onClick={onCapture} onChange={onUpload}>촬영</FcCamera>
              )}
                {submit && (
                 <FcOk className="submitstyle" onClick={onUpload}>제출</FcOk>
              )}
                </div>
            </div>
    );
};

export default Camera;