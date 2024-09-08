import {
  getConfiguracoesPrevidencia,
  getPlanosSegregacaoMassa,
  getRegimesPrevidenciaEnum,
  getRegimesPrevidenciaSicapEnum,
} from "../../_lib/previdencia";
import { PageProps } from "@/interfaces/page-props";
import { getPaginatedPageData } from "@/lib/pagination-utils";
import CrudPrevidencia from "../_components/crud-previdencia";

export default async function ConfiguracoesPrevidenciaPage({
  searchParams,
}: PageProps) {
  const pagePrefix = "configuracoes";
  const { data, page, lastPage } = await getPaginatedPageData(
    searchParams,
    getConfiguracoesPrevidencia,
    pagePrefix
  );

  const regimesPrevidenciaEnum = await getRegimesPrevidenciaEnum();
  const regimesPrevidenciaSicapEnum = await getRegimesPrevidenciaSicapEnum();
  const planosSegregacaoMassa = await getPlanosSegregacaoMassa();

  const options = {
    regimesPrevidenciaEnum,
    regimesPrevidenciaSicapEnum,
    planosSegregacaoMassa,
  };

  return (
    <CrudPrevidencia
      data={data}
      page={page}
      pagePrefix={pagePrefix}
      lastPage={lastPage}
      options={options}
    />
  );
}
