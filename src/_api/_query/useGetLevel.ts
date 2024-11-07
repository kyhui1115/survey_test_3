import api from "@/_api";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

interface grade {
  id: string;
  level: number;
}

const getGrade = async (
  subjectId: string,
  reportId: string
): Promise<grade[]> => {
  const res = await api.get(
    `/grade?reportId=${reportId}&subjectId=${subjectId}`
  );
  return res.data;
};

const useGetGrade = (
  subjectId: string,
  reportId: string
): UseQueryResult<grade[], Error> => {
  return useQuery<grade[], Error>({
    queryKey: ["Grade", subjectId, reportId],
    queryFn: () => getGrade(subjectId, reportId),
    staleTime: 1000 * 60 * 5,
  });
};

export default useGetGrade;
