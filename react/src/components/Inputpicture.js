import React from 'react';
import '../static/css/Inputpicture.css';
import Selectpicture from './Selectpicture';

function Inputpicture() {
  return (
    <div className='InputPicture'>
        {/* 사진 입력 부분 */}
        <Selectpicture/>
     
        {/* 사진 입력에 대한 방법 및 예시 소개 */}
        <div className='howtoInput_head'>
          <h3>온라인에서 하늘 사진을 입력하여 태양광 에너지 생산량 예측하는 방법</h3>
          <div>Sky to Solar로 하늘 사진의 태양광 에너지 생산량을 보려면 아래의 간단한 단계를 따라해보세요.</div>
          <ol className='howtoInput_ol'>
            <li>상단의 사진 파일 선택 버튼을 클릭하거나 사진 파일을 드래그하여 드롭 영역에 놓습니다.</li>
            <li>선택한 사진 파일을 확인 한 후 결과보기 버튼을 누릅니다.</li>
            <li>Sky to Solar 가 해당 하늘 사진의 태양광 에너지 생산량을 예측합니다. </li>
          </ol>

          <div className='hoswtoInput_image'>
              <picture>
                <img id="howtoInput_imgex" src ="https://storage.googleapis.com/kaggle-datasets-images/2889089/4981421/859e595f270ce579c4875676851b0fd2/dataset-cover.jpg?t=2023-02-13-18-55-24" />
              </picture>
          </div>
        </div>

        {/*  사진 입력 제약조건 및 변경 사이트 연결  */}
        <div>
          <div> 사진 입력 제약조건 : 어안 렌즈로 촬영된 하늘 사진</div>          
            <button onClick={()=>window.open("https://www5.lunapic.com/editor/?action=fisheye")}>
              어안렌즈로 사진 변경사이트
            </button>
        </div>
    </div>
  );
}

export default Inputpicture;
