import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Resizer from 'react-image-file-resizer';
import '../static/css/Selectpicture.css';
import Footer from './Footer';
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
  
  useEffect(() => {
    window.sessionStorage.clear();
  })

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
    // 이미지 크기 조정
    Resizer.imageFileResizer(
      file,
      1500,  // 너비 (조절 가능)
      1500,  // 높이 (조절 가능)
      'JPEG', // 형식
      100, // 품질
      0, // 회전
      (uri) => {
        const resizedFile = dataURLtoFile(uri, file.name);
        setFileInfo(resizedFile);
        setStoreFile(resizedFile);
      },
      'base64'
    );
  };

// base64 문자열을 File 객체로 변환하는 도우미 함수
  const dataURLtoFile = (dataURL, fileName) => {
    const arr = dataURL.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
  
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
  
    return new File([u8arr], fileName, { type: mime });
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
      const imagePaths = response.data.image_paths;
      const imageUrl = uploadedInfo.imageUrl;

      window.sessionStorage.setItem("result",result);
      window.sessionStorage.setItem("subImagePath1",imagePaths[0]);
      window.sessionStorage.setItem("subImagePath2",imagePaths[1]);
      window.sessionStorage.setItem("subImagePath3",imagePaths[2]);
      window.sessionStorage.setItem("subImagePath4",imagePaths[3]);
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
        <div className='select_box'>
          <div>
            <h2>하늘 사진 입력</h2>
          </div>
        

          <div className='picture_label'>
            <div  className={`fileSelect${isActive ? 'active':''}`}
                    onDragEnter={handleDragstart}
                    onDragLeave={handleDragEnd}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}>

                <label> 
                  <input key = {uploadedInfo} id="fileUpload" type='file' accept="image/*" onChange={handleUpload}/>
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
              
            <div className='pictureInput_agree'>
              <p>파일이 Sky to Solar서버에서 안전하게 처리됩니다.</p>
              <p>이 서비스를 사용하면 Sky to Solar <span>사용 약관</span>에 동의하게 됩니다.</p>
            </div>
          </div>
        </div>
      </section>
     
    </div>

  );
}

export default Selectpicture;
