import { useDispatch } from "react-redux";
import { userOnBoarded } from "../state/client";
const Introduction = () => {
  const dispatch = useDispatch();
  const handleOnboarding = () => {
    dispatch(userOnBoarded());
  };
  return (
    <div className=" text-white pb-8 flex flex-col h-screen justify-center items-center">
      <h1 className="text-5xl font-bold text-center">Tweak</h1>
      <h2 className="text-gray-300 text-lg pt-4 pb-4 text-center">
        Lightweight and powerful notes.
      </h2>
      <button
        onClick={handleOnboarding}
        className="bg-slate-900/40 px-4 py-4 rounded-md font-medium"
      >
        Get started using Tweak
      </button>
    </div>
  );
};

export default Introduction;
