import { useEffect } from 'react';
import '../static/css/header.css';

import stsLogoImg from '../static/images/stsLogoImg.png'

function Header() {

    // 로고 img onClick하면 다시 첫 시작 페이지로 
    function btnClick(e){
        window.location.href="/"
    }

    return(
        <div className='header'>
            <div className='headerWrap'>
                <img className='headerLogo' src={stsLogoImg} onClick={btnClick}/>
            </div>
        </div>
    )
}

export default Header;