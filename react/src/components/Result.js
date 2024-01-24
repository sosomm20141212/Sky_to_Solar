import React, { useEffect, useState } from "react";
import "../static/css/Result.css";
import Footer from "./Footer";
function Result() {

    function btnClick(e){
        window.location.href="/Input"
    }

    const [wat, setWat] = useState('');
    const [subImg1, setSubImage1] = useState('');
    const [subImg2, setSubImage2] = useState('');
    const [subImg3, setSubImage3] = useState('');
    const [subImg4, setSubImage4] = useState('');
    const [img, setImage] = useState('');

    // Result 페이지가 뜨면 useEffect 내부의 로직 실행
    useEffect(() => {
        setWat(window.sessionStorage.getItem("result"));
	    setSubImage1(window.sessionStorage.getItem("subImagePath1"));
        setSubImage2(window.sessionStorage.getItem("subImagePath2"));
        setSubImage3(window.sessionStorage.getItem("subImagePath3"));
        setSubImage4(window.sessionStorage.getItem("subImagePath4"));
        setImage(window.sessionStorage.getItem("imageUrl"));
    },[]);

    // Category의 일사량 범위 계산
    const wat_low = (wat-1)*500;
    const wat_high = wat*500;

    // 충전 가능한 건전지 개수 범위 계산
    const battery_low = Math.round((1000*(wat_low*0.1*60)/1.5)/2850);
    const battery_high = Math.round((1000*(wat_high*0.1*60)/1.5)/2850);

    return (
        <div className="result_component">
            <section>

               <div className="show_Image">
                    <div className="mainImage_box">
                        <img src={img} className="main_image"/>
                    </div>
               </div>

                <div className="modal_container">
                    <div className="wrap_container">
                            <div className="sub_container">
                                <div className="sub_text">학습 결과와 유사한 데이터는 다음과 같아요</div>

                                <div className="sub_image">
                                    <img src={subImg1} className="sub_image1"/>
                                    <img src={subImg2} className="sub_image2"/>
                                    <img src={subImg3} className="sub_image3"/>
                                    <img src={subImg4} className="sub_image4"/>
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

                        <button className="reset" onClick={btnClick}>Reset</button>

                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Result;