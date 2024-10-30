import api from "@/_api";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

interface survey {
  id: number;
  reports: report[];
}

interface report {
  id: number;
  title: string;
  tables: table[];
}

export interface table {
  id: number;
  name: string;
  score: number;
  total: number;
}

const getReport = async (id: number): Promise<survey[]> => {
  const res = await api.get(`/surveys?id=${id}`);
  return res.data;
};

const useGetReport = (id: number): UseQueryResult<survey[], Error> => {
  return useQuery<survey[], Error>({
    queryKey: ["reports", id],
    queryFn: () => getReport(id),
    staleTime: 1000 * 60 * 5,
  });
};

export default useGetReport;
