"use client";

import { TriangleDownIcon, TriangleUpIcon, UpDownIcon } from "@chakra-ui/icons";
import { Box, Flex, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import EntityRow from "./entity-row";
import {
  deleteSearchParam,
  updateSearchParam,
} from "@/lib/search-params-utils";

function TanstackEntityTable<T>({
  data,
  columns,
  pathIndex,
}: {
  data: T[];
  columns: any;
  pathIndex?: number; // Indice da url a ser atualizado na navegação
}) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    columnResizeMode: "onChange",
  });
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const isSelected = (id: number) => {
    if (!pathIndex) return false;

    const paths = pathName.split("/");
    return +paths?.[pathIndex] === id;
  };

  const sortedColumn = searchParams.get("ordering");
  const sortTable = (column: string) => {
    let newSortedColumn;
    switch (sortedColumn) {
      case column:
        newSortedColumn = `-${column}`;
        break;
      case `-${column}`:
        newSortedColumn = "";
        break;
      default:
        newSortedColumn = column;
        break;
    }

    let newSearchParams;
    if (newSortedColumn) {
      newSearchParams = updateSearchParam(
        searchParams,
        "ordering",
        newSortedColumn
      );
    } else {
      newSearchParams = deleteSearchParam(searchParams, "ordering");
    }

    router.push(pathName + newSearchParams);
  };

  return (
    <>
      <Box maxW="100%" overflow="auto">
        <Table size="sm" w={table.getTotalSize()}>
          <Thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <Th key={header.id} position="relative" w={header.getSize()}>
                    <Flex alignItems="center">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}

                      {header.column.getCanSort() && (
                        <UpDownIcon
                          mx={3}
                          fontSize={14}
                          cursor="pointer"
                          onClick={(e) => sortTable(header.id)}
                        />
                      )}
                      {sortedColumn == header.id ? (
                        <TriangleDownIcon />
                      ) : sortedColumn == `-${header.id}` ? (
                        <TriangleUpIcon />
                      ) : (
                        ""
                      )}
                    </Flex>
                    <Box
                      // Barra utilizada para redimensionar as colunas
                      onMouseDown={header.getResizeHandler()}
                      onTouchStart={header.getResizeHandler()}
                      className={`resizer ${
                        header.column.getIsResizing() ? "isResizing" : ""
                      }`}
                    />
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {table.getRowModel().rows.map((row) => (
              <EntityRow
                key={row.id}
                isSelected={isSelected(row.getValue("id"))}
                entityId={row.getValue("id")}
                pathIndex={pathIndex}
              >
                {row.getVisibleCells().map((cell) => (
                  <Td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                ))}
              </EntityRow>
            ))}
          </Tbody>
        </Table>
      </Box>
    </>
  );
}

export default TanstackEntityTable;
