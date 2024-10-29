import { Table } from "antd";
import TotalCount from "./totalCount";
import useGetSubjects from "@/_api/_query/useGetSubject";
import useSubjectStore from "@/_store/subject";
import Spinner from "../_common/spineer";

export default function SubjectTableContainer() {
  const { year, id, setId } = useSubjectStore();
  const { data: subject, isLoading } = useGetSubjects(year);

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
      dataIndex: "num",
      key: "num",
      render: (text: string) => (
        <span className="flex justify-center text-xs">{text}</span>
      ),
    },
  ];

  const dataSource = subject?.[0].nums.map((num, index) => ({
    ...num,
    index: index + 1,
  }));

  if (isLoading) {
    return (
      <div className="border border-border-gray h-full mt-6 rounded-md pt-4 px-2 shadow-container">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="border border-border-gray h-full mt-4 rounded-md pt-3 px-2 shadow-container">
      <div className="flex items-center mb-3 justify-between">
        <span className="font-semibold text-xs ml-1">대상자목록</span>
        <TotalCount count={subject?.[0].nums.length} />
      </div>
      <Table
        size="small"
        pagination={false}
        columns={columns}
        dataSource={dataSource}
        rowKey="id"
        bordered={true}
        scroll={{ y: 725 }}
        onRow={(data) => {
          return {
            onClick: () => {
              setId(data.id);
            },
          };
        }}
        rowClassName={(record) => (record.id === id ? "bg-blue-300" : "")}
      />
    </div>
  );
}
