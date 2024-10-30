import { table } from "@/_api/_query/useGetReport";
import { useEffect, useState } from "react";

// reportItem 리렌더링 시 차트 애니메이션이 상>하로 나타나는 것을 방지하기 위한 hook
export default function useDelayChart(tables: table[]) {
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowChart(true);
    }, 1);

    return () => {
      clearTimeout(timeoutId);
      setShowChart(false);
    };
  }, [tables]);

  return showChart;
}
