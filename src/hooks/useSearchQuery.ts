import { useLocation, useNavigate } from "react-router-dom";

const useSearchQuery = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const getQueryParam = (key: string) => {
    return queryParams.get(key);
  };

  const setQueryParam = (key: string, value: string) => {
    queryParams.set(key, value);
    navigate(`?${queryParams.toString()}`, { replace: true });
  };

  return { getQueryParam, setQueryParam };
};

export default useSearchQuery;
