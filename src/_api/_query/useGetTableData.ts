import api from "@/_api";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export interface tableData {
  id: string;
  data: dataItem[];
}

interface dataItem {
  id: string;
  contents: {
    [key: string]: string;
  };
}

const getTableData = async (subjectId: string): Promise<tableData> => {
  const res = await api.get(`/tableData/${subjectId}`);
  return res.data;
};

const useGetTableData = (
  subjectId: string
): UseQueryResult<tableData, Error> => {
  return useQuery<tableData, Error>({
    queryKey: ["tableData", subjectId],
    queryFn: () => getTableData(subjectId),
    staleTime: 1000 * 60 * 5,
  });
};

export default useGetTableData;
