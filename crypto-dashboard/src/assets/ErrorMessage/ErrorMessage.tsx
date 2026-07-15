type ErrorMessageProps = {
  message: string;
};

function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 rounded-lg p-4">
      <h2 className="font-bold">Erro</h2>
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;