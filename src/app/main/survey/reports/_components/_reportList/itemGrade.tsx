import useGetGrade from "@/_api/_query/useGetLevel";

interface props {
  subjectId: string;
  reportId: string;
}

export default function ItemGrade({ subjectId, reportId }: props) {
  const { data: grade } = useGetGrade(subjectId, reportId);

  const levels = [
    { level: 5, color: "bg-blue-500" },
    { level: 4, color: "bg-blue-400" },
    { level: 3, color: "bg-blue-300" },
    { level: 2, color: "bg-blue-200" },
    { level: 1, color: "bg-blue-100" },
  ];

  const subjectLevel = grade?.[0]?.level;

  return (
    <div className="w-1/5 flex justify-center items-center border-r border-border-gray">
      <div className="border border-border-gray w-28 h-52">
        {levels.map((item) => (
          <div
            key={item.level}
            className={`flex justify-center items-center w-full h-1/5 ${
              (subjectLevel as number) >= item.level ? item.color : ""
            } ${item.level !== 1 ? "border-b border-border-gray" : ""}`}
          >
            {(subjectLevel as number) === item.level ? (
              <span className="text-xs font-semibold">{item.level}단계</span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
