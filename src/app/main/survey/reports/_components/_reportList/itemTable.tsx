import { tableHeader } from "@/_api/_query/useGetTableHeaders";
import { table } from "@/_api/_query/useGetTables";
import { recursiveHeader } from "@/_utils/recursiveHeader";
import { ConfigProvider, Table } from "antd";
import { useEffect, useRef } from "react";

interface props {
  tables: table[] | undefined;
  setTableHeight: React.Dispatch<React.SetStateAction<number>>;
  tableHeaders: tableHeader[] | undefined;
}

export default function ItemTable({
  tables,
  setTableHeight,
  tableHeaders,
}: props) {
  const tableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tableRef.current) {
      const height = tableRef.current.clientHeight;

      setTableHeight(height);
    }
  }, [tables, setTableHeight]);

  const columns = recursiveHeader(tableHeaders || []);

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
          dataSource={[]}
          pagination={false}
          rowKey="id"
          bordered={true}
          scroll={{ x: "max-content" }}
          className="w-100"
          size="small"
        />
      </ConfigProvider>
    </div>
  );
}
