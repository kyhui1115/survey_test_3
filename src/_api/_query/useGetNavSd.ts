import api from "@/_api";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

interface nav {
  id: number;
  label: string;
  link: string;
}

const getNavSd = async (navHdId: number): Promise<nav[]> => {
  const res = await api.get(`/nav-sd?nav-hd-id=${navHdId}`);
  return res.data;
};

const useGetNavSd = (navHdId: number): UseQueryResult<nav[], Error> => {
  return useQuery<nav[], Error>({
    queryKey: ["nav-sd", navHdId],
    queryFn: () => getNavSd(navHdId),
    staleTime: 1000 * 60 * 5,
  });
};

export default useGetNavSd;
