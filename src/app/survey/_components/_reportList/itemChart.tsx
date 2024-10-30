import { table } from "@/_api/_query/useGetReport";
import useDelayChart from "@/_hooks/useDelayChart";
import { Bar, BarChart, Rectangle, Tooltip, XAxis, YAxis } from "recharts";

interface props {
  tables: table[];
  tableHeight: number;
}

export default function ItemChart({ tables, tableHeight }: props) {
  const showChart = useDelayChart(tables);

  return (
    <>
      {showChart && (
        <div className="w-1/3 justify-center items-center flex h-full border-r border-border-gray pr-10 pt-2">
          <BarChart
            width={450}
            height={tableHeight}
            data={tables}
            layout="vertical"
          >
            <XAxis type="number" domain={[0, tables[0].total]} />
            <YAxis
              type="category"
              dataKey="name"
              width={90}
              tick={{ fontSize: 12, fontWeight: 600 }}
            />
            <Tooltip />
            <Bar
              dataKey="score"
              fill="rgb(96 165 250)"
              activeBar={<Rectangle fill="rgb(37 99 235)" />}
              animationEasing="ease-in-out"
            />
          </BarChart>
        </div>
      )}
    </>
  );
}
