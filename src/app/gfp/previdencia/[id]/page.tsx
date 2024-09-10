import { PageProps } from "@/interfaces/page-props";
import CrudFiliacao from "../_components/crud-filiacao";
import { Heading } from "@chakra-ui/react";
import { getPaginatedPageData } from "@/lib/pagination-utils";
import { getFiliacoesPrevidencia } from "../../_lib/previdencia";

export default async function FiliacoesPrevidenciaPage({
  params,
  searchParams,
}: PageProps) {
  const { data, page, lastPage } = await getPaginatedPageData(
    searchParams,
    getFiliacoesPrevidencia
  );
  const id = params?.id;
  return (
    <>
      <CrudFiliacao
        data={data}
        page={page}
        lastPage={lastPage}
        configPrevidenciaId={id ? +id : undefined}
      />
    </>
  );
}
