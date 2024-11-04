import api from "@/_api";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

interface nav {
  id: number;
  label: string;
  link: string;
}

const getNavHd = async (): Promise<nav[]> => {
  const res = await api.get("/nav-hd");
  return res.data;
};

const useGetNavHd = (): UseQueryResult<nav[], Error> => {
  return useQuery<nav[], Error>({
    queryKey: ["nav-hd"],
    queryFn: getNavHd,
    staleTime: 1000 * 60 * 5,
  });
};

export default useGetNavHd;
