import useReportIdStore from "@/_store/report";
import { targetKey } from "../app/main/_components/tab";

export const clearTabInfo = (targetKey: targetKey) => {
  const { resetYearAndSubjectId } = useReportIdStore.getState();

  if (targetKey === "1") {
    resetYearAndSubjectId();
  }
};
