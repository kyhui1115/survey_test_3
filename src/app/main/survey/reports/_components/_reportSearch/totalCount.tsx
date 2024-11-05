interface props {
  count: number | undefined;
}

export default function TotalCount({ count }: props) {
  return (
    <span className="mr-2 text-xs text-red-500 font-semibold">
      총 {count}건
    </span>
  );
}
