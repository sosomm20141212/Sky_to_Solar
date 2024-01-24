import React, { useEffect, useRef, useState } from "react";

const FullPageScroll = ({ children, onLoad = () => {}, onPageChange = () => {} }) => {
  const outerDivRef = useRef(null);
  const currentPage = useRef(0);
  const canScroll = useRef(true);
  const oldTouchY = useRef(0);
  const [_, refresh] = useState(0);

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

  const scrollHandler = (e) => {
    e.preventDefault();
  };

  const onTouchDown = (e) => {
    oldTouchY.current = e.changedTouches.item(0)?.clientY || 0;
  };

  const onTouchUp = (e) => {
    const currentTouchY = e.changedTouches.item(0)?.clientY || 0;
    const isScrollDown = oldTouchY.current - currentTouchY > 0 ? true : false;

    if (isScrollDown) {
      scrollDown();
    } else {
      scrollUp();
    }
  };

  useEffect(() => {
    const outer = outerDivRef.current;
    if (!outer) return;
    onLoad(outerDivRef.current.childElementCount);
    refresh((v) => v + 1);
    outer.addEventListener("wheel", wheelHandler);
    outer.addEventListener("scroll", scrollHandler);
    outer.addEventListener("touchmove", scrollHandler);
    outer.addEventListener("touchstart", onTouchDown);
    outer.addEventListener("touchend", onTouchUp);
    return () => {
      outer.removeEventListener("wheel", wheelHandler);
      outer.removeEventListener("scroll", scrollHandler);
      outer.removeEventListener("touchmove", scrollHandler);
      outer.removeEventListener("touchstart", onTouchDown);
      outer.removeEventListener("touchend", onTouchUp);
    };
  }, [onLoad]);

  

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

export default FullPageScroll;
