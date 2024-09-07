"use client";

import { ConfiguracaoPrevidencia } from "@/app/gfp/_models/previdencia.models";
import { TriangleDownIcon, TriangleUpIcon, UpDownIcon } from "@chakra-ui/icons";
import { Box, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import TableFilters from "../../../../components/table-filters";

const columnsHelper = createColumnHelper<ConfiguracaoPrevidencia>();
const columns = [
  columnsHelper.accessor("id", {
    header: "Id",
    cell: (info) => info.getValue(),
    size: 150,
  }),
  columnsHelper.accessor("regime_previdencia", {
    header: "Regime de previdência",
    cell: (info) => info.getValue().descricao,
    size: 200,
  }),
  columnsHelper.accessor("regime_previdencia_sicap", {
    header: "Regime de previdência (SICAP)",
    cell: (info) => info.getValue().descricao,
    size: 250,
  }),
  columnsHelper.accessor("tipo_plano_segregacao", {
    header: "Plano de Segregação da Massa",
    cell: (info) => info.getValue().descricao,
    size: 400,
  }),
  columnsHelper.accessor("orgao_previdencia", {
    header: "Órgão de previdência",
    cell: (info) => info.getValue().nome,
    size: 300,
  }),
  columnsHelper.accessor("orgao_recolhimento", {
    header: "Órgão de recolhimento",
    cell: (info) => info.getValue().nome,
    size: 300,
  }),
];

function PrevidenciaTable({ data }: { data: ConfiguracaoPrevidencia[] }) {
  const table = useReactTable({
    data,
    columns,
    debugTable: true,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    columnResizeMode: "onChange",
  });

  return (
    <>
      <Box maxW="100%" overflow="auto">
        <Table w={table.getTotalSize()}>
          <Thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <Th key={header.id} position="relative" w={header.getSize()}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}

                    {header.column.getCanSort() && (
                      <UpDownIcon
                        mx={3}
                        fontSize={14}
                        onClick={header.column.getToggleSortingHandler()}
                      />
                    )}
                    {{ asc: <TriangleDownIcon />, desc: <TriangleUpIcon /> }[
                      header.column.getIsSorted() as string
                    ] ?? null}
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
              <Tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <Td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </>
  );
}

export default PrevidenciaTable;
