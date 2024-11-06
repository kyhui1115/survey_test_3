import { ConfigProvider, Table } from "antd";
import TotalCount from "./totalCount";
import useGetSubjects from "@/_api/_query/useGetSubjects";
import useReportIdStore from "@/_store/report";
import Spinner from "@/app/_components/spinner";

export default function SubjectTableContainer() {
  const { yearId, subjectId, setSubjectId } = useReportIdStore();

  const { data: subject, isLoading } = useGetSubjects(yearId);

  const columns = [
    {
      title: () => <span className="flex justify-center text-xs">NO</span>,
      dataIndex: "index",
      key: "index",
      render: (text: string) => (
        <span className="flex justify-center text-xs">{text}</span>
      ),
      width: 80,
    },
    {
      title: () => (
        <span className="flex justify-center text-xs">대상자번호</span>
      ),
      dataIndex: "subjectNum",
      key: "id",
      render: (text: string) => (
        <span className="flex justify-center text-xs">{text}</span>
      ),
    },
  ];

  const dataSource = subject?.map((num, index) => ({
    ...num,
    index: index + 1,
  }));

  if (isLoading) {
    return (
      <div className="border border-border-gray h-full mt-4 rounded-md pt-3 px-2">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="border border-border-gray h-full mt-4 rounded-md pt-3 px-2">
      <div className="flex items-center mb-3 justify-between">
        <span className="font-semibold text-xs ml-1">대상자목록</span>
        <TotalCount count={subject?.length} />
      </div>
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
          size="small"
          pagination={false}
          columns={columns}
          dataSource={dataSource}
          rowKey="id"
          bordered={true}
          scroll={{ y: 605 }}
          onRow={(data) => {
            return {
              onClick: () => {
                setSubjectId(data.id);
              },
            };
          }}
          rowClassName={(record) =>
            record.id === subjectId ? "bg-blue-200" : ""
          }
        />
      </ConfigProvider>
    </div>
  );
}
