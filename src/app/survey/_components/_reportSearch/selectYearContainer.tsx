import useGetYears from "@/_api/_query/useGetYears";
import useYearIdStore from "@/_store/yearId";
import { Select } from "antd";
import { useEffect } from "react";

export default function SelectYearContainer() {
  const { data: years } = useGetYears();
  const { setYearId } = useYearIdStore();

  const handleChange = (value: number) => {
    setYearId(value);
  };

  useEffect(() => {
    if (years) {
      setYearId(years[0].id);
    }
  }, [years]);

  const options = years?.map((year) => ({
    label: <span className="text-xs">{year.year}</span>,
    value: year.id,
  }));

  return (
    <div className="border border-border-gray rounded-md w-full h-10 flex items-center justify-between px-2 shadow-container bg-gray-50">
      <span className="font-semibold text-xs">설문응답년도</span>
      <Select
        defaultValue={2024}
        onChange={handleChange}
        options={options}
        size="small"
      />
    </div>
  );
}
