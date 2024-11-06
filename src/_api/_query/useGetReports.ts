import api from "@/_api";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

interface report {
  id: number;
  title: string;
}

const getReports = async (): Promise<report[]> => {
  const res = await api.get(`/reports`);
  return res.data;
};

const useGetReports = (): UseQueryResult<report[], Error> => {
  return useQuery<report[], Error>({
    queryKey: ["reports"],
    queryFn: () => getReports(),
    staleTime: 1000 * 60 * 5,
  });
};

export default useGetReports;
