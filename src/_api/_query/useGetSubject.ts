import api from "@/_api";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

interface subject {
  id: number;
  year: string;
  nums: num[];
}

interface num {
  id: number;
  subjectNum: number;
}

const getSubject = async (year: string): Promise<subject[]> => {
  const res = await api.get(`/subjects?year=${year}`);
  return res.data;
};

const useGetSubject = (year: string): UseQueryResult<subject[], Error> => {
  return useQuery<subject[], Error>({
    queryKey: ["subjects", year],
    queryFn: () => getSubject(year),
  });
};

export default useGetSubject;
