import { Button } from "@nextui-org/react";
import React, { useState, useMemo } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
  Image,
  Pagination,
} from "@nextui-org/react";
import { columns, columnsCompany } from "./tabledata";
import useRenderCell from "./customhooks/useRenderCell";
import useFetchUsers from "./customhooks/useFetchUsers";
import threepoints from "../assets/threepoints.svg";
import useRenderCellCompany from "./customhooks/useRenderCellCompany";

export default function TopUser() {
  const auth = JSON.parse(atob(localStorage.getItem("auth")));
  console.log("nogg", auth);
  console.log("nogg", auth?.credentials?.company);
  const [list, isLoading] = useFetchUsers();
  const renderCell = auth?.credentials?.company===true ? useRenderCellCompany():useRenderCell();
  const [page, setPage] = useState(1);
  const rowsPerPage = 9;

  const pages = Math.ceil(list.items.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return list.items.slice(start, end);
  }, [page, list.items]);

  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <div className="bg-white flex-1 rounded-3xl p-5 px-6 text-black h-[710px]  flex flex-col gap-3 dark:text-white  dark:bg-carddm min-w-[1100px] ">
      <div className="flex justify-between  ">
        <h3 className="text-black  font-bold text-2xl dark:text-white mb-4 ">
          Top Users
        </h3>
        <Button isIconOnly aria-label="" className="mr-4">
          <Image src={threepoints} />
        </Button>
      </div>
      <Table
        aria-label="Top Users"
        removeWrapper
        sortDescriptor={list.sortDescriptor}
        onSortChange={list.sort}
        classNames={{
          th: ["border-b", "border-divider", "bg-transparent", "border-b-2"],
        }}
        className="h-full"
        bottomContent={
          <div className="flex w-full absolute justify-center -bottom-0 ">
            <Pagination
              isCompact
              showControls
              showShadow
              color="secondary"
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
              aria-label=""
            />
          </div>
        }
      >
        <TableHeader
          columns={
            auth?.credentials?.company === true ? columnsCompany : columns
          }
        >
          {(column) => (
            <TableColumn key={column.key} allowsSorting={column.allowsSorting}>
              {column.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody
          items={items}
          isLoading={isLoading}
          loadingContent={<Spinner label="Loading..." />}
        >
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell>
                  {renderCell(item, columnKey)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
