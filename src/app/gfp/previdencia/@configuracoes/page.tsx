import {
  getConfiguracoesPrevidencia,
  getPlanosSegregacaoMassa,
  getRegimesPrevidenciaEnum,
  getRegimesPrevidenciaSicapEnum,
} from "../../_lib/previdencia";
import { PageProps } from "@/interfaces/page-props";
import { getPaginatedPageData } from "@/lib/pagination-utils";
import ListPrevidencia from "../_components/list-previdencia";

export default async function ConfiguracoesPrevidenciaPage({
  searchParams,
}: PageProps) {
  const { data, page, lastPage } = await getPaginatedPageData(
    searchParams,
    getConfiguracoesPrevidencia,
    "configuracoes"
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
    <ListPrevidencia
      data={data}
      page={page}
      lastPage={lastPage}
      options={options}
    />
  );
}
