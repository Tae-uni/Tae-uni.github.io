import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 z-50 bg-purple-400/40 text-white p-3 rounded-full shadow-lg hover:bg-purple-800 transition-transform duration-300"
        >
          <FaArrowUp size={9} className="sm:size-4" />
        </button>
      )}
    </>
  );
};

export default ScrollTopButton;