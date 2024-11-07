import useGetDashboard from "@/_api/_query/useGetDashboard";
import useDelayChart from "@/_hooks/useDelayChart";
import { useEffect, useState } from "react";
import { Bar, BarChart, Rectangle, Tooltip, XAxis, YAxis } from "recharts";

interface props {
  subjectId: string;
  reportId: string;
}

export default function ItemChart({ subjectId, reportId }: props) {
  const [chartHeight, setChartHeight] = useState(0);

  const { data: dashboard } = useGetDashboard(subjectId, reportId);
  const showChart = useDelayChart(dashboard);

  const data = dashboard?.[0]?.data;

  useEffect(() => {
    if (data) {
      setChartHeight(data?.length * 50);
    }
  }, [data]);

  return (
    <>
      {showChart && (
        <div
          className="w-1/4 justify-center items-center flex border-r border-border-gray relative"
          style={{ height: chartHeight, minHeight: 250 }}
        >
          <div className="absolute right-4">
            <BarChart
              width={360}
              height={chartHeight}
              data={data}
              layout="vertical"
            >
              <XAxis type="number" />
              <YAxis
                type="category"
                dataKey="title"
                width={140}
                tick={{ fontSize: 10, fontWeight: 600 }}
              />
              <Tooltip />
              <Bar
                dataKey="score"
                name="점수"
                fill="rgb(96 165 250)"
                activeBar={<Rectangle fill="rgb(37 99 235)" />}
                animationEasing="ease-in-out"
              />
            </BarChart>
          </div>
        </div>
      )}
    </>
  );
}
