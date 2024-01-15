import { useQuery } from "react-query";

const fetchData = async (apiFunction) => {
  const response = await apiFunction();
  return response.data;
};

const useFetchData = (queryKey, apiFunction) => {
  return useQuery(queryKey, () => fetchData(apiFunction));
};

export default useFetchData;
