import React from "react";

const Loader = ({
  asyncState: [loading, result, error] = [],
  load: LoadComponent,
  error: ErrorComponent,
  children,
}) =>
  loading ? (
    <LoadComponent />
  ) : error ? (
    <ErrorComponent error={error} />
  ) : (
    children(result)
  );

export default Loader;
