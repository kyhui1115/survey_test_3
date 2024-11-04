import { Spin } from "antd";

interface props {
  size?: "small" | "default" | "large";
}

export default function Spinner({ size = "large" }: props) {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Spin size={size} />
    </div>
  );
}
