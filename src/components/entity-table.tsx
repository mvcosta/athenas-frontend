import { TableContainer, Table, Thead, Tr, Th, Tbody } from "@chakra-ui/react";
import React from "react";

export default function EntityTable({
  headers,
  children,
}: {
  headers: string[];
  children: React.ReactNode;
}) {
  return (
    <TableContainer className="no-select">
      <Table>
        <Thead>
          <Tr>
            {headers.map((h) => (
              <Th key={h}>{h}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>{children}</Tbody>
      </Table>
    </TableContainer>
  );
}
