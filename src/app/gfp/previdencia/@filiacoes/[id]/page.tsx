import { PageProps } from "@/interfaces/page-props";
import ListFiliacoes from "../../_components/list-filiacoes";
import { getPaginatedPageData } from "@/lib/pagination-utils";
import { getFiliacoesPrevidencia } from "@/app/gfp/_lib/previdencia";

export default async function FiliacoesPrevidenciaPage({
  params,
  searchParams,
}: PageProps) {
  const { data, page, lastPage } = await getPaginatedPageData(
    searchParams,
    getFiliacoesPrevidencia,
    "filiacoes"
  );
  const id = params?.id;
  return (
    <ListFiliacoes
      data={data}
      page={page}
      lastPage={lastPage}
      configPrevidenciaId={id ? +id : undefined}
    />
  );
}
