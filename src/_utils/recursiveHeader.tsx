import { tableHeader } from "@/_api/_query/useGetTableHeaders";
import { Tooltip } from "antd";

export const recursiveHeader = (headers: tableHeader[]) => {
  return headers?.map((header) => {
    const newHeaders = {
      ...header,
      title: () => (
        <Tooltip title={header.title} placement="top">
          <div className="flex justify-center">
            <span
              style={{
                fontSize: 11,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                maxWidth: 100,
              }}
            >
              {header.title as string}
            </span>
          </div>
        </Tooltip>
      ),
      dataIndex: header.dataIndex,
      render: (text: string) => (
        <span
          className={`flex justify-${header.textAlign}`}
          style={{ fontSize: 11 }}
        >
          {text}
        </span>
      ),
    };

    if (header.children) {
      newHeaders.children = recursiveHeader(header.children);
    }

    return newHeaders;
  });
};
