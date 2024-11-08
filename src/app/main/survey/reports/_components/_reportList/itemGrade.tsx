import useGetGrade from "@/_api/_query/useGetLevel";
import { useEffect, useState } from "react";

interface props {
  subjectId: string;
  reportId: string;
}

export default function ItemGrade({ subjectId, reportId }: props) {
  const [height, setHeight] = useState<string>("0%");
  const [backgroundColor, setBackgroundColor] = useState<string>("#ffffff");
  const { data: grade } = useGetGrade(subjectId, reportId);

  const level = Number(grade?.[0]?.level);

  useEffect(() => {
    if (level) {
      setHeight(20 * level + "%");
      setBackgroundColor(color[level]);
    } else {
      setHeight("0%");
      setBackgroundColor("#ffffff");
    }
  }, [grade]);

  return (
    <div className="w-1/6 flex justify-center items-center border-r border-border-gray flex-col relative">
      <div className="border border-border-gray w-24 h-52 flex flex-col-reverse relative">
        {grades.map((grade, idx) => (
          <span
            key={grade}
            className="absolute text-xs -left-11 font-semibold"
            style={{ top: `${idx * 20 - 4}%` }}
          >
            {grade} -
          </span>
        ))}
        <div
          className={`w-full bg-gradient-to-t duration-400 flex justify-center items-center from-blue-100`}
          style={{
            height,
            backgroundColor,
          }}
        />
      </div>
    </div>
  );
}

const color = [
  "#eff6ff",
  "#dbeafe",
  "#bfdbfe",
  "#93c5fd",
  "#60a5fa",
  "#3b82f6",
];

const grades = ["5단계", "4단계", "3단계", "2단계", "1단계"];
