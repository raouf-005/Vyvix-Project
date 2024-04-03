import { Button } from "@nextui-org/react"
import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Spinner} from "@nextui-org/react";
import {columns} from './tabledata';
import useRenderCell from "./customhooks/renderCell";
import useFetchUsers from "./customhooks/useFetchUsers";











export default function TopUser() {

    const [list,isLoading]  =useFetchUsers()
    const renderCell=useRenderCell();

    return(
        <div className="bg-white  rounded-3xl p-5 px-6 text-black  flex flex-col gap-3 dark:text-white  dark:bg-carddm max-w-[800px] ">
             <div className="flex justify-between ">
                 <h3 className='text-black  font-bold text-2xl dark:text-white '>Top Users</h3>
                <Button isIconOnly  className='mr-4'>

                </Button>
            </div>   
            <Table 
            aria-label="Top Users" 
            removeWrapper
            sortDescriptor={list.sortDescriptor}
            onSortChange={list.sort}
            classNames={
                {
                    th:["border-b", "border-divider","bg-transparent",'border-b-2']

                }
            }
             
             >
                <TableHeader columns={columns}>
                    {(column) => <TableColumn key={column.key} allowsSorting={column.allowsSorting}>{column.label}</TableColumn>}
                </TableHeader>
                <TableBody   
                items={list.items} 
                isLoading={isLoading}
                loadingContent={<Spinner label="Loading..." />}
                    >
                    {(item) => (
                    <TableRow key={item.key}>
                        {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                    </TableRow>
                    )}
                </TableBody>
            </Table>


        </div>
    )

}