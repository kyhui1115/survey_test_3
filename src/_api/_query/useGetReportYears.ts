import api from "@/_api";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

interface year {
  id: number;
  year: number;
}

const getReportYears = async (): Promise<year[]> => {
  const res = await api.get("/reportYears");
  return res.data;
};

const useGetReportYears = (): UseQueryResult<year[], Error> => {
  return useQuery<year[], Error>({
    queryKey: ["reportYears"],
    queryFn: getReportYears,
    staleTime: 1000 * 60 * 5,
  });
};

export default useGetReportYears;
