import useGetTableData from "@/_api/_query/useGetTableData";
import useGetTableHeaders from "@/_api/_query/useGetTableHeaders";
import { recursiveHeader } from "@/_utils/recursiveHeader";
import { ConfigProvider, Table } from "antd";

interface props {
  subjectId: string;
  reportId: string;
}

export default function ItemTable({ subjectId, reportId }: props) {
  const { data: tableHeaders } = useGetTableHeaders(reportId);
  const { data: tableData } = useGetTableData(subjectId, reportId);

  const columns = recursiveHeader(tableHeaders || []);

  const dataSource = [
    {
      key: 0,
      ...tableData?.[0]?.dataIndex?.reduce((acc, cur, idx) => {
        return {
          ...acc,
          [cur]: tableData?.[0]?.data[idx],
        };
      }, {}),
    },
  ];

  return (
    <div className="w-[40%] justify-center items-center flex border-r border-border-gray pb-2">
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
          bordered={true}
          scroll={{ x: "max-content" }}
          className="w-full px-2"
          size="small"
        />
      </ConfigProvider>
    </div>
  );
}
