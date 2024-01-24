import { useEffect } from 'react';
import '../static/css/mainNav.css';

function Mainnav(props) {
    const mainNavOpenClose = ()=>{
        if(props.mainNavSwitch) {
            document.querySelector('.mainNav').style.transform = 'translateX(0px)'
        } else {
            document.querySelector('.mainNav').style.transform = 'translateX(250px)'
        }
    }

    useEffect(()=>{
        mainNavOpenClose();
    }, [props.mainNavSwitch])

    return(
        <div className='mainNav'>
            <div className='mainNavXWrap'>
                <div className='mainNavX' onClick={()=>{props.setMainNavSwitch(false);}}>&#215;</div>
            </div>
            <div className='mainNavMenu'>
                <p>1. 하늘을 찍어 태양광 에너지를 예측해보세요</p>
                <p>2. 하늘 사진으로 태양광 에너지를 예측할 수 있어요</p>
                <p>3. 잠깐, 태양광 에너지는</p>
                <p>4. </p>
                <p>5. 지금 하늘 사진을 업로드해보세요</p>
            </div>
        </div>
    )
}

export default Mainnav;