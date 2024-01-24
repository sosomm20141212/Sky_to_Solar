import { useState, useRef } from 'react';

import '../static/css/scroll.css';
import '../static/css/main.css';
import FullPageScroll from "./FullPageScroll";
import main2Img from '../static/images/main2Img.jpg';
import main3Img from '../static/images/main3Img.jpg';
import main4Img from '../static/images/main4Img.jpg';

function Main() {
    // const [mainNavSwitch, setMainNavSwitch] = useState(false);
    function btnClick(e){
        window.location.href="/Input"
    }
    return(
        <div className='app'>
           {/* <MainApp></MainApp> */}
     
                <FullPageScroll>
                    <div className="bg section">
                        <div className='main1 mainContainer' >
                            <p className='main1Content'>하늘을 찍어 태양광 에너지를 예측해보세요</p>
                            <button className='main1StartBtt' onClick={btnClick}>시작하기</button>
                        </div>
                    </div>

                    <div className="bg section">
                        <div className='main2 mainMargin mainContainer'>
                            <img className='main2Img' src={main2Img}></img>
                            <div className='main2Txt'>
                                <div className='main2TxtTitle'>
                                    <div className='main2TxtTitle1'>
                                        <p className='main2TxtTitlePoint main2TxtTitle1PointColor'>하늘 사진</p>
                                        <p>으로 </p>
                                    </div>
                                    <div className='main2TxtTitle2'>
                                        <p className='main2TxtTitlePoint main2TxtTitle2PointColor'>태양광 에너지</p>
                                        <p>를 예측할 수 있어요</p>
                                    </div>
                                </div>

                                <div className='main2Txtcontent'>
                                    <p><strong>원리</strong>를 간단히 살펴보면,</p>
                                    <br/><br/>
                                    <p>1. <strong>전천 사진을 촬영</strong>해요.</p>
                                    <br/>
                                    <p>2. <strong>이미지 프로세싱 처리</strong>를 해요.</p>
                                    <br/>
                                    <p>3. 위도, 경도, 일시를 이용하여 <strong>태양광 위치를 계산</strong>하고 <strong>태양 주변 영역&#40;영역 1&#41;을 설정</strong>해요.</p>
                                    <br/>
                                    <p>4. <strong>영역별 운량을 계산</strong>해요.&#40;구름 픽셀수 / 전체 픽셀 수&#41;</p>
                                    <br/>
                                    <p>5. 영역 1의 운량에 <strong>가중치를 적용</strong>하고 수학식 5를 통해 <strong>전체 운량을 계산</strong>해요.</p>
                                    <br/>
                                    <p>6. 위도, 경도, 일시를 이용하여 <strong>청천공 일사량을 계산</strong>하고 <strong>상기 계산한 운량&#40;수학식 5&#41;과 일사량 공식&#40;수학식 3&#41;에 적용</strong>하여 <strong>일사량을 추정</strong>해요.</p>
                                </div>
                            </div>
                         </div>
                    </div>

                    <div className="bg section">
                        <div className='main3 mainMargin mainContainer'>
                        <div className='main3Txt'>
                            <div className='main3TxtTitle'>
                                <p>잠깐,&nbsp;</p>
                                <p className='main3TxtTitlePoint'>태양광 에너지&nbsp;</p>
                                <p>는</p>
                            </div>
                            <div className='main3Txtcontent'>
                                <p>태양의 <strong>빛 에너지</strong>를 <strong>광전효과</strong>를 통해 <strong>전기 에너지</strong>로 변환한 에너지예요.<br/></p>
                                <br/><br/>
                                <p>태양광 에너지를 만들기 위한 태양광 발전의 종류로는</p>
                                <p><strong>계통연계형</strong>, <strong>독립형</strong>, <strong>하이브리드&#40;계통연계형 + 독립형&#41;</strong>가 있어요.<br/></p>
                                <br/><br/>
                                <p>또한 태양광 에너지는</p>
                                <p><strong>장소 제한↓</strong>, <strong>연료비 x</strong>, <strong>수명↑</strong>, <strong>자동화 o</strong>, <strong>유지&middot;보수 용이</strong>라는 장점이 있답니다.<br/></p>
                            </div>
                        </div>
                            <img className='main3Img' src={main3Img}></img>
                        </div>                        
                    </div>
                    <div className="bg section">
                        <div className='main4 mainMargin mainContainer'>
                        <img className='main4Img' src={main4Img}></img>
                            <div className='main4Txt'>
                            test text
                            </div>
                        </div>
                    </div>

                    <div className="bg section">
                        <div className='main5 mainMargin mainContainer'>
                            <div className='main5Txt'>
                                지금 하늘 사진을 업로드해보세요
                            </div>
                            <button className='main5StartBtt' onClick={btnClick}>시작하기</button>
                        </div>
                    </div>
                </FullPageScroll>
      
        </div>
    )
}

export default Main;
