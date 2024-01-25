import React, { useEffect, useRef, useState } from "react";

// FullPageScroll 컴포넌트 정의
const FullPageScroll = ({ children, onLoad = () => {}, onPageChange = () => {} }) => {
  // useRef를 사용하여 DOM 요소에 접근할 수 있는 참조 변수들 선언
  const outerDivRef = useRef(null);
  const currentPage = useRef(0);
  const canScroll = useRef(true);
  const oldTouchY = useRef(0);
  const [_, refresh] = useState(0);

  // 아래로 스크롤하는 함수
  const scrollDown = () => {
    const pageHeight = outerDivRef.current?.children.item(0)?.clientHeight;
    if (outerDivRef.current && pageHeight) {
      outerDivRef.current.scrollTo({
        top: pageHeight * (currentPage.current + 1),
        left: 0,
        behavior: "smooth",
      });
      canScroll.current = false;
      setTimeout(() => {
        canScroll.current = true;
      }, 500);
      if (outerDivRef.current.childElementCount - 1 > currentPage.current) {
        currentPage.current++;
      }
    }
    console.log(currentPage.current);
    onPageChange(currentPage.current);
    refresh((v) => v + 1);
  };

  // 위로 스크롤하는 함수
  const scrollUp = () => {
    const pageHeight = outerDivRef.current?.children.item(0)?.clientHeight;
    if (outerDivRef.current && pageHeight) {
      outerDivRef.current.scrollTo({
        top: pageHeight * (currentPage.current - 1),
        left: 0,
        behavior: "smooth",
      });
      canScroll.current = false;
      setTimeout(() => {
        canScroll.current = true;
      }, 500);
      if (currentPage.current > 0) currentPage.current--;
    }
    console.log(currentPage.current);
    onPageChange(currentPage.current);
    refresh((v) => v + 1);
  };

  // 휠 이벤트 핸들러
  const wheelHandler = (e) => {
    e.preventDefault();
    if (!canScroll.current) return;
    const { deltaY } = e;
    console.log("scroll to", outerDivRef.current?.scrollHeight);
    if (deltaY > 0 && outerDivRef.current) {
      scrollDown();
    } else if (deltaY < 0 && outerDivRef.current) {
      scrollUp();
    }
  };

  // 스크롤 이벤트 핸들러
  const scrollHandler = (e) => {
    e.preventDefault();
  };

  // 터치 다운 이벤트 핸들러
  const onTouchDown = (e) => {
    oldTouchY.current = e.changedTouches.item(0)?.clientY || 0;
  };

  // 터치 업 이벤트 핸들러
  const onTouchUp = (e) => {
    const currentTouchY = e.changedTouches.item(0)?.clientY || 0;
    const isScrollDown = oldTouchY.current - currentTouchY > 0 ? true : false;

    if (isScrollDown) {
      scrollDown();
    } else {
      scrollUp();
    }
  };

  // useEffect를 사용하여 컴포넌트 생명주기 관리
  useEffect(() => {
    const outer = outerDivRef.current;
    if (!outer) return;
    
    // 외부에서 전달받은 onLoad 함수 호출 및 리렌더링
    onLoad(outerDivRef.current.childElementCount);
    refresh((v) => v + 1);
    
    // 이벤트 리스너 등록
    outer.addEventListener("wheel", wheelHandler);
    outer.addEventListener("scroll", scrollHandler);
    outer.addEventListener("touchmove", scrollHandler);
    outer.addEventListener("touchstart", onTouchDown);
    outer.addEventListener("touchend", onTouchUp);
    
    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      outer.removeEventListener("wheel", wheelHandler);
      outer.removeEventListener("scroll", scrollHandler);
      outer.removeEventListener("touchmove", scrollHandler);
      outer.removeEventListener("touchstart", onTouchDown);
      outer.removeEventListener("touchend", onTouchUp);
    };
  }, [onLoad]);

  // JSX로 구성된 FullPageScroll 컴포넌트 반환
  return (
    <>
      <div
        ref={outerDivRef}
        style={{ height: "100vh", width: "100%", overflowY: "hidden" }}
      >
        {children}
      </div>
    </>
  );
};

// FullPageScroll 컴포넌트를 외부에서 사용할 수 있도록 내보냄
export default FullPageScroll;
