function ErrorPage(errorMessage) {
  return (
    <>
      <h1>Oops!</h1>
      <p>{errorMessage || 'An unexpected error has occurred.'}</p>
    </>
  );
}

export default ErrorPage;
