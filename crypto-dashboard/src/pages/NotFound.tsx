import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">

      <h1 className="text-7xl font-bold">
        404
      </h1>

      <p className="text-gray-600 mt-4">
        Página não encontrada.
      </p>

      <Link
        to="/"
        className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg"
      >
        Voltar ao Dashboard
      </Link>

    </div>
  );
}

export default NotFound;