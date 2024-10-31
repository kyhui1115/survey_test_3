import api from "@/_api";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export interface table {
  id: number;
  reportId: number;
  name: string;
  score: number;
  total: number;
}

const getTables = async (reportId: number): Promise<table[]> => {
  const res = await api.get(`/tables?reportId=${reportId}`);
  return res.data;
};

const useGetTables = (reportId: number): UseQueryResult<table[], Error> => {
  return useQuery<table[], Error>({
    queryKey: ["tables", reportId],
    queryFn: () => getTables(reportId),
    staleTime: 1000 * 60 * 5,
  });
};

export default useGetTables;
