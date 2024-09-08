import { PageProps } from "@/interfaces/page-props";
import ListFiliacoes from "../../_components/list-filiacoes";
import { getPaginatedPageData } from "@/lib/pagination-utils";
import { getFiliacoesPrevidencia } from "@/app/gfp/_lib/previdencia";

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
    <ListFiliacoes
      data={data}
      page={page}
      lastPage={lastPage}
      pagePrefix={pagePrefix}
      configPrevidenciaId={id ? +id : undefined}
    />
  );
}
