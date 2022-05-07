import { useEffect, useState } from "react";

const useResize = () => {
  const [winSize, setWinSize] = useState({ width: 0, height: 0 });
  const handleResize = () => {
    setWinSize({ width: window.innerWidth, height: window.innerHeight });
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return winSize;
};

export default useResize;
