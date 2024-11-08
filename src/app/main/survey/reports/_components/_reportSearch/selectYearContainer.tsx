import useGetReportYears from "@/_api/_query/useGetReportYears";
import useReportStore from "@/_store/report";
import { Select } from "antd";
import { useEffect } from "react";

export default function SelectYearContainer() {
  const { data: years, isSuccess } = useGetReportYears();
  const { year, setYear, setYearId } = useReportStore();

  const handleChange = (value: string) => {
    setYear(years?.find((year) => year.id === value)?.year as string);
    setYearId(value);
  };

  const yearOptions = years?.map((y) => ({
    label: <span className="text-xs">{y.year}</span>,
    value: y.id,
  }));

  useEffect(() => {
    if (!year && isSuccess) {
      setYear(years?.[0]?.year as string);
      setYearId(years?.[0]?.id as string);
    }
  }, [year, isSuccess]);

  return (
    <div className="border border-border-gray rounded-md w-full h-10 flex items-center justify-between px-2">
      <span className="font-semibold text-xs">설문응답년도</span>
      <Select
        value={year}
        onChange={handleChange}
        options={yearOptions}
        size="small"
      />
    </div>
  );
}
