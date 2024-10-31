import api from "@/_api";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

interface subject {
  id: number;
  yearId: Number;
  subjectNum: Number;
}

const getSubjects = async (yearId: Number): Promise<subject[]> => {
  const res = await api.get(`/subjects?yearId=${yearId}`);
  return res.data;
};

const useGetSubjects = (yearId: Number): UseQueryResult<subject[], Error> => {
  return useQuery<subject[], Error>({
    queryKey: ["subjects", yearId],
    queryFn: () => getSubjects(yearId),
    staleTime: 1000 * 60 * 5,
  });
};

export default useGetSubjects;
