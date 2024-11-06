"use client";

import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";

export default function Home() {
  const router = useRouter();
  const auth = "";

  useLayoutEffect(() => {
    sessionStorage.clear();

    if (auth) {
      router.push("/survey/reports");
    } else {
      router.push("/login");
    }
  }, []);

  return <></>;
}
