import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../static/css/Result.css";
import Footer from "./Footer";
import Header from './Header';
function Result() {
    const nav = useNavigate();

    // sessionStorage에 값이 없을 시 업로드 페이지로 이동
    useEffect(() => {
        const res =  sessionStorage.getItem("result");
	    const sub1 = sessionStorage.getItem("subImagePath1");
        const sub2 = sessionStorage.getItem("subImagePath2");
        const sub3 = sessionStorage.getItem("subImagePath3");
        const sub4 = sessionStorage.getItem("subImagePath4");
        const imgUrl = sessionStorage.getItem("imageUrl");

        if (!res || !sub1 || !sub2 || !sub3 || !sub4 || !imgUrl) {
            alert("사진 업로드를 먼저 진행해주세요");
            nav("/input");
        }
    });

    // 버튼 onClick 하면 사진 입력 페이지로
    function btnClick(e){
        window.location.href="/Input"
    }

    // 다른 로직에서 sessionStorage값을 사용하기 위한 변수 선언
    const [wat, setWat] = useState('');
    const [subImg1, setSubImage1] = useState('');
    const [subImg2, setSubImage2] = useState('');
    const [subImg3, setSubImage3] = useState('');
    const [subImg4, setSubImage4] = useState('');
    const [img, setImage] = useState('');

    // 결과 페이지 실행 시 Selectpicture.js에서 저장한 sessionStorage 값을 useState 변수에 저장
    useEffect(() => {
        setWat(window.sessionStorage.getItem("result"));
	    setSubImage1(window.sessionStorage.getItem("subImagePath1"));
        setSubImage2(window.sessionStorage.getItem("subImagePath2"));
        setSubImage3(window.sessionStorage.getItem("subImagePath3"));
        setSubImage4(window.sessionStorage.getItem("subImagePath4"));
        setImage(window.sessionStorage.getItem("imageUrl"));
    },[]);

    // Category의 일사량 범위 계산
    // ============================== 계산식 ==============================
    // wat_low = predict-1(predict 범위의 최소값) * 500(bins 값)
    // wat_high = predict(predict 범위의 최대값) * 500(bins 값)
    // ※ predict가 존재하고 값이 1 ~ 14 일 시에 계산하고 아니면 0으로 설정
    // ===================================================================
    const wat_low = 0 < wat < 15 & wat != null? (wat-1)*500 : 0;
    const wat_high = 0 < wat < 15 & wat != null? wat*500 : 0;

    // 충전 가능한 건전지 개수 범위 계산
    // ============================== 계산식 ==============================
    // battery = mAh(용량) / 2850(에너자이저 AA 용량)
    //           mAh = 1000 * Wh(와트시) / V(건전지 전압)
    //                        Wh = W/m^2 * 0.1(태양광 패널 효율) * 60(1시간)
    // ===================================================================
    const battery_low = Math.round((1000*(wat_low*0.1*60)/1.5)/2850);
    const battery_high = Math.round((1000*(wat_high*0.1*60)/1.5)/2850);

    return (
        <div className="result_component">
            {/* 헤더 출력 */}
            <Header/>
            
            {/* 결과화면 main section */}
            <section>
               <div className="show_Image">
                
                    <div className="mainImage_box">
                        <div>
                            <h2>태양광 에너지 생산량 예측</h2>
                        </div>
        
                        <img src={img} className="main_image"/>
                    </div>
               </div>

                <div className="modal_container">
                    <div className="wrap_container">
                        <div className="sub_container">
                            <div className="sub_text">학습 결과와 유사한 데이터는 다음과 같아요.</div>

                            <div className="sub_image">
                                <div className="sub_image1">
                                    <img src={subImg1} />
                                </div>
                                
                                <div className="sub_image1">
                                    <img src={subImg2}/>
                                </div>

                                <div className="sub_image1">
                                    <img src={subImg3} />
                                </div>

                                <div className="sub_image1">
                                    <img src={subImg4} />
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
                                    충전 가능한 (AA) 건전지 개수는
                                </div>

                                <div className="use_energy_middle">
                                {battery_low || '0'} ~ {battery_high || '0'}
                                </div>

                                <div className="use_energy_bottom">
                                    개 입니다
                                </div>
                            </div>

                        </div>

                        <button className="reset" onClick={btnClick}>RESET</button>

                    </div>
                </div>
            </section>

            {/* 푸터 출력 */}

            <Footer/>
        </div>
    )
}

export default Result;