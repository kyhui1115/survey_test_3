import { Table } from "antd";
import TotalCount from "./totalCount";
import useGetSubjectNums from "@/_api/_query/useGetSubjectNums";
import useSubjectStore from "@/_store/subject";

export default function SubjectTableContainer() {
  const { data: subjectNums } = useGetSubjectNums();
  const { setId } = useSubjectStore();

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
      key: "subjectNum",
      render: (text: string) => (
        <span className="flex justify-center text-xs">{text}</span>
      ),
    },
  ];

  const dataSource = subjectNums?.map((subjectNum, index) => ({
    ...subjectNum,
    index: index + 1,
  }));

  return (
    <>
      <div className="mt-6 flex items-center mb-2 justify-between">
        <span className="font-semibold text-xs ml-1">대상자목록</span>
        <TotalCount count={subjectNums?.length} />
      </div>
      <Table
        size="small"
        pagination={false}
        columns={columns}
        dataSource={dataSource}
        rowKey="id"
        bordered={true}
        scroll={{ y: 735 }}
        onRow={(data) => {
          return {
            onClick: () => {
              setId(data.id);
            },
          };
        }}
      />
    </>
  );
}
