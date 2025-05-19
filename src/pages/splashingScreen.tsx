import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD

=======
>>>>>>> 22cd1869760a031fefe2a0ed301f5695a1f3ab5b

export const SplashingScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-black relative">
<<<<<<< HEAD

=======
>>>>>>> 22cd1869760a031fefe2a0ed301f5695a1f3ab5b
        {/* Logo*/}
        <div className="flex flex-col items-center">
          <img src="/logo.png" alt="spotidados logo" className="w-64 h-auto" />
        </div>
      </div>
    </>
  );
};
