import React from "react";
import Contracheques from "../components/contracheques";
import { getContracheques } from "../../lib/contracheques";
import ContrachequesHeader from "../components/contracheques-header";
import ContrachequesFooter from "../components/contracheques-footer";
import classes from "./contracheques.module.scss";
import { redirect } from "next/navigation";

interface ContrachequesPageProps {
  params: { [key: string]: string | string[] | undefined };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function ContrachequesPage({
  params,
  searchParams,
}: ContrachequesPageProps) {
  const filter = params.filter;

  if (!filter || filter.length < 3 || filter.length > 4) {
    redirect("/lancador/2024/1/1");
  }

  const ano = filter[0];
  const mes = filter[1];
  const folha = filter[2];
  const contrachequeId = filter[3];

  const page = Number(searchParams.page ?? "1");
  const limit = Number(searchParams.limit ?? "20");
  const offset = (page - 1) * limit;

  const { contracheques, count } = await getContracheques(
    ano,
    mes,
    folha,
    limit,
    offset
  );

  const numberOfPages = Math.ceil(count / limit);

  const selectedContrachequeId = contrachequeId
    ? Number(contrachequeId)
    : undefined;

  return (
    <>
      <ContrachequesHeader />
      <div className={classes.contracheques}>
        <Contracheques
          contracheques={contracheques}
          selectedContrachequeId={selectedContrachequeId}
        />
      </div>
      <ContrachequesFooter page={page} numberOfPages={numberOfPages} />
    </>
  );
}
