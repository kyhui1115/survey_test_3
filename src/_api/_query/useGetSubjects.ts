import api from "@/_api";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

interface subject {
  id: string;
  reportYearId: string;
  subjectNum: string;
}

const getSubjects = async (reportYearId: string): Promise<subject[]> => {
  const res = await api.get(`/subjects?reportYearId=${reportYearId}`);
  return res.data;
};

const useGetSubjects = (
  reportYearId: string
): UseQueryResult<subject[], Error> => {
  return useQuery<subject[], Error>({
    queryKey: ["subjects", reportYearId],
    queryFn: () => getSubjects(reportYearId),
    staleTime: 1000 * 60 * 5,
  });
};

export default useGetSubjects;
