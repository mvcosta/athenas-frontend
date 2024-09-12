import { PageProps } from "@/interfaces/page-props";
import CrudFiliacao from "../_components/crud-filiacao";
import { calcLastPage, getPageFromParams } from "@/lib/pagination-utils";
import { getFiliacoesPrevidencia } from "../../_lib/previdencia";

export default async function FiliacoesPrevidenciaPage({
  params,
  searchParams,
}: PageProps) {
  const id = params?.id;

  if (typeof id !== "string" && typeof id !== "undefined") {
    throw new Error("id deve ser uma string");
  }

  const { page, limit } = getPageFromParams(searchParams);
  const { data, count } = await getFiliacoesPrevidencia(id, page, limit);
  const lastPage = calcLastPage(count, limit);
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
