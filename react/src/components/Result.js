import React, { useEffect, useState } from "react";
import "../static/css/Result.css";

function Result() {
    const [wat, setWat] = useState('');
    const [img, setImage] = useState('');

    useEffect(() => {
        setWat(window.sessionStorage.getItem("result"));
        setImage(window.sessionStorage.getItem("imageUrl"));
        window.sessionStorage.clear();
    },[]);

    // 일조량 -> 건전지(에너자이저) 변환
    // (1000*(일사량*패널효율*시간)/건전지 전압)/건전지 용량
    const wat_low = (wat-1)*1000;
    const wat_high = wat*1000;

    const battery_low = Math.round((1000*(wat_low*0.1*60)/1.5)/2850);
    const battery_high = Math.round((1000*(wat_high*0.1*60)/1.5)/2850);

    return (
        <div className="result_component">
            <div className="logo_container">
                <a href="/">
                    <div className="logo"/>
                </a>
            </div>

            <div className="modal_container">
                <div className="wrap_container">
                    <div className="image_container">
                        <img src={img} className="main_image"/>

                        <div className="sub_container">
                            <div className="sub_text">※ 학습 결과와 유사한 데이터</div>

                            <div className="sub_image">
                                <div className="sub_image1"/>
                                {/* <img src={} className="sub_image1"/> */}
                                <div className="sub_image2"/>
                                <div className="sub_image3"/>
                                <div className="sub_image4"/>
                            </div>
                        </div>
                    </div>

                    <div className="result_container">
                        <div className="result_energy">
                            <div className="result_energy_top">
                                해당 사진의 일사량은
                            </div>

                            <div className="result_energy_middle">
                            {wat_low || '0'} ~ {wat_high || '0'} W/m²
                            </div>

                            <div className="result_energy_bottom">
                                로 예상됩니다
                            </div>
                        </div>

                        <div className="use_energy">
                            <div className="use_energy_top">
                                충전 가능한 건전지 개수는
                            </div>

                            <div className="use_energy_middle">
                            {battery_low || '0'} ~ {battery_high || '0'}
                            </div>

                            <div className="use_energy_bottom">
                                개 입니다
                            </div>
                        </div>
                    </div>

                    <div className="reset">
                        <a href="/" className="reset_button">Reset</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Result;