import { useState, useRef, useEffect } from 'react';

import {Fade, Zoom, Slide} from 'react-reveal';


import '../static/css/scroll.css';
import '../static/css/main.css';
import FullPageScroll from "./FullPageScroll";
import main2Img from '../static/images/main2Img.jpg';
import main3Img from '../static/images/main3Img.jpg';
import main4Img from '../static/images/main4Img.jpg';
import logo from '../static/images/logo.png';

function Main() {
 
    function btnClick(e){
        window.location.href="/Input"
    }
    
    return(
        <div className='app'>
     
                <FullPageScroll>
                    <div className="bg section">
                        <div className='main1 mainContainer'>
                            <img className='main1Logo' src={logo}></img>
                            <p className='main1Content'>하늘을 찍어 태양광 에너지를 예측해보세요</p>
                            <button className='main1StartBtt' onClick={btnClick}>시작하기</button>
                            
                            {/* 스크롤 다운 화살표 */}
                            <div className= "scrolldown_Btn">
                                <span>scroll down</span>
                                {/* <span></span> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="17.679" height="34.092" viewBox="0 0 17.679 34.092">
                                    <path id="scroll-arrow-black" d="M-1195-800.91h0l-.946-.947-7.893-7.892,1.061-1.061,7.033,7.034V-835h1.5v31.214l7.024-7.024,1.061,1.06-7.779,7.779,0,0-1.06,1.06Z" transform="translate(1203.841 835)" fill="white" stroke-width="10"/>
                                </svg>
                            </div>
                            
                        </div>
                    </div>


                    <div className="bg section">
                        <div className='main2 mainMargin mainContainer'>
                            <Fade left duration={2000}> {/* 스크롤 내리면 섹션에 애니메이션 */}
                                <img className='main2Img scrollAnimation1' src={main2Img}></img>
                            </Fade>
                            <div className='main2Txt'>
                                <Fade down duration={2000} delay={500}>
                                    <div className='main2TxtTitle scrollAnimation2'>
                                        <div className='main2TxtTitle1'>
                                            <p className='main2TxtTitlePoint main2TxtTitle1PointColor'>하늘 사진</p>
                                            <p>으로 </p>
                                        </div>
                                        <div className='main2TxtTitle2'>
                                            <p className='main2TxtTitlePoint main2TxtTitle2PointColor'>태양광 에너지</p>
                                            <p>를 예측할 수 있어요</p>
                                        </div>
                                    </div>
                                </Fade>

                                <div className='main2Txtcontent scrollAnimation3'>
                                    <Fade duration={2000} delay={1000}>
                                        <p>1. <strong>전천 사진을 촬영</strong>해요.</p>
                                        <br/>
                                    </Fade>
                                    <Fade duration={2000} delay={1250}>
                                        <p>2. <strong>이미지 프로세싱 처리</strong>를 해요.</p>
                                        <br/>
                                    </Fade>
                                    <Fade duration={2000} delay={1500}>
                                        <p>3. 위도, 경도, 일시를 이용하여 <strong>태양광 위치를 계산</strong>하고</p>
                                        <p>&nbsp;&nbsp;&nbsp;<strong>태양 주변 영역을 설정</strong>해요.</p>
                                        <br/>
                                    </Fade>
                                    <Fade duration={2000} delay={1750}>
                                        <p>4. <strong>영역별 운량을 계산</strong>해요.&#40;구름 픽셀수 / 전체 픽셀 수&#41;</p>
                                        <br/>
                                    </Fade>
                                    <Fade duration={2000} delay={2000}>
                                        <p>5. 영역별 운량에 <strong>가중치를 적용</strong>하고 <strong>전체 운량을 계산</strong>해요.</p>
                                        <br/>
                                    </Fade>
                                    <Fade duration={2000} delay={2250}>
                                        <p>6. 위도, 경도, 일시를 이용하여 <strong>청천공 일사량을 계산</strong>하고</p> 
                                        <p>&nbsp;&nbsp;&nbsp;<strong>상기 계산한 운량과 일사량 공식에 적용</strong>하여 일사량을 추정해요.</p>
                                    </Fade>
                                </div>
                            </div>
                         </div>
                    </div>

                    <div className="bg section main3Warp">
                        <div className='main3 mainMargin mainContainer'>
                            <div className='main3Txt'>
                                <Fade down duration={2000} delay={500}>
                                    <div className='main3TxtTitle'>
                                        <p>잠깐,&nbsp;</p>
                                        <p className='main3TxtTitlePoint'>태양광 에너지&nbsp;</p>
                                        <p>는</p>
                                    </div>
                                </Fade>
                                <div className='main3Txtcontent'>
                                    <Fade duration={2000} delay={1000}>
                                        <p>태양의 <strong>빛 에너지</strong>를 <strong>광전효과</strong>를 통해 <strong>전기 에너지</strong>로 변환한 에너지예요.<br/></p>
                                        <br/><br/>
                                    </Fade>
                                    <Fade duration={2000} delay={1250}>
                                        <p>태양광 에너지를 만들기 위한 태양광 발전의 종류로는</p>
                                        <p><strong>계통연계형</strong>, <strong>독립형</strong>, <strong>하이브리드&#40;계통연계형 + 독립형&#41;</strong>가 있어요.<br/></p>
                                        <br/><br/>
                                    </Fade>
                                    <Fade duration={2000} delay={1500}>
                                        <p>또한 태양광 에너지는</p>
                                        <p><strong>장소 제한↓</strong>, <strong>연료비 x</strong>, <strong>수명↑</strong>, <strong>자동화 o</strong>, <strong>유지&middot;보수 용이</strong>라는 장점이 있답니다.<br/></p>
                                    </Fade>
                                </div>
                            </div>
                            <Fade right duration={2000}>
                               <img className='main3Img' src={main3Img}></img>
                            </Fade>
                        </div>                        
                    </div>
                    <div className="bg section">
                        <div className='main4 mainMargin mainContainer'>
                            <Fade left duration={2000}>
                                <img className='main4Img' src={main4Img}></img>
                            </Fade>
                            <div className='main4Txt'>
                                <Fade down duration={2000} delay={500}>
                                    <div className='main4TxtTitle'>
                                        <div className='main4TxtTitle1'>
                                            <p className='main4TxtTitle1Point'>태양광 에너지</p>
                                            <p>는&nbsp;</p>
                                        </div>
                                        <div className='main4TxtTitle2'>
                                            <p className='main4TxtTitle2Point'>어떻게</p>
                                            <p>&nbsp;쓰일까요?</p>
                                        </div>
                                    </div>
                                </Fade>
                                <div className='main4TxtContent'>
                                    <Fade duration={2000} delay={1000}>
                                        <p>야외활동에서 전기가 필요한데 전선이 없다면,</p>
                                        <br/>
                                        <p><strong>→ 태양광 핸드폰 충전기</strong>, <strong>태양광 우산</strong>, <strong>태양광 핸드백</strong></p>
                                        <br/><br/>
                                    </Fade>
                                    <Fade duration={2000} delay={1250}>
                                        <p>독립형 태양광 조명장치로,</p>
                                        <br/>
                                        <p><strong>→ 지하등</strong>, <strong>수상등</strong>, <strong>가로등</strong>, <strong>경광등</strong></p>
                                        <br/><br/>
                                    </Fade>
                                    <Fade duration={2000} delay={1500}>
                                        <p>태양광을 이용하여 도로 표시에 사용되는,</p>
                                        <br/>
                                        <p><strong>→ 교통 신호등</strong>, <strong>도로 표지등</strong>, <strong>일반 경고등</strong></p>
                                        <br/><br/>
                                    </Fade>
                                    <Fade duration={2000} delay={1750}>
                                        <p>이 외에도 <strong>태양광 에너지</strong>는 <strong>어느 곳에서나 다양하게</strong> 쓰이고 있어요.</p>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg section">
                        <Fade duration={2000}>
                        <div className='main5 mainMargin mainContainer'>
                            <Fade duration={2000} delay={500}>
                                <div className='main5Txt'>
                                    지금 하늘 사진을 업로드해보세요
                                </div>
                            </Fade>
                            <Fade duration={2000} delay={500}>
                                <button className='main5StartBtt' onClick={btnClick}>시작하기</button>
                            </Fade>
                        </div>
                        </Fade>
                    </div>
                </FullPageScroll>
                
        </div>
    )
}

export default Main;
