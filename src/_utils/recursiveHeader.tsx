import { tableHeader } from "@/_api/_query/useGetTableHeaders";

export const recursiveHeader = (headers: tableHeader[]) => {
  return headers?.map((header) => {
    const newHeaders = {
      ...header,
      title: () => (
        <span
          className={`flex justify-center text-xs text-${header.textAlign}`}
        >
          {header.title as string}
        </span>
      ),
      dataIndex: header.dataIndex,
      render: (text: string) => (
        <span className="flex justify-center text-xs">{text}</span>
      ),
    };

    if (header.children) {
      newHeaders.children = recursiveHeader(header.children);
    }

    return newHeaders;
  });
};
