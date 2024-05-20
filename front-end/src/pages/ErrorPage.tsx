import { useNavigate } from "react-router-dom";
import { goToLogin } from "../routes/Coordinator";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    goToLogin(navigate);
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <main className="flex flex-col items-center justify-center gap-4">
        <h1 className="p-6 text-gray-dark-font font-bold text-xl flex items-center justify-center">
          404
        </h1>
        <p>Desculpe, a página que você está procurando não existe.</p>
        <button
          onClick={handleButton}
          className="bg-blue w-72 h-11 px-6 py-6 rounded-lg text-light font-bold text-l flex items-center justify-center"
        >
          Voltar para a página inicial
        </button>
      </main>
    </div>
  );
};

export default ErrorPage;
