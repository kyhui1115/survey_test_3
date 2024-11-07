import api from "@/_api";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export interface tableData {
  id: string;
  dataIndex: string[];
  data: string[];
}

const getTableData = async (
  subjectId: string,
  reportId: string
): Promise<tableData[]> => {
  const res = await api.get(
    `/tableData?subjectId=${subjectId}&reportId=${reportId}`
  );
  return res.data;
};

const useGetTableData = (
  subjectId: string,
  reportId: string
): UseQueryResult<tableData[], Error> => {
  return useQuery<tableData[], Error>({
    queryKey: ["tableData", subjectId, reportId],
    queryFn: () => getTableData(subjectId, reportId),
    staleTime: 1000 * 60 * 5,
  });
};

export default useGetTableData;
