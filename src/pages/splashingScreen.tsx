import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const SplashingScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-black">
        <div className="flex flex-col items-center">
          <img src="/Spoti.png" alt="spotidados logo" className="w-64 h-auto animate-pulse" />
        </div>
      </div>
    </>
  );
};
