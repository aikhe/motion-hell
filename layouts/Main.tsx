import { useEffect } from "react";
import Lenis from "lenis";

import MainPage from "../pages/main";

function Main() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <>
      <MainPage />
    </>
  );
}

export default Main;
