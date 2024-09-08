import { PageProps } from "@/interfaces/page-props";
import { getPaginatedPageData } from "@/lib/pagination-utils";
import { getFiliacoesPrevidencia } from "@/app/gfp/_lib/previdencia";
import CrudFiliacao from "../../_components/crud-filiacao";

export default async function FiliacoesPrevidenciaPage({
  params,
  searchParams,
}: PageProps) {
  const pagePrefix = "filiacoes";
  const { data, page, lastPage } = await getPaginatedPageData(
    searchParams,
    getFiliacoesPrevidencia,
    pagePrefix
  );
  const id = params?.id;
  return (
    <CrudFiliacao
      data={data}
      page={page}
      lastPage={lastPage}
      pagePrefix={pagePrefix}
      configPrevidenciaId={id ? +id : undefined}
    />
  );
}
