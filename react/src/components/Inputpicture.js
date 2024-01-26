import React from 'react';
import '../static/css/Inputpicture.css';
import Footer from './Footer';
import Header from './Header';
import Selectpicture from './Selectpicture';

function Inputpicture() {
  return (
    <div className='InputPicture'>
       {/* 헤더 출력 */}
        <Header/>

        {/* 사진 입력 부분 */}
        <Selectpicture/>
     
      {/* 사진 입력 main section */}
        <section className='InputPicture_section'>
             {/* 사진 입력에 대한 방법 및 예시 소개 */}
          <article className='InputPicture_article'>
            <div className='howtoInput_head'>
              <div className='howtoInput_title'>
                <h3>온라인에서 하늘 사진을 입력하여 태양광 에너지 생산량 예측하는 방법</h3>
                <div>Sky to Solar로 하늘 사진의 태양광 에너지 생산량을 보려면 아래의 간단한 단계를 따라해보세요.</div>
              </div>
              
              <ol className='howtoInput_ol'>
                <li><div>상단의 사진 파일 선택 버튼을 클릭하거나 사진 파일을 드래그하여 드롭 영역에 놓습니다.</div></li>
                <li><div>선택한 사진 파일을 확인 한 후 결과보기 버튼을 누릅니다.</div></li>
                <li><div>Sky to Solar 가 해당 하늘 사진의 태양광 에너지 생산량을 예측합니다.</div></li>
              </ol>
              <div>사진입력 제약조건 : 어안렌즈로 촬영된 하늘 사진</div>
            </div>

            {/*  사진 입력 제약조건 및 변경 사이트 연결  */}
            <div className='howtoInput_footer'>
              <div className='howtoInput_image'>
                    <picture>
                      <div id="howtoInput_imgex"/>
                    </picture>
              </div>

              <div className='howtoInput_imgUrl'>
                <h4>입력할 사진을 어안렌즈 사진으로 변경해보세요.</h4>
                <ul>
                  <li>로그인하지 않아도 사진 변경 가능</li>
                  <li>파일입력, url입력으로 손쉬운 사진 입력</li>
                  <li>어안렌즈로 편집 기능 무료</li>
                </ul>
                <button onClick={()=>window.open("https://www5.lunapic.com/editor/?action=fisheye")}>
                  어안렌즈로 사진 변경하러 가기
                </button>
              </div>
            </div>
          </article>
        </section>

     {/* 푸터 출력 */}
      <Footer/>
    </div>
  );
}

export default Inputpicture;
