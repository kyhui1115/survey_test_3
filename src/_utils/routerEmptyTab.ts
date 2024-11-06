import useNavIdStore from "@/_store/navId";
import useTabStore from "@/_store/tab";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const routerEmptyTab = (
  newTabsLength: number,
  router: AppRouterInstance,
  pathname: string
) => {
  const { setNavSdId } = useNavIdStore.getState();
  const { setActiveKey } = useTabStore.getState();

  if (newTabsLength === 0) {
    setNavSdId("0");
    setActiveKey("0");

    router.push(pathname.replace(/\/[^\/]*$/, ""));
  }
};
