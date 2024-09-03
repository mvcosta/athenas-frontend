import React from "react";
import Contracheques from "../components/contracheques";
import { getContracheques } from "../../../lib/contracheques";
import ContrachequesHeader from "../components/contracheques-header";
import ContrachequesFooter from "../components/contracheques-footer";
import classes from "./contracheques.module.scss";
import { redirect } from "next/navigation";
import { calcLastPage, getPageFromParams } from "@/lib/pagination-utils";
import { PageProps } from "@/interfaces/page-props";

export default async function ContrachequesPage({
  params,
  searchParams,
}: PageProps) {
  const filter = params.filter;
  if (!filter || filter.length < 3 || filter.length > 4) {
    redirect("/gfp/lancador/2024/1/1");
  }

  const ano = filter[0];
  const mes = filter[1];
  const folha = filter[2];

  const { page, limit } = getPageFromParams(searchParams);

  const { contracheques, count } = await getContracheques(
    ano,
    mes,
    folha,
    page,
    limit
  );

  const lastPage = calcLastPage(count, limit);

  const contrachequeId = filter[3];
  if (!contrachequeId) {
    redirect(`/gfp/lancador/2024/1/1/${contracheques[0].id}`);
  }

  const selectedContrachequeId = Number(contrachequeId);

  return (
    <>
      <ContrachequesHeader />
      <div className={classes.contracheques}>
        <Contracheques
          contracheques={contracheques}
          selectedContrachequeId={selectedContrachequeId}
        />
      </div>
      <ContrachequesFooter
        page={page}
        lastPage={lastPage}
        ano={ano}
        mes={mes}
        folha={folha}
      />
    </>
  );
}
