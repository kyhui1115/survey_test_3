import { Empty } from "antd";
import { ReactNode } from "react";

interface props {
  description?: ReactNode;
  image: "default" | "simple";
}

export default function EmptyMessage({ description, image }: props) {
  const images = {
    default: Empty.PRESENTED_IMAGE_DEFAULT,
    simple: Empty.PRESENTED_IMAGE_SIMPLE,
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Empty description={description} image={images[image]} />
    </div>
  );
}
