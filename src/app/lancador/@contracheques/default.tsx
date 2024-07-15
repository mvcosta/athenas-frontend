import React from "react";
import Contracheques from "./components/contracheques";
import ContrachequesHeader from "./components/contracheques-header";
import { getContracheques } from "../lib/contracheques";
import ContrachequesFooter from "./components/contracheques-footer";

interface ContrachequesDefaultProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function ContrachequesDefault({
  searchParams,
}: ContrachequesDefaultProps) {
  const page = Number(searchParams.page ?? "1");
  const limit = Number(searchParams.limit ?? "10");
  const offset = (page - 1) * limit;

  const { contracheques, count } = await getContracheques(limit, offset);

  const numberOfPages = Math.ceil(count / limit);
  return (
    <>
      <ContrachequesHeader />
      <Contracheques contracheques={contracheques} />
      <ContrachequesFooter page={page} numberOfPages={numberOfPages} />
    </>
  );
}
