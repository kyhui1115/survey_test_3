import useGetSurveyYears from "@/_api/_query/useGetSurveyYears";
import useSubjectStore from "@/_store/subject";
import { Select } from "antd";

export default function SelectYearContainer() {
  const { data: surveyYears } = useGetSurveyYears();
  const { year, setYear } = useSubjectStore();
  const handleChange = (value: string) => {
    setYear(value);
  };

  const options = surveyYears?.map((survey) => ({
    label: <span className="text-xs">{survey.year}</span>,
    value: survey.year,
  }));

  return (
    <div className="border border-border-gray rounded-md w-full h-10 flex items-center justify-between px-2 shadow-container">
      <span className="font-semibold text-xs">설문응답년도</span>
      <Select
        defaultValue="2024"
        onChange={handleChange}
        options={options}
        size="small"
      />
    </div>
  );
}
