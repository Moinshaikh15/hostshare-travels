import Header from "./components/layout/Header";
import { Route, Routes } from "react-router-dom";
import Index from "./components/pages/Index";
import SearchResult from "./components/pages/SearchResult";
import Listing from "./components/pages/Listing";
import { useEffect, useState } from "react";
function App() {
  const [scrollbarWidth, setScrollbarWidth] = useState(0);

  useEffect(() => {
    const measureScrollbar = () => {
      const scrollDiv = document.createElement("div");
      scrollDiv.style.width = "100px";
      scrollDiv.style.height = "100px";
      scrollDiv.style.overflow = "scroll";
      scrollDiv.style.position = "absolute";
      scrollDiv.style.top = "-9999px";
      document.body.appendChild(scrollDiv);
      const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      setScrollbarWidth(scrollbarWidth);
    };

    measureScrollbar();

    window.addEventListener("resize", measureScrollbar);
    return () => {
      window.removeEventListener("resize", measureScrollbar);
    };
  }, []);
  return (
    <div
      className={`min-h-screen flex flex-col`}
      style={{
        width: `cal(100vh-${scrollbarWidth}px)`,
      }}
    >
      <Header />

      <div className="w-full flex-1 flex justify-center items-start px-[5.1vw] mt-[84px] max-sm:mt-0  max-sm:px-0 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/s/:city" element={<SearchResult />} />
          <Route path="/rooms/:id" element={<Listing />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
