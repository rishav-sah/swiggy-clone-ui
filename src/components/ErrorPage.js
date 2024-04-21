
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {

  const err = useRouteError();
  console.log(err)

  return (
    <div>
      <p className="text-3xl">Oops! Something went wrong.</p>
      <p className="text-2xl">URL not found !</p>
      <p className="text-2xl">{err.status} - {err.statusText}</p>

    </div>
  );
};

export default ErrorPage;