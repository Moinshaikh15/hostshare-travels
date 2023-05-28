import React, { useEffect, useState } from "react";

export default function BottomBar() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <div
      className={`w-full h-16 fixed bottom-0 left-0 bg-white z-20 flex justify-center items-center gap-6 sm:hidden ${
        visible ? "" : "hidden"
      } animate-[bottomUp_0.2s_ease-in-out_forwards]`}
    >
      <div className="flex flex-col justify-center items-center">
        <img
          src="/assets/icons/search.png"
          alt=""
          className="w-8 invert-[40%] "
        />
        <p className="text-xs">Explore</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img
          src="/assets/icons/heart2.png"
          alt=""
          className="w-8 invert-[40%] p-1"
        />
        <p className="text-xs">wishlists</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img
          src="/assets/icons/person.png"
          alt=""
          className="w-8 invert-[40%] "
        />
        <p className="text-xs">Log in</p>
      </div>
    </div>
  );
}
