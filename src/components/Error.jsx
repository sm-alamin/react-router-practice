import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>This page is not available now</h1>
      <p>You can visit other page</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );

  }