import api from "@/_api";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

interface surveyYear {
  id: number;
  year: number;
}

const getSurveyYears = async (): Promise<surveyYear[]> => {
  const res = await api.get("/surveyYears");
  return res.data;
};

const useGetSurveyYears = (): UseQueryResult<surveyYear[], Error> => {
  return useQuery<surveyYear[], Error>({
    queryKey: ["surveyYears"],
    queryFn: getSurveyYears,
  });
};

export default useGetSurveyYears;
