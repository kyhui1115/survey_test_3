import api from "@/_api";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export interface dashbaord {
  id: string;
  data: dataItem[];
}

interface dataItem {
  id: string;
  title: string;
  score: string;
}

const getDashboard = async (
  subjectId: string,
  reportId: string
): Promise<dashbaord[]> => {
  const res = await api.get(
    `/dashboard?subjectId=${subjectId}&reportId=${reportId}`
  );
  return res.data;
};

const useGetDashboard = (
  subjectId: string,
  reportId: string
): UseQueryResult<dashbaord[], Error> => {
  return useQuery<dashbaord[], Error>({
    queryKey: ["dashbaord", subjectId, reportId],
    queryFn: () => getDashboard(subjectId, reportId),
    staleTime: 1000 * 60 * 5,
  });
};

export default useGetDashboard;
