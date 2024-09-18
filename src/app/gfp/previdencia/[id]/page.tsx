import { PageProps } from "@/interfaces/page-props";
import CrudFiliacao from "../_components/crud-filiacao";
import { calcLastPage, getPageFromParams } from "@/lib/pagination-utils";
import { getFiliacoesPrevidencia } from "../../_lib/previdencia";
import { validateSearchParams } from "@/lib/search-params-utils";

export default async function FiliacoesPrevidenciaPage({
  params,
  searchParams,
}: PageProps) {
  const id = params?.id;
  const search = searchParams.search;

  validateSearchParams(id);
  validateSearchParams(search);

  const { page, limit } = getPageFromParams(searchParams);
  const { data, count } = await getFiliacoesPrevidencia(
    id,
    page,
    limit,
    search
  );
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
