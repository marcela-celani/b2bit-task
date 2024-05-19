import { useNavigate } from "react-router-dom";
import { goToLogin } from "../routes/Coordinator";
import { deleteStorageItem } from "../utils/tokenManager";

const NavBar = () => {
  const navigate = useNavigate();

  const handleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    deleteStorageItem("token");
    goToLogin(navigate);
  };

  return (
    <div className="bg-white w-full pr-7 flex justify-between items-center h-20">
      <div className="flex"></div>
      <div className="flex">
        <button
          onClick={handleButton}
          className="bg-blue w-72 h-11 px-6 py-6 rounded-lg text-light font-bold text-l flex items-center justify-center"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default NavBar;
