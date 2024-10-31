import api from "@/_api";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

interface year {
  id: number;
  year: number;
}

const getYears = async (): Promise<year[]> => {
  const res = await api.get("/years");
  return res.data;
};

const useGetYears = (): UseQueryResult<year[], Error> => {
  return useQuery<year[], Error>({
    queryKey: ["years"],
    queryFn: getYears,
    staleTime: 1000 * 60 * 5,
  });
};

export default useGetYears;
