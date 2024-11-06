import useReportIdStore from "@/_store/reportId";
import { targetKey } from "../_components/tab";

export const clearTabInfo = (targetKey: targetKey) => {
  const { resetYearAndSubjectId } = useReportIdStore.getState();

  if (targetKey === "1") {
    resetYearAndSubjectId();
  }
};
