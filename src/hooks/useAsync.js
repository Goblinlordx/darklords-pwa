import { useEffect, useState } from "react";

const useAsync = (asyncFn) => {
  const [{ loading, result, error }, setState] = useState({
    loading: true,
    result: null,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;
    if (!loading) setState({ loading: true, result, error });
    Promise.resolve(asyncFn())
      .then((res) => ({ res, err: null }))
      .catch((err) => ({ res: null, err }))
      .then(({ res, err }) => {
        if (cancelled) return;
        setState({
          loading: false,
          result: res,
          error: err,
        });
      });
    return () => {
      cancelled = true;
    };

    /* eslint-disable react-hooks/exhaustive-deps */
  }, [asyncFn]);

  return [loading, result, error];
};

export default useAsync;
