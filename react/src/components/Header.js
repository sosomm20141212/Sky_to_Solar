import { useEffect } from 'react';
import '../static/css/header.css';

import stsLogoImg from '../static/images/stsLogoImg.png'

function Header(props) {
    // const navHide = ()=>{
    //     if(props.mainNavSwitch) {
    //         document.querySelector('.headerNav').style.display = 'none'
    //     } else {
    //         document.querySelector('.headerNav').style.display = 'block'
    //     }
    // }

    // useEffect(()=>{
    //     navHide();
    // }, [props.mainNavSwitch])

    return(
        <div className='header'>
            <div className='headerWrap'>
                <img className='logo' src={stsLogoImg}></img>
                {/* <svg className='headerNav bi bi-list' onClick={()=>{props.setMainNavSwitch(true);}} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg> */}
            </div>
        </div>
    )
}

export default Header;