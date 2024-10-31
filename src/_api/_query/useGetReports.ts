import api from "@/_api";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

interface report {
  id: number;
  subjectId: number;
  title: string;
}

const getReports = async (subjectId: number): Promise<report[]> => {
  const res = await api.get(`/reports?subjectId=${subjectId}`);
  return res.data;
};

const useGetReports = (subjectId: number): UseQueryResult<report[], Error> => {
  return useQuery<report[], Error>({
    queryKey: ["reports", subjectId],
    queryFn: () => getReports(subjectId),
    staleTime: 1000 * 60 * 5,
  });
};

export default useGetReports;
