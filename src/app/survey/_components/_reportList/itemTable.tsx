import { table } from "@/_api/_query/useGetReport";
import { ConfigProvider, Table, TableProps } from "antd";
import { useEffect, useLayoutEffect, useRef } from "react";

interface props {
  tables: table[];
  setTableHeight: React.Dispatch<React.SetStateAction<number>>;
}

interface DataType {
  id: number;
  name: string;
  scoreAndTotal: string;
}

export default function ItemTable({ tables, setTableHeight }: props) {
  const tableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tableRef.current) {
      const height = tableRef.current.clientHeight;

      setTableHeight(height);
    }
  }, [tables, setTableHeight]);

  const columns: TableProps<DataType>["columns"] = [
    {
      title: () => <span className="flex justify-center text-xs">대분류</span>,
      dataIndex: "name",
      rowScope: "row",
      render: (text: string) => (
        <span className="flex justify-center text-xs text-center">{text}</span>
      ),
      width: 90,
    },
    {
      title: () => <span className="flex justify-center text-xs">점수</span>,
      dataIndex: "scoreAndTotal",
      render: (text: string) => (
        <span className="flex justify-center text-xs">{text}</span>
      ),
    },
  ];

  const dataSource = tables?.map((table) => ({
    id: table.id,
    name: table.name,
    scoreAndTotal: `${table.score} / ${table.total}`,
  }));

  return (
    <div
      ref={tableRef}
      className="h-full w-1/3 justify-center items-center flex border-r border-border-gray pb-2"
    >
      <ConfigProvider
        theme={{
          components: {
            Table: {
              borderColor: "#9ba3af",
              rowHoverBg: "rgb(239 246 255)",
            },
          },
        }}
      >
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          rowKey="id"
          bordered={true}
          className="w-72"
          size="small"
        />
      </ConfigProvider>
    </div>
  );
}
