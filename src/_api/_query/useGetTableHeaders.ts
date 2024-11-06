import api from "@/_api";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export interface tableHeader {
  id: string;
  reportId: string;
  title: string | (() => JSX.Element);
  dataIndex: string;
  colSpan: number;
  rowSpan: number;
  textAlign: string;
  children: tableHeader[];
}

const getTableHeaders = async (reportId: string): Promise<tableHeader[]> => {
  const res = await api.get(`/tableHeaders?reportId=${reportId}`);
  return res.data;
};

const useGetTableHeaders = (
  reportId: string
): UseQueryResult<tableHeader[], Error> => {
  return useQuery<tableHeader[], Error>({
    queryKey: ["tableHeaders", reportId],
    queryFn: () => getTableHeaders(reportId),
    staleTime: 1000 * 60 * 5,
  });
};

export default useGetTableHeaders;
