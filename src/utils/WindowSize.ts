import { useEffect, useState } from "react";

function getWindowDimensions() {
  if (typeof window !== "undefined") {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
  }
  // Provide a fallback for SSR, where window is undefined
  return { width: 0, height: 0 };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      // Set initial dimensions once the component is mounted
      setWindowDimensions(getWindowDimensions());
    }

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
