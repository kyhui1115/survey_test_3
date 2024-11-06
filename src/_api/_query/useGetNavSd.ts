import api from "@/_api";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

interface nav {
  id: string;
  label: string;
  link: string;
}

const getNavSd = async (navHdId: string): Promise<nav[]> => {
  const res = await api.get(`/navSd?navHdId=${navHdId}`);
  return res.data;
};

const useGetNavSd = (navHdId: string): UseQueryResult<nav[], Error> => {
  return useQuery<nav[], Error>({
    queryKey: ["navSd", navHdId],
    queryFn: () => getNavSd(navHdId),
    staleTime: 1000 * 60 * 5,
  });
};

export default useGetNavSd;
