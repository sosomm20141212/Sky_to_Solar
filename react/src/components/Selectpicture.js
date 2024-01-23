import axios from 'axios';
import React, { useState } from 'react';
import '../static/css/Selectpicture.css';

// 사진 로고 (추후 svg path 수정 가능)
const InputfileLogo = ()=>(
  <svg class = "InputfileLogo" aria-label="새로운 파일" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
    <path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line>
  </svg>
);

function Selectpicture() {
  const [isActive, setActive] = useState(false);
  const handleDragstart = () => setActive(true);
  const handleDragEnd = () => setActive(false);
  const [uploadedInfo, setUploadedInfo] = useState(null); // 미리보기 이미지의 데이터
  const [storeFile,setStoreFile] = useState(null); // 저장할 이미지의 데이터 
  

  
  const handleDragOver = (e)=>{
    e.preventDefault();
  };

  // 입력상자에 사진을 드래그앤 드롭으로 입력
  const handleDrop = (e)=>{
    // console.log(e);
    e.preventDefault();
    setActive(false);
    const file = e.dataTransfer.files[0]; 
    setFileInfo(file);
    setStoreFile(file);
    console.log(e.dataTransfer);
  };

  // 입력 상자 클릭 후 사진 입력
  const handleUpload = (e) =>{
    console.log(e);
    const file = e.target.files[0];
    console.log(e.target.files[0]);
    setFileInfo(file);
    setStoreFile(file);
  };

  // 파일 정보 set
  const setFileInfo = (file) => {
    const{name, size:byteSize, type}=file;
    const isImage = type.includes('image');
    const size = (byteSize/(1024*1024)).toFixed(2)+'mb';

    if (!isImage) {
      setUploadedInfo({name, size, type});
      return;
    }
    const reader = new FileReader();
    
    reader.onload = () => {
      setUploadedInfo({ name, size, type, imageUrl: String(reader.result)}); // 비트맵 데이터 리턴(이 데이터로 사진 미리보기 구현)
      // console.log({ name, size, type, imageUrl: String(reader.result)});
    };
    reader.readAsDataURL(file);
    
  };
  
  // 파일 저장 (결과 확인)
  const ImageSave = async()=>{
    try {
      console.log(uploadedInfo);
      console.log(storeFile);

      const data = new FormData();
      data.append("imageUrl", uploadedInfo.imageUrl);
      data.append("fileName", uploadedInfo.name);
      data.append("file",storeFile);

      console.log(...data);
      // await axios.post("/image",data);

      const response = await axios.post("http://10.10.21.64:8000/api/result",data,{
        headers:{
          "Content-Type": "multipart/form-data",
        },
      });
      const result = response.data.result;
      const imageUrl = uploadedInfo.imageUrl;

      window.sessionStorage.setItem("result",result);
      window.sessionStorage.setItem("imageUrl",imageUrl);
      
      window.location.href="/result";
    }
    catch (e) {
      console.error("1",e);
      throw e;
    }
  };

  return (
    <div className='select_picture'>
      <section>
        <div>
          <div>
            <h2>하늘 사진 입력</h2>
          </div>
        </div>

        <div  className={`fileSelect${isActive ? 'active':''}`}
              onDragEnter={handleDragstart}
              onDragLeave={handleDragEnd}
              onDragOver={handleDragOver}
              onDrop={handleDrop}>

          <label> 
            <input id="fileUpload" type='file' accept="image/*" onChange={handleUpload}/>
                {uploadedInfo &&( 
                  <>
                    <div className="preview_info">
                        <div>
                          <img src = {uploadedInfo.imageUrl} className='showPicture'/> 
                        </div>
                          <button onClick={(e) => {
                            ImageSave();
                            e.preventDefault();
                          }}> 결과 확인 </button>
                    </div>
                  </>
                )}

                {!uploadedInfo&&( 
                  <>
                    <div>사진 파일 선택</div>
                    <div><InputfileLogo/></div>
                    <div>클릭 혹은 파일을 이곳에 드롭하세요.</div>
                  </>
                )}
          </label>
        </div>
      
      </section>

    </div>

  );
}

export default Selectpicture;
