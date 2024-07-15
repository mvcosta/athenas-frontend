import React from "react";
import Contracheques from "../components/contracheques";
import { getContracheques } from "../../lib/contracheques";
import ContrachequesHeader from "../components/contracheques-header";
import ContrachequesFooter from "../components/contracheques-footer";
import classes from "../contracheques.module.scss";

interface ContrachequesPageProps {
  params: { [key: string]: string | string[] | undefined };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function ContrachequesPage({
  params,
  searchParams,
}: ContrachequesPageProps) {
  const page = Number(searchParams.page ?? "1");
  const limit = Number(searchParams.limit ?? "20");
  const offset = (page - 1) * limit;

  const { contracheques, count } = await getContracheques(limit, offset);

  const numberOfPages = Math.ceil(count / limit);

  const selectedContrachequeId = params.contracheque
    ? Number(params.contracheque)
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
