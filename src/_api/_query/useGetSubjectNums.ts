import api from "@/_api";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

interface subjectNum {
  id: number;
  num: number;
}

const getSubjectNums = async (): Promise<subjectNum[]> => {
  const res = await api.get("/subjectNums");
  return res.data;
};

const useGetSubjectNums = (): UseQueryResult<subjectNum[], Error> => {
  return useQuery<subjectNum[], Error>({
    queryKey: ["subjectNums"],
    queryFn: getSubjectNums,
  });
};

export default useGetSubjectNums;
