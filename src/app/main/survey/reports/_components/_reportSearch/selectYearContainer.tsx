import useGetYears from "@/_api/_query/useGetYears";
import useReportIdStore from "@/_store/reportId";
import { Select } from "antd";
import { useEffect, useState } from "react";

export default function SelectYearContainer() {
  const [selectedYear, setSelectedYear] = useState<number>(0);
  const { data: years } = useGetYears();
  const { yearId, setYearId } = useReportIdStore();

  useEffect(() => {
    if (yearId === 0) {
      if (years) {
        setSelectedYear(years[0].year);
        setYearId(years[0].id);
      }
    } else {
      setSelectedYear(years?.find((year) => year.id === yearId)?.year || 0);
    }
  }, [years, yearId]);

  const handleChange = (value: number) => {
    setYearId(value);
  };

  const yearOptions = years?.map((year) => ({
    label: <span className="text-xs">{year.year}</span>,
    value: year.id,
  }));

  return (
    <div className="border border-border-gray rounded-md w-full h-10 flex items-center justify-between px-2">
      <span className="font-semibold text-xs">설문응답년도</span>
      <Select
        value={selectedYear}
        onChange={handleChange}
        options={yearOptions}
        size="small"
      />
    </div>
  );
}
